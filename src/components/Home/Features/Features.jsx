
import { FaBell } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { LuBrainCog } from "react-icons/lu";

const data = [
  {
    title:'Controle em Tempo Real',
    text:'Gerenciamento abrangente, visão instantânea: estoque hospitalar em tempo real para decisões rápidas e eficientes.',
    img: <GrCycle/>
  },
  {
    title:'Rastreamento Inteligente',
    text:'Código de barras exclusivo: monitoramento preciso, entrada/saída fácilpara garantir controle eficaz do estoque.',
    img: <LuBrainCog/>
  },  {
    title:'Alertas de Validade',
    text:'Segurança automatizada: datas de validade monitoradas, alertas proativos para evitar expirações, garantindo qualidade constante.',
    img: <FaBell/>
  }
]
function Features() {
  return (
    <section className="features">
      <div className="additional-info">
        {data.map((info, index)=>(
          <div key={index} className="info">
            <h3>{info.title}</h3>
            {info.img}
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
