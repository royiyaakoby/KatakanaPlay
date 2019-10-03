//jshint esversion:6


const word = (word) => {
  word.location.forEach((currentValue, index, arr)=>{
  $("[name='" + currentValue+ "']").text(word.letters[index]);
});

};


const america = {
  word : "あめりか",
  letters: ["ア","メ","リ","カ"],
  location :[1,2,3,4]
};

const apple = {
  word : "あっぷる",
  letters: ["ア","ッ","プ","ル"],
  location :[21,22,23,24]
};

const cake = {
  word : "けーき",
  letters: ["ケ","ー","キ"],
  location :[31,51,71]
};

const table = {
  word : "てーぶる",
  letters: ["テ","ー","ブ","ル"],
  location :[32,52,72,92]
};

const level1 = [america,apple,cake,table];

const kaka  = {
word : "kaka",
letters: ["k","a","k","a"],
location :[1,2,3,4]
};

const level2 = [kaka,apple];
