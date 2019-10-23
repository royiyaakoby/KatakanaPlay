//jshint esversion:6


let levels = 0;
let counter = 0;
let oldBox = 0;
let clickedArrey = [];
let ex1 = [];
let h1 = $(".h1Ex");
let letterArrey = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ネ', 'ヌ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ'];
let levelsArrey = [level1, level2, level3];

const wordOutSound = new Audio('Media/wordOut.mp3');
const clickSound = new Audio('Media/click.mp3');
const endLevelSound = new Audio('Media/levelEnd.mp3');
const themMusic = new Audio('Media/Theme.mp3');
let playmusic = false;



$('.audioBtn').on('click', function() {
  if (playmusic == true) {
    playmusic = false;
    themMusic.pause();

  } else {
    playmusic = true;
    themMusic.loop = true;
    themMusic.play();
  }
});
///////////////////////////// EXTREA KEYS ///////
$('body').keypress((key) => {
  let targetKey = key.key;
  if (targetKey <= 9 && targetKey > 0) {
    ex1 = [];
    levels = targetKey - 1;
    levelBuild(levelsArrey[levels]);

  }
});

$('.volSlider').on('input change', (event) => {
  let levels = event.target.value;
  themMusic.volume = levels / 100;
  clickSound.volume = levels / 100;
  wordOutSound.volume = levels / 100;
  endLevelSound.volume = levels / 100;

});

/////////// START LEVEL /////////
levelBuild(levelsArrey[0]);


//// Clicking on a letter to arrey method ///


$(".letterBox").click((line) => {
  clickSound.play();
  let btnVal = convertJap(line.target.innerText);
  let newBox = Number(line.target.name);

  if (oldBox > 0) {
    if (newBox === oldBox) {
      console.log("Same!");
    } else if (newBox === oldBox + 20 || newBox === oldBox - 20 || newBox === oldBox + 1 || newBox === oldBox - 1) {
      $(line.target).css("background-color", "green");
      clickedArrey.push(btnVal);
      oldBox = newBox;
      counter++;
    } else {
      console.log("Not Good");
      oldBox = 0;
      clickedArrey = [];
      $(".letterBox").css("background-color", "#f14e4e");

    }
  }
  if (oldBox === 0) {
    oldBox = newBox;
    $(line.target).css("background-color", "green");
    clickedArrey.push(btnVal);
  }

  comapreArrey();
});



//// Chavking word woth arrey Method ///

function comapreArrey(level) {
  let newword = clickedArrey.join("");
  let newWordLength = newword.length;
  let xy = ex1.includes(newword);
  let indexof = ex1.indexOf(newword);
  if (xy === true) {
    ex1.splice(indexof, 1);
    clickedArrey = [];
    oldBox = 0;
    counter = 0;
    wordOutSound.play();
    $(".letterBox").css("background-color", "#f14e4e");
    let newList = ex1.join(", ");
    h1.text(newList);
  }

  if (longestWord(ex1).length == 1) {
    // alert("game over");
    ex1 = [];
    levels = levels + 1;
    endLevelSound.play();
    return levelBuild(levelsArrey[levels]);
  }

  if ((newWordLength + 1) > longestWord(ex1).length) {
    clickedArrey = [];
    oldBox = 0;
    counter = 0;
    $(".letterBox").css("background-color", "#f14e4e");

  }


  let newList = ex1.join(", ");
  h1.text(newList);
  // h1.text(ex1);

}

//// Filling random letters method ///

function random() {
  for (let i = 1; i < 201; i++) {
    let random = Math.floor(Math.random() * 38);
    let item = $("[name='" + i + "']");

    if (item.text() === "-") {

      item.text(letterArrey[random]);
    }

  }
}

//// fiding the longes word in the arrey ///

function longestWord(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }

  }
  if (longest == undefined) {
    longest = "1";
  }
  return longest;
}

// building level ///

function levelBuild(level) {
$('.letterBox').text('-');
if (level == undefined){
  alert('You finshied the game! YAY!');
  level = level1;
  levels=0;
}

  $('.gameBody').css('background-image', `url( Media/level${levels +1}.jpg)`);

  $('.levelTitle').text(`LEVEL ${levels +1}`);
  level.forEach(value => {
    word(value);
    ex1.push(value.word);
  });

  let newList = ex1.join(", ");
  h1.text(newList);

  random();
}


// $(document).ready(function() {
//   themMusic.play();
//   playmusic = true;
// });
