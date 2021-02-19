<?php $cantF = 18;
 $cantC= 35;
 ?>
<!DOCTYPE html>
<html>
<head>
	<title> BuscaMinas</title>
	<link href="css/estilos.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class= "principal" >
		<table>
			<tbody>
				<?php for ($i=0; $i < $cantF; $i++): ?>
		 			<tr>
		 			<?php for ($j=0; $j < $cantC; $j++): ?>
		 				<td id="<?php echo $i * $cantC + $j ?>" onmousedown="buscarMina(<?php echo $i . "," . $j ?>, event)" oncontextmenu="return false;"> </td>
		 			<?php endfor?>
		 			</tr>	
		 		<?php endfor?>
			</tbody>
		</table>
	</div>
</body>
<script src="js/js.js" type="text/javascript"> </script>
</html>