import p1 from "/photoMenu.jpg"
import { BandDiv } from "./style"

function Band(){

    return(
        <BandDiv>
            <h3>Saúde em Sintonia, Estoque com Precisão. Seu Hospital Mais Eficiente e Seguro, Sempre Pronto para Cuidar!</h3>
            <div className="container">
                <img src={p1} alt="" />
            </div>
        </BandDiv>
    )
} 
export default Band