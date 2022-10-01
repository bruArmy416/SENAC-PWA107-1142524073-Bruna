import { useState } from "react";

function Financiamento() {
    function CalculoFinanciamento(xuxu) {
        xuxu.preventDefault()
        alert("Cálculo do Financiamento: ---------------");
    }

    const [calculo, setCalculo] = useState()

    return(
        <div>
        <br/>
        <h1>Simulação de Financiamento</h1><br/>
        <span>Nome do Cliente: ---------------</span>
        <form onSubmit={CalculoFinanciamento}>
            <div>
            <br/>
            <label htmlFor="valor">Valor Solicitado:</label>
            <input 
            type="text" 
            id = "valor"
            name = "valor"
            placeholder = "Informe o valor"
            value = {calculo}
            onChange = {(xuxu) => setCalculo(xuxu.target.value)}
            />
            </div><br/>
                
        <div>
            <input type="submit" value = "Calcular Financiamento" />
        </div>
        </form>
        </div>
    )
}
export default Financiamento;