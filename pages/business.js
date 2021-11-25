import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function business() {
  return (
    <>
    <Head>
      <title>Business Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Business Page</h1>
    </div>
    </>
  );
}
