const path = require("path");
const friendsList = require("../data/friendsList.json");
const closestMatch = require("../data/friends.js");
module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsList);
  });

  app.post("/api/friends", (req, res) => {
    const friendData = req.body;

    closestMatch(friendData, friendsList);
    friendsList.push(friendData);
    
    res.end(); //send closest match function
  });
};
