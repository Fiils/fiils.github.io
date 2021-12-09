import styles from '../styles/scss/Aboutme.module.scss'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

const Aboutme = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    console.log(inView, entry)
    return (
        <>
            <div className={styles.about_me}>
                <figure ref={ref}>
                    <Image className={inView ? styles.item_am_1_image : styles.vis_none } src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638460198/Portfolio-Website/testpp_jijtxr.jpg"
                        width={300} height={300} alt="Photo of me"/>
                    <figcaption className={inView ? styles.item_am_1_fig : styles.vis_none }>Rick Charles, 21</figcaption>
                </figure>
                <p className={inView ? styles.item_am_2 : styles.vis_none}>
                &#8220;I am a very passionate person when it comes to programming, especially to web development. For many years my goal 
                has been to become a better and better web developer. It first started as a hobby, self-teaching myself, and since then, 
                my will for learning everything there is about web-related stuff has only been growing.&#8221;
                </p>
            </div>
        </>
    )
}

export default Aboutme;
