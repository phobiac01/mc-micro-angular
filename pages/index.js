import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Pages:</h1>
      <Link href={`/serverlist`}>
        <button>Server List</button>
      </Link>
      <Link href={`/createserver`}>
        <button>Create Server</button>
      </Link>
      <Link href={`/updateserver`}>
        <button>Update Server</button>
      </Link>
      <Link href={`/deleteserver`}>
        <button>Delete Server</button>
      </Link>
      <br />
      <h1>Actions:</h1>
      <button onClick={() => alert("Clicked!")}>Get Server Count</button>
      <button onClick={() => alert("Clicked!")}>Stop All Servers</button>
      <button onClick={() => alert("Clicked!")}>Broadcast To All</button>
    </div>
  );
}
