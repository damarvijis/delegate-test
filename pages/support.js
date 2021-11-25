import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Support() {
  return (
    <>
    <Head>
      <title>Support Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Support Page</h1>
    </div>
    </>
  );
}
