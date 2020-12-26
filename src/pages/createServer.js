import CycleButton from "../components/cycleButton";

export default function CreateServer() {
  let newServerProperties = [
    { property: "pvp", possibleValues: [true, false, "gay", "straight", "potato"] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
    { property: "pvp", possibleValues: [true, false] },
  ];

  return newServerProperties.map((prop) => (
    <CycleButton property={prop.property} possibleValues={prop.possibleValues} />
  ));
}
