// Pagina JavaScript referente ao cadastro de novo usuario
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

function creatUser()
{
    inputUser = document.getElementById('idTxtNome');
    inputPassword = document.getElementById('idTxtSenha');

    this.user = inputUser;
    this.password = inputPassword;

}