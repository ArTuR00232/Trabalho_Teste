function verifica(nome, senha)
{   
    for(let x in localStorage)
    {   
        let objeto = JSON.parse(localStorage.getItem(x))
        let sen = objeto.password
        let nom = objeto.username
        if(nome == nom)
        {
            if(senha!="")
            {
                if(senha == sen )
                {
                    window.location.href=("reset.html")
                }
                else
                {
                    alert("senha incorreta")
                }
            }
            else
            {
             alert("insira a senha")
            }
            
        }
        alert("nome incorreto")
    }
        
}

