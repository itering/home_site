import React, {Component} from "react";
import {Button, Collapse} from 'react-bootstrap'

import styles from './jobs.module.scss'
import jobsData from './jobs.json'
import {withTranslation} from "react-i18next";

class JobCollapse extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {
        const {open} = this.state
        const {id, t,title, base, content} = this.props
        return (
            <>
                <div
                    onClick={() => this.setState({open: !open})}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className={[' d-flex justify-content-between align-items-center ', styles.items].join(' ')}>
                    <div>
                        <p>{t(`about_page:${title}`)}</p>
                        <p>[ {t(`about_page:${base}`)} ]</p>
                    </div>
                    <div className={'d-none d-sm-block'}>
                        <a className={styles.sendEmail}
                           href={'mailto:contact@itering.com'}>{t('about_page:section_jobs_contact_btn')}</a>
                    </div>
                </div>
                <Collapse in={this.state.open}>
                    <div className={`${styles.content}`} id={id}>
                        <p dangerouslySetInnerHTML={{__html: content}}/>
                    </div>
                </Collapse>
            </>
        );
    }
}

class Jobs extends Component {

    render() {
        const {t} = this.props
        return (
            <div>
                {jobsData.map((o, i) => {
                    // return <div className={styles.jobsSection} key={"jobs_" + i}>
                    //     <div
                    //         className={[' d-flex justify-content-between align-items-center ', styles.items].join(' ')}>
                    //         <div>
                    //             <p>{t(`about_page:${o.title}`)}</p>
                    //             <p>[ {t(`about_page:${o.base}`)} ]</p>
                    //         </div>
                    //         <div className={'d-none d-sm-block'}>
                    //             <a className={styles.sendEmail}
                    //                href={'mailto:contact@itering.com'}>{t('about_page:section_jobs_contact_btn')}</a>
                    //         </div>
                    //     </div>
                    //     <div className={`${styles.content}`}>
                    //         <p dangerouslySetInnerHTML={{__html: t(`about_page:${o.content}`)}}/>
                    //     </div>
                    // </div>

                    return <div className={styles.jobsSection} key={"jobs_" + i}>
                        <JobCollapse id={"jobs_" + i} title={t(`about_page:${o.title}`)} base={t(`about_page:${o.base}`)} content={t(`about_page:${o.content}`)} t={t}>

                        </JobCollapse>
                    </div>
                })}
            </div>
        );
    }
}

export default withTranslation()(Jobs);
