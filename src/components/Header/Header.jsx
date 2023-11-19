import Dropdown from "./dropdown/Dropdown";

const Header = (props) => {
  const getUser = sessionStorage.getItem("userData");
  const getSenha = sessionStorage.getItem("senhaData");

  const style = { color: props.color };

  return (
    <header>
      <div>
        {getUser && getSenha ? (
          <div>
            <Dropdown />
          </div>
        ) : (
          <div>
            <a href={props.link}>
              <img src={props.logo} alt="" />
            </a>
          </div>
        )}
      </div>
      <div>
        <h4 style={style}>Global Solution 2023 - Engenharia de Software</h4>
      </div>
    </header>
  );
};
export default Header;
