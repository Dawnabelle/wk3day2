$(document).ready(function() {
  var words = ["javascript", "jquery", "react", "epicodus", "development", "concatenate","append","recursion","factorial"];
  var randomNum = Math.floor(Math.random() * Math.floor(5));
  var gameWord = words[randomNum];
  var showGameWord = gameWord.split("").fill("-").join("");
  var wrongGuessCounter = 0;
  var hangmanImages = ["#hangman-2","#hangman-3","#hangman-4","#hangman-5","#hangman-6"];

  $(".word").text(showGameWord);
  console.log(gameWord);
  $("#formGuess").submit(function(event) {
    event.preventDefault();
    var guess = $("#inputGuess").val();
    $("#formGuess")[0].reset();
    if (gameWord.includes(guess)){
      for(var letterIndex = 0; letterIndex <= gameWord.length; letterIndex ++){
        if (gameWord[letterIndex] === guess){
          showGameWord = showGameWord.slice(0,letterIndex)+ guess + showGameWord.slice(letterIndex+1);
          console.log(showGameWord);
        }
      }
      $(".word").text(showGameWord);
      setTimeout('', 3000);
      if (!showGameWord.includes("-")) {
        $("#result").text("You're a winner!");
        setTimeout(location.reload.bind(location), 3000);
      }
    }
    else {
      $("#wrongGuesses").append("<li>" + guess +"</li>");
      $(".hangmanImg").hide();
      $(hangmanImages[wrongGuessCounter]).show();
      wrongGuessCounter += 1;
      if (wrongGuessCounter == 5) {
        $("#result").text("You didn't win!");
        setTimeout(location.reload.bind(location), 3000);
      }
    }

  });
});

// $(document).ready(function() {
//   $("form#events").submit(function(event) {
//     event.preventDefault();
//     $("#response").show();
//     var luckScore = 0;
//     $("input:checkbox[name=luckyEvents]:checked").each(function() {
//       var luckyEvent = parseInt($(this).val());
//       luckScore += luckyEvent;
//     });
//     $("input:checkbox[name=unluckyEvents]:checked").each(function() {
//       var unluckyEvent = parseInt($(this).val());
//       luckScore += unluckyEvent;
//     });
//     var fortune;
//     if(luckScore >= -10 && luckScore < -3){
//       fortune = "You are very unlucky! Don't play the lottery today.";
//     }
//     else if (luckScore >= -3 && luckScore < 3){
//       fortune = "You make your own luck!";
//     }
//     else {
//       fortune = "Hooray you're so lucky! You'll have good luck with all your endeavors.";
//     }
//     $("#response").append(fortune);
//     $("#events").hide();
//   });
// });
// $(document).ready(function() {
//   $("form#transportation-survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       $("#work-responses").append(workTransportationMode + "<br>");
//     });
//     $("#fun-responses").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var funTransportationMode = $(this).val();
//       $('#fun-responses').append(funTransportationMode + "<br>");
//     });
//     $("#transportation-survey").hide();
//   });
// });
// $(document).ready(function() {
//   $("#countUp").submit(function(event){
//
//     event.preventDefault();
//     var max = parseInt($("#max").val());
//     var countBy = parseInt($("#countBy").val());
//
//     for (var index = 0; index <= max; index += countBy){
//       alert(index);
//     }
//   });
// });
// $(document).ready(function() {
//   $("#formOne").submit(function (event) {
//     event.preventDefault();
//     var wordPuzzle = $("#puzzleSentence").val();
//     var vowels = "aeiou";
//     for(var index = 0; index <= wordPuzzle.length; index ++){
//       for(var vowelIndex = 0; vowelIndex <= vowels.length; vowelIndex ++) {
//         if (wordPuzzle[index] === vowels[vowelIndex]) {
//           wordPuzzle = wordPuzzle.replace(wordPuzzle[index], "-");
//           //wordPuzzle[index] = "-";
//         }
//       }
//     }
//     alert(wordPuzzle);
//   })
//
//
// });
