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
    var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);

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
    "degree": "Postbaccalaureate Certificate",
    "majors": ["Computer Science"],
    "dates": "xxxx-xxxx",
    "url": "http://www.cdm.depaul.edu/academics/pages/professionaldevelopment.aspx"
  },
    {
      "name": "University of Illinois",
      "location": "Chicago, IL",
      "degree": "BA",
      "majors": ["Political Science", "Mathematics"],
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

      var formattedHTMLschoolName = HTMLschoolName.replace(data, school.name);
      var formattedHTMLschoolDegree = HTMLschoolDegree.replace(data, school.degree);
      var formattedNameAndDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
      var formattedHTMLschoolDates = HTMLschoolDates.replace(data, school.dates);
      var formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, school.location);
      var formattedHTMLschoolMajor = HTMLschoolMajor.replace(data, school.majors);

      $(".education-entry:last").append(formattedNameAndDegree);
      $(".education-entry:last").append(formattedHTMLschoolDates);
      $(".education-entry:last").append(formattedHTMLschoolLocation);
      $(".education-entry:last").append(formattedHTMLschoolMajor);
    });
    // Append online classes header
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
      $("#education").append(HTMLschoolStart);

      var formattedHTMLonlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
      var formattedHTMLonlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
      var formattedTitleAndSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
      var formattedHTMLonlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
      var formattedHTMLonlineURL = HTMLonlineURL.replace(data, onlineCourse.url);

      $(".education-entry:last").append(formattedTitleAndSchool);
      $(".education-entry:last").append(formattedHTMLonlineDates);
      $(".education-entry:last").append(formattedHTMLonlineURL);

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
      //createWorkEntryDiv();
      $(".work-entry:last").append(formattedEmployerAndTitle);
      $(".work-entry:last").append(formattedHTMLworkDates);
      $(".work-entry:last").append(formattedHTMLworkLocation);
      $(".work-entry:last").append(formattedHTMLworkDescription);
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

      $(".project-entry:last").append(formattedHTMLprojectTitle);
      $(".project-entry:last").append(formattedHTMLprojectDates);
      $(".project-entry:last").append(formattedHTMLprojectDescription);

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