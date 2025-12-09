import express from 'express';

const app = express();

app.use(express.json());

app.get('/get-data', (req, res) => {
    let data = { message: 'Hello, World!' };
    console.log('Retrieving data:', data);
    res.send('Data retrieved successfully');
});

app.put('/update-data', (req, res) => {
    let data = req.body;
    console.log('Updating data with:', data);
    res.send('Data updated successfully');
});

app.post('/post-data', (req, res) => {
    let data = req.body;
    console.log('Received data:', data);
    res.send('Data posted successfully');
});

app.delete('/delete-data', (req, res) => {
    let id = req.body.id;
    console.log('Deleting data with ID:', id);
    res.send(`Data deleted successfully with ID ${id}`);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});