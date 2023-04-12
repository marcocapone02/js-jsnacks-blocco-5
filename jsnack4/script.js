const students = [
    {
        name : 'Marco della Rovere',
        id : 213,
        grades: 78,
    },

    {
        name : 'Paola Cortellessa',
        id : 110,
        grades: 96,
    },

    {
        name : 'Andrea Mantegna',
        id : 250,
        grades: 48,
    },

    {
        name : 'Gaia Borromini',
        id : 145,
        grades: 74,
    },

    {
        name : 'Luigi Grimaldello',
        id : 196,
        grades: 68,
    },

    {
        name : 'Piero della Francesca',
        id : 102,
        grades: 50,
    },

    {
        name : 'Francesca da Polenta',
        id : 120,
        grades: 84,
    },
]

const studentsUpper = students.map((student) => student.name.toUpperCase());

console.log('studentsUpper', studentsUpper);




const studentsOver70 = students.filter((student) => student.grades >= 70)

console.log('studentsOver70', studentsOver70);




const over70id120 = students.filter((student) => student.grades >= 70 && student.id >= 120);

console.log('over70id120', over70id120);