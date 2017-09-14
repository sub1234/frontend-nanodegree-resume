/*
This is empty on purpose! Your code to build the resume will go here.
 */
//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images
//bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional. 
//education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings. 
//education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.
var projects ={
	"projects":[
	{
		"title":"Restaurnat billing",
		"dates":"june 2016",
		"description":"A system to generate hotel and resturant bill",
		"image":"images\fry.jpg"
	}]
};
var bio = {
	"name" : "SUBHAM CHOWDHARY",
	"role":"FONT-END WEB DEVELOPER",
	"contacts":{
	"mobile": "7863950905",
    "Email": "subhamchowdhary5@gmail.com",
	"github" :"sub1234",
	"twitter":"@ChowdharySubham",
	"locatio":"Asansol"
	},
	"bioPic":"images/pp.jpg",
	"skills":["FONT-END WEB DEV","Time Management"],
	"welcomeMessage":"GOOD MORNING" 
	};
var work ={
	"jobs":[{
		"emloyer":"INFOSYS",
		"title":"SYSTEM ENGINEER",
		"location":"MYSORE",
		"dates":"",
		"description":"FRONT END WEB DEVELOPER"
		}]
};
var education ={
"schools":[
{
"name": "Assembly Of god Church School",
"city":"Sodepur",
"degree":"Matric",
"major":["Science"],
"date":"JUNE 2011",
"url":"http://agcss.org.in/"
},{
"name": "Doon Public School",
"city":"Dhanbad",
"date":"JUNE 2013",
"degree":"Higher Secondary",
"major":["physics","chemestry","mathematics"],
"url":"http://www.dpsdhanbad.in/"
},{
"name": "Institute of Engineering and Management",
"city":"Salt Lake Sector 5 ,Kolkata",
"degree":"B.Tech",
"date":"JULY 2017",
"major":"Computer science Engineering",
"url":"http://iem.edu.in/"
}
],

"onlineCourses":[
{
	"title":"Front-End Web Development",
	"school":"Udacity",
	"date":"JUNE 2017",
	"url":"https://www.udacity.com/"
	
}]
};
var nam = HTMLheaderName.replace("%data%",bio.name);
 $("#header").append(nam);
 var rol = HTMLheaderRole.replace("%data%",bio.role);
 $("#header").append(rol);
 var email = HTMLemail.replace("%data%",bio.contacts.Email);
 $("#topContacts").append(email);
var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(mobile);
var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(twitter);
var locatio = HTMLemail.replace("%data%",bio.contacts.locatio);
$("#topContacts").append(locatio);
var github = HTMLemail.replace("%data%",bio.contacts.github);
$("#topContacts").append(github);
var messs = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(messs);
var picture = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(picture);


if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formatedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formatedSkill);
	var formatedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formatedSkill);
	/*var formatedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formatedSkill);
	var formatedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formatedSkill);*/
}
for(var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].emloyer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedDates);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
for(var school in education.schools){
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	var formattedNameDegree = formattedName + formattedDegree;
	$(".education-entry:last").append(formattedNameDegree);
	
	var formatted = HTMLschoolLocation.replace("%data%",education.schools[school].city);
	$(".education-entry:last").append(formatted);
	var formattedmajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	$(".education-entry:last").append(formattedmajor);
	var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
	$(".education-entry:last").append(formattedDate);
	}
for(var online in education.onlineCourses){
//	$("#education").append(HTMLonlineClasses);
	var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
	var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].school);
	var formattedTitleDegree = formattedName + onlineTitle;
	$(".education-entry:last").append(formattedTitleDegree);
	
	var onlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].date);
	$(".education-entry:last").append(onlineDates);
	var HTMLonlineURL = HTMLHTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
	$(".education-entry:last").append(HTMLonlineURL);
	}
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1]= name[1].toUpperCase();
	name[0]= name[0].slice(0,1).toUpperCase();
	name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
//$('#main').append(internationalizeButton);

	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle =HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].image.length>0){
			for( var image in projects.projects[project].image){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
				$(".project-entry:last"),append(formatedImage);
			}
	}
}

$("mapDiv").append(googleMap);	