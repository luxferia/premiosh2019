<article class="content-wrapper bg-interna">
	<div class="container">
		<header class="">
			<h1 class="content-title display-1 text-center">Inscrições</h1>
		</header>
		
		<div class="row justify-content-center">
			<div class="col-lg-10">
				<p class="text-center mb-5">Leia <a href="#">aqui</a> o regulamento da inscrição e preencha o formulário abaixo.</p>

				<div class="card form-wrapper align-items-center py-4">
					<div class="col-lg-10 card-body">
						<form class="inscricao-form" action="">

							<div class="form-group">
								<label for="inscricao-categoria">Categoria</label>
								<select class="form-control" id="inscricao-categoria">
									<option>Selecione</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

							<div class="form-group">
								<label for="inscricao-produtora">Produtora</label>
								<input type="text" class="form-control" id="inscricao-produtora">
							</div>

							<div class="form-group">
								<label for="inscricao-filme">Nome do filme</label>
								<input type="text" class="form-control" id="inscricao-filme">
							</div>

							<div class="form-group">
								<label for="inscricao-elenco">Elenco</label>
								<input type="text" class="form-control" id="inscricao-elenco">
							</div>

							<div class="text-center"><button class="btn btn-danger" type="submit">Concluir</button></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>

<?php include('_section-faq.php'); ?>