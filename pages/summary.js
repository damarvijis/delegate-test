import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Summary() {
  return (
    <>
    <Head>
      <title>Summary Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <h1>Summary Page</h1>
    </div>
    </>
  );
}
