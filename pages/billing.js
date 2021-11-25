import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Billing() {
  return (
    <>
    <Head>
      <title>Billing Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Billing Page</h1>
    </div>
    </>
  );
}
