const userData = require("./usersData.js");

//console.log(userData.getUsers());
//console.log(userData.getUser("59b99de3cfa9a34dcd788614"));

console.log(userData.addUser({    
    name: 'Steve Jobs',
    email: 'Steve@fakegmail.com',
    password: '$2b$12$50w2j63ATGmhVOh2rgdjv.wOd9TV0Jb9Xk/Anms0fxVSvGMf5MwvK'
  }));
