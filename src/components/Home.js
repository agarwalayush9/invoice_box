import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Frame from "./Frame";

const Home = (props) => {
  const {showAlert}= props;
  return (
    <div className="content">
      <Link className="new" to="/New">
        <small style={{ filter: "invert(1)" }}>➕</small> Add Invoice
      </Link>
      <span id="list">Invoice List..</span>
      <input id="find" type="text" placeholder="&#xf002; Search by title.." />
      <Frame showAlert={showAlert}/>
    </div>
  );
};

export default Home;
