    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myText.innerHTML = " puntje puntje puntje..."
        myImage.src = "https://www.marketingtribune.nl/b2b/weblog/2020/03/[column]-reset-je-merk31_0/64480926_l.jpg"
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let woord4 = Extra1[index];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Ik", "Jij", "Wij"];
    const werkwoord = ["speel", "speelt", "spelen"];
    const restwoord = ["veel", "veel", "veel"];
    const Extra1 = ["GTA","GTA","GTA"];
        
    let plaatjes = ["https://www.invader.be/wp-content/uploads/2020/05/naturalvision-GTA-5-640x450.jpg", "https://www.gewoonvoorhem.nl/app/uploads/2020/05/gta-5-pc.jpg", "https://www.xgn.nl/images/articles/2016/201606/_970x545_crop_center-center_82_line/gta-5-cheats-op-youtube-uploaden-betekent-wraak-van-rockstar-93850.jpg"]
    let arrayLength = onderwerp.length;
