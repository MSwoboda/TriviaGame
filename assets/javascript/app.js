//Questions from: https://www.funtrivia.com/playquiz/quiz89285a3b160.html
const question = ["What is the science of brewing beer called?",
  "How many cases of beer are contained in one keg? A case is defined as 24 twelve ounce cans of beer. This is the standard US keg.",
  "What is the oldest brewery in the world?",
  "The very first international trademark was given to a beer company. Which beer maker was awarded this distinction?",
  "Where is the oldest brewery in North America?",
  "What city in the United States has had the most breweries?",
  "What is the oldest brewery in the United States?",
  "What is the first 'foreign' beer to be sold in Germany?",
  "Which brewery is responsible for the beer known as 'Turbo Dog'?",
  "Everyone enjoys popping open that ice cold can of beer. Who was the first American brewery to package their beer in a can?",
  "The Black & Tan is a great beer drink made with a stout beer (such as Guinness) settled on top of another beverage providing the drinker with a drink that is visually appealing. What would be an appropriate mixer to use in a Black & Tan?",
  "The Black & Tan is a great beer drink made with a stout beer (such as Guinness) settled on top of another lighter beer. What scientific principle is the main reason this can happen?",
  "Which of these beers is from France?",
  "The top five nations that brew beer are USA, China, Germany, Japan and what other country?",
  "What ancient people is credited with first having brewed beer?"

];
const answers = [["Zymurgy", "Zorology", "Zoophagy", "Zumology"],
["6.88", "7.88", "5.88", "4.88"],
["Weihenstephan Brewery", "Jacob Leinenkugel Brewery", "Hudepohl-Schoenling Brewery", "F.X. Matt Brewery"],
["Bass Ale", "Budweiser", "Heineken", "Pabst Blue Ribbon"],
["Montreal", "Milwaukee", "New York City", "Vancouver"],
["Philadelphia", "Chicago", "New York", "Milwaukee"],
["D.G. Yuengling Brewery", "Rolling Rock Brewery", "Anheuser-Busch Brewery", "Sam Adams Brewery"],
["Sam Adams", "Bass Ale", "Budweiser", "Heineken"],
["Abita Brewery", "Acadian Brewing Co.", "American Brewing Co.", "Jackson Brewery"],
["G. Krueger Brewing Company", "Pabst Brewery", "Coors Brewery", "Anhueser-Busch"],
["Harp Lager", "Strongbow Cider", "Champagne", "Bailey's Irish Cream"],
["Specific Gravity", "Viscosity", "Surface Tension", "Beer Degassing"],
["Kronenbourg 1664", "Curim Gold", "Badger Export Ale", "Chimay Blue"],
["Brazil", "England", "Spain", "Ireland"],
["Babylonian", "Chinese", "Greeks", "Mayans"]

];

const coaster = {
  name: ["Glass Pinecone", "Discarded Prototype", "The Pretzel", "Holy Spirits"],
  type: ["'Herb'", "Trash", "Sourdough", "Deity"],
  traits: [["3x Points, Fragile 🍺"], ["2x Points, 2x Speed"], ["0.5x Points, 0.5x Speed"], ["Scores⬆ and Speed⬆ on correct answers"]]
  ntrait: [speed:[],
           points:[],
    ,,,]
}



let game = {
  score: 0,
  correctAnswers: 0,
  correctSelection: 0,
  wins: 0,
  numQuestion: 0,
  orderQuestion: [],
  coaster: {},
  musicToggle: false,
  timePerQuestion: 30,
  playbackRate: 1
}

var timerSet = false;
var gameTimer;
var seashanty2 = document.getElementById("myAudio");
var timerVal = 120;
//$("#coasterSelection").hide();

$("#questionSelection").hide();
$("#scoreCard").hide();


function newGame(selector) {
  
  $("#a1").attr('src',$("#b"+selector).attr('src'));
  $("#a2").attr('src',$("#b"+selector).attr('src'));
  $("#a3").attr('src',$("#b"+selector).attr('src'));
  $("#a4").attr('src',$("#b"+selector).attr('src'));

  var order = shuffle(Array.from(Array(15).keys()));

  console.log(order);

  game.orderQuestion = order
  game.numQuestion = 0;

  game.musicToggle ? seashanty2.play() : seashanty2.pause();

  $("#coasterSelection").hide();
  $("#scoreCard").hide();
  $("#questionSelection").show();

  newQuestion()

}


