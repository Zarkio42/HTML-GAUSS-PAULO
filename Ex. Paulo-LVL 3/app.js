var nome = document.getElementById("username_").innerHTML;
var email = document.getElementById("email_").innerHTML;
var endereco = document.getElementById("rua_").innerHTML;

function sd(){
if(nome !== "" && email !== "" && endereco !== "") 
{
    alert("Seus dados foram salvos com sucesso!")
}

else{
    alert("Campos vazios!")
}
}
