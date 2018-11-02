
var FirstTrain;
var nextTrain;
var minutesUnitlTrain;  
var Frequency;

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
  
   FirstTrain = moment($("#time").val().trim(), "HH:mm" ).subtract(10,"years").format("X");
  console.log(FirstTrain + "tresting");
     Frequency = $("#Frequency").val().trim();

var NewTrain = {
    TrainName : TrainName,
    Destination : Destination,
    FirstTrain: FirstTrain,
    Frequency : Frequency
}; console.log(NewTrain);
  
database.ref().push(NewTrain);

$("#Train").val("");
  $("#destination").val("");
  $("#time").val("");
  $("#Frequency").val("");

  });

  database.ref().on("child_added", function (addTrain){
   //console.log(childSnapshot.val());
  var anotherTrain = addTrain.val().TrainName;
  //console.log(anotherTrain + "ooops");
  var anotherLocation = addTrain.val().Destination;
  var anotherMinutesUntilTrain = addTrain.val().minutesUnitlTrain;
  var anotherHowOften = addTrain.val().Frequency;
  var anotherFirstTrain = addTrain.val().FirstTrain;
  // var differentTime = moment().diff(moment.unix(anotherTrain), 'mm');
   var remainingTime = moment().diff(moment.unix(anotherFirstTrain), 'mm')% anotherHowOften;
   minutesUnitlTrain = anotherHowOften-remainingTime;
   //console.log(minutesUnitlTrain + "OOOPPS");
  // console.log(differentTime);
  var arrivalOfNextTrain = moment().add(minutesUnitlTrain, 'm').format("HH:mm A");
  console.log(arrivalOfNextTrain + 'hope!!');
   var TableDiv = $("<tr>");

  
    var Train = $("<td>" + addTrain.val().TrainName + "</td>");
   var location = $("<td>" + addTrain.val().Destination + "</td>");
    var minutesUnitlTrainTD = $("<td>" + minutesUnitlTrain + "</td>");
    var howOften = $("<td>" + addTrain.val().Frequency + "</td>");
    nextTrain = $("<td>" + addTrain.val().nextTrain + "</td>");

    TableDiv.append(Train).append(location).append(howOften).append(nextTrain).append(minutesUnitlTrainTD);
    $("#table").append(TableDiv);
  });

  



  var firstTimeConverted = moment(FirstTrain, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted + "test");
console.log(FirstTrain + "check");
var currentTime = moment();
console.log("CURRENT TIME : " + moment(currentTime).format("HH:mm"));

var differenceTime = firstTimeConverted - currentTime.format("mm");
console.log("DIFFERENCE IN TIME " + differenceTime);

var remainder = differenceTime % Frequency;
console.log(remainder);



 nextTrain = currentTime.add(minutesUnitlTrain).format("mm");
console.log("ARRIVAL TIME " + moment(nextTrain).format("hh:mm"));



 

           
    
  