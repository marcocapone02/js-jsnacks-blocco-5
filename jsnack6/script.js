
const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const teams = [

    {
        name : 'Real Madrid',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Chelsea',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Napoli',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Bayern Monaco',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Porto',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'PSG',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Besiktas',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Olympiacos',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Ajax',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Anderlecht',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Copenhagen',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },

    {
        name : 'Basilea',
        point : randomNumberGenerator(3,114),
        foul : randomNumberGenerator(20,100)
    },
]

const foulResult = teams.map(team =>{
    const {name, foul,} = team;

    const dataTeams = {
        name,
        foul,
    }

    return dataTeams
    })

console.log(foulResult);