
var FirstTrain
var nextTrain
var minutesUnitlTrain  

  var config = {
    apiKey: "AIzaSyAkrnkgBC47E4rC04jHzHL1c6fN4dAHRqI",
    authDomain: "train-c2362.firebaseapp.com",
    databaseURL: "https://train-c2362.firebaseio.com",
    projectId: "train-c2362",
    storageBucket: "train-c2362.appspot.com",
    messagingSenderId: "749000057163"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  $(".button").on("click", function(event) {
    event.preventDefault();

    var TrainName = $("#Train").val().trim();
  var Destination = $("#destination").val().trim();
  
   FirstTrain = moment($("#time").val().trim()).format("HH:mm:ss");
  //console.log(FirstTrain);
    var Frequency = $("#Frequency").val().trim();

var NewTrain = {
    TrainName : TrainName,
    Destination : Destination,
    FirstTrain: FirstTrain,
    Frequency : Frequency
}; //console.log(NewTrain);
  
database.ref().push(NewTrain);

$("#Train").val("");
  $("#destination").val("");
  $("#time").val("");
  $("#Frequency").val("");

  });

  database.ref().on("child_added", function (addTrain){
    var TableDiv = $("<tr>");

  
    var Train = $("<td>" + addTrain.val().TrainName + "</td>");
   var location = $("<td>" + addTrain.val().Destination + "</td>");
    minutesUnitlTrain = $("<td>" + addTrain.val().minutesUnitlTrain + "</td>");
    var howOften = $("<td>" + addTrain.val().Frequency + "</td>");
    nextTrain = $("<td>" + addTrain.val().nextTrain + "</td>");

    TableDiv.append(Train).append(location).append(howOften).append(nextTrain).append(minutesUnitlTrain);
    $("#table").append(TableDiv);
  });

  var trainFrequency = 5;

  var firstTime = "02:30";

  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME : " + moment(currentTime).format("HH:mm"));

var differenceTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME " + differenceTime);

var remainder = differenceTime % trainFrequency;
console.log(remainder);

minutesUnitlTrain = trainFrequency - remainder;
console.log(minutesUnitlTrain);

 nextTrain = moment().add(minutesUnitlTrain, "minutes");
console.log("ARRIVAL TIME " + moment(nextTrain).format("hh:mm"));



 

  //   //do calculation for next arrival time
  //   //do calculation for minutes till next train arrives

    

  //    // $("<td>").text(add var from above calculation section),
  //      //  $("<td>").text(add var from above calculation section),
  //             );
              
    
  //  });