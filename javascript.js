


  

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
  
  var FirstTrain = moment($("#time").val().trim(),"HH:mm:ss").format("X");
  console.log(FirstTrain);
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
    //var Time = $("<td>" + addTrain.val().FirstTrain + "</td>");
    var howOften = $("<td>" + addTrain.val().Frequency + "</td>");
    

    TableDiv.append(Train).append(location).append(howOften)//.append(Time)//.append(minutesAway);
    $("#table").append(TableDiv);
  });


 

  //   //do calculation for next arrival time
  //   //do calculation for minutes till next train arrives

    

  //    // $("<td>").text(add var from above calculation section),
  //      //  $("<td>").text(add var from above calculation section),
  //             );
              
    
  //  });