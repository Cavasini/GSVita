
import { FaBell } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { LuBrainCog } from "react-icons/lu";

function Features() {
  return (
    <section className="features">
      <div className="additional-info">
      <div className="info">
        <h3>Controle em Tempo Real</h3>
        <GrCycle />
        <p>
          Gerenciamento abrangente, visão instantânea: estoque hospitalar em
          tempo real para decisões rápidas e eficientes.
        </p>
      </div>

      <div className="info">
        <h3>Rastreamento Inteligente</h3>
        <LuBrainCog />
        <p>
          Código de barras exclusivo: monitoramento preciso, entrada/saída fácil
          para garantir controle eficaz do estoque.
        </p>
      </div>

      <div className="info">
        <h3>Alertas de Validade</h3>
        <FaBell />
        <p>
          Segurança automatizada: datas de validade monitoradas, alertas
          proativos para evitar expirações, garantindo qualidade constante.
        </p>
      </div>
      </div>
    </section>
  );
}
export default Features;
