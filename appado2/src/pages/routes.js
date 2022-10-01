import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./Home";
import Cadastro from "./Cadastro";
import ContaCorrente from './ContaCorrente';
import Financiamento from './Financiamento';
import SobreNos from './SobreNos';
import Header from './componentes/Header';

function RouterApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/Cadastro" element = {<Cadastro/>}/>
                <Route path = "/ContaCorrente" element = {<ContaCorrente/>}/>
                <Route path = "/Financiamento" element = {<Financiamento/>}/>
                <Route path = "/SobreNos" element = {<SobreNos/>}/>
            </Routes>    
        </BrowserRouter>
    );
}

export default RouterApp;