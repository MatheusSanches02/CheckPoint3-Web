/*
Nome dos integrantes do grupo: 
Danielle, Giovanna, Guilherme, Luis, Matheus Sanches
Turma TDSG
Toda logica foi feita em JS tirando validação de preenchimento de campos, feito em HTML
Antes das linhas de codigo existem comantarios documentando sobre o que foi feito no projeto
*/
const listUser = 
[
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
function sign()
{
    const inputUsuario = document.getElementById("idTxtUsuarioLogin");
    const inputSenha = document.getElementById("idTxtSenhaLogin");
    
    // Validando os campos obrigaórios
    const listElements = 
    [
        { element: inputUsuario, errorMessageId: 'message-error-user' },
        { element: inputSenha, errorMessageId: 'message-error-password' },
    ];
    if (this.verifyErrorsRequired(listElements)) return;

    const exist = listUser.find(x => x.user == inputUsuario.value && x.password == inputSenha.value);
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
    inputUser = document.getElementById('idTxtNomeCadastro');
    inputPassword = document.getElementById('idTxtSenhaCadastro');
    
    const listElements = 
    [
        { element: inputUser, errorMessageId: 'message-error-user' },
        { element: inputPassword, errorMessageId: 'message-error-password' },
    ];
    if (this.verifyErrorsRequired(listElements)) return;
    
    const exist = listUser.find(x => x.user == inputUser.value);
    if(exist)
    {
        alert('Já existe um usuario com esse nome.');
    }
    else
    {
        const user = { user: inputUser.value, password: inputPassword.value };
        listUser.push(user);
        
        alert(`Usuário ${user.user} foi cadastrado com sucesso.`);
        this.showListUsers();
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
    const subject = document.getElementById('idTxtAssuntoFalar');
    const firstName = document.getElementById('idTxtNomeFalar');
    const comments = document.getElementById('idTxtComentario');

    // Validando os campos obrigaórios
    const listElements = 
    [
        { element: subject, errorMessageId: 'message-error-subject' },
        { element: firstName, errorMessageId: 'message-error-name' },
        { element: comments, errorMessageId: 'message-error-password' },
    ];
    if (this.verifyErrorsRequired(listElements)) return;

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

function verifyErrorsRequired(_listElements)
{
    let countError = 0;
    for (const item of _listElements)
    {
        if (this.isEmpty(item.element.value))
        {
            this.setErrorToElement(item.element, item.errorMessageId);
            countError = countError + 1;
        }
        else
        {
            this.removeErrorToElement(item.element, item.errorMessageId);
        }
    }

    return countError > 0;
}

function isEmpty(_value)
{
    if (!_value)
    {
        return true;
    }

    return false;
}

function setErrorToElement(_element, _messageErrorId)
{
    _element.classList.add('input-error');
    document.getElementById(_messageErrorId).classList.remove('hide');
}

function removeErrorToElement(_element, _messageErrorId)
{
    _element.classList.remove('input-error');
    document.getElementById(_messageErrorId).classList.add('hide');
}