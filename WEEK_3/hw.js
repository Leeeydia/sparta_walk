var user = {
  name: "john",
  age: 20,
}

var getAged = function (user, passedTime) {
  
  var getAged = function (user, passedTime) {
    
    var newUser = {};
    
    
    for (var key in user) {
        newUser[key] = user[key];
    }
    
  
    newUser.age = user.age + passedTime;
    
    return newUser;
};
  
  
  
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
      console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) { 
      console.log("Passed! If you become older, you will be different from you in the past!")
  } else {
      console.log("Failed! User same with past one");
  }
}

agedUserMustBeDifferentFromUser(user, agedUser);