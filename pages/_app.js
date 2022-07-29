import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css';
import {FaAngleUp} from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(function mount() {
    const element = document.getElementById("scrollUp");
    element.addEventListener('click',()=> {return window.scrollTo(0, 0)})
      element.classList.remove("scrollUp");
   
   
      const onScroll = () => {
      
      if (window.scrollY >= 300) {
        element.classList.add("scrollUp");
      }
      
      else {
        element.classList.remove("scrollUp");
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  
  return(<>
   <Component {...pageProps} />
   
   <div className='scrollUp' id="scrollUp">
     <FaAngleUp className='text-white text-3xl'/>
   </div>
   </>)
}

export default MyApp
