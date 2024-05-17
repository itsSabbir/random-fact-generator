const express = require('express');
const mongoose = require('mongoose');
const Fact = require('./models/fact'); // Assuming your model file is named fact.js and in the models directory

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/factDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to the Random Fact Generator API!</h2>
        <p>This API provides random facts. It's currently running and ready to serve requests.</p>
        <button onclick="confirmFunction()">Check Status</button>
        <script>
            function confirmFunction() {
                alert('Yup, it's still working!');
            }
        </script>
    `);
});

// Route to get a random fact
app.get('/facts', async (req, res) => {
    try {
        const count = await Fact.countDocuments();
        const random = Math.floor(Math.random() * count);
        const fact = await Fact.findOne().skip(random);
        res.json(fact);
    } catch (err) {
        res.status(500).json({ message: "Error fetching fact", error: err });
    }
});

// Route to post a new fact
app.post('/facts', async (req, res) => {
    const { text, source, sourceUrl, category, imageUrl } = req.body;
    try {
        const newFact = new Fact({ text, source, sourceUrl, category, imageUrl });
        await newFact.save();
        res.status(201).json(newFact);
    } catch (err) {
        res.status(400).json({ message: "Error saving fact", error: err });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
