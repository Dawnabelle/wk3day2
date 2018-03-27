$(document).ready(function() {
  $("form#events").submit(function(event) {
    event.preventDefault();
    $("#response").show();
    var luckScore = 0;
    $("input:checkbox[name=luckyEvents]:checked").each(function() {
      var luckyEvent = parseInt($(this).val());
      luckScore += luckyEvent;
    });
    $("input:checkbox[name=unluckyEvents]:checked").each(function() {
      var unluckyEvent = parseInt($(this).val());
      luckScore += unluckyEvent;
    });
    var fortune;
    if(luckScore >= -10 && luckScore < -3){
      fortune = "You are very unlucky! Don't play the lottery today.";
    }
    else if (luckScore >= -3 && luckScore < 3){
      fortune = "You make your own luck!";
    }
    else {
      fortune = "Hooray you're so lucky! You'll have good luck with all your endeavors.";
    }
    $("#response").append(fortune);
    $("#events").hide();
  });
});


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
  // $("#countUp").submit(function(event){
  //
  //   event.preventDefault();
  //   var max = parseInt($("#max").val());
  //   var countBy = parseInt($("#countBy").val());
  //
  //   for (var index = 0; index <= max; index += countBy){
  //     alert(index);
  //   }
//   });
// });

// $(document).ready(function() {
//   $("#formOne").submit(function () {
//     var wordPuzzle = $("#puzzleSentence").val();
//     var vowels = "aeiou";
//     for(var index = 0; index <= wordPuzzle.length; index ++){
//       for(var vowelIndex = 0; vowelIndex <= vowels.length; vowelIndex ++) {
//         if (wordPuzzle[index] === vowels[vowelIndex]) {
//           wordPuzzle = wordPuzzle.replace(wordPuzzle[index], "-");
//         }
//       }
//     }
//     alert(wordPuzzle);
//   })
//
//
// });
