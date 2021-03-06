<?php

# page default 
$default = 'pages/Home.php';

# caminho raiz do conjunto de documentos
//$base = $_SERVER['DOCUMENT_ROOT/'];
$base = "";

# lista de todas as páginas do site + o id que será chamado
$pages = array(
    'Home' => 'pages/Home.php',
    'Inscricao' => 'pages/Inscricao.php',
    'Votacao' => 'pages/Votacao.php',
    'Votacao-Confirm' => 'pages/Votacao-Confirm.php',
    'Edicoes' => 'pages/Edicoes.php'
);

// antes era: if (array_key_exists($_GET['page'], $pages)) {
if (isset($_GET['page'], $pages)) {
    foreach ($pages as $pageid => $pagename) {
        if ($_GET['page'] == $pageid && file_exists($base . $pagename)) {
            include $base . $pagename;
        }
    } // end foreach
} else {
    /* Se a página não está listada em $ pages, ou não há page = pedido mostrar a página padrão */
    if (file_exists($base . $default))
        include $base . $default;
}
?>