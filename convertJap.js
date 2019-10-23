//jshint esversion:6
function convertJap(hiragana) {
  let original = hiragana;
  let convert = "";
  switch (hiragana) {

    case "ア":
      convert = "あ";
      break;

    case "イ":
      convert = "い";
      break;


    case "ウ":
      convert = "う";
      break;


    case "エ":
      convert = "え";
      break;


    case "オ":
      convert = "お";
      break;


    case "カ":
      convert = "か";
      break;


    case "キ":
      convert = "き";
      break;


    case "ク":
      convert = "く";
      break;


    case "ケ":
      convert = "け";
      break;


    case "コ":
      convert = "こ";
      break;

    case "ガ":
      convert = "が";
      break;

    case "ギ":
      convert = "ぎ";
      break;


    case "グ":
      convert = "ぐ";
      break;


    case "ゲ":
      convert = "げ";
      break;


    case "ゴ":
      convert = "ご";
      break;


    case "サ":
      convert = "さ";
      break;


    case "シ":
      convert = "し";
      break;


    case "ス":
      convert = "す";
      break;


    case "セ":
      convert = "せ";
      break;


    case "ソ":
      convert = "そ";
      break;

    case "ザ":
      convert = "ざ";
      break;

    case "ジ":
      convert = "じ";
      break;


    case "ズ":
      convert = "ず";
      break;


    case "ゼ":
      convert = "ぜ";
      break;


    case "ゾ":
      convert = "ぞ";
      break;


    case "タ":
      convert = "た";
      break;


    case "チ":
      convert = "ち";
      break;


    case "ツ":
      convert = "つ";
      break;


    case "ッ":
      convert = "っ";
      break;

    case "テ":
      convert = "て";
      break;


    case "ト":
      convert = "と";
      break;

    case "ダ":
      convert = "だ";
      break;

    case "ヂ":
      convert = "ぢ";
      break;


    case "ヅ":
      convert = "づ";
      break;


    case "デ":
      convert = "で";
      break;


    case "ド":
      convert = "ど";
      break;


    case "ナ":
      convert = "な";
      break;


    case "ニ":
      convert = "に";
      break;


    case "ヌ":
      convert = "ぬ";
      break;


    case "ネ":
      convert = "ね";
      break;


    case "ノ":
      convert = "の";
      break;

    case "ハ":
      convert = "は";
      break;

    case "ヒ":
      convert = "ひ";
      break;


    case "フ":
      convert = "ふ";
      break;


    case "ヘ":
      convert = "へ";
      break;


    case "ホ":
      convert = "ほ";
      break;


    case "バ":
      convert = "ば";
      break;


    case "ビ":
      convert = "び";
      break;


    case "ブ":
      convert = "ぶ";
      break;


    case "ベ":
      convert = "べ";
      break;


    case "ボ":
      convert = "ぼ";
      break;



    case "パ":
      convert = "ぱ";
      break;


    case "ピ":
      convert = "ぴ";
      break;


    case "プ":
      convert = "ぷ";
      break;


    case "ペ":
      convert = "ぺ";
      break;

    case "ポ":
      convert = "ぽ";
      break;

    case "マ":
      convert = "ま";
      break;


    case "ミ":
      convert = "み";
      break;


    case "ム":
      convert = "む";
      break;


    case "メ":
      convert = "め";
      break;


    case "モ":
      convert = "も";
      break;

    case "ラ":
      convert = "ら";
      break;


    case "リ":
      convert = "り";
      break;

    case "ル":
      convert = "る";
      break;

    case "レ":
      convert = "れ";
      break;


    case "ロ":
      convert = "ろ";
      break;


    case "ヤ":
      convert = "や";
      break;


      case "ャ":
        convert = "ゃ";
        break;


    case "ユ":
      convert = "ゆ";
      break;

      case "ュ":
        convert = "ゅ";
        break;


    case "ヨ":
      convert = "よ";
      break;

      case "ョ":
        convert = "ょ";
        break;



    case "ー":
      convert = "ー";
      break;

    case "ワ":
      convert = "わ";
      break;

    case "ヲ":
      convert = "を";
      break;


    case "ン":
      convert = "ん";
      break;

    default:
      convert = hiragana;
  }

  return convert;
}
//
// export default  convertJap;
