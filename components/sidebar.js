import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function sidebar() {
  const router = useRouter()
  const [performance, setPerformance] = useState('inactive')

  function performanceActive() {
    performance === 'inactive' ? setPerformance('active') : setPerformance('inactive')
  }

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <div className="sidebar col-2 d-none d-lg-flex">
      <div className="logo">
        <Image src="/logo.png" height="77" width="82" alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "25px"
        }}
      >
        <p style={{ alignSelf: "center", fontSize: "12px", marginTop: "12px", marginBottom: "4px" }}>
          KINKY OSTENDORF
        </p>
        <p style={{ alignSelf: "center", fontSize: "10px" }}>
          kinkysfruitlab@outlook.com
        </p>
      </div>
      <Link href="/">
        <button className={router.pathname === "/" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/overview.png" width="27" height="20"/>
          </div>
          <div>OVERVIEW</div>
        </button>
      </Link>
      <Link href="/business">
        <button className={router.pathname === "/business" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/business" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/business.png" width="27" height="20"/>
          </div>
          <div>BUSINESS</div>
        </button>
      </Link>
      <Link href="/inbox">
        <button className={router.pathname === "/inbox" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/inbox" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/inbox.png" width="27" height="20"/>
          </div>
          <div>INBOX</div>
        </button>
      </Link>
      <Link href="/collaborators">
        <button className={router.pathname === "/collaborators" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/collaborators" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/collaborators.png" width="27" height="20"/>
          </div>
          <div>COLLABORATORS</div>
        </button>
      </Link>
        <button onClick={() => {
          performanceActive()
        }}
        className={performance === "active" || router.pathname === "/data" || router.pathname === "/credits" || router.pathname === "/summary" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={performance === "active" || router.pathname === "/data" || router.pathname === "/credits" || router.pathname === "/summary" ? "images_sidebar_active" : "images_sidebar"}>
            <div>
            <Image src="/peformance.png" width="27" height="20"/>
            </div>
          </div>
          <div style={{fontSize: "10px"}}>PERFORMANCE</div>
        </button>
        <div data-aos-delay="200" data-aos={performance == "active" ? "fade-down"  : ""} className={performance === "active" || router.pathname === "/data" || router.pathname === "/credits" || router.pathname === "/summary" ? "mt-2" : "d-none"}>
          <Link href="/summary">
            <p className={router.pathname === "/summary" ? "p_sidebar actived" : "p_sidebar"}>SUMMARY</p>
          </Link>
          <Link href="/credits">
            <p className={router.pathname === "/credits" ? "p_sidebar actived" : "p_sidebar"}>CREDITS</p>
          </Link>
          <Link href="/data?page=1">
            <p className={router.pathname === "/data" ? "p_sidebar actived" : "p_sidebar"}>INTERESTED USER</p>
          </Link>
        </div>
      <Link href="/billing">
        <button className={router.pathname === "/billing" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/billing" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/billing.png" width="27" height="20"/>
          </div>
          <div>BILLING</div>
        </button>
      </Link>
      <Link href="/support">
        <button className={router.pathname === "/support" ? "btn_sidebar_active" : "btn_sidebar"}>
          <div className={router.pathname === "/support" ? "images_sidebar_active" : "images_sidebar"}>
            <Image src="/support.png" width="27" height="20"/>
          </div>
          <div>SUPPORT</div>
        </button>
      </Link>
    </div>
  );
}
