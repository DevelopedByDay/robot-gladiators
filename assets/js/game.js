var playerName = window.prompt("What is your robot's name?");
var palyerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    enemyHealth = enemyHealth - playerAttack;

    
    console.log (
        playerName + "attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaning."
    )

    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    palyerHealth = palyerHealth - enemyAttack;

    console.log (
        enemyName + "attacked" + playerName + "." + playerName + " now has " + palyerHealth + " health remaning."    
    )

    if (palyerHealth <=0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + palyerHealth + " health left.");
    }
    
}

fight();