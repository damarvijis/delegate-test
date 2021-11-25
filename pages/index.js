import Sidebar from "../components/sidebar";
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Overview() {
  const router = useRouter()
  
  return (
    <>
    <Head>
      <title>Overview Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <div className="d-flex flex-column">
      <h1>Overview Page</h1>
      <h2>{router.query.value ? `Are you looking for ${router.query.value}?` : "Hello, Kinky Ostendorf!"}</h2>
      </div>
    </div>
    </>
  );
}
