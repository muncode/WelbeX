<?
$link = mysqli_connect("127.0.0.1", "root", "", "sap");
$sql = "SELECT * FROM sap";
$result = mysqli_query($link, $sql);
?>