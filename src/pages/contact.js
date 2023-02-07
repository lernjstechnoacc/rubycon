import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Header/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Contact