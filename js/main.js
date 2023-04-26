let startScreen = document.getElementById("startScreen");
let chooseChar = document.getElementById("chooseChar");
let startButton = document.getElementById("startButton");
let exitButton = document.getElementById("exitButton");
let leftDiv = document.getElementById("leftDiv");
let rightDiv = document.getElementById("rightDiv");
let welcomePage = document.getElementById("welcomePage");
let textRoom1 = document.getElementById("textRoom1");
let welcomeLeft = document.getElementById("welcomeLeft");
let welcomeRight = document.getElementById("welcomeRight");
let mountainLeft = document.getElementById("fightScreenMountain");
let forestLeft = document.getElementById("forestLeft");
let cityRight = document.getElementById("cityRight");
let cntafButton = document.getElementById("myButton");
let cntafButtonGolem = document.getElementById("myButtonGolem");
let forwardWay = document.getElementById("forwardWay");
let splitAfterForward = document.getElementById("splitAfterForward");
let pirateCityLeft = document.getElementById("pirateCityLeft");
let seaRight = document.getElementById("seaRight");
let splitAfLava = document.getElementById("splitAfLava");

let snowRight = document.getElementById("snowRight");
let splitLeft = document.getElementById("splitLeft");

let winScreenFull = document.getElementById("winScreenFull")
// ! obrázky pro souboj
let imgFight = document.getElementById("imgFight");
let imgPlayer = document.getElementById("imgPlayer");
let enemyName = document.getElementById("enemyName");

// ! Enemies
imgFight.src = "../img/characters/bear.png";
// ! Souboj
let attackButton = document.getElementById("attack");
let dodgeButton = document.getElementById("dodge");
let fightScreen = document.getElementById("fightScreen");
let winScreen = document.getElementById("winScreen");
let winScreenGolem = document.getElementById("winScreenGolem");
let loseScreen = document.getElementById("loseScreen");
let restartButton = document.getElementById("restart");
let playerBar = document.getElementById("playerBar");
let enemyBar = document.getElementById("enemyBar");

