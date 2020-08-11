




const currentDay = moment().format("dddd, ll");
console.log(currentDay)
$("#currentDay").append(currentDay)

//.format("LT");

 

// Moment.js times input into schedule

let scheduleTime9 = ("9:00 AM");
$(".nineAM").append(scheduleTime9);

let scheduleTime10 = ("10:00 AM");
$(".tenAM").append(scheduleTime10);

let scheduleTime11 = ("11:00 AM");
$(".elevenAM").append(scheduleTime11);

let scheduleTime12 = ("12:00 AM");
$(".twelveAM").append(scheduleTime12);

let scheduleTime1 = ("1:00 PM");
$(".onePM").append(scheduleTime1);

let scheduleTime2 = ("2:00 PM");
$(".twoPM").append(scheduleTime2);

let scheduleTime3 = ("3:00 PM");
$(".threePM").append(scheduleTime3);

let scheduleTime4 = ("4:00 PM");
$(".fourPM").append(scheduleTime4);

let scheduleTime5 = ("5:00 PM");
$(".fivePM").append(scheduleTime5);




//Set Task Local Storage

var saveButton = $("#save");
var inputText = $("#inputText");

localStorage.getItem("text");

saveButton.on("click", function () {

    var inputText = $("#inputText").val();


    $(this).data("text")
});



//Remove Task Local Storage

var saveButton = $("#save");

saveButton.on("dblclick", function () {

    var inputText = $("#inputText").val();
    localStorage.removeItem("text");
});




// //Add past, present, future class to textarea
// var past = $("textarea")
// var present = $("textarea")
// var future = $("textarea")

// past.addClass("past");
// present.addClass("present");
// future.addClass("future");

//scheduleTime array



const scheduleTime = [9,10,11,12,13,14,15,16,17];

// for (var i = 0; i<scheduleTime.length; i++){}

function highlight(i) {
   
    if (scheduleTime[i] < currentTime) {
         $("#" + i).addClass("past");

    }
    if (scheduleTime[i] == currentTime) {
        $("#" + i).addClass("present");

    }
    if (scheduleTime[i] > currentTime) {
        $("#" + i).addClass("future");
    }

}


//eveything you save the text in th textarea
$(".saveBtn").on("click", function () {
    var id = $(this).attr("data-id")

    var currenValue = $("#" + id).val()
    console.log(currenValue)
    localStorage.setItem(id, currenValue);

})


//display when page first loads up
const currentTime = moment().hour()
for (var i = 0; i < 9; i++) {
    highlight(i)
    if (localStorage.getItem(i)) {
        $("#" + i).val(localStorage.getItem(i))
    }

}