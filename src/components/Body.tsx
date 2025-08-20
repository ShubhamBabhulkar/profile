import About from "./About"
import Header from "./Header"
import Connect from "./Connect"
import Footer from "./Footer"
import InspiringQuotes from "./InspiringQuotes"
import Resume from "./Resume"
import Skills from "./Skills"

const Body = () => {
  return (
    <div>
        <Header />
        <div className="mb-30">
          <About />
        </div>
        <Skills />
        <Resume />
        <InspiringQuotes />
        <Connect />
        <Footer />
    </div>
  )
}

export default Body