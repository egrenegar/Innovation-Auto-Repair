import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OurTeam from "../components/OurTeam/ourTeam";
import About from "../components/About/about";
import Form from "../components/ContactForm/contact";
import Footer from "../components/Footer/footer"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
      <Layout home>
          <Head>
            <title>Innovation Auto</title>
          </Head>
          <div className={utilStyles.pagecontainer}>
            <Header />
            <Hero />
            <About />
            <OurTeam />
            <Form />
            <Footer/>
        </div>
      </Layout>
  );
}
