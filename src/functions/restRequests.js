async function getServerInfo(serverId) {
	const result = await fetch(global.apiBaseUrl + "/server?" + serverId);
	return result;
}

async function createServer() {
	console.log("createServer button works!");
}

async function startServer(serverId) {
	console.log("startServer button works!");
}

async function stopServer(serverId) {
	console.log("stopServer button works!");
}

async function deleteServer(serverId) {
	console.log("seleteServer button works!");
}

// =======================================================================

async function post(route, bodyJson) {
	let url = global.apiBaseUrl + route;

	return await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(bodyJson),
	}).catch((err) => console.trace(err));
}
