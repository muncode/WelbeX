<?
while ($row = mysqli_fetch_array($result)){
	echo "<tr>
	<td>" . $row['date'] . "</td>
	<td>" . $row['name'] . "</td>
	<td>" . $row['col'] . "</td>
	<td>" . $row['distance'] . "</td>
	</tr>";
	}
?>