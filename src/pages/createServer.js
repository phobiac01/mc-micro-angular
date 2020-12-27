import CycleButton from "../components/cycleButton";
import { Link } from "react-router-dom";
import backSVG from "../assets/back-icon.svg";

export default function CreateServer() {
  let newServerProperties = [
    {
      property: "pvp",
      possibleValues: [true, false, "gay", "straight", "potato"],
    },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
  ];

  return (
    <div>
      <Link to={`/`}>
        <img src={backSVG} alt="Back Button" />
      </Link>
      <br />

      {newServerProperties.map((prop, i) => (
        <CycleButton
          key={i}
          property={prop.property}
          possibleValues={prop.possibleValues}
        />
      ))}
    </div>
  );
}
