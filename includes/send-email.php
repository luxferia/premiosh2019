<?php 
     
$email_from = "stephanne.leao@webteria.com.br";     
 
if( PATH_SEPARATOR ==';'){ $quebra_linha="\r\n";
 
} elseif (PATH_SEPARATOR==':'){ $quebra_linha="\n";
 
} elseif ( PATH_SEPARATOR!=';' and PATH_SEPARATOR!=':' )  {echo ('Esse script não funcionará corretamente neste servidor, a função PATH_SEPARATOR não retornou o parâmetro esperado.');
 
}
 
//pego os dados enviados pelo formulário 
$name = ucwords( $_POST[ 'contact-name' ] );
$subject = "[Corretor] Contato de $name | Vila Bella";
$email = $_POST[ 'contact-email' ];
$phone = $_POST[ 'contact-phone' ];
$uf = $_POST[ 'contact-uf' ];
$city = $_POST[ 'contact-city' ];
$message = $_POST[ 'contact-message' ];

$emailto = 'stephanne.leao@webteria.com.br';

$email_message .= "
	<html> 
	<head> 
	</head>
	<body>
	<ul>
		<li><strong>Nome:</strong> $name</li>
		<li><strong>Telefone:</strong> $phone</li>
		<li><strong>Email:</strong> $email</li>
		<li><strong>Cidade:</strong> $city, $uf</li>
		<li><strong>Mensagem:</strong> $message</li>
	</ul>

	<p style=\"font-size:small\"><em>Dados enviados pelo formulário de contato \"fale com o corretor\" no site do Vila Bella.</em></p>
	</body>
	</html>
" . $quebra_linha . ""; 

$headers = "MIME-Version: 1.1" . $quebra_linha . ""; 
$headers .= "Content-Type: text/html;charset:utf-8" . $quebra_linha . ""; 
$headers .= "From: $email_from " . $quebra_linha . "";
$headers .= "Return-Path: $email_from " . $quebra_linha . ""; 
$headers .= "Reply-To:  $email_from " . $quebra_linha . ""; // reply-to
 
//envia o email sem anexo 
mail($emailto,$subject,$email_message, $headers, "-r". $email_from);

/*
//abrindo o banco
//Template de conexão 
//$con = mysqli_connect( "HOST", "USUÁRIO","SENHA", "NOME_DO_BANCO_DE_DADOS") ;
//$con->set_charset('utf8');

$con = mysqli_connect( "external-db.s147634.gridserver.com", "db147634","MySQLW3bt3r14__", "db147634_fgn" ) ;
$con->set_charset('utf8');

// Check connection
if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//salvando no banco
mysqli_query( $con, "INSERT INTO inscricao ( `name`, `phone`, `email`, `course`, `created` ) VALUES ('".$name."', '".$phone."', '".$email."', '".$course."', NOW() )");

//fechando o banco
mysqli_close($con);
*/
?>
