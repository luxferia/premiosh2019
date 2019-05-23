<?php
session_start();

unset($_SESSION['logged']) ;
?>
<script>
document.location.replace( 'index.php' ) ; 	
</script>