"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Credits":{
		"Title": "Awesome people!",
		"Subtitle": "Thanks to everyone.",
		"Message": `
			Music From:
			<div xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'> _ghost</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</div>
			<p>Evelyn Sprite from: <a href='http://miririri.deviantart.com/art/Evelyn-Sprite-Set-Starter-Pack-free-minipack-347585657'  target='_blank'>miririri</a></p>
			<p>Backgrounds from the one and only, <a href='https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=17302' target='_blank'>Uncle Mugen</a>!</p>`
	}
};

// Define the notifications used in the game
let notifications = {
	"End": {
		title: "Things just got real!",
		body: "You finished Monogatari 101.",
		icon: "img/icon_192x192.png"
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
	"universe": {"particles":{"number":{"value":0,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
};

// Define the music used in the game.
const music = {
	"Theme": "_ghost_-_Reverie_(small_theme).mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"Start": "「始めます」.mp3"
};

// Define the videos used in the game.
const videos = {
	"Dandelion": "DandelionTimelapse.mp4"
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Classroom": "classroom.jpg",
	"Home": "home.png",
	"Room": "room.jpg",
	"Sea": "sea.jpg",
	"Library": "library.png",
	"MyRoom": "myroom.jpg"
};

// Define the Characters
const characters = {
	"p": {
		"Name": "松岡幸人",
		"Color": "#ff3951"
	},
	"e":{
		"Name": "{{evelyn_name}}",
		"Color": "#00bfff",
		"Directory": "Evelyn",
		"Images":{
			"Normal": "normal.png",
			"Mad": "hmph!.png",
			"Doubt": "uhh.png",
			"Disapointed":"ngggg....png",
			"Happy": "hehehehe.png"
		}
	},
	"karu": {
		"Name": "【杉本彩羽】",
		"Color": "#00bfff",
		"Directory": "Karu",
		"Images": {
			"Mad": "mad.png"
		}
	},

	"hoshi": {
		"Name": "【山側星子】",
		"Color": "#E1ED42",
		"Directory": "Hoshiko",
		"Images": {
			"Emb1": "emb1.png",
			"Smile": "smile.png",
			"Surprise": "surprised.png"
		}
	},

	"haru": {
		"Name": "佐々木春香",
		"Color": "#e1001a",
		"Directory": "Haruka",
		"Images": {
			"Smile": "happy.png",
			"Blush": "blush.png"
		}

	}
};

let script = {
	// The game starts here.
	"English":{
		"Start":[
			"scene white with fadeOut",
			"play sound Start",
			"wait 3000",
			{"Conditional": {
				"Condition": function () {
					return Storage.get ("played") == "true";
				},
				"True": {"Choice":{
					"Text": "It seems you have already played the demo, do you wish to skip the introduction?",
					"Skip":{
						"Text": "Skip",
						"Do": "jump Topics"
					},
					"Continue":{
						"Text": "Continue",
						"Do": "jump Introduction"
					}
				}},
				"False": "jump Introduction"
			}}
		],

		"Introduction": [
			"clear",
			"scene black with fadeIn",
			/*
			{"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("PlayerName", input);
					storage.player.name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}},
			*/
			"centered ねえ……",
			"centered それ知ってる？",
			"centered 最初の大地には、何もいなかった。",
			"centered 過ぎ行く時間さえ存在しなかった。",
			"centered 真っ黒な世界に、一人ぼっちで生きているものがあった。",
			"centered 清寧、そして無音。",

			"particles universe",
			"centered 最初の『時間』が生まれてきた。",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 0;
					return true;
				},
			}},
			"particles universe",
			"e There weren't many at first but little by little, more and more came...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
			}},
			"particles universe",
			"e Tenths became hundreds...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 500;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 200;
					return true;
				},
			}},
			"particles universe",
			"show karu Mad center with fadeIn",

			"karu 「雪だな……」",

			"hide karu",

			"show hoshi Smile center with fadeIn",

			"hoshi 「そーだね。」",
			"e Soon they weren't just there... they were interacting, joining forces for a higher goal...",

			"centered これがこの物語の始まり。",
			"centered その誰もこんな話になるとは思えなかった。",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
			}},
			"particles universe",
			"e They were getting ready...",
			"stop particles",

			"play music Theme",
			"scene Classroom",
			"show e Normal center with fadeIn",
			"e Ok guys, that's it for today, you can go home.",

			"p Wait... what?",

			"scene MyRoom",

			"show haru smile center with fadeIn",

			"haru 「こんにちは！」",

			"show e Doubt left with fadeIn",

			"e Oh, is there a problem?",
			"p What was that story about? Aren't you going to finish it?",

			"show k Mad right with fadeIn",
			"k Ah! I see, got you intrigued haven't I? Well {{player.name}}, as a matter of fact not even I know what I was talking about, we are on a novel someone wrote remember?",

			" Oh, right... no, wait, WHAT?!",

			"show e Mad with fadeIn",

			"e Agh, not this again. Listen, this world we are in? It's not even real! In fact, you are not even you!",

			"e The real you is someone looking at this in a very confused manner as we speak.",

			"e I don't even get to have a name I mean, what's up with that? Come on now, guess you get to choose this.",

			{"Input": {
				"Text": "What should be my name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("Evelyn_Name", input);
					storage.evelyn_name = input;
					return true;
				},
				"Warning": "Choose a nice name for me please."
			}},

			"show e Normal with fadeIn",
			{"Conditional": {
				"Condition": function(){
					return storage.evelyn_name == "Evelyn";
				},
				"True": "e Evelyn... That's a lovely name! I love it!",
				"False": "e {{evelyn_name}}... Yeah, sounds good!"
			}},

			"e All right, since you seem a little bit confused let's see what living on a visual novel really means shall we?",

			"p Yeah... sure... I mean... the link did say demo so... I guess?",

			"show e Happy with fadeIn",

			"e Great! We have so much to learn!",

			"jump Topics",
		],

		"Topics": [
			"scene Classroom",
			"show e Happy with fadeIn",
			function () {
				Storage.set ("played", true);
				return true;
			},
			{"Choice":{
				"Text":	"Let's see, what do you want to know about?",
				"Animations":{
					"Text": "Animations",
					"Do": "jump Animations"
				},
				"Media":{
					"Text": "Multimedia",
					"Do": "jump Media"
				},
				"Scripting":{
					"Text": "Scripting",
					"Do": "jump Script"
				},
				"Playing":{
					"Text": "Playing",
					"Do": "jump Playing"
				},
				"Nothing": {
					"Text": "Nothing",
					"Do": "jump Nothing",
					"Condition": function () {
						return storage.playing && storage.media && storage.scripting && storage.animations;
					}
				}
			}}
		],

		"Animations": [
			function () {
				storage.animations = true;
				return true;
			},
			"scene Classroom with fadeIn",
			"show e Normal with fadeIn",
			"e Oh, animations are fun! They make weird things happen to us and the world we live in.",
			"e You can animate pretty much anything yourself but there are some predefined animations that you can start using in both backgrounds and us characters",
			"e For example, we can have a small earthquake just for ourselves.",
			"scene Classroom with shake infinite",
			"show e Normal with fadeIn",
			"e Oh wait, if the world is moving how come I'm standing still, that doesn't make any sense does it?",
			"show e Happy with shake infinite",
			"e Ah! That's more like it, as you can see, things can get real weird around here for no other reason than someone wanting to have fun",
			"p Eh... isn't that kind of... bad for us?",
			"show e Doubt with shake infinite",
			"e Bad? Wait till you hear how our existence ends as soon as they close this or worse, how we get amnesia every time they forget to save!",
			"scene Classroom with zoomIn",
			"show e Normal with fadeIn",
			"e But hey, things aren't so bad, we also get to experience things that no one else can.",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 200;
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 100;
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
			}},
			"particles universe",

			"e I bet they don't have this things where the real you is from.",
			"p What are this things? Can I touch them?",

			"e Sure you can! These are called particles, useful for creating some effects like <i>wind, stars, snow, rain</i> and well, pretty much all sorts of weird stuff.",
			"e If you are the geeky type, then you should know all animations are mainly achieved through CSS but you can use JavaScript as well, the choice is yours!",
			"stop particles",
			"jump Topics"
		],

		"Nothing":[
			"scene Home",
			"show e Normal with fadeIn",
			"e Well, guess that ends up our adventure for now",
			"p Already? I was having so much fun!",
			"e Awww sorry {{player.name}}, our writer has a limited imagination so this was really short",
			"e Nontheless, I hope you were able to learn a lot about this amazing world we live in.",
			"e I hope you got some inspiration and are ready to bring a new novel to the world!",
			"e I'll be waiting for it, good luck!",
			"notify End 2000",
			"end"
		],

		"Script":[
			function () {
				storage.scripting = true;
				return true;
			},
			"scene Library",
			"show e Normal with fadeIn",
			"e As a writer, having a simple language to write is important, that's why Monogatari has a Ren'py-like language.",
			"p Monogatari?...",
			"e Yes! Monogatari is the engine we are living on, it's important to keep it simple enough so writers, the ones that make up all our lifes, can focus on that, creating awesome stories for everyone",
			"e If Ren'py is familiar to you, then writing in Monogatari will be incredibly easy, if not, the syntax is very simple and you'll be writing in no time.",
			"p Well, it ain't familiar for me, that's for sure...",
			"show e Happy with fadeIn",
			"e No silly, I was talking to real you, who probably has played a lot of novels just like this one",
			"show e Normal with fadeIn",
			"e In the documentation you'll find all the examples you need to start writing.",
			"e Remember that Monogatari is open source, and released under the MIT License so you can use it for all your projects. I really hope to see your project very soon!",
			"e As you may know the web has evolved a lot, you'll be able to create visual novels as we know them, but also create more incredible things!",

			"e It is really up to your imagination!, there are tons and tons of APIs for the web, and you can easily integrate them to your visual novel",
			"e You name it, Paypal integration for in-app purchases and more, real-time information, you can even create the whole backend for your visual novel in order to have accounts, protected information etc. The sky is the limit!",

			"e Now, Monogatari is responsive, which means that everyone will be able to enjoy of your novel regardless the device they're on.",
			"e The inteface is written in HTML5 while the functionality as I said before is written in Javascript and all the styling is mainly CSS.",
			"e This means you could also access real time data and a lot more with the APIs available for the web, even connect it to social media.",
			"e Try Monogatari, extend it, and create Visual Novels like no one has seen before!",
			"jump Topics"
		],

		"Media":[
			function () {
				storage.media = true;
				return true;
			},
			"scene Sea",
			"show e Normal with fadeIn",
			"e So... media, what can we see in our world?",
			"e Well, images are what you are seeing right now but there are a few tricks left.",
			"e Videos for example are a nice way to show some more motion, let me show you what I mean.",
			"play video Dandelion",
			"show e Happy",
			"e Nice right? But that's not all, unless you've got this muted, you should be hearing to some music.",
			"show e Doubt",
			"e You can hear <i>music, sounds and voices</i> on a novel, there's only music on this one because... guess what?",
			"p The writer was kind of... lazy?",
			"e Exactly! But hey, there are many others who will take real advantage of all this posibilities!",
			"e He also sucks at drawing and design so you may be asking why does everything look so good?.",
			"e Well, the resources used here were made by really awesome people wiling to share their awesomeness, let's have some applauses for this people!",
			"display message Credits",
			"show e Normal",
			"e Now then, this world is a web based one, you may use any format supported by browsers, that means the basic JPG, PNG and GIF (yeah, animated GIFs) as well as others like SVG!",
			"e I really recommend you using SVG, it will surely enhance the experience for everyone since no matter what resolution their screen is, it will look awesome.",
			"p Screen?... Resolution? what are you talking about?",
			"e Oh! Guess I forgot to tell you we were being displayed inside a screen... think of it as a mirror to our reality and the resolution is just how good we look",
			"jump Topics"
		],

		"Playing":[
			function () {
				storage.playing = true;
				return true;
			},
			"scene Room",
			"show e Normal with fadeIn",
			"e Playing a visual novel made with Monogatari is an awesome experience.",
			"e If it's on the web, you won't need to install anything, just enter the page and play! as simple as that.",
			"e Now, it depends entirely on the developer but the features they can add to your game are infinite! so you will be enjoying a lot of things you've never seen in a VN before.",
			"e Sharing a game with friends is now even easier than before.",
			"jump Topics"
		]
	}
};