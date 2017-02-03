// Placeholder for replacing html snippets with data
var data = '%data%';

var bio = {
  "name": "Jane Doette",
  "role": "Developer",
  "contacts": {
    "mobile": "555-456-7890",
    "email": "janedoetteemail",
    "github": "janedoettegithub",
    "twitter": "janedoettetwitter",
    "location": "Pleasant Prairie, WI"
  },
  "welcomeMessage": "Fail fast. Iterate to success.",
  "skills": ["JavaScript", "HTML5", "CSS3", "C#"],
  "biopic": "images/fry.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedPic, formattedMessage, HTMLskillsStart);

    // Display contact information both on the top and bottom
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    // Skills are listed in an array so can be iterated through
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

var education = {
  "schools": [{
    "name": "DePaul University",
    "location": "Chicago, IL",
    "degree": "Post-baccalaureate Certificate",
    "majors": ["Computer Science"],
    "dates": "xxxx-xxxx",
    "url": "http://www.cdm.depaul.edu/academics/pages/professionaldevelopment.aspx"
  },
    {
      "name": "University of Illinois",
      "location": "Chicago, IL",
      "degree": "BA",
      "majors": ["Political Science"],
      "dates": "xxxx-xxxx",
      "url": "http://www.uic.edu/"
    }
  ],
  "onlineCourses": [{
    "title": "Front End Nanodegree Program",
    "school": "Udacity",
    "dates": "2016-2017",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  },
    {
      "title": "HTML5, CSS, Javascript, JQuery, C#, .NET",
      "school": "Treehouse",
      "dates": "2015-2016",
      "url": "https://teamtreehouse.com/rbisaacson"
    }
  ],
  display: function() {

    education.schools.forEach(function(school) {

      $("#education").append(HTMLschoolStart);

      var formattedNameAndDegree = HTMLschoolName.replace(data, school.name).replace('#', school.url)
                                   + HTMLschoolDegree.replace(data, school.degree);
      var formattedHTMLschoolDates = HTMLschoolDates.replace(data, school.dates);
      var formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, school.location);
      var formattedHTMLschoolMajor = HTMLschoolMajor.replace(data, school.majors);

      $(".education-entry:last").append(formattedNameAndDegree,
                                 formattedHTMLschoolDates,
                                 formattedHTMLschoolLocation,
                                 formattedHTMLschoolMajor);
    });
    // Append online classes header
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
      $("#education").append(HTMLschoolStart);

      var formattedTitleAndSchool  = HTMLonlineTitle.replace(data, onlineCourse.title).replace('#', onlineCourse.url) +
                                     HTMLonlineSchool.replace(data, onlineCourse.school);
      var formattedHTMLonlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
      var formattedHTMLonlineURL   = HTMLonlineURL.replace(data, onlineCourse.url);

      $(".education-entry:last").append(formattedTitleAndSchool,
                                        formattedHTMLonlineDates,
                                        formattedHTMLonlineURL);
    });
  }
};

var work = {

  "jobs": [{
    "employer": "My Kids, Inc.",
    "title": "Chief Bottle Washer",
    "location": "Pleasant Prairie, WI",
    "dates": "in progress",
    "description": "Involved in all aspects of day-to-day operations and long-term strategic planning."
  },
    {
      "employer": "Prestigious Employer 2",
      "title": "Some Very Important Title",
      "location": "Boston, MA",
      "dates": "in progress",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedHTMLworkEmployer = HTMLworkEmployer.replace(data, job.employer);
      var formattedHTMLworkTitle = HTMLworkTitle.replace(data, job.title);
      var formattedEmployerAndTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
      var formattedHTMLworkDates = HTMLworkDates.replace(data, job.dates);
      var formattedHTMLworkLocation = HTMLworkLocation.replace(data, job.location);
      var formattedHTMLworkDescription = HTMLworkDescription.replace(data, job.description);

      $(".work-entry:last").append(formattedEmployerAndTitle,
                                   formattedHTMLworkDates,
                                   formattedHTMLworkLocation,
                                   formattedHTMLworkDescription);
    });
  }
};


var projects = {
  "projects": [{
    "title": "Project 1",
    "dates": "xxxx-xxxx",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar, leo a mollis hendrerit, lectus elit cursus purus, ac ullamcorper nibh orci eu ante. Ut maximus magna eu nulla accumsan vehicula. Nam nisl nisl, feugiat ac malesuada sed, commodo id ex. Nunc iaculis erat in tortor luctus, at gravida justo semper.",
    "images": ["http://placehold.it/350x150"]
  },
    {
      "title": "Project 2",
      "dates": "xxxx-xxxx",
      "description": "Quisque mi libero, malesuada in dapibus a, sodales a tellus. Nulla ligula dui, fermentum ac ante in, feugiat hendrerit eros. Maecenas vulputate suscipit scelerisque. Ut non eros maximus, facilisis nunc at, pellentesque mi. Curabitur quis ipsum tortor. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      "images": ["http://placehold.it/350x150"]
    },
    {
      "title": "Project 3",
      "dates": "xxxx-xxxx",
      "description": "Donec in eleifend justo, non placerat urna. Nam sapien augue, condimentum in luctus placerat, congue nec nunc. Fusce eget tincidunt justo. Ut facilisis est ut nibh dictum pharetra. Curabitur dolor magna, finibus non malesuada quis, elementum a erat. In sit amet risus est. Aenean rhoncus vitae elit id cursus.",
      "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }
  ],
  "display": function() {

    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var formattedHTMLprojectTitle = HTMLprojectTitle.replace(data, project.title);
      var formattedHTMLprojectDates = HTMLprojectDates.replace(data, project.dates);
      var formattedHTMLprojectDescription = HTMLprojectDescription.replace(data, project.description);

      $(".project-entry:last").append(formattedHTMLprojectTitle,
                                      formattedHTMLprojectDates,
                                      formattedHTMLprojectDescription);

      project.images.forEach(function(image) {
        var e = HTMLprojectImage.replace(data, image);
        $(".project-entry:last").append(e);
      });
    });
  }
};

var map = {
  "display": function() {
    // Append the googleMap string to `<div id=”mapDiv”>`.
    $("#mapDiv").append(googleMap);
  }
};

// Construct the resume from the objects.
// Objects can be listed in any order for flexibility.

var resume = {
  "display": function() {
    console.log("displaying resume");
    bio.display();
    education.display();
    work.display();
    projects.display();
    map.display();
  }
};

resume.display();