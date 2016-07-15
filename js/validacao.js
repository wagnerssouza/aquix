function enviardados(){
//campo nome
if(document.dados.nome.value=="" || document.dados.nome.value.length < 4){
	alert( "O campo nome deve conter no mínimo 4 caracteres, preencha-o corretamente" );
	document.dados.nome.focus();
	return false;
}

// campo email
if( document.dados.email.value=="" || document.dados.email.value.indexOf('@')==-1 || document.dados.email.value.indexOf('.')==-1 ){
	alert( "Preencha campo E-MAIL corretamente!" );
	document.dados.email.focus();
	return false;
}

// campo assunto
if (document.dados.tel.value==""){
	alert( "Preencha com o telefone" );	
	document.dados.tel.focus();
	return false;
}

if (document.dados.tel.value.length < 8 ){
	alert( "Mínimo 8 caracteres" );
	document.dados.tel.focus();
	return false;
}

// campo mensagem
if (document.dados.mensagem.value==""){
	alert( "Preencha o campo MENSAGEM!" );
	document.dados.mensagem.focus();
	return false;
}

/*
if (document.dados.mensagem.value.length < 20 ){
	alert( "É necessário preencher o campo MENSAGEM com mais de 20 caracteres!" );
	document.dados.mensagem.focus();
	return false;
}*/
return true;
}