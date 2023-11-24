import p1 from "/photoMenu.jpg";
import { BandDiv } from "./style";
import BandButtons from "./Buttons/BandButtons";

function Band() {
  return (
    <BandDiv className="Band">
      <section className="container">
        <img src={p1} alt="" />
      </section>
      <section className="textDiv">
        <BandButtons/>
      </section>
    </BandDiv>
  );
}
export default Band;
