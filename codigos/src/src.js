function cadastra()
{
    let username =  document.getElementById("input-nome").value
    let password = document.getElementById("input-senha").value
    let age = document.getElementById("input-idade").value
    let ID =  localStorage.length +1;
    let outra = criausuario(ID,username,password, age)
    dados = JSON.stringify(outra)
    localStorage.setItem(ID,dados)
    document.getElementById("redireciona").addEventListener("click",window.location.href = ("login.html"))
}

function criausuario(id,username, password,age)
{
    var objeto = {}
    objeto.id = id;
    objeto.username = username;
    objeto.password = password;
    objeto.age = age;


    console.log(objeto)
    return objeto;
}
  
function checar()
{
    let username = document.getElementById("input-nome").value
    let idade = document.getElementById("input-idade").value
    let senha = document.getElementById("input-senha").value
    let confirma = document.getElementById("input-confirm").value
     if(username!="")
     {
        if(idade >= 18)
        {
            if(senha!="")
            {
                if(senha==confirma)
                    cadastra()
                else
                    alert("As senhas devem ser compatíveis")
            }
            else
            {
                alert("É necessário sua senha para se cadastrar")
            }
        }
        else{
            alert("Você deve ser maior de 18 para se cadastrar")
        }
        }
     else
     {
         alert("É necessário seu nome para se cadastrar")
     }
}
function limpar()
{
   localStorage.clear()
   window.location.href = ("index.html")
}

function rota()
{
    document.getElementById("resposta").innerHTML = "usuario criado, redirecionando... "
}