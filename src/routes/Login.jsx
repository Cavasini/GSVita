import Header from "../components/Header/Header"
import Forms from "../components/Login/Forms"

const Login = () =>{
 
    return(<>
        <div className="Login">
            <div>
                <h2>Entre na sua conta</h2>
            </div>
            <Forms/>
        </div>
    </>
    )
}
export default Login