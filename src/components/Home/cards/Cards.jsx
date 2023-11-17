import { detailsData, requirementsData } from "./CardsData";

export const Cards = () => {
  return (
    <div className="cards-body">
      <section className="main-section">
        <div className="project-description">
          <section className="project-info">
            <div className="info-description">
              <h2>Sobre o VITA</h2>
              <p>Revolucionando hospitais</p>
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
            <div className="name">
              <img src="/VitaLogoBlue.svg" alt="" />
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
