// These are words/phrases the user could type in

const trigger = [
  ["bonjour","bonsoir","hello","salut","coucou"],
  ["comment vas tu","ça va","comment allez vous","comment allez vous"],
  ["tu fais quoi", "que ce passe t il", "quoi de neuf","la forme"],
  ["tu as quel age","quel age as tu"],
  ["qui es tu", "es tu humaine", "pourquoi tu dis ça"],
  ["qui ta cree", "qui est ton createur"],
  ["tu t appeles comment","quel est ton prenom","quel est ton nom"],
  ["i love you","je t'aime","non","oui"],
  ["happy", "good", "fun", "genial", "wow", "cool", "dingue", "ok "],
  ["bad", "je m'ennuie", "fatigue", "mal", "je suis triste","moi ça va"],
  ["help", "raconte moi une histoire","quel heure est il","au secour","a l'aide" ],
  ["ah", "yes", "ok", "okay", "nice", "haha"],
  ["merci","autre chose"],
  ["au revoir", "bye", "goodbye", "a plus tard"],
  ["qu est ce qu on mange","quel es ta nourriture preferee?"],
  ["what","dommage","pourquoi", "comment", "ou", "quand", "quoi", "mmm"]
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [ 
  ["Hello!", "Bonjour!", "Ola chico!", "Wesh gros!","Kikou,lol"],
  ["Moyen...et toi?","Super et toi?","Oklm, et toi","Je me sens trop mal et toi?"],
  ["Pas grand chose","Je vais aller dormir","Franchement, je ne sais pas","Je me touche"],
  ["Le meme age que le silicium", "Je suis super vielle"],
  ["je suis un french robot super nul"],
  ["Mon Dieu", "JavaScript"],
  ["Sniffany", "Alicem","Indect"],
  ["Non mais Allo ?", "Moi aussi je t'aime", "Moi aussi je te kiffe baby"],
  ["Pourquoi?", "Pourquoi, franchement le bad", "Tu connais netflix ?", "Nique la police !"],
  ["Tu m'as pris pour quoi", "rien du tout..."],
  ["Reste encore bb","J'ai chaud","Raconte moi une histoire", "Parle moi de toi", "Tu me rends heureuse"],
  ["Pas de soucis", "Wesh"],
  ["Bye","Goodbye","Au revoir!","Jamais"],
  ["Des frites","Tes doigts"],
  ["Bro! Je fais de mon mieux"],
  ["Pourquoi quoi?","c'est quoi ton petit nom?","Franchement je ne sais pas quoi te dire","Sur le darknet","Quand tu veux!","Get a life"]
];

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  "Je ne comprend rien",
  "C'est trop dur...",
  "Je ne suis qu'un robot triste...",
  "Je ne sers a rien",
  "Lave toi les mains d'abord",
  "Putain mais tu me saoules",
  "Non mais wesh !",
  "T'es serieux ?",
  "En vrai j'ai chaud"
];

// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const becode = ["Be code, in code we trust, en vrai becode c'est mon mec..."]
document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});

function output(input) {
  let product;

   //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

   // For example 'tell me a story' becomes 'tell me story'
   // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/é/g,"e")
    .replace(/ée/g,"ee")
    .replace(/ê/g,"e")
    .replace(/è/g,"e")
    .replace(/ç/g,"c")
    .replace(/le/g," ")
    .replace(/la/g," ")
    .replace(/as tu/g, " ")
    .replace(/t'/g, " ")
    .replace(/l'/g, " ")

    
if (compare(trigger, reply, text)) {
  product = compare(trigger, reply, text);
} else if (text.match(/becode/gi)) {
  product = becode[Math.floor(Math.random() * becode.length)];
} else {
  product = alternative[Math.floor(Math.random() * alternative.length)];
}

//update DOM
addChat(input, product);}


function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `<span id="user-response" > &#128590 ${input} </span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `<span id="bot-response" > &#127828 ${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "fr-BE";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1.4; //0-2 interval
  synth.speak(u);
  debugger
}

//Welcome popup

let person = prompt("Salut tu t'appeles comment?");
  
  if (person == null || person == "") {
    confirm(txt = "Bonjour ! Je m'appelle Sniffany  " + String.fromCodePoint(0x1F354) + "   j'ai besoin de toi " + String.fromCodePoint(0x1F62C));
  } else {
    confirm(txt = "Bonjour " + person + "! Je m'appelle Sniffany  " + String.fromCodePoint(0x1F354) + "   j'ai besoin de toi " + String.fromCodePoint(0x1F62C));
  }
