//Questions from: https://www.funtrivia.com/playquiz/quiz89285a3b160.html
const question =  ["What is the science of brewing beer called?",
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
const answers = [["Zymurgy","Zorology","Zoophagy","Zumology"],
                ["6.88","7.88","5.88","4.88"],
                ["Weihenstephan Brewery","Jacob Leinenkugel Brewery","Hudepohl-Schoenling Brewery","F.X. Matt Brewery"],
                ["Bass Ale","Budweiser","Heineken","Pabst Blue Ribbon"],
                ["Montreal","Milwaukee","New York City","Vancouver"],
                ["Philadelphia","Chicago","New York","Milwaukee"],
                ["D.G. Yuengling Brewery","Rolling Rock Brewery","Anheuser-Busch Brewery","Sam Adams Brewery"],
                ["Sam Adams","Bass Ale","Budweiser","Heineken"],
                ["Abita Brewery","Acadian Brewing Co.","American Brewing Co.","Jackson Brewery"],
                ["G. Krueger Brewing Company","Pabst Brewery","Coors Brewery","Anhueser-Busch"],
                ["Harp Lager","Strongbow Cider","Champagne","Bailey's Irish Cream"],
                ["Specific Gravity","Viscosity","Surface Tension","Beer Degassing"],
                ["Kronenbourg 1664","Curim Gold","Badger Export Ale","Chimay Blue"],
                ["Brazil","England","Spain","Ireland"],
                ["Babylonian","Chinese","Greeks","Mayans"]

];
   
const coaster ={ name: ["Glass Pinecone","Discarded Prototype","The Pretzel","Holy Spirits"],
                type: ["'Herb'","Trash","Sourdough","Deity"],
                traits:[["3x Points, Fragile 🍺"],["2x Points, 2x Speed"],["Too Bready"],["Scores⬆ and Speed⬆ on correct answers"]]
    
}




let game = {
    score: 0,
    incorrect:0,
    wins: 0,
    numQuestion: 0,
    orderQuestion: [],
    coaster: {},
    musicToggle: true,
}



console.log(answers);
console.log(question);

var seashanty2 = document.getElementById("myAudio");

$("#questionSelection").hide();


function newGame(params) {
    
    game.musicToggle ? seashanty2.play() : seashanty2.pause();

    $("#coasterSelection").hide();
    $("#questionSelection").show();

}

function newQuestion() {
    ++game.numQuestion;
    $("#coasterName").text(coaster.name[selector]);

}

function updateCoasterDisplay(selector) {
    $("#coasterName").text(coaster.name[selector]);
    $("#coasterType").text(coaster.type[selector]);
    $("#coasterTrait").text(coaster.traits[selector]);

}


/* <h3 class=" font-hd-resp">Name: <span class="coasterName"></span> </h3>
<br>
<h3 class=" font-hd-resp">Type: <span class="coasterType"></span> </h3>
<br>
<h3 class=" font-hd-resp">Trait(s):  <span class="coasterTrait"></span> </h3> */



$("#coasterSelection").on("mouseenter", function (event) {
   

})

$("#mtoggle").on("mouseup", function (event) {
    game.musicToggle = !game.musicToggle
    console.log("doing the do");
    
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
    newGame()  
})

  $("#b2").on("click", function (event) {
    newGame()  
})

  $("#b3").on("click", function (event) {
    newGame()  
})

  $("#b4").on("click", function (event) {
    newGame()  
})
  







