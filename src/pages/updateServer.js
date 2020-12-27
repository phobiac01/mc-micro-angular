import { Link } from "react-router-dom";
import backSVG from "../assets/back-icon.svg";

export default function UpdateServer() {
  return (
    <div>
      <Link to={`/`}>
        <img src={backSVG} alt="Back Button" />
      </Link>
      <br />
      <h1>UpdateServer Works!</h1>
    </div>
  );
}
