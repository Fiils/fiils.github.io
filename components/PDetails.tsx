import styles from '../styles/scss/PDetails.module.scss'
import { FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const PDetails = () => {
    return (
        <div className={styles.details_cont}>
            <h3 className={styles.dtitle}>You can also find me on:</h3>
            <div className={styles.basic_flex}>
                <Image src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638884248/Portfolio-Website/Logos/4202011_email_gmail_mail_logo_social_icon_d47aqo.png" width={60} height={50} />
                <h4>ioanalexandruipatov12@gmail.com</h4>
            </div>
            <div className={styles.grid_container}>
                <div className={styles.details_flex}>
                    <Link href="https://www.facebook.com/ioanalexandru.ipatov.9"><a target="_blank">
                        <FaFacebookSquare color="blue" size={30}/>
                    </a></Link>
                    <p>Ipatov Ioan Alexandru</p>
                </div>
                <div className={styles.details_flex}>
                    <Link href="https://www.instagram.com/ioanalexandruipatov"><a target="_blank">
                    <Image src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638882738/Portfolio-Website/Logos/4102579_applications_instagram_media_social_icon_gm6ttb.png" 
                    width={30} height={30} alt="IG_LOGO" />
                    </a></Link>
                    <p>@ioanalexandruipatov</p>
                </div>
                <div className={styles.details_flex}>
                    <Link href="https://twitter.com/Kennons5"><a target="_blank">
                    <Image src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638881148/Portfolio-Website/Logos/5296516_tweet_twitter_twitter_logo_icon_hkww7x.png" 
                    width={30} height={30} alt="TWITTER_LOGO" />
                    </a></Link>
                    <p>@Kennons5</p>
                </div>
                <div className={styles.details_flex}>
                    <Link href="https://www.linkedin.com/"><a target="_blank">
                    <Image src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638881384/Portfolio-Website/Logos/317725_linkedin_social_icon_uhetag.png" 
                    width={30} height={30} alt="LINKEDIN_LOGO" />
                    </a></Link>
                    <p>@IpatovIAlexandru</p>
                </div>
            </div>
            <div className={styles.f_logo_icon}>
                <Image src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638887550/Portfolio-Website/Logos/logobx_lfrhti.png"
                    width={100} height={50} alt="WEB_LOGO"/>
            </div>
        </div>
    )
}

export default PDetails;
