import { FaBell } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { LuBrainCog } from "react-icons/lu";

const data = [
  {
    title: "Controle em Tempo Real",
    text: "Gerenciamento abrangente, visão instantânea: estoque hospitalar em tempo real para decisões rápidas e eficientes",
    icon: <GrCycle />,
  },
  {
    title: "Rastreamento Inteligente",
    text: "Código de barras exclusivo: monitoramento preciso, entrada/saída fácilpara garantir controle eficaz do estoque",
    icon: <LuBrainCog/>,
  },
  {
    title: "Alertas de Validade",
    text: "Segurança automatizada: datas de validade monitoradas, alertas proativos para evitar expirações, garantindo qualidade constante",
    icon: <FaBell />,
  },
];

function Features() {
  return (
    <section className="sectionNew">
      <div className="DivMain">
        {data.map((info, index)=>(
        <section key={index}>
          <div className="imgDiv">
            {info.icon}
          </div>
          <div className="textDiv">
            <h5>{info.title}</h5>
            <p>{info.text}</p>
          </div>
        </section>
        ))}
      </div>
    </section>
  );
}
export default Features;
