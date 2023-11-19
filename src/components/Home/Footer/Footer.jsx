import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const icons = [<FaGithub />, <FaInstagram />, <FaTwitter />];

function Footer() {
  return (
    <footer>
      <div>
        <img src="/VitaLogoWhite.svg" alt="" />
      </div>
      <div className="icons">
        {icons.map((icon, index) => (
          <ul key={index}>
            <li>{icon}</li>
          </ul>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
