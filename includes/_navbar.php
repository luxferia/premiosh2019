<nav class="modal fade main-navbar" id="menu-modal" tabindex="-1" role="dialog" aria-labelledby="Menu principal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <ul id="menu" class="main-menu nav flex-column text-center justify-content-center">
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="index.php?page=Home" title="Início">Início</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=Como-Participar" title="Como Participar">Como Participar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=Regulamento" title="Regulamento">Regulamento</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#" title="Prêmio">Prêmio</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=Faq" title="Perguntas Frequentes">Perguntas Frequentes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=Contato" title="Contato">Contato</a>
                    </li>
                </ul>

                <aside class="social">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><span class="fab fa-facebook fa-lg"></span><span class="sr-only">Facebook</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><span class="fab fa-instagram fa-lg"></span><span class="sr-only">Instagram</span></a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</nav><!-- / .main-navbar -->

<nav class="user-navbar navbar fixed-bottom">
    <div class="container">

        <ul id="user-menu" class="nav justify-content-between w-100">
            
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="modal" data-target="#login-modal"><span class="fas fa-sign-in-alt" aria-hidden="true"></span><span class="d-none d-md-inline-block ml-1"> Fazer Login</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="index.php?page=Cadastro"><span class="fas fa-user" aria-hidden="true"></span><span class="d-none d-md-inline-block ml-1"> Cadastrar-se</span></a>
            </li>

            <li class="nav-item ">
                <a class="nav-link" href="index.php?page=Cadastrar-Cupom"><span class="fas fa-plus-circle" aria-hidden="true"></span><span class="d-none d-md-inline-block ml-1"> Cadastrar Cupom</span></a>
            </li>

            <!-- 
            <li class="nav-item">
                <a class="nav-link" href="#">Topo</a>
            </li> -->
        </ul>
    </div>
</nav>

<div class="modal fade login-modal" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="h3 modal-title">Fazer Login</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="py-2" role="login" action="includes/login.php" method="post">
                    <input type="hidden" name="page" value="../index.php?page=Cadastro">

                    <div class="form-group">
                        <label for="login-email">E-mail</label>
                        <input type="text" id="login-email" class="form-control" placeholder="E-mail">
                    </div> 

                    <div class="form-group">
                        <label for="login-password">Senha</label>
                        <input type="password" id="login-password" class="form-control" placeholder="Senha">
                    </div> 

                    <div class="">
                        <button type="submit" class="btn btn-primary px-4">Entrar</button>
                        <a class="btn btn-sm btn-link" href="senha.php"><span class="fas fa-key mr-1" aria-hidden="true"></span>Recuperar Login / Senha</a>
                    </div>
                </form> 
            </div>
        </div>
    </div>
</div>