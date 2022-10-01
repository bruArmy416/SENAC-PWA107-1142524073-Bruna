import { useState } from "react";

function ContaCorrente() {
    function conta(xuxu) {
        xuxu.preventDefault()
        alert('Saldo Atual: ---------------');
    }

    const [deposito, setDeposito] = useState()
    const [saque, setSaque] = useState()
  
    return(
        <div>
            <br/>
            <h1>Conta Corrente</h1><br/>
            <span>Nome do Cliente: ---------------</span>
            <form onSubmit={conta}>
                <div>
                    <br/>
                    <label htmlFor="deposito">Depósito:</label>
                    <input 
                    type="text" 
                    id = "deposito"
                    name = "deposito"
                    placeholder = "deseja depositar...?"
                    value = {deposito}
                    onChange = {(xuxu) => setDeposito(xuxu.target.value)}
                    />
                </div><br/>
                <div>
                    <label htmlFor="saque">Saque:</label>
                    <input 
                    type="text" 
                    id = "saque"
                    name = "saque"
                    placeholder = "deseja sacar...?"
                    value = {saque}
                    onChange = {(xuxu) => setSaque(xuxu.target.value)}
                    />
                </div><br/>
                <div>
                    <input type="submit" value = "Atualizar Saldo" />
                </div>
            </form>
                
        </div>
    )
}

export default ContaCorrente;