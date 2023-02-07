
import AboutFooter from '@/components/AboutFooter'
import AboutHead from '@/components/AboutHead'
import AboutNumber from '@/components/AboutNumber'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ReviewCustomers from '@/components/ReviewCustomers'
import Head from 'next/head'
import React from 'react'



const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Header/>
            <AboutHead/>
            <AboutNumber/>
            <ReviewCustomers/>
            <AboutFooter/>
            <Footer/>
        </div>
    )
}

export default About