const path = require("path");
const friendsList = require("../data/friendsList.json");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsList);
  });

  app.post("/api/friends", (req, res) => {
    const friendData = req.body;

    friendsList.push(friendData);
    res.end(); //send closest match function
  });
};
