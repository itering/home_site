import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'
import recordIcon from './img/recordicon.png'

import githubIconXS from './img/xs_github.png'
import mailIconXS from './img/xs_mail.png'
import twitterIconXS from './img/xs_twitter.png'

import githubIconMD from './img/md_github.png'
import mailIconMD from './img/md_mail.png'
import twitterIconMD from './img/md_twitter.png'

class PageFooter extends Component {
    render() {
        const {t} = this.props

        return (
            <div className={styles.navFooter}>
                <div className={`${styles.recordPC}`}>
                    <p>{t('footer:record_1', {year: 2020})}</p>
                    <div className={styles.recordInfo}>
                        <img src={recordIcon}/>
                        <p>{t('footer:record_2')}</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <a href="mailto:contact@itering.com" target="_blank"><img width={28} src={mailIconMD}/></a>
                        <a href="https://github.com/itering" target="_blank" rel="noopener noreferrer">
                            <img width={17} src={githubIconMD}/>
                        </a>
                        <a href="https://twitter.com/IteringTech" target="_blank" rel="noopener noreferrer">
                            <img width={23} src={twitterIconMD}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(PageFooter);
