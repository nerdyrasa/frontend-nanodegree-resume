var bio = {
  "name" : "Jane Doette",
  "role" : "Developer",
  "contacts" : {
    "mobile" : "123-456-7890",
    "email" : "jane@xxx-janedoette.com",
    "github" : "xxx-janedoette",
    "twitter" : "@xxx-some-jane-doette",
    "location" : "everywhere"
  },
  "welcomeMessage" : "Problem solving is fun!",
  "skills" : ["JavaScript", "HTML5", "CSS3", "C#", ".NET", "Entity Framework"],
  "bioPic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
//var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.role);
var formattedMobile =  HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub =  HTMLgithub.replace("%data%", bio.contacts.github);
//var formattedBlog = HTMLblog.replace("%data%, = bio.contacts.'
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


//$("#header").append(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

$("#header").append(HTMLskillsStart);

for ( var i=0 ; i< bio.skills.length; i++ ) {

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

  $("#skills").append(formattedSkills);
}








$("#main").append(bio.name);