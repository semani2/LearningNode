var getUser = (id, callback) => {
  var user = {
    id,
    name: "Sai",
    age: 25
  };
  //Simulated delay
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(5, (user) => {
  console.log(user);
});
