/*
Nome dos integrantes do grupo: 
Danielle, Giovanna, Guilherme, Luis, Matheus Sanches
Turma TDSG
Toda logica foi feita em JS tirando validação de preenchimento de campos, feito em HTML
Antes das linhas de codigo existem comantarios documentando sobre o que foi feito no projeto
*/

const listUser = [
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

// validação de login com integrantes do grupo ja adicionados ao cadastro
function validar()
{
    const inputUsuario = document.getElementById("idTxtUsuarioLogin").value;
    const inputSenha = document.getElementById("idTxtSenhaLogin").value;
    const exist = listUser.find(x => x.user == inputUsuario && x.password == inputSenha)

    if(exist)
    {
        alert("Login!!")
        window.location= './html/portal.html';    
    }
    else
    {
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
            alert('Já existe um usuario com esse nome.');
        }
        else
        {
            const user = { user: inputUser, password: inputPassword };
            listUser.push(user);
            
            alert(`Usuário ${user.user} foi cadastrado com sucesso.`);
            this.showListUsers();
        }
    }
}

function showListUsers()
{
    const listUserDiv = document.getElementById('list-users');
    listUserDiv.classList.add('show-list');

    for (const item of listUser)
    {
        const element = document.createElement("p");
        element.append(item.user);
        listUserDiv.appendChild(element);
    }
}

function talkUs()
{
    const subject = document.getElementById('idTxtAssuntoFalar').value;
    const firstName = document.getElementById('idTxtNomeFalar').value;
    const email = document.getElementById('idTxtEmail').value;
    const comments = document.getElementById('idTxtComentario').value;

    if(subject == "" || firstName == "" || comments == "")
    {
        alert('Todos os campos sao obrigatorios, com exceção do email!')
    }
    else
    {
        alert('Todos os campos obrigaórios foram preenchidos!')
        window.location = "../html/portal.html"
    }
}
