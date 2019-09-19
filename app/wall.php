<?php


if (isset($_GET['wall'])) {
$link = $_SERVER['HTTP_HOST']."/".$_GET['wall'];
}
else {
header("location: index.php");
}
?>

<html>
<head>
<meta charset='utf-8'>
<title>The Wall</title>
<link rel='stylesheet' type='text/css' href='style/style.css' />
<script type='text/javascript' src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
<script type='text/javascript' src='js/wschat.js' ></script>
</head>
<body>

<div id='lenta'>

<div class='blocks' id='top'>
<div id='status'>
</div><?="  link for invitation: ".$link."\n"?>
<hr>
</div>
<div class='blocks' id='wall'>
</div>


<div id='writting'>
<form action='' method='POST'>
<div id='inputs'>
<textarea  class='inputs' id='textarea' style='width:37%; height:100px;' rows=5 cols=50 autofocus name='message' ></textarea>
<!-- input class='inputs' type='submit' value='...one more brick' -->
<a class='inputs brickthewall' href='#' onclick='document.forms[0].onsubmit();' >...one more brick</a>
</div>
</form>
</div>


</div>
</body>
</html>
