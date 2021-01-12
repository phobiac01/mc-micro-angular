async function getServerInfo(serverId) {
	const result = await fetch(global.apiBaseUrl + "/server?" + serverId);
	return result;
}
// == User Requests ======================================================

exports.signUp = async (newUserData) => {
	console.log("signUp works!");
	// Should return new user object and success message
	// Should also update JWT cookie with fresh session
};

exports.logIn = async (username, password) => {
	console.log("logIn works!");
	// Should respond with success and new JWT or 403
};

exports.logOut = async () => {
	console.log("logOut works!");
	// Should respond with success and clear JWT and related session ID
};

// == Server REST ========================================================

exports.createServer = async (params) => {
	console.log("createServer works!");
	// Should return with server object and success or error message
	return new Promise.reject(new Error("Didnt work..."));
};

exports.startServer = async (serverId) => {
	// Should return with success or failure message
	console.log("startServer works!");
};

exports.stopServer = async (serverId) => {
	// Should return with success or failure message
	console.log("stopServer works!");
};

exports.deleteServer = async (serverId) => {
	// Should return with success or failure message
	console.log("deleteServer works!");
};

// == Server Details =====================================================

exports.getServers = async () => {
	// Should return with list of all servers bound to the current user
	console.log("getServers works!");
	let results = await fetch(global.apiBaseUrl + "/getServers").then((res) => res.json());
	console.log(results);
	return [];
};

exports.getServer = async (serverId) => {
	// Should return the serverObject of specified server only, or error message
	console.log("getServer works!");
};

// == Webhooks ===========================================================

exports.subscribeToServersStatus = async (servers) => {
	// TODO: Impliment webhooks to keep tabs on servers status and player count
	console.log("serverSubscribe works!");
};

// ==========================================================================

async function post(route, bodyJson) {
	let url = global.apiBaseUrl + route;

	return await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(bodyJson),
	})
		.then((res) => res.json())
		.catch((err) => console.trace(err));
}
