const express = require('express');
const friendsRouter = require('./routes/friends');
const app = express();



app.set('view engine', 'ejs');

app.use('/friends' ,friendsRouter);

app.get('/', (req, res) => {
    const friends = [
        {
        name: 'Shahar and Anna',
        city: 'Tel Aviv',
        games: ['Pandemic'],
        days: ['Sunday', 'Monday', 'Friday']
    },
    {
        name: 'Sarit and Rami',
        city: 'Ramat-Gan',
        games: ['Carcassone', 'Twilight struggle', 'Space Alert', 'Cards against Humanity'],
        days: ['Thursday', 'Friday']
    },
    {
        name: 'Shoonit and Idan',
        city: 'Ramat-Gan',
        games: ['Dungeon quest', 'Hello kitty labyrinth', 'Scythe'],
        days: ['Tuesday', 'Thursday', 'Friday']
    }
]
    res.render('friends/index', { friends: friends });
});

app.listen(5000)