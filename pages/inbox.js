import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Inbox() {
  return (
    <>
    <Head>
      <title>Inbox Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Inbox Page</h1>
    </div>
    </>
  );
}
