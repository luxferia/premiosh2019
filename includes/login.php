<?php
session_start();

$_SESSION['logged'] = 1 ;
?>
<script>
document.location.replace( '<?php print $_POST['page'] ; ?>' ) ; 	
</script>