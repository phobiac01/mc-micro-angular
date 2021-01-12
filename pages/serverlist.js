import { useEffect, useState } from "react";
import Link from "next/link";
import REST from "../functions/restRequests";
import ServerViewer from "../components/serverViewer";

export default function ServerList() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    grabServersAndPopulate();
  }, []);

  async function grabServersAndPopulate() {
    setServers(await REST.getServers());
  }

  return (
    <div>
      <Link href={`/`}>
        <img src="/back-icon.svg" alt="Back Button" />
      </Link>
      <br />
      {
        // Display every server object that has been given

        servers && servers.length > 0 ? (
          servers.map((server) => {
            return <ServerViewer key={server.serverId} serverObject={server} />;
          })
        ) : (
          <p>Something went wrong...</p>
        )
      }
    </div>
  );
}
