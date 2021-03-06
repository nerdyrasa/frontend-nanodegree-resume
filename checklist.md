# Project Details

JavaScript, CSS, JSON

## How do I complete this project?


1. Create four JavaScript objects:
 
 All properties must be present and have real or fake values. The names must match those in the schema (note that object and property names are case-sensitive). All property values should be of the data-type given for the property in the schema. 
 
2. Display all of the resume data contained within these objects in your resume.
3. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The variable names indicate their function. You will replace substrings in these variable string values such as **%data%** and **#** with the data in your javaScript objects, and append or prepend the formatted result to your resume in the appropriate location.

...

7. If you are prompted to do so, you may want to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key), and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**:
```<script  src="http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]"></script> ``` You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. **It is not technically possible to make anything secret on the client-side.**
8. Check your work against the [Project Rubric](https://review.udacity.com/?_ga=1.189245867.12280332.1465333852#!/projects/2962818615/rubric).
9. When you are satisfied with your project, submit it according to the Submission Instructions below.

### Resources
I took a look at what some other students did for this project to get some ideas. I did not look at the code itself--just the finished products. 
[Example project #1](http://irenemarin.github.io/FEND-project-2-resume/)
[Example project #2](http://cherylcourt.github.io/resume/)

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

- [x] 1. Create 4 JavaScript object literals:

  * `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
                 
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. - [x] Iterate through each javaScript object and append its information to index.html in the correct section.
  * First off, you’ll be using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
  * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
  * You’ll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
  * Here’s an example of some code that would add the location of one your companies to the page:
    * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
    * `$(".work-entry:last").append(formattedLocation);`
  * Use the mockup at the page of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. Do the following to add it. 
  * - [x] In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
  * - [x] In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
  * - [x] In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of your code for adding elements to the resume should be contained within functions. 
5. As described in the javaScript object schema, each 'display' function should be encapsulated within the javaScript object it displays in the resume. For instance, your 'display' function for appending 'work' experience data to the resume should be encapsulated within the 'work' javaScript object. The 'display' function can be encapsulated within the 'work' javaScript object definition in the same way other properties are defined there, or it can be encapsulated later in the file using dot notation. For example: `work.display =`
6. - [ ] It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
7. - [ ] Add the footer.