//jshint esversion:6


const word = (word) => {
  word.location.forEach((currentValue, index, arr)=>{
  $("[name='" + currentValue+ "']").text(word.letters[index]);

});

};


// const ? = {
//   word : "?",
//   letters: [?],
//   location :[?]
// };



const idol = {
  word : "あいどる",
  letters: ['ア','イ','ド','ル'],
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

const hamburger = {
  word : "はんばーがー",
  letters: ["ハ","ン","バ","ー","ガ","ー"],
  location :[66,86,106,126,146,166]
};

const kareoke = {
  word : "からおけ",
  letters: ["カ","ラ","オ","ケ"],
  location :[134,135,136,137]
};

const computer = {
  word : "こんぴゅーたー",
  letters: ["コ","ン","ピ","ュ","ー","タ","ー"],
  location :[182,183,184,185,186,187,188]
};
const capret = {
  word : "かーぺっと",
  letters: ["カ","ー","ペ","ッ","ト"],
  location :[112,132,152,172,192]
};

const shower = {
  word : "しゃわー",
  letters: ["シ","ャ","ワ","ー"],
  location :[102,103,104,105]
};

const app = {
  word : "あぷり",
  letters: ["ア","プ","リ"],
  location :[76,77,78]
};


const level1 = [idol,computer,cake,table,hamburger,kareoke,apple,capret,shower,app];

const america = {
  word : "あめりか",
  letters: ["ア","メ","リ","カ"],
  location :[1,2,3,4]
};


europe  = {
  word : "よーろっぱ",
  letters: ['ヨ','ー','ロ','ッ','パ'],
  location :[106,107,108,109,110]
};


const italy = {
  word : "いたりあ",
  letters: ['イ','タ','リ','ア'],
  location :[57,77,97,117]
};


const holland = {
  word : "おらんだ",
  letters: ['オ','ラ','ン','ダ'],
  location :[75,95,115,135]
};


const canada = {
  word : "かなだ",
  letters: ['カ','ナ','ダ'],
  location :[133,134,135]
};


const spain = {
  word : "すぺいん",
  letters: ['ス','ペ','イ','ン'],
  location :[30,31,32,33]
};


const germany = {
  word : "どいつ",
  letters: ['ド','イ','ツ'],
  location :[12,32,52]
};


const france = {
  word : "ふらんす",
  letters: ['フ','ラ','ン','ス'],
  location :[168,169,170,171]
};


const russhia = {
  word : "ろしあ",
  letters: ['ロ','シ','ア'],
  location :[172,173,174,175]
};


const israel = {
  word : "いすらえる",
  letters: ['イ','ス','ラ','エ','ル'],
  location :[65,85,105,125,145]
};


const level2 = [america,europe,italy,holland,canada,spain,germany,france,russhia,israel];

const taxi = {
  word : "たくしー",
  letters: ['タ','ク','シ','ー'],
  location :[23,43,63,83]
};


const camera = {
  word : "かめら",
  letters: ['カ','メ','ラ'],
  location :[112,113,114]
};


const tv = {
  word : "てれび",
  letters: ['テ','レ','ビ'],
  location :[155,175,195]
};

const anima = {
  word : "あにめ",
  letters: ['ア','ニ','メ'],
  location :[73,93,113]
};

const escalator = {
  word : "えすかれーたー",
  letters: ['エ','ス','カ','レ','ー','タ','ー'],
  location :[20,40,60,80,100,120,140]
};


const motorbike = {
  word : "ばいく",
  letters: ['バ','イ','ク'],
  location :[50,51,52]
};

const item = {
  word : "あいてむ",
  letters: ['ア','イ','テ','ム'],
  location :[176,177,178,179]
};


const mission = {
  word : "みっしょん",
  letters: ['ミ','ッ','シ','ョ','ン'],
  location :[88,89,90,91,92]
};



const glass = {
  word : "ぐらす",
  letters: ['グ','ラ','ス'],
  location :[7,27,47]
};


const knife = {
  word : "ないふ",
  letters: ['ナ','イ','フ'],
  location :[141,161,181]
};

const level3 = [taxi,camera,tv,anima,escalator,motorbike,item,mission,glass,knife];
