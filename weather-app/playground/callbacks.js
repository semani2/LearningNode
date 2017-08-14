var getUser = (id, callback) => {
  var user = {
    id,
    name: "Sai",
    age: 25
  };
  callback(user);
};

getUser(5, (user) => {
  console.log(user);
});
