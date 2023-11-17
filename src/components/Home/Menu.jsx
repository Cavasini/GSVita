import Title from "../Title";
import Features from "./Features/Features";
import { Cards } from "./cards/Cards";
import photo01 from "/Group.png";
import Band from "./Band/band";
import Footer from "./Footer/Footer";

const Menu = () => {
  return (
    <>
      <section className="about-project">
        <div className="text">
          <h2>VITAL AI</h2>
          <p>
            Revitalize a gestão hospitalar! A oferece controle em tempo real,
            rastreamento eficiente, atualização automática e benefícios
            impactantes. Transforme agora!
          </p>
          <a>Saiba mais</a>
        </div>
        <div className="img">
          <img src={photo01} alt="" />
        </div>
      </section>
      <Title
        title="Features"
        caption="Sua experiência fica cada vez melhor com o tempo."
        text="There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form."
      />
      <Cards />
      <Band />
      <Title caption="Sua experiência fica cada vez melhor com o tempo." />
      <Features />
      <Footer />
    </>
  );
};
export default Menu;
