let player = {
   name: "per : ",
   chip: 200
}
let cards = []
let sum = 0
console.log(sum)
let blachjack = false 
let live = false
let message = " ";
let messageEl = document.getElementById('message-el').innerText
let sumEl = document.getElementById("sum-el").innerText
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent =  player.name+  200 +"$"







function getrandomcards(){
    let max = 13
let min = 0
let random = Math.floor((Math.random() * (max-min) + min ) +1)
console.log(random)
if (random ===1){
    return 11
}else if (random >10   ) {
return 10
}

else{
    return random
}

}


function startame()
{
    
        blachjack = false   
        let live = true
        let firstCard = getrandomcards()
         let sacondCarde = getrandomcards()
       cards.push(firstCard,sacondCarde)
       sum = firstCard + sacondCarde
       console.log(cards)



       if( player.chip>-200)
       {
          rendergame()
       }
    
}


function rendergame(){
if (sum <= 20) {
   live=true
 message = 'do you want to cardnew  '

}else if ( sum === 21 ){
    
    blachjack = true
    message = " you 've  got blackjack "
    cards= []
    sum = 0
    player.chip += 10
    playerEl.textContent = player.name +player.chip + " $ "

} 
else{
  cards= []

  sum = 0
    live = false
    message = 'YOU LOSTE'
    player.chip -= 5
    playerEl.textContent = player.name +player.chip + " $ "

}
 document.getElementById('message-el').innerText = message
document.getElementById("sum-el").innerText ="sum : " + sum
cardsEl.innerText ="cards : " 
for(let i=0 ; i<cards.length ; i += 1 ){
cardsEl.innerText += cards[i] + ' - '

}


}



function newcard()
{
   if (live===true && blachjack === false )
   {
      console.log("drwig new cards")
       let newcard = getrandomcards()
      sum += newcard
       cards.push(newcard)
       rendergame()
     }
}
