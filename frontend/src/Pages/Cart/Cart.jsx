import Announcement from '../../Components/Announcement/Announcement'
import CartComponent from '../../Components/CartComponent/CartComponent';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SADEK from '../../Components/SADEK/SADEK';

const Cart = () => {
  return (
    <>
        <Navbar />
        <Announcement />

        <CartComponent />
        
        <Newsletter />
        <Footer />
        <SADEK />
    </>
  )
}

export default Cart