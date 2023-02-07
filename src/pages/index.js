import CompanyList from "@/components/CompanyList";
import CreateInfo from "@/components/CreateInfo";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import HeadInfo from "@/components/HeadInfo";
import StepInfo from "@/components/StepInfo";
import Head from "next/head";



const HomePage = () => {
  return (
    <div>
      <Head>
            <title>Home</title>
      </Head>
      <Header/>
      <HeadInfo/>
      <CompanyList/>
      <GetStarted/>
      <StepInfo/>
      <CreateInfo/>
      <Footer/>
    </div>
  )
}

export default HomePage;