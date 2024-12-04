const button = document.getElementById("button");
const text = document.getElementById("h1");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const message = document.getElementById("message");




button.addEventListener ("click" , function (){

    

   

    
    const random1 = Math.floor(Math.random() * 6 +1) ;
    const random2 = Math.floor(Math.random() * 6+ 1) ;


    
    player1.setAttribute("src" , ` dice-${random1}.png `);
    player2.setAttribute("src" , ` dice-${random2}.png `);

    if(random1 < random2){
        message.innerText = "birinchi o`yinchi g`olib🤩";
    } else if(random2 < random1) {
        message.innerText = "ikkinchi o`yinchi g`olib🤩";
    }else if (random1 === random2){
        message.innerText = "Durrang🤗";
    }


    




   

    
    

});
