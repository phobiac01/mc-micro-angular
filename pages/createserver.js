import Link from "next/link";

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
      <Link href={`/`}>
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
