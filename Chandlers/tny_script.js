
"use strict";


/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial CaseMODIFIED TO A FRIENDS THEME

   Chandler Countdown Clock
   Author: Mike Norrito
   Date:  12/12/19

*/



window.alert ("IMPORTANT NOTICE: I quit my job guys sorry! The event is now cancelled -Chandler Bing");

//Boom you lookin for this?

//Execute clock

runClock();
setInterval("runClock()",1000)

// Function to create and run the countdown clock
function runClock()   {

	
	//Store the current date and time
var currentDay = new Date();

var dateStr = currentDay.toLocaleDateString();

var timeStr = currentDay.toLocaleTimeString();

	//Display the current date and time

	// this has been changed to the value below document.getElementById('dateNow').innerHTML = "m/d/y<br />h:m:s";
	
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
//alculate the dayss until JAN 1srt

	var newYear = new Date("January 1, 2019");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);

	//Hrs left
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

	//minsd lef
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	//secs left
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;



//Display the time left until New Year's Eve 

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);


//MY WONDERFUL LITTLE PRACTICE VARIABLES HEHE
var myName = "Mike Norrito"

}