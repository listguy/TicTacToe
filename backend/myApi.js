const express = require('express');
const fs = require('fs').promises;
const app = express();

// const scores = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/scores', async (req, res) => {
    const data = await fs.readFile('./records.json')
    const json = JSON.parse(data);
    res.send(json);
});

app.post('/api/scores', async (req, res) => {
    const data = await fs.readFile('./records.json')
    const json = JSON.parse(data);

    req.body.id = (json.length + 1).toString();
    json.push(req.body);
    await fs.writeFile('./records.json', JSON.stringify(json));
    res.send("sucess");

})
// app.post('/api/scores', (req, res) => {
//     req.body.id = (scores.length + 1).toString();
//     scores.push(req.body);
//     res.send(req.body);
// });

app.listen('4000');