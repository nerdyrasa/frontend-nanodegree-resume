

var formattedName = HTMLheaderName.replace("%data%", "RB Isaacson");

var formattedRole = HTMLheaderRole.replace("%data%", "Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var skills = ["awesomeness", "programming", "teaching", "JS"];

$("#main").append(skills.length);

var bio = {
  "name" : "James",
  "role" : "Developer",
  "contacts" : {
    "mobile" : "x",
    "email" : "x",
    "github" : "x",
    "twitter" : "x",
    "location" : "x"
  },
  "welcomeMessage" : "blah blah blah",
  "skills" : skills,
  "bioPic" : "images/fry.jpg"
};

$("#main").append(bio.name);