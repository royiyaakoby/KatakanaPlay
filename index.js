//jshint esversion:6


let levels = 0;
let counter = 0;
let oldBox = 0;
let clickedArrey = [];
let ex1 = [];
let h1 = $(".h1Ex");
let letterArrey = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ネ', 'ヌ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ'];
let levelsArrey = [level1,level2];

levelBuild(levelsArrey[0]);


//// Clicking on a letter to arrey method ///


$(".letterBox").click((line) => {
  let btnVal = convertJap(line.target.innerText);
  let newBox = Number(line.target.name);
  if (oldBox > 0) {
    if (newBox === oldBox) {
      console.log("Same!");
    } else if (newBox === oldBox + 20 || newBox === oldBox - 20 || newBox === oldBox + 1 || newBox === oldBox - 1) {
      $(line.target).css("background-color", "black");
      clickedArrey.push(btnVal);
      oldBox = newBox;
      counter++;
    } else {
      console.log("Not Good");
    }
  }
  if (oldBox === 0) {
    oldBox = newBox;
    $(line.target).css("background-color", "black");
    clickedArrey.push(btnVal);
  }

  comapreArrey()();

});



//// Chavking word woth arrey Method ///

function comapreArrey(level) {
  let newword = clickedArrey.join("");
  console.log(newword);
  let newWordLength = newword.length;
  let xy = ex1.includes(newword);
  let indexof = ex1.indexOf(newword);
  console.log(indexof);
  if (xy === true) {
    ex1.splice(indexof, 1);
    clickedArrey = [];
    oldBox = 0;
    counter = 0;
    $(".letterBox").css("background-color", "#3c70a4");
    h1.text(ex1);
  }

  if (longestWord(ex1).length == 1) {
alert("game over");
    ex1 = [];
    levels = levels+1;
return levelBuild(levelsArrey[levels]);
  }

  if ((newWordLength + 1) > longestWord(ex1).length) {
    clickedArrey = [];
    oldBox = 0;
    counter = 0;
    $(".letterBox").css("background-color", "#3c70a4");

  }



  h1.text(ex1);

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

  level.forEach(value => {
    word(value);
    ex1.push(value.word);
  });
  h1.text(ex1);
  random();
}
