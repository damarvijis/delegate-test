import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Credits() {
  return (
    <>
    <Head>
      <title>Credits Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Credits Page</h1>
    </div>
    </>
  );
}
