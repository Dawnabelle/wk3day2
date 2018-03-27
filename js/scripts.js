$(document).ready(function() {
  $("form#transportation-survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $("#transportation-survey").hide();
  });
});







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
