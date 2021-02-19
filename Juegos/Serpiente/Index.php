<!DOCTYPE html>
<html>
<head>
	<title> La Vobira</title>
	<link href="css/estilos.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
	<link rel="shortcur icon" href="css/imagenes/logo.png" class="logo" >
</head>
<body>
	<!-- <div class="botonMutear"> <img src="css/imagenes/fruta.jpg" onclick="mutear()"> </div> -->
	<header> <img src="https://fontmeme.com/permalink/200726/c77ea4fead3820a19662f3ec7534f0e1.png" alt="fuentes-pixeladas" border="0"></header>
	<div class="contador"> <p>Frutas comidas</p>  <p id="contador" class="frutasComidas" > </p> </div>
	<div id="emergente"> <img src="https://fontmeme.com/permalink/200726/691f4f60accc7d576c8b2c04bbe878a4.png" alt="fuentes-pixeladas" border="0"></div>
	<div class= "principal" >
		<a onclick="iniciar()" id="botonIniciar"><img src="https://fontmeme.com/permalink/200727/0600ca2540ce66e9c95c9eb71764239d.png" alt="fuentes-pixeladas" border="0"></a>
		<table id="luces">
			<tbody>
				<?php $id = 1; 
		 		for ($i=1; $i <= 22; $i++): ?>
		 			<tr>
		 			<?php for ($j=1; $j <= 40; $j++): ?>
		 				<td id="<?php echo $id ?>"> <?php $id++ ?> </td>
		 			<?php endfor?>
		 			</tr>	
		 		<?php endfor?>
			</tbody>
		</table>
	</div>
</body>
<script src="js/js.js" type="text/javascript"> </script>
</html>