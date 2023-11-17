import { detailsData, requirementsData } from "./CardsData";

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
              {detailsData.map((detail, index)=>(
                <div key={index} className="detail">
                  <p>{detail.p}</p>
                  <span>{detail.span}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="bottom-card">
            <div className="card name">
              <div>
              <h3>VITA</h3>
              </div>
            </div>
            <div className="card">
              <h3>Segurança Avançada Integrada</h3>
              <p>
              Proteja seus pacientes e equipe. Sistema robusto garante rastreabilidade total, prevenindo roubos e garantindo confiança.
              </p>
            </div>
          </section>
        </div>

        <div className="requirements">
          {requirementsData.map((data, index)=>(
            <div key={index} className="card">
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
