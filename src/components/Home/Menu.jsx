import Title from "../Title";
import Features from "./Vant/Features";
import { Cards } from "./cards/Cards";
import photo01 from "/Group.png";
import photo02 from "/jonathan-borba-zNmTJzKdark-unsplash.jpg";
import Band from "./Band/band";
import Footer from "./Footer/Footer";

const Menu = () => {
  return (
    <>
      <section className="about-project">
        <div className="text">
          <h2>hapvida</h2>
          <p>
            Skeema is a new way to manage your tabs that helps declutter your
            browser and your mind.
          </p>
          <button>Saiba mais</button>
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
      <Footer/>
    </>
  );
};
export default Menu;
