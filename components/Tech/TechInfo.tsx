import React, { useState } from 'react'
import styles from '../../styles/scss/Techinfo.module.scss'
import Logo from '../Logo'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import TechList from './TechList'
import { useInView } from 'react-intersection-observer';

const TechInfo: React.FC = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const[ allTech, setAllTech ] = useState(false);

    function allTechnologiesClick(){
        setAllTech(!allTech)
      }
    return (
        <div>
          <div className={styles.spec_flex}>
              <p ref={ref} className={inView ? styles.text_tech : styles.vis_none}>Over the course of many years I've managed to learn a vast variety of programming languages, libraries and technologies, covering both frotend
                and backend developments. This way I was able to understand the logic of a website, while gathering a lot of technical
                knowledge.
              </p>
              <div className={inView ? styles.tech_logos : styles.vis_none}>
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
              </div>
          </div>
          <div className={styles.all_tech}>
              <a href="#knd">
                <button onClick={allTechnologiesClick}>
                  {!allTech ? <RiArrowDownSLine size={30}/> : <RiArrowUpSLine size={30} />}
                </button>
              </a>
          </div>
          {allTech && 
            <div id="knd" className={`${styles.list_all_tech}`}>
              <TechList />
            </div>
          }
        </div>
    )
}

export default TechInfo;