function evalAnswer(selector) {
 // game.correctSelection == selector ? game.score++ : game.score;

clearInterval(gameTimer);
timerSet = false;


  if (game.correctSelection === selector) {

    console.log("#d" +(game.correctSelection+1) );
    
      $("#d" +(game.correctSelection+1) ).addClass("border border-3 border-success rounded");
      game.score++
    } else {
      $("#d" + (selector+1)).addClass("border border-3 border-danger rounded");
      $("#d" + (game.correctSelection+1)).addClass("border border-3 border-success rounded");
    }
    if (game.numQuestion >= 14) {
      endGame();
    } else{
      setTimeout(function(){newQuestion();
        $(".border").removeClass("border border-3 border-danger border-success  border-danger rounded");
        },1000)
    }
}

function newQuestion() {
  timerVal = 120;
  $("#progress-bar").attr("style","width: 120%;")

  if (!timerSet) {
  gameTimer = setInterval(function(){ progressBar() }, 10);
  timerSet = true;
}

  var ansOrder = shuffle(Array.from(Array(4).keys()));

  game.correctSelection =  ansOrder.indexOf(0);

 console.log("correct answer: "+game.correctSelection)

  $("#answer1").text(answers[game.orderQuestion[game.numQuestion]][ansOrder[0]]);
  $("#answer2").text(answers[game.orderQuestion[game.numQuestion]][ansOrder[1]]);
  $("#answer3").text(answers[game.orderQuestion[game.numQuestion]][ansOrder[2]]);
  $("#answer4").text(answers[game.orderQuestion[game.numQuestion]][ansOrder[3]]);

  $("#question").text(question[game.orderQuestion[game.numQuestion++]]);


  if (game.numQuestion >= 14) {
    endGame();
  }
}

function progressBar(params) {
timerVal--;
if ( timerVal<=0) {
  clearInterval(gameTimer);
  timerSet = false;
  timerVal = 100;
  $("#progress-bar").attr("style","width: 100%;")
  setTimeout(1000,newQuestion())
  
} else {
  $("#progress-bar").attr("style",`width: ${timerVal}%;`)
}

}

function updateCoasterDisplay(selector) {
  $("#coasterName").text(coaster.name[selector]);
  $("#coasterType").text(coaster.type[selector]);
  $("#coasterTrait").text(coaster.traits[selector]);

}

function endGame(params) {

  clearInterval(gameTimer);
  timerSet = false;
  $("#coasterSelection").hide();
  $("#questionSelection").hide();
  $("#scoreCard").show();

}


$("#mtoggle").on("mouseup", function (event) {
  game.musicToggle = !game.musicToggle
  game.musicToggle ? seashanty2.play() : seashanty2.pause();

})


//On hover update
$("#b1").on("mouseenter", function (event) {
  updateCoasterDisplay(3);
})
$("#b2").on("mouseenter", function (event) {
  updateCoasterDisplay(2);
})

$("#b3").on("mouseenter", function (event) {
  updateCoasterDisplay(0);
})

$("#b4").on("mouseenter", function (event) {
  updateCoasterDisplay(1)
})

//On click coaster
$("#b1").on("click", function (event) {
  newGame(1)
})

$("#b2").on("click", function (event) {
  newGame(2)
})

$("#b3").on("click", function (event) {
  newGame(3)
})

$("#b4").on("click", function (event) {
  newGame(4)
})


//On click answer
$("#d1").on("click", function (event) {
  evalAnswer(0);
})

$("#d2").on("click", function (event) {
  evalAnswer(1);
})

$("#d3").on("click", function (event) {
  evalAnswer(2);
})

$("#d4").on("click", function (event) {
  evalAnswer(3);
})


$("#newgame").on("click", function (event) {
   game = {
    score: 0,
    correctAnswers: 0,
    correctSelection: 0,
    wins: 0,
    numQuestion: 0,
    orderQuestion: [],
    coaster: {},
    musicToggle: false,
    timePerQuestion: 30,
    playbackRate: 1
  }
  
  var timerSet = false;
  var gameTimer;
  var seashanty2 = document.getElementById("myAudio");
  var timerVal = 120;
  //$("#coasterSelection").hide();
  
  $("#questionSelection").hide();
  $("#scoreCard").hide();
  $("#coasterSelection").show();

})

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

