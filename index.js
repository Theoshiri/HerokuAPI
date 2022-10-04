// Theo Tran, Oct 2022

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    
    // Class/Hero Arrays
    var arrClass = ["Tank", "Damage", "Support"];
    var arrTankHeroes = ["D.Va", "Doomfist", "Junker Queen", "Orisa", "Reinhardt", "Roadhog", "Sigma", "Winston", "Wrecking Ball", "Zarya"];
    var arrDamageHeroes = ["Ashe", "Bastion", "Echo", "Genji", "Hanzo", "Junkrat", "Cassidy", "Mei", "Pharah", "Reaper", "Sojourn", "Soldier: 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"];
    var arrSupportHeroes = ["Ana", "Baptiste", "Brigitte", "Kiriko", "Lucio", "Mercy", "Moira", "Zenyatta"];
    var arrAllHeroes = ["Ana", "Ashe", "Baptiste", "Bastion", "Brigitte", "Cassidy", "D.Va", "Doomfist", "Echo", "Genji", "Hanzo", "Junkrat", "Lucio", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", "Reinhardt", "Roadhog", "Sigma", "Soldier: 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
   
    // Select Random Class
    var randClass = arrClass[Math.floor(Math.random() * arrClass.length)];

    // Tank Class Chosen
    if (randClass == "Tank") {
        var randHero = arrTankHeroes[Math.floor(Math.random() * arrTankHeroes.length)];
    }
    // Damage Class Chosen
    else if (randClass == "Damage") {
        var randHero = arrDamageHeroes[Math.floor(Math.random() * arrDamageHeroes.length)];
    }
    // Support Class Chosen
    else {
        var randHero = arrSupportHeroes[Math.floor(Math.random() * arrSupportHeroes.length)];
    }

    // Print out result
    res.send(JSON.stringify("Your random Overwatch Class is " + randClass + ", and your random Overwatch Hero is " + randHero + "."));
})


const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
