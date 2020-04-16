import React, {Component} from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import TeamItem from "./TeamItem";
import Jobs from './Jobs'
import teamData from './team'
import partnerData from './partner'

import locationBanner from './img/location-banner.png'
import {withTranslation} from "react-i18next";
import archorsComponent from "../../components/anchorsComponent";

class About extends Component {

    componentDidMount(){
        archorsComponent()
    }

    renderTeam = () => {
        return <>
            {teamData.map((o, i) => {
                return <TeamItem img={require(`./img/team/${o.avatar}`)} key={'teamItem_' + i} name={o.name}
                                 office={o.office} introduction={o.introduction}/>
            })}
            </>
    }

    renderPartner = () => {
        return <Row className={styles.partnerItem}>
            {partnerData.map((o, i) => {
                return <Col xs={6} lg={4} key={'partner_' + i} className={'d-flex justify-content-center'}>
                    <div className={styles.box}>
                        <a href={o.website} target="_blank" rel="noopener noreferrer">
                            <img src={require(`./img/partner/${o.avatar}`)} key={'partnerItem_' + i} alt={o.name}/>
                        </a>
                    </div>
                </Col>
            })}
        </Row>
    }

    render() {
        const {t} = this.props
        return (
            <div>
                <a id={'founder'}></a>
                <div className={styles.homeBannerArea}>
                    <PageHeader/>
                    <Container className={styles.pageTitle}>
                        <h1>{t('about_page:title')}</h1>
                    </Container>
                    <Container className={[styles.spaceSection, styles.teamSection]}>
                        <Row className={[styles.darkTitle, 'justify-content-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <h1>{t('about_page:section_team_title')}</h1>
                            </Col>
                            <Col lg={10}>
                                {this.renderTeam()}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <a id={'partner'}></a>
                <div className={styles.partnerArea}>
                    <Container className={styles.partnerSection}>
                        <Row className={['d-flex justify-content-md-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <h1>{t('about_page:section_partner_title')}</h1>
                            </Col>
                            <Col lg={10}>
                                {this.renderPartner()}
                            </Col>
                        </Row>
                    </Container>
                </div>


                <a id={'location'}></a>
                <Container>
                    <Row className={`${styles.locationTitle} d-flex justify-content-center`}>
                        <Col md={10} className={styles.sectionTitle}>
                            <h1>{t('about_page:section_location_title')}</h1>
                        </Col>
                    </Row>
                </Container>
                <div className={`${styles.locationArea} d-flex justify-content-center align-items-end`}>
                    <Container>
                        <Row className={[styles.locationImgBox, 'd-flex justify-content-center']}>
                            <Col md={10}>
                                {/*<img src={locationBanner}/>*/}
                                <Row className={[styles.textBox, 'd-flex justify-content-center']}>
                                    <Col xs={10} md={8}>
                                        <Row className="d-flex justify-content-between ">
                                            <Col xs={12} md={6} className={'text-center text-md-left'}>
                                                <span>86 - 021 - 8039 2632</span>
                                            </Col>
                                            <Col xs={12} md={6} className={'text-center text-md-right'}>
                                                <span>contact@itering.com</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <a id={'recruit'}></a>
                <div className={styles.jobs}>
                    <Container>
                        <Row className={['d-flex justify-content-center']}>
                            <Col md={10} className={styles.sectionTitle}>
                                <h1>{t('about_page:section_jobs_title')}</h1>
                            </Col>
                        </Row>
                        <Row className={'d-flex justify-content-center'}>
                            <Col md={10}>
                                <Jobs/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(About);
