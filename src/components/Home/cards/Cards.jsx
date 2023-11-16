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
      <section className="main-section">
        <div className="project-description">
          <section className="project-info">
            <div className="info-description">
              <h2>Título da Seção</h2>
              <p>Breve descrição do projeto.</p>
            </div>

            <div className="info-details">
              <div className="detail">
                <p>Centralização Eficiente no Controle de Estoque</p>
                <span>
                  Sistema inovador monitora, rastreia e atualiza estoques
                  hospitalares em tempo real, garantindo eficiência e prevenindo
                  desperdícios.
                </span>
              </div>
              <div className="detail">
                <p>Avanço Sustentável na Gestão Hospitalar</p>
                <span>
                  Implantação do sistema reduz desperdícios, promove controle
                  rigoroso e garante eficiência operacional, fortalecendo a
                  segurança do paciente.
                </span>
              </div>
              <div className="detail">
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
            <div className="card bottom-card">
              <h3>Segurança Avançada Integrada</h3>
              <p>
              Proteja seus pacientes e equipe. Sistema robusto garante rastreabilidade total, prevenindo roubos e garantindo confiança.
              </p>
            </div>
          </section>
        </div>

        <div className="requirements">
          <div className="card">
            <h3>Prevenção de Desperdícios</h3>
            <p>
              Projeto inovador que evita desperdícios, garantindo que nenhum
              medicamento expire e recursos sejam preservados.
            </p>
          </div>

          <div className="card">
            <h3>Eficiência Operacional Aumentada</h3>
            <p>
              Sistema inteligente agiliza reposição, assegurando acesso rápido a
              materiais essenciais para profissionais de saúde.
            </p>
          </div>

          <div className="card">
            <h3>Controle Total de Estoque</h3>
            <p>
              Redução de erros, sistema moderno proporciona controle rigoroso,
              melhorando precisão e confiança nos registros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
