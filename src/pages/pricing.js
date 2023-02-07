
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PricingHead from '@/components/PricingHead'
import PricingPlans from '@/components/PricingPlans'

import Head from 'next/head'

const Pricing = () => {
    return (
        <div>
            <Head>
                <title>Pricing</title>
            </Head>
            <Header/>
            <PricingHead/>
            <PricingPlans/>
            <Footer/>
         
        </div>
    )
}

export default Pricing