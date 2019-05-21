module.exports = (user, data) => {
  function closestMatch() {
    for (i = 0; i < data.length; i++) {
      data[i];
      for (n = 0; n < data.answers.length; n++) {
        user.answers[n] - data.answers[n];
        console.log(n);
      }
    }
  }
};

closestMatch(newUser, dummyData);

const dummyData = [
  {
    answers: [1, 6, 6, 5, 5, 4, 4, 3, 3, 2]
  },
  {
    answers: [2, 7, 8, 10, 5, 3, 2, 5, 3, 2]
  },
  {
    answers: [3, 4, 5, 2, 1, 1, 2, 3, 4, 6]
  },
  {
    answers: [4, 5, 2, 6, 2, 6, 5, 4, 2, 1]
  }
];

const newUser = {
  answers: [1, 6, 6, 5, 5, 4, 4, 3, 3, 2]
};
