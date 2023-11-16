import { BiBasketball } from "react-icons/bi";
import photo from "../../../assets/16. coding-a-website-3.svg";

const data = [
  {
    title: "Reminding & Resumption",
    info: "You are constantly switching between unfinished tasks all day, leaving tabs open so you dont lose where you left off.",
    img: <BiBasketball />,
  },
  {
    title: "Reminding & Resumption",
    info: "You are constantly switching between unfinished tasks all day, leaving tabs open so you dont lose where you left off.",
    img: <BiBasketball />,
  },
  {
    title: "Reminding & Resumption",
    info: "You are constantly switching between unfinished tasks all day, leaving tabs open so you dont lose where you left off.",
    img: <BiBasketball />,
  },
];

export const Cards = () => {
  return (
    <div className="cards-body">
      <section class="main-section">
        <div class="project-description">
          <section class="project-info">
            <div class="info-description">
              <h2>Título da Seção</h2>
              <p>Breve descrição do projeto.</p>
            </div>

            <div class="info-details">
              <div class="detail">
                <p>Centralização Eficiente no Controle de Estoque</p>
                <span>
                  Sistema inovador monitora, rastreia e atualiza estoques
                  hospitalares em tempo real, garantindo eficiência e prevenindo
                  desperdícios.
                </span>
              </div>
              <div class="detail">
                <p>Avanço Sustentável na Gestão Hospitalar</p>
                <span>
                  Implantação do sistema reduz desperdícios, promove controle
                  rigoroso e garante eficiência operacional, fortalecendo a
                  segurança do paciente.
                </span>
              </div>
              <div class="detail">
                <p>Simplificação Inteligente no Ambiente Hospitalar</p>
                <span>
                  Rastreamento por código de barras, atualização automática e
                  etiquetas personalizadas facilitam a gestão de estoque,
                  integrando-se ao cotidiano hospitalar.
                </span>
              </div>
            </div>
          </section>
          <section>
            <div class="card bottom-card">
              <h3>Controle em Tempo Real</h3>
              <p>
                Gerenciamento abrangente, visão instantânea: estoque hospitalar
                em tempo real para decisões rápidas e eficientes.
              </p>
            </div>
          </section>
        </div>

        <div class="requirements">
          <div class="card">
            <h3>Controle em Tempo Real</h3>
            <p>
              Gerenciamento abrangente, visão instantânea: estoque hospitalar em
              tempo real para decisões rápidas e eficientes.
            </p>
          </div>

          <div class="card">
            <h3>Rastreamento Inteligente</h3>
            <p>
              Código de barras exclusivo: monitoramento preciso, entrada/saída
              fácil para garantir controle eficaz do estoque.
            </p>
          </div>

          <div class="card">
            <h3>Alertas de Validade</h3>
            <p>
              Segurança automatizada: datas de validade monitoradas, alertas
              proativos para evitar expirações, garantindo qualidade constante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
