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

$(document).ready(function() {
  $("#formOne").submit(function () {
    var wordPuzzle = $("#puzzleSentence").val();
    var vowels = "aeiou";
    for(var index = 0; index <= wordPuzzle.length; index ++){
      for(var vowelIndex = 0; vowelIndex <= vowels.length; vowelIndex ++) {
        if (wordPuzzle[index] === vowels[vowelIndex]) {
          wordPuzzle = wordPuzzle.replace(wordPuzzle[index], "-");
        }
      }
    }
    alert(wordPuzzle);
  })


});
