// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import AdminWebsiteLayout from "../components/adminWebsiteLayout"
import Pricing from "./userAdmin/pricing"
import Profile from "./userAdmin/profile"
import Home from "./userAdmin/Home"
import FooterAdmin from "./userAdmin/footer"

// const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <AdminWebsiteLayout >
      <>
      <Home />
      <FooterAdmin />
      </>
    </AdminWebsiteLayout>
  )
}
