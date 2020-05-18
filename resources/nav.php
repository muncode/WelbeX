<?
for ($i = 1; $i <= ceil(mysqli_num_rows($result) / 3); $i++){
	echo "<a onclick=pageOn(" . $i . ")> " . $i . " </a>";
	}
?>