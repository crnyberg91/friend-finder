const path = require("path");
const friendsList = require("../data/friendsList.json");
module.exports = app => {
  //api route to display friendsList as json
  app.get("/api/friends", (req, res) => {
    res.json(friendsList);
  });
  //api route that, when ran, will compare the new user to the current list of friends and send the "best match" friend to the client
  app.post("/api/friends", (req, res) => {
    const userData = req.body;

      let closest = 100;
      let bestMatch = 0;
  
      for (i = 0; i < friendsList.length; i++) {
        let total = 0;
        // console.log(i)
        for (n = 0; n < friendsList[i].answers.length; n++) {
          // console.log(parseInt(data[i].answers[n]), parseInt(user.answers[n]))
          total += Math.abs(parseInt(friendsList[i].answers[n] - userData.answers[n]));
        };
        // console.log(total);
  
        if(total < closest) {
          closest = total;
          bestMatch = i;
        };
      };

    res.send({name: friendsList[bestMatch].name, img: friendsList[bestMatch].img});

    friendsList.push(userData);
  });
};
