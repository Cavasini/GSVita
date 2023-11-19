import Forms from "../components/Login/Forms";

const Login = () => {
  const getUser = sessionStorage.getItem("userData");
  const getSenha = sessionStorage.getItem("senhaData");

  return (
    <>
      {getUser && getSenha ? (
        (window.location = "/")
      ) : (
        <div className="Login">
          <div>
            <h2>Entre na sua conta</h2>
          </div>
          <Forms />
        </div>
      )}
    </>
  );
};
export default Login;
