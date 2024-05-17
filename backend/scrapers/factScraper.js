const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Fact = require('./models/fact');  // Assuming your Fact model is in the models folder

mongoose.connect('mongodb://localhost:27017/factDB', {  // Connect to your MongoDB database
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Example URL to scrape from (TODO)
const urls = [
    'https://example.com/facts/wikipedia',
    'https://example.com/facts/britannica',
    'https://example.com/facts/mayoclinic'
];

async function fetchAndStoreFacts() {
    for (let url of urls) {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            // Example selector, adjust based on actual website structure
            $('.fact-list .fact').each((index, element) => {
                const text = $(element).find('.fact-text').text().trim();
                const sourceUrl = url; // Assuming the main URL is the source URL
                const category = 'General'; // Assume a general category or parse for specific one

                // Create a new Fact instance and save it to the database
                const newFact = new Fact({
                    text: text,
                    source: url.includes('wikipedia') ? 'Wikipedia' : url.includes('britannica') ? 'Britannica' : 'Mayo Clinic',
                    sourceUrl: sourceUrl,
                    category: category
                });

                newFact.save(err => {
                    if (err) {
                        console.error('Error saving the fact to the database:', err);
                    } else {
                        console.log('Fact saved successfully:', text);
                    }
                });
            });
        } catch (error) {
            console.error('Error fetching the page:', error);
        }
    }
}

fetchAndStoreFacts().then(() => {
    console.log('Finished scraping and storing facts.');
});
