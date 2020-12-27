import { Link } from "react-router-dom";
import backSVG from "../assets/back-icon.svg";

export default function DeleteServer() {
  return (
    <div>
      <Link to={`/`}>
        <img src={backSVG} alt="Back Button" />
      </Link>
      <h1>DeleteServer Works!</h1>
    </div>
  );
}
