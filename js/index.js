// Pagina JavaScript referente ao login
function validar(){
    var inputUsuario = document.getElementById("idTxtUsuario").value;
    var inputSenha = document.getElementById("idTxtSenha").value;
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
        window.location = "novoCadastro.html";
        
        
    }else{
        alert("Dados não Cadastrados");
      
        
    }
    
}