/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
*/

/*
document.getElementById('hero').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Wizard </h4>
        <img class="avatar" src="images/wizard.png"/>
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container"><div class="dice"> 6 </div></div>
    </div>   
`

document.getElementById('monster').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Orc </h4>
        <img class="avatar" src="images/orc.png"/>
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container"><div class="dice"> 4 </div></div>
    </div>
`
*/

const heroElementId = "hero";
const heroName = "Wizard";
const heroAvatar = "images/wizard.png";
const heroHealth = "60";
const heroDiceRoll = 6;

const monsterElementId = "monster";
const monsterName = "Orc";
const monsterAvatar = "images/orc.png";
const monsterHealth = "10";
const monsterDiceRoll = 4;

function renderCharacter(elementId, name, avatar, health, diceRoll){
  document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
    </div>`;   
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);