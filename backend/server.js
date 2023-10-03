const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// A little more than basic route for testing
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


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
