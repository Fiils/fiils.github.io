import React, { useState } from 'react'
import styles from '../../styles/scss/Techinfo.module.scss'
import Logo from '../Logo'
import { RiArrowDownSLine } from 'react-icons/ri'
import TechList from './TechList'

const TechInfo: React.FC = () => {

  const[ allTech, setAllTech ] = useState(false);

    function allTechnologiesClick(){
        setAllTech(!allTech)
      }
    return (
<div>
          <div className={styles.spec_flex}>
              <p>Over the course of many years I've managed to learn a vast variety of programming languages, libraries and technologies, covering both frotend
                and backend developments. This way I was able to understand the logic of a website, while gathering a lot of technical
                knowledge.
              </p>
              <div className={styles.tech_logos}>
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
                  <RiArrowDownSLine size={30}/>
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
