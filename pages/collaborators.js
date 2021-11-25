import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Collaborators() {
  return (
    <>
    <Head>
      <title>Collaborators Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Collaborators Page</h1>
    </div>
    </>
  );
}
