import { Link } from "react-router-dom";
import style from "./style.css"

function Header() {
    return(
        <header>
            <h2>Bravo</h2>
            <div className='menu'>
                <br/>
                <Link to ='/'>HOME | </Link>
                <Link to ='/cadastro'>CADASTRO | </Link>
                <Link to='/financiamento'>FINANCIAMENTO | </Link>
                <Link to ='/contacorrente'>MOVIMENTAÇÃO CC | </Link>
                <Link to ='/sobrenos'>SOBRE NÓS </Link>
            </div>
        </header>
    )
}
export default Header;