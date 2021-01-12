import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backSVG from "../assets/back-icon.svg";
import REST from "../functions/restRequests";
import ServerViewer from "../components/serverViewer";

export default function ServerList() {
	const [servers, setServers] = useState([]);

	useEffect(async () => {
		setServers(await REST.getServers());
	}, []);

	return (
		<div>
			<Link to={`/`}>
				<img src={backSVG} alt="Back Button" />
			</Link>
			<br />
			{
				// Display every server object that has been given
				servers.map((server) => {
					return <ServerViewer key={server.serverId} serverObject={server} />;
				})
			}
		</div>
	);
}
