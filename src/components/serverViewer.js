import React, { useState } from "react";
import REST from "../functions/restRequests";

export default function ServerViewer(props) {
	const [serverObject] = useState(props.serverObject);

	return (
		<div className="serverViewer">
			<p>{serverObject.serverName}</p>
			<button onClick={() => REST.startServer(serverObject.serverId)}>Start</button>
			<button onClick={() => REST.stopServer(serverObject.serverId)}>Stop</button>
			<button onClick={() => REST.deleteServer(serverObject.serverId)}>Delete</button>
		</div>
	);
}
