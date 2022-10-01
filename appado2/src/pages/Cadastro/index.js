import {useState} from "react";

function Cadastro() {
    function cadastroDoUsuario(xuxu) {
        xuxu.preventDefault()
        alert("Usuário Cadastrado com Sucesso!!!");
    }

    const [name, setName] = useState()
    const [cpf, setcpf] = useState()
    const [endereco, setEndereco] = useState()
  
    return(
        <div>
            <br/>
            <h1>Cadastro de Cliente</h1><br/>
            <form onSubmit={cadastroDoUsuario}>
                <div>
                    <label htmlFor = "name">Nome:</label>
                    <input 
                    type = "text" 
                    id = "name"
                    name = "name"
                    placeholder = "Digite seu nome"
                    value = {name}
                    onChange = {(xuxu) => setName(xuxu.target.value)}
                    />
                </div><br/>
                <div>
                    <label htmlFor= "cpf" >CPF:</label>
                    <input 
                    type = "text" 
                    id = "cpf"
                    name = "cpf"
                    placeholder = "Digite seu CPF"
                    value = {cpf}
                    onChange = {(xuxu) => setcpf(xuxu.target.value)}
                    />
                </div><br/>
                <div>
                    <label htmlFor= "endereco" >Endereço:</label>
                    <input 
                    type = "text" 
                    id = "endereco"
                    name = "endereco"
                    placeholder = "Digite seu endereço"
                    value = {endereco}
                    onChange = {(xuxu) => setEndereco(xuxu.target.value)}
                    />
                </div><br/>
                <div>
                    <input type = "submit" value = "Cadastrar" />
                </div>
            </form>                
        </div>
    )
}
export default Cadastro;