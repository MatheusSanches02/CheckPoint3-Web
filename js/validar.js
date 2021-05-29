var listUser = [
    {
        user: "Giovanna",
        password: 87019
    },
    {
        user: "Matheus",
        password: 87426
    },
    {
        user: "Guilherme",
        password: 86614
    },
    {
        user: "Danielle",
        password: 88913
    },
    {
        user: "Luis",
        password: 88360
    }
];

// validaão de login com integrantes do grupo ja adicionados ao cadastro
function validar(){
    var inputUsuario = document.getElementById("idTxtUsuarioLogin").value;
    var inputSenha = document.getElementById("idTxtSenhaLogin").value;
    const exist = listUser.find(x => x.user == inputUsuario && x.password == inputSenha)

    if(exist){
        alert("Login!!")
        window.location= './html/novoCadastro.html';
        
    }else{
        alert("Dados não Cadastrados");
        
    }
    
}

// realiza o cadastro de usuario 
function createUser()
{
    inputUser = document.getElementById('idTxtNomeCadastro').value;
    inputPassword = document.getElementById('idTxtSenhaCadastro').value;
    if(inputUser != "" && inputPassword != "")
    {
        const exist = listUser.find(x => x.user == inputUser);
        if(exist)
        {
            console.log('Cara ja existe um usuario com esse nome')
        }
        else
        {
            listUser.push({user:inputUser,password:inputPassword});
            console.log(listUser)
        }
        
    }
}

// validação de todos os campos na pagina fale conosco
// Assunto
// Seu Nome
// Seu email
// Comentario
function talkUs()
{
    const subject = document.getElementById('idTxtAssuntoFalar').value;
    const firstName = document.getElementById('idTxtNomeFalar').value;
    const email = document.getElementById('idTxtEmail').value;
    const comments = document.getElementById('idTxtComentario').value;

    if(subject == "" || firstName == "" || email == "" || comments == "")
    {
        alert('Todos os campos sao obrigatorios!')
    }
    else
    {
        alert('Todos os campos foram preenchidos!')
        window.location = "../html/novoCadastro.html"
    }
}
