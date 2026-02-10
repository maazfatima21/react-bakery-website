import Navbar from "./components/navbar"
import Home from "./components/Home"
import New from "./components/New"
import About from "./components/About"
import Favorite from "./components/Favorite"
import Visit from "./components/Visit"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Home />
        <New />
        <About />
        <Favorite />
        <Visit />
        <Route path="*" element={<NotFound />} />

      </main>

      <Footer />
    </>
  )
}

export default App
