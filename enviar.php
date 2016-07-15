<?php



$nome=$_POST[nome];



$email=$_POST[email];



$tel=$_POST[tel];



$mensagem=$_POST[mensagem];







//agora vamos enviar todos esses dados usando a função mail



mail("wagneersantos@gmail.com","$assunto","



Nome: $nome



Email: $email



Telefone: $tel



Mensagem: $mensagem","FROM:$nome<$email>");



echo "<script> alert('Sua mensagem foi enviada com sucesso!'); </script>";



?>

<script>

window.location = 'index.html';
// contact.php

</script>







