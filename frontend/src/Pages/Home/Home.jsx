import Announcement from "../../Components/Announcement/Announcement"
import Navbar from "../../Components/Navbar/Navbar"
import Slider from "../../Components/Slider/Slider"
import Categories from "../../Components/Categories/Categories"
import Products from "../../Components/Products/Products"
import Newsletter from "../../Components/Newsletter/Newsletter"
import Footer from "../../Components/Footer/Footer"
import SADEK from "../../Components/SADEK/SADEK"

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        <SADEK />
    </>
  )
}

export default Home