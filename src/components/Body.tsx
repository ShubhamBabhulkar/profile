import Aboutme from "./Aboutme"
import Connect from "./Connect"
import Footer from "./Footer"
import Header from "./Header"
import InspiringQuotes from "./InspiringQuotes"
import Resume from "./Resume"
import Skills from "./Skills"

const Body = () => {
  return (
    <div>
        <Header />
        <Aboutme />
        <Skills />
        <Resume />
        <InspiringQuotes />
        <Connect />
        <Footer />
    </div>
  )
}

export default Body