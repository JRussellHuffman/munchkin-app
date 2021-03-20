<!DOCTYPE html>
<html>
<head>
<title>Munchkin Counter Web App</title>
<meta charset="UTF-8">
<meta name="description" content="A simple Munchkin counter web app">
<meta name="keywords" content="munchkin, web app, counter">
<meta name="author" content="Joel Russell Huffman">
<meta name="viewport" content="width=400, user-scalable=no">

<link rel="stylesheet" type="text/css" href="css/style.css">
<link href='http://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700,900' rel='stylesheet' type='text/css'>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="js/interaction.js"></script>
<!-- <script type="text/javascript" src="input.js"></script> -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60740550-1', 'auto');
  ga('send', 'pageview');

</script>
</head>

<body>
<!-- bring in players -->
<div class="players">
<?php
	include "players/player0.php";
	include "players/player1.php";
	include "players/player2.php";
	include "players/player3.php";
	include "players/player4.php";
	include "players/player5.php";
?>
<!-- blank divs to add players -->
	<div class="addNewPlayer" id="add0">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
	<div class="addNewPlayer" id="add1">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
	<div class="addNewPlayer" id="add2">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
	<div class="addNewPlayer" id="add3">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
	<div class="addNewPlayer" id="add4">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
	<div class="addNewPlayer" id="add5">
		<p class="addChar">Add Player</p>
		<p class="addSign">+</p>
	</div>
</div>
<script type="text/javascript" src="js/input.js"></script>
</body>

</html>