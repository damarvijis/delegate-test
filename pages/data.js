import Sidebar from "../components/sidebar";
import Image from "next/image";
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap";
import {useState} from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home(props) {
  const { dataUser, pages } = props
  const [page, setPage] = useState(pages)
  const [value, setValue] = useState('')
  const [maxPage, setMaxPage] = useState(dataUser.total_pages)
  
  const router = useRouter()
  let items = []

  function submitSearch () {
    router.push(`/?value=${value}`)
  }

  function handleChange (event) {
    setValue(event.target.value)
  }

  for (let i = 0; i < maxPage; i++) {
    items.push(
      <h5 key={i}
      onClick={() => {
        Router.push(`/data?page=${i + 1}`)
        setPage(i+1)
      }} 
        style={{cursor: 'pointer'}}
        className={pages == i+1 ? "col-6 align-items-center background-number" : "col-6 align-items-center"}>{i + 1}</h5>
    )
  }

  return (
    <>
    <Head>
      <title>Data Page</title>
    </Head>
    <div className="myContainer">
      <Sidebar />
      <div className="content">
        <div className="d-flex flex-row">
          <div className="me-3"><Image src="/pencil.png" height="47" width="47" alt="pencil" /></div>
          <div >
            <p className="mb-1" style={{fontSize: "11px"}}>PERFORMANCE</p>
            <h3>Interested Users</h3>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-end">
        <Form onSubmit={submitSearch}>
          <div className="row">
            <div className="searchBox" style={{marginRight: "60px"}}>
              <div className="col-md-1 d-flex">
              <Button className="d-flex align-items-center border-0 bg-transparent p-0 btn  shadow-none" type="submit">
                <Image src="/search.png" width="13" height="13"/>
              </Button>
              </div>
              <div className="form-group col-md-11 flex-column">
              <input className="ms-1 form-control p-0 border-0 bg-transparent shadow-none" type="text" placeholder="Search by email or name" value={value} onChange={handleChange} />
              </div>
            </div>
          </div>
        </Form>
        </div>
        <div className="tab">
          <h5>INTERESTED USERS</h5>
          <div className="tab-head">
            <div className="col-3"><h6>ID</h6></div>
            <div className="col-3"><h6>EMAIL</h6></div>
            <div><h6>NAME</h6></div>
          </div>
          {
            dataUser.data.map(e => {
              return(
                <div className="tab-body" key={e.id} onClick={() => {
                  e.id > 6 ? router.push(`/user/${e.id}`) : router.push(`/users/${e.id}`)
                }}>
                  <p className="col-3">{e.id}</p>
                  <p className="col-3">{e.email}</p>
                  <p>{e.first_name + ' ' + e.last_name}</p>
                </div>
              )
            })
          }
          <div className="row mt-5 p-3 d-flex justify-content-center">
            <div className="col-1 d-flex justify-content-end align-items-center">
              <Button className="bg-transparent border-0 shadow-none" disabled={page == 1}>
                <Image src="/kiri.png" onClick={() => {
                  Router.push(`/data?page=${Number(router.query.page) - 1}`)
                  setPage(Number(router.query.page) - 1)
                }}
                  className="d-flex align-items-center bg-transparent border-0 shadow-none" width="13" height="13"/>
              </Button>
            </div>
            <div className="row col-1 align-items-center pages">
              {items}
           </div>
            <div className="row col-1 d-flex justify-content-start align-items-center">
              <Button className="bg-transparent border-0 shadow-none" disabled={page == maxPage}>
                <Image src="/kanan.png" onClick={() => {
                  Router.push(`/data?page=${Number(router.query.page) + 1}`)
                  setPage(Number(router.query.page) + 1)
                }} 
                  className="d-flex align-items-center" width="13" height="13"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
	const res = await fetch(`https://reqres.in/api/users?page=${page}`)
	const dataUser = await res.json()
	return {
		props: {
			dataUser,
      pages: Number(page)
		}
	}
}