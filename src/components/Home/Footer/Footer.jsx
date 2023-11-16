import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div>
          <img src="public/vite.svg" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
    </footer>
  );
}
export default Footer;
