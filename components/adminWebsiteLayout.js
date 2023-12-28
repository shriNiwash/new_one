import React from 'react'
import Navbar from '../pages/userAdmin/navbar'
import Head from 'next/head'

export default function AdminWebsiteLayout({ children }) {
    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                />
                <title>Profilex - Home</title>
            </Head>
            <Navbar />
            {children}

        </>
    )
}
