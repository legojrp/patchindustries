<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <?php 
    if (isset($_COOKIE["player_id"])) {
        require "./decision.php";
    }
    else {
        echo "<h1>Not Logged In</h1>";
    echo "<a href=\"auth/login.php\">Log In</a>";
    echo "<br>";
    echo "<a href=\"auth/signup.php\">Sign Up</a>";

    }
    ?>

    <h2>How to play:</h2>
    <ol>
        <li>Have a person host a game.</li>
        <li>Have 1 or more join.</li>
        <li>Once you start, click on cards to move them out of your hand.</li>
        <li>Once you have 4 of the same card in your hand, click a spoon.</li>
        <li>That will kick a player out and you can move on to the next round automatically.</li>
        <li>Once one wins, restart!</li>
    </ol>


</body>
</html>