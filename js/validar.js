
var user;
var password;

/*


function validar()
{
    inputUser = document.getElementById('');
    inputPassword = document.getElementById('');
    if(inputUser = user && inputPassword == password)
    {
        window.location = "faleConosco.html";
    }
    else
    {
        alert("Usuario não cadastrado!");
    }
}
*/
function validar(){
    var inputUsuario = document.getElementById("idTxtUsuarioLogin").value;
    var inputSenha = document.getElementById("idTxtSenhaLogin").value;
    var valid = false;

    var usuario = ["Giovanna","Matheus","Guilherme","Danielle","Luis"];
    var senha = ["87019","87426","86614","88913","88360"];
 
    for(var i = 0; i< usuario.length; i++){
        if((inputUsuario == usuario[i]) && (inputSenha == senha[i])){
           valid = true;
        }
    }

    if(valid){
        alert("Login!!")
        window.location= './html/novoCadastro.html';
        
    }else{
        alert("Dados não Cadastrados");
        
    }
    
}

function creatUser()
{
    inputUser = document.getElementById('idTxtNome');
    inputPassword = document.getElementById('idTxtSenha');

    this.user = inputUser;
    this.password = inputPassword;

}