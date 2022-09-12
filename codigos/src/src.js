
//var id = 0;
//<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
function cadastra()
{
    let username =  document.getElementById("input-nome").value
    let password = document.getElementById("input-senha").value
    let idade = document.getElementById("input-idade").value
    let ID =  localStorage.length +1;
    let outra = criausuario(ID,username,password, idade)
    dados = JSON.stringify(outra)
    localStorage.setItem(ID,dados)
    alert("usuario criado")
    //window.location.href = ("login.html")
}

function criausuario(id,username, password,idade)
{
    var objeto = {}
    objeto.id = id;
    objeto.username = username;
    objeto.password = password;
    objeto.idade = idade;


    console.log(objeto)
    return objeto;
}
  
function checar()
{
    let username = document.getElementById("input-nome").value
    let senha = document.getElementById("input-senha").value
    let confirma = document.getElementById("input-confirm").value
     if(username!="")
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
         alert("È necessário seu nome")
     }
}

function limpar()
{
   localStorage.clear()
}
    