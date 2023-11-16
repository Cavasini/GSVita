import { FormMain } from "./styled";

function Forms() {
  return (
    <FormMain>
      <form>
        <div className="inputDiv">
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div className="inputDiv">
        <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <div className="buttonDiv">
          <input type="submit" />
        </div>
      </form>
    </FormMain>
  );
}
export default Forms;
