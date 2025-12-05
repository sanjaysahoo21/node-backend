import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send("hello this is from backend");
})
app.get('/users', (req, res) => {
    res.send("hello from users")
})

app.listen(7007,() => {
    console.log(`server is running at 7007`);
})