// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var palyerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    
    while(enemyHealth > 0 && palyerHealth > 0) {
        

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 10;
            break;
        }
    }    
       
        enemyHealth = enemyHealth - playerAttack;

    
        console.log (
            playerName + "attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaning."
        )
    
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
            break;
            // shop after fight
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        palyerHealth = palyerHealth - enemyAttack;

        console.log (
        enemyName + "attacked" + playerName + "." + playerName + " now has " + palyerHealth + " health remaning."    
        )

        if (palyerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
        }
        else {
        window.alert(playerName + " still has " + palyerHealth + " health left.");
        }

    }  
};

var endGame = function() {
    
    if (palyerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");

    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var startGame = function() {
    palyerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


    for (var i = 0; i < enemyNames.length; i++) {
        if (palyerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
    
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(enemyNames[i]);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

startGame();



