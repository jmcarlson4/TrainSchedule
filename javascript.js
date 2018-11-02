
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

$(".button").on("click", function (event) {
  event.preventDefault();

  var TrainName = $("#Train").val().trim();
  var Destination = $("#destination").val().trim();

  FirstTrain = moment($("#time").val().trim(), "HH:mm").subtract(10, "years").format("X");

  Frequency = $("#Frequency").val().trim();

  var NewTrain = {
    TrainName: TrainName,
    Destination: Destination,
    FirstTrain: FirstTrain,
    Frequency: Frequency
  };

  database.ref().push(NewTrain);

  $("#Train").val("");
  $("#destination").val("");
  $("#time").val("");
  $("#Frequency").val("");

});

database.ref().on("child_added", function (addTrain) {


  var anotherHowOften = addTrain.val().Frequency;
  var anotherFirstTrain = addTrain.val().FirstTrain;

  var remainingTime = moment().diff(moment.unix(anotherFirstTrain), 'mm') % anotherHowOften;
  minutesUnitlTrain = anotherHowOften - remainingTime;


  var arrivalOfNextTrain = moment().add(minutesUnitlTrain, 'm').format("HH:mm A");

  var TableDiv = $("<tr>");


  var Train = $("<td>" + addTrain.val().TrainName + "</td>");
  var location = $("<td>" + addTrain.val().Destination + "</td>");
  var minutesUnitlTrainTD = $("<td>" + minutesUnitlTrain + "</td>");
  var howOften = $("<td>" + addTrain.val().Frequency + "</td>");
  var NewnextTrain = $("<td>" + arrivalOfNextTrain + "</td>");

  TableDiv.append(Train).append(location).append(howOften).append(NewnextTrain).append(minutesUnitlTrainTD);
  $("#table").append(TableDiv);
});












