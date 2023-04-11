const users = [
    {
      firstname: "Mario",
      lastname: "Rossi",
      age: 50
    },

    {
      firstname: "Luigi",
      lastname: "Bianchi",
      age: 70
    },

    {
      firstname: "Sara",
      lastname: "Esposito",
      age: 18
    },
    
    {
      firstname: "Luca",
      lastname: "De Luca",
      age: 43
    },

    {
      firstname: "Michele",
      lastname: "Conte",
      age: 96
    },

    {
      firstname: "Franco",
      lastname: "De Rosa",
      age: 4
    },

    {
      firstname: "Giovanni",
      lastname: "Mancini",
      age: 22
    },

    {
      firstname: "Guido",
      lastname: "Ferrari",
      age: 10
    },

    {
      firstname: "Anna",
      lastname: "Russo",
      age: 3
    },

    {
      firstname: "Ciro",
      lastname: "Ricci",
      age: 61
    }

  ]
  
  for (let i in users) {
    const user = users[i];
  
    if(user.age < 18){
      console.log("JUNIOR", user.firstname, user.lastname, user.age)
    }else if(user.age > 60){
      console.log("SENIOR", user.firstname, user.lastname, user.age)
    }
  }