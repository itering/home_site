import React, {Component} from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./style.module.scss";
import {Col, Container, Image, Row} from "react-bootstrap";
import solution1 from "./img/s1.png";
import solution2 from "./img/s2.png";
import solution3 from "./img/s3.png";
import PageFooter from "../../components/PageFooter/PageFooter";
import {withTranslation} from "react-i18next";

class Custom extends Component {
    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader/>

                <Container className={styles.airGappedArea}>
                    <Row className={['justify-content-center']}>
                        <Col md={10} className={`${styles.sectionTitle} text-center`}>
                            <h1>{t('solution_air_gap:title')}</h1>
                            <p>{t('solution_air_gap:subtitle')}</p>
                        </Col>
                        <Col lg={10} className={styles.solutionBox}>
                            <Row className={'d-flex justify-content-center text-left'}>
                                <Col lg={{order: 1, span: 1}}/>
                                <Col xs={{order: 1, span: 10}} lg={{order: 2, span: 5}}>
                                    <Image className={styles.solutionImage} src={solution1}/>
                                </Col>
                                <Col xs={{order: 12, span: 10}} lg={{order: 3, span: 6}}
                                     className={styles.solutionDescription}>
                                    <p>{t('solution_air_gap:section_feature_1')}</p>
                                </Col>
                            </Row>

                            <Row className={'d-flex justify-content-center text-left'}>
                                <Col lg={{order: 2, span: 6}} xs={{order: 12, span: 12}}
                                     className={styles.solutionDescription}>
                                    <p>{t('solution_air_gap:section_feature_2')}</p>
                                </Col>
                                <Col lg={{order: 3, span: 5}} xs={{order: 1, span: 12}}>
                                    <Image className={styles.solutionImage} src={solution2}/>
                                </Col>
                                <Col lg={{order: 4, span: 1}}/>
                            </Row>

                            <Row className={'d-flex justify-content-center text-left'}>
                                <Col lg={{order: 1, span: 1}}/>
                                <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 5}}>
                                    <Image className={styles.solutionImage} src={solution3}/>
                                </Col>
                                <Col xs={{order: 12, span: 12}} lg={{order: 3, span: 6}}
                                     className={styles.solutionDescription}>
                                    <p>{t('solution_air_gap:section_feature_3')}</p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Container>

                <div className={`${styles.customSolutionArea}`}>
                    <Container>
                        <Row className={`${styles.box} d-flex justify-content-center text-center`}>
                            <Col md={10} className={styles.sectionTitle}>
                                <h1>{t('solution_air_gap:section_feature_scene_title')}</h1>
                            </Col>
                            <Col md={10}>
                                <Row>
                                    <Col xs={6} md={3} className={'px-4'}>
                                        <img className={'w-100'} src={require('./img/ms1.png')}/>
                                        <p>{t('solution_air_gap:section_feature_scene_1')}</p>
                                    </Col>
                                    <Col xs={6} md={3} className={'px-4'}>
                                        <img className={'w-100'} src={require('./img/ms2.png')}/>
                                        <p>{t('solution_air_gap:section_feature_scene_2')}</p>
                                    </Col>
                                    <Col xs={6} md={3} className={'px-4'}>
                                        <img className={'w-100'} src={require('./img/ms3.png')}/>
                                        <p>{t('solution_air_gap:section_feature_scene_3')}</p>
                                    </Col>
                                    <Col xs={6} md={3} className={'px-4'}>
                                        <img className={'w-100'} src={require('./img/ms4.png')}/>
                                        <p>{t('solution_air_gap:section_feature_scene_4')}</p>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <PageFooter/>
            </div>
        )
    }
}

export default withTranslation()(Custom)
