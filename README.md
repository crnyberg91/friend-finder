# friend-finder

The friend-finder app lets you fill out a survey and be matched with the closest person within the database based on one's results.

## Home
It first starts off on the home page. Here, you will be greeted with a survey button, link to the api list, and a link to the repo.

## Survey
The survey are two input fields (one for the user's name and the otehr for a link to their picture).
The rest of the html consists of the questions themselves (10 in total), and at the bottom, a submit button.
After filling out the inputs, providing an answer for all questions (all are required) and clicking the button, a modal will be displayed of the person most compatible with all based on the survey questions. The user will also be stored in the friendsList database.

## friendsList
The friendsList database can be viewed at either "api/friends" or simply clicking the link on the home page. This path will provide the client with the friendsList ina json format.

## Github Repo
The github Repo link will send the user to the github repository where the code can be found.