const writeText = (id ,text) =>{
  let i = 0;
  document.getElementById(id).innerHTML = "";
  const timer = setInterval(function() {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, 60);
}


// ? Přepínání stránek
//! Úvod
const startGame = () => {
  startScreen.style.display = "none";
  chooseChar.style.display = "flex";
  writeText("textChoose","Vyber si prosím hrdinu");
};
startButton.onclick = startGame;

const gameEnd = () => {
  close();
};
exitButton.onclick = gameEnd;

let help;

const leftDivClick = () => {
  help = 1;
  console.log(help)
  imgPlayer.src = "../img/characters/warrior.png"
  player.attack = 10;
  player.health = 300;
  player.maxHealth = 300;
  player.dodge = 0.9;
  chooseChar.style.display = "none";
  writeText("textRoom1","Vítej hrdino. Nacházíš se dračím doupěti vyber si prosím svou cestu kterou se vydáš");
  welcomePage.style.display = "flex";
};
leftDiv.onclick = leftDivClick;

const rightDivClick = () => {
  imgPlayer.src = "../img/characters/mage.png"
  player.attack = 20;
  player.health = 100;
  player.maxHealth = 100;
  player.dodge = 0.6;
  chooseChar.style.display = "none";
  writeText("textRoom1","Vítej hrdino. Nacházíš se dračím doupěti vyber si prosím svou cestu kterou se vydáš");
  welcomePage.style.display = "flex";
};
rightDiv.onclick = rightDivClick;


//? vybírané cesty
// ! levá cesta na hory
const wLeft = () => {
  restoreHpBar();
  startHp();
  writeText("textFight","Ajéjé cestou přes hory jsi narazil na medvěda!");
  enemyName.innerText = "Medvěd";
  imgFight.src = "../img/characters/bear.png";
  welcomePage.style.display = "none";
  fightScreen.style.display = "flex";
  console.log("left");
};
welcomeLeft.onclick = wLeft;

// ! Pravá cesta na rozcestí
const wRight = () => {
  writeText("textSplit","Jsi na rozcestí vyber si cestu");
  welcomePage.style.display = "none";
  splitRight.style.display = "flex";
};
welcomeRight.onclick = wRight;

const continueAf = () => {
  // ! rovná cesta na lávové jezero
  writeText("textForward","Zde vede pouze jedna cesta");
  winScreen.style.display = "none";
  forwardWay.style.display = "flex";
};
cntafButton.onclick = continueAf;

//!rozcesti
const splitAfGolem = () =>{
  winScreenGolem.style.display = "none";
  //! rozcestí mezi (rozcestim) a zimou
  writeText("textRoomWork","Dostal ses na rozcestí vyber si další cestu");
  splitAfLava.style.display = "flex";
}
cntafButtonGolem.onclick = splitAfGolem;

const pirateSea = () =>{
  splitAfLava.style.display = "none";
  //! rozcestí mezi lodí a mořem
  writeText("pirateSea","Dostal ses na rozcestí vyber si další cestu");
  splitAfterForward.style.display = "flex";
}
splitLeft.onclick = pirateSea;


// ! souboj
const wForest = () => {
  restoreHpBar();
  startHp();
  writeText("textFight", "Pozor goblin !")
  enemyName.innerText = "Goblin";
  imgFight.src = "../img/characters/goblin.png";
  splitRight.style.display = "none";
  fightScreen.style.display = "flex";
};
forestLeft.onclick = wForest;


// ! souboj
const wCity = () => {
  restoreHpBar();
  startHp();
  writeText("textFight", "Narazil jsi na strážce tohoto města")
  enemyName.innerText = "Strážce";
  imgFight.src = "../img/characters/guard.png";
  splitRight.style.display = "none";
  fightScreen.style.display = "flex";
};
cityRight.onclick = wCity;


// ! souboj
const fireRiver = () => {
  restoreHpBar();
  startHp();
  writeText("textFight", "Narazil jsi na magma Golema")
  enemyName.innerText = "Magma Golem";
  imgFight.src = "../img/characters/magmaGolem.png";
  forwardWay.style.display = "none";
  splitAfterForward.style.display = "none";
  fightScreen.style.display = "flex";
};
forwardWay.onclick = fireRiver;



const snowFight = () =>{
  restoreHpBar();
  startHp();
  writeText("textFight", "Pozor sněžný golem")
  enemyName.innerText = "Sněžný golem";
  imgFight.src = "../img/characters/snowGolem.png";
  splitAfLava.style.display = "none";
  fightScreen.style.display = "flex";
}
snowRight.onclick = snowFight;


// ! souboj
const fightPirate = () => {
  restoreHpBar();
  startHp();
  writeText("textFight", "Narazil jsi na piráta")
  enemyName.innerText = "Pirát";
  imgFight.src = "../img/characters/pirate.png";
  splitAfterForward.style.display = "none";
  fightScreen.style.display = "flex";
};
pirateCityLeft.onclick = fightPirate;


// ! souboj
const fightSea = () => {
  restoreHpBar();
  startHp();
  writeText("textFight", "Když jsi se šel vykoupat zahlédl tě vodní element a stáhl tě do vody");
  enemyName.innerText = "Vodní element";
  imgFight.src = "../img/characters/waterElement.png";
  splitAfterForward.style.display = "none";
  fightScreen.style.display = "flex";
};
seaRight.onclick = fightSea;


// ! Souboj
let player = {
  name: "Hráč",
  health: 100,
  maxHealth: 100,
  attack: 10,
  dodge: 0.5,
  critic: 0.2
};

let enemy = {
  name: "Medvěd",
  health: 100,
  maxHealth: 100,
  attack: 10,
  critic: 0.4
};

// ! Hráč útočí
const attackPlayer = () => {
  //! critic
  let chance = Math.round(Math.random() * 10) / 10;
  if(chance<=player.critic){
  let damage = player.attack;
  enemy.health -= damage*3;
  console.log("critic!")
  } else{
  //! normal attack
  let damage = player.attack;
  enemy.health -= damage;
  console.log("normal attack")
  }
  document.getElementById("enemyHealth").innerHTML = enemy.health;
  updateHealthBar();
  if (checkGameOver()) {
    return;
  }
  setTimeout(attackEnemy);
};
attackButton.onclick = attackPlayer;

// ! Hráč se vyhýbá
const dodgePlayer = () => {
  let dodgeChance = player.dodge;
  if (Math.random() < dodgeChance) {
   // console.log(player.name + " se vyhnul útoku!");
  } else {
    let damage = enemy.attack;
    player.health -= damage;
    document.getElementById("playerHealth").innerHTML = player.health;
    document.getElementById("playerHealth").style.width = ""
    updateHealthBar();
    if (checkGameOver()) {
      return;
    }
  }
};
dodgeButton.onclick = dodgePlayer;

// ! nepřítel utočí
const attackEnemy = () => {
  let chance = Math.round(Math.random() * 10) / 10;
  if(chance<=enemy.critic){
    let damage = enemy.attack;
    player.health -= damage*3;
    console.log("enemy critic!")
  }else{
    let damage = enemy.attack;
    player.health -= damage;
    console.log("enemy normal attack")
  }
  player.health === document.getElementById("playerHealth").style.width == 100 + "%";
  document.getElementById("playerHealth").innerHTML = player.health;
  updateHealthBar();
  if (checkGameOver()) {
    return;
  }
};

let temp = 0;

const checkGameOver = () => {
  if (player.health <= 0) {
    console.log(
      "Bohužel, " + player.name + " byl poražen a " + enemy.name + " vyhrál bitvu."
    );
    fightScreen.style.display = "none";
    loseScreen.style.display = "block";
    return true;
  }

  if (enemy.health <= 0 && temp == 0) {
    temp++
    fightScreen.style.display = "none";
    winScreen.style.display = "block";
    lvlUp();
    console.log("Gratulace! " + player.name + " vyhrál bitvu!");
    return true;
  }
  if (enemy.health <= 0 && temp == 1 ){
    temp++;
    fightScreen.style.display = "none";
    winScreenGolem.style.display = "block";
    lvlUp();
    return true;
  }
  if(enemy.health <= 0 && temp == 2){
    fightScreen.style.display = "none";
    writeText("final", "Gratuluji dohrál jsi toto dračí doupě, snad se ti líbilo ;)");
    winScreenFull.style.display ="block";
    return true;
  }

  return false;
};

const lvlUp = () =>{
  if(help == 1){
  enemy.maxHealth+=50;
  enemy.attack+=10;
  player.maxHealth +=10;
  player.attack+=5;
  } else{
  enemy.maxHealth+=15;
  enemy.attack+=10;
  player.maxHealth +=20;
  player.attack+=5;
  }
}

const updateHealthBar = () =>{
  const percentPlayer = (player.health / player.maxHealth) * 100;
  document.getElementById("playerBar").style.width = `${percentPlayer}` + "%";
  const percentEnemy = (enemy.health / enemy.maxHealth) * 100;
  document.getElementById("enemyBar").style.width = `${percentEnemy}` + "%";
}

const restoreHpBar = () =>{
  player.health = player.maxHealth;
  enemy.health = enemy.maxHealth;
  document.getElementById("playerHealth").innerHTML = player.health;
  document.getElementById("enemyHealth").innerHTML = enemy.health;
  document.getElementById("playerBar").style.width = "" + player.health + "%";
  document.getElementById("enemyBar").style.width = "" + enemy.health + "%";
}

const startHp = () =>{
  document.getElementById("enemyHealth").innerHTML = enemy.health;
  document.getElementById("playerHealth").innerHTML = player.health;
}


const restart = () => {
  restoreHpBar();
  fightScreen.style.display = "flex";
  loseScreen.style.display = "none";
};
restartButton.onclick = restart;
