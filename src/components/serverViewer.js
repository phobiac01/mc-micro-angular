import React, { useState } from "react";
import REST from "../functions/restRequests";

export default function CycleButton(props) {
  const [serverObject, setServerObject] = useState(props.serverObject);

  return (
    <div className="serverViewer">
      <p>{serverObject.serverName}</p>
      <button onClick={() => REST.startServer(serverObject.serverId)}>Start</button>
      <button onClick={() => updateValue()}>Stop</button>
      <button onClick={() => updateValue()}>Delete</button>
    </div>
  );
}
