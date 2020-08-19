const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let scores = [
    {
        id: "1",
        winnerName: "Nitzan",
        date: "today",
        duration: "1sec"
    }

];

app.get('/api/results', (req, res) => {
    res.send(scores);
});

app.post('/api/results', (req, res) => {
    req.body.id = (scores.length + 1).toString();
    scores.push(req.body);
    res.send(req.body);
});

app.listen('4000');