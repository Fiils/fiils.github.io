import styles from '../styles/scss/Aboutme.module.scss'
import Image from 'next/image'

const Aboutme = () => {
    return (
        <>
            <div className={styles.about_me}>
                <figure>
                    <Image className={styles.item_am_1_image} src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638460198/Portfolio-Website/testpp_jijtxr.jpg"
                        width={300} height={300} />
                    <figcaption>Ipatov Ioan Alexandru, 20(TBM)</figcaption>
                </figure>
                <p className={styles.item_am_2}>
                “I am a very passionate person when it comes to programming, especially to web development. For many years my goal 
                has been to become a better and better web developer. It first started as a hobby, self-teaching myself, and since then, my will
                for learning everything there is about web-related stuff has only been growing. I now mainly”
                </p>
            </div>
        </>
    )
}

export default Aboutme;
