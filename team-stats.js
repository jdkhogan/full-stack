const team = {
    _players: [
        {
            firstName: 'Kevin',
            lastName: 'Garnett',
            age: '46'
        },
        {
            firstName: 'Zion',
            lastName: 'Williamson',
            age: '22'
        },
        {
            firstName: 'LeBron',
            lastName: 'James',
            age: '37'
        }
    ],
    _games: [
        {
            opponent: 'Lakers',
            teamPoints: 120,
            opponentPoints: 102 
        },
        {
            opponent: 'Wolves',
            teamPoints: 150,
            opponentPoints: 92 
        },
        {
            opponent: 'Pelicans',
            teamPoints: 100,
            opponentPoints: 132 
        }
    ],
    get players() {
        return this._players;
    }, 
    get games() {
        return this._games;
    }, 
    addPlayer(newFirstName, newLastName, newAge) {
        const player =  {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game =  {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    },
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players[3]); // 8

team.addGame('Titans', 100, 98);
console.log(team._games[3]); // 8
