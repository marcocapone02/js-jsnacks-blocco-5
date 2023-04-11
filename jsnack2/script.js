const students = [
    {
      firstname: 'Mario',
      lastname: 'Rossi',
      id: 100,
      votes: [7, 8, 6, 5]
    },

    {
      firstname: 'Luigi',
      lastname: 'Bianchi',
      id: 101,
      votes: [9, 8, 10, 7]
    },

    {
      firstname: 'Luca',
      lastname: 'De Luca',
      id: 102,
      votes: [6, 7, 5, 6]
    },

    {
      firstname: 'Ciro',
      lastname: 'Ricci',
      id: 103,
      votes: [7, 8, 9, 7]
    },

    {
      firstname: 'Marco',
      lastname: 'Nero',
      id: 104,
      votes: [7, 9, 9, 10]
    },

    {
        firstname: 'Stefano',
        lastname: 'Leonardi',
        id: 105,
        votes: [5, 4, 6, 5]
      },

  ]
  
  const mapStudent = students.map(student => {
    
    const studentList = {
      name: `${student.firstname} ${student.lastname}`,
      id: student.id,
      average: votesCalculate(student) 
    }
  
    console.log(studentList);

  });

  function votesCalculate(student) {
    let result = 0;

    student.votes.forEach(vote => result += vote)
    return result / student.votes.length;
  }