import { useState } from "react";
import { Link } from "react-router-dom";
import backSVG from "../assets/back-icon.svg";
import REST from "../functions/restRequests";
import ServerViewer from "../components/serverViewer";

export default function ServerList() {
	const [servers, setServers] = useState([]);

	// Set server state of page to hold all relevent servers
	async function getServers() {
		setServers(await REST.getServers());
	}

	// Display a button, or the results
	let render =
		!servers || servers.length == 0 ? (
			<button onClick={() => getServers()}>Load Servers</button>
		) : (
			showServers(servers)
		);

	return (
		<div>
			<Link to={`/`}>
				<img src={backSVG} alt="Back Button" />
			</Link>
			<br />
			{render}
		</div>
	);
}

// Display every server object that has been given
function showServers(servers) {
	let renderr = servers.map((server) => {
		return <ServerViewer key={server.serverId} serverObject={server} />;
	});

	return renderr;
}
