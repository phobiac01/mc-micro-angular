import React, { useState } from "react";

export default function CycleButton(props) {
  const [propertyName] = useState(props.property);
  const [propertyValue, setPropertyValue] = useState(props.possibleValues[0]);
  const [index, setIndex] = useState(0);

  function updateValue() {
    if (index === props.possibleValues.length - 1) {
      setIndex(0);
      setPropertyValue(props.possibleValues[0]);
    } else {
      setIndex(index + 1);
      setPropertyValue(props.possibleValues[index + 1]);
    }
  }

  return (
    <div>
      <p>{propertyName}</p>
      <button onClick={() => updateValue()}>{propertyValue + ""}</button>
    </div>
  );
}
