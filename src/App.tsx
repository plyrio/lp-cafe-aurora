import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { Banner } from "./components/sections/Banner"
import { Different } from "./components/sections/Different"
import { Discover } from "./components/sections/Discover"
import { Feedback } from "./components/sections/Feedback"
import { Hero } from "./components/sections/Hero"
import { Menu } from "./components/sections/Menu"
import { Newsletter } from "./components/sections/Newsletter"


function App() {


  return (
    <>
      <Header />
      <Hero />
      <Discover />
      <Menu />
      <Different />
      <Banner />
      <Feedback />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
