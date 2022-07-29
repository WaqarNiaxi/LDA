import Navbar from './components/navbar';
import Footer from './components/footer';
import Head from 'next/head'

const AboutUs=()=>{
    return(<>
      <Head><title>LDA::AboutUs</title></Head>


    <div className='about container'>
    
    <div className='bggg'>
        <Navbar/>
    </div>
    
    <div className='detail flex flex-col '>
       <h3>About Us</h3>
       <hr/>
       <div> <p className='pb-3'><strong>REG. NO: </strong>274370-W</p>
       <p><strong>ADDRESS : </strong> LOT F1, FIRST FLOOR, LABUAN</p>
       <p>INTERNATIONAL FERRY TERMINAL, JALAN</p>
       <p className='pb-3'>MERDEKA, 87000 W. P. LABUAN</p>
       </div>
    </div>
    <div className='fax d-flex justify-around'>
        <p><strong>INQUIRY | </strong>087-581006 / 0138642117</p>
        <p><strong>MAIN OFFIC |</strong>087-410472</p>
        <p><strong>FAX |</strong>087-410475</p>
    </div>
    </div>
    <Footer/>
    </>)
}
export default AboutUs;