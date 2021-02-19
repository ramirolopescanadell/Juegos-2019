<html>
<head>
	<title> 2048 </title>
	<link href="css/css.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="div-canvas">
	<!--	<canvas id="canvas" width="400px" height="400px"> -->
		<table><tbody>
				<?php for ($i=0; $i <= 3; $i++): ?>
		 			<tr>
		 			<?php for ($j=0; $j <= 3; $j++): ?>
		 				<td id="<?php echo $i * 4 + $j ?>"> </td>
		 			<?php endfor?>
		 			</tr>	
		 		<?php endfor?>
			</tbody></table>
		<!--</canvas> -->
	</div>
</body>
<script src="js/js.js" type="text/javascript"> </script>
</html>