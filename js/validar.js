var listUser = [];

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


function createUser()
{
    console.log("Guilherme Nunes")
    inputUser = document.getElementById('idTxtNomeCadastro').value;
    inputPassword = document.getElementById('idTxtSenhaCadastro').value;
    console.log(inputUser)
    console.log(inputPassword)
}
