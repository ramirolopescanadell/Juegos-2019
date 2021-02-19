<!DOCTYPE html>
<html>
<head>
	<title> TaTeTi</title>
	<link href="css/css.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="turno" >Turno del <div id="turno"></div>  </div> 
	<div id="fin" class="fin"> </div>
	<table><tbody>
		<?php $id = 0; for ($i=0; $i < 3; $i++): ?>
		 <tr>
		 	<?php for ($j=0; $j < 3; $j++): ?>
		 		<td id="<?php echo $id?>" onclick="ponerSigno(<?php echo $id?>)">  </td>
		 		<?php $id++?>
		 	<?php endfor?>
		  </tr>
		  <?php endfor?>
	</tbody></table>

</body>
<script src="js/js.js" type="text/javascript"> </script>
</html>