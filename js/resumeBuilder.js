/*
This is empty on purpose! Your code to build the resume will go here.
 */
//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images
//bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional. 
//education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings. 
//education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.
var projects = {
    "projects": [{
        "title": "Restaurnat billing",
        "dates": "june 2016",
        "description": "A system to generate hotel and resturant bill",
        "images": ["images\fry.jpg"]
    }],
    display: function () {
        return this;
    }
};
var bio = {
    "name": "SUBHAM CHOWDHARY",
    "role": "FONT-END WEB DEVELOPER",
    "contacts": {
        "mobile": "7863950905",
        "email": "subhamchowdhary5@gmail.com",
        "github": "sub1234",
        "twitter": "@ChowdharySubham",
        "location": "Asansol"
    },
    "biopic": "images/pp.jpg",
    "skills": ["FONT-END WEB DEV", "Time Management"],
    "welcomeMessage": "GOOD MORNING",
    display: function () {
        return this;
    }
};
var work = {
    "jobs": [{
        "employer": "INFOSYS",
        "title": "SYSTEM ENGINEER",
        "location": "MYSORE",
        "dates": "October 2017",
        "description": "FRONT END WEB DEVELOPER"
    }],
    display: function () {
        return this;
    }
};
var education = {
    "schools": [{
        "name": "Assembly Of god Church School",
        "location": "Sodepur",
        "degree": "Matric",
        "majors": ["Science"],
        "dates": "JUNE 2011",
        "url": "http://agcss.org.in/"
    }, {
        "name": "Doon Public School",
        "location": "Dhanbad",
        "date": "JUNE 2013",
        "degree": "Higher Secondary",
        "major": ["physics", "chemestry", "mathematics"],
        "url": "http://www.dpsdhanbad.in/"
    }, {
        "name": "Institute of Engineering and Management",
        "location": "Salt Lake Sector 5 ,Kolkata",
        "degree": "B.Tech",
        "date": "JULY 2017",
        "major": "Computer science Engineering",
        "url": "http://iem.edu.in/"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "date": "JUNE 2017",
        "url": "https://www.udacity.com/"

    }],
    display: function () {
        return this;
    }
};
var nam = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(nam);
var rol = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(rol);
var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mobile);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(twitter);
var locatio = HTMLemail.replace("%data%", bio.contacts.location);
$("#topContacts").append(locatio);
var github = HTMLemail.replace("%data%", bio.contacts.github);
$("#topContacts").append(github);
var messs = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(messs);
var picture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(picture);


bio.skills.forEach(function(skill){
    $("#header").append(HTMLskillsStart);
    var formatedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formatedSkill);
    
});
work.jobs.forEach ( function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedDates);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
});
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
education.schools.forEach (function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    var formatted = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formatted);
    var formattedmajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedmajor);
    var formattedDate = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedDate);
});
education.onlineCourses.forEach (function(online) {
    //	$("#education").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
    var onlineTitle = HTMLonlineTitle.replace("%data%", online.school);
    var formattedTitleDegree = formattedTitle + onlineTitle;
    $(".education-entry:last").append(formattedTitleDegree);

    var onlineDates = HTMLonlineDates.replace("%data%", online.dates);
    $(".education-entry:last").append(onlineDates);
    var HTMLonlineUR = HTMLonlineURL.replace("%data%", online.url);
    $(".education-entry:last").append(HTMLonlineUR);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase();
    name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//$('#main').append(internationalizeButton);

projects.projects.forEach (function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);
    if (project.images.length > 0) {
        project.images.forEach (function(imag){
            var formattedImage = HTMLprojectImage.replace("%data%", imag);
            $(".project-entry:last").append(formattedImage);
        });
    }
});
$("mapDiv").append(googleMap); // This is just a sample script. Paste your real code (javascript or HTML) here.

