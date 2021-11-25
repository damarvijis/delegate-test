import Sidebar from "../../components/sidebar";
import Image from "next/image"
import Head from 'next/head'

export default function detail(props) {
  const { data } = props.user;
  return (
		<>
    <Head>
      <title>Detail Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <div className="content d-flex align-items-center">
      <h1 className="title">{data.first_name + ' ' + data.last_name}'s Photo</h1>
      <div>
        <Image src={data.avatar} width="300" height="300" className="rounded-circle my-3"/>
      </div>
      </div>
    </div>
		</>
  );
}

export async function getStaticPaths() {
	const res = await fetch(`https://reqres.in/api/users?page=2`)
	const dataUsers = await res.json()
	const paths = dataUsers.data.map((user) => ({
		params: {
			id: `${user.id}`
		}
	}))
	return {
	 paths,
	 fallback: false
	}
}
export async function getStaticProps(context) {
	const { id } = context.params
	const res = await fetch(`https://reqres.in/api/users/${id}`)
	const user = await res.json()
	return {
		props: {
			user
		}
	}
}