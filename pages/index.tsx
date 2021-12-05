import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import Aboutme from '../components/Aboutme'
import TechInfo from '../components/Tech/TechInfo'
import styles from '../styles/scss/Home.module.scss'

const CanvasButtonBKG = dynamic(() => import('../components/CanvasButtonBKG'), { ssr: false })

const Home: NextPage = () => {
  const[ miButtonHover, setMiButtonHover ] = useState(false);
  const[ miButtonClick, setMiButtonClick ] = useState(false);

  function buttonHovered(){
    setMiButtonHover(!miButtonHover);
  }

  function buttonClicked(){
    setMiButtonClick(!miButtonClick);
  }

  return (
    <div>
      <Head>
        <title>IIAlex</title>
        <meta name="description" content="portfolio website" />
        <link rel="icon" href="/logo.svg" />
      </Head> 
     <nav className={`${styles.navbar} ${miButtonHover && !miButtonClick ? 'blurred' : ''}`}></nav>

     <div className={`${styles.image} ${miButtonHover && !miButtonClick ? 'blurred' : ''}`}>
       <Link href="https://www.hanulmoaracunoroc.ro/html/pdf/Moara-cu-noroc-Ioan-Slavici.pdf"><a target="_blank"><button>Check out CV</button></a></Link>
       <a href="/CV.pdf" download="CV"><button>Download CV as PDF</button></a>
     </div>

     <div className={styles.more_info_section}>
       <div className={styles.mi_flex_button}>
         <CanvasButtonBKG />
         <a href="#aboutme">
           <button className={styles.mi_button} onClick={buttonClicked} onMouseEnter={buttonHovered} onMouseLeave={buttonHovered} type="button" name="more_info" disabled={miButtonClick ? true : false}>
              About me!
              <div className={styles.charging_effect}></div>
           </button>
          </a>
         <style jsx global>{
           `
           html {
             scroll-behavior: smooth;
           }
           .blurred { 
              filter: blur(2px); 
              animation: blur 0.5s;
           }
           @keyframes blur {
             from {filter: blur(0)}
             to {filter: blur(2px)}
           }
           ::-webkit-scrollbar {
            width: 5px;
            }
            ::-webkit-scrollbar-track {
              background: white;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #b8c6db;
              background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
              border-radius: 10px;
            }
           `
          }</style>
       </div>
     </div>
     {miButtonClick && <div id="aboutme" className={styles.divider}></div>}
     {miButtonClick && 
      <div className={styles.sec_content}>

      <Aboutme />

        <div className={styles.divider}></div>

      <TechInfo />

        <div className={styles.divider} style={{marginTop: '0px'}}></div>



      </div> 
     }


    </div>
  )
}

export default Home
