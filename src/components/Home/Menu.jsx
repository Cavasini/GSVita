import Features from "./Vant/Features";
import { Cards } from "./cards/Cards";
import photo01 from "/photoMenu.jpg";

const Menu = () => {
  return (
    <>
      <section className="about-project">
        <h2>Sobre o Projeto</h2>
        <p>
          Skeema is a new way to manage your tabs that helps declutter your
          browser and your mind.
        </p>
        <div className="container">
          <img src={photo01} />
        </div>
      </section>
      <Cards />
      <Features />
    </>
  );
};
export default Menu;
