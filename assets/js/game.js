var playerName = window.prompt("What is your robot's name?");
var palyerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

     // Log a resulting message to the console so we know that it worked.
    console.log (
        playerName + "attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaning."
    )
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    palyerHealth = palyerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log (
        enemyName + "attacked" + playerName + "." + playerName + " now has " + palyerHealth + " health remaning."
    )
}

fight();