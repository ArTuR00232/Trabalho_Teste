
//var id = 0;
//<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
function cadastra()
{
    let username =  document.getElementById("input-nome").value
    let password = document.getElementById("input-senha").value
    let age = document.getElementById("input-idade").value
    let ID =  localStorage.length +1;
    let outra = criausuario(ID,username,password, age)
    dados = JSON.stringify(outra)
    localStorage.setItem(ID,dados)
    alert("usuario criado")
    window.location.href = ("login.html")
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
    let idade = document.getElementById("input-idade").value
    let username = document.getElementById("input-nome").value
    let senha = document.getElementById("input-senha").value
    let confirma = document.getElementById("input-confirm").value
     if(username!="")
     {
        if(idade >= 18)
        {
        
            if(senha!="" && senha==confirma)
            {
                cadastra()
            }
            else
            {
                alert("As senhas não são compatíveis")
            }
        }
        else
        {
            alert("Você deve ser maior de 18 para se cadastrar")
        }
     }
     else
     {
         alert("È necessário seu nome")
     }
}

function limpar()
{
   localStorage.clear()
   window.location.href = ("index.html")
}
    