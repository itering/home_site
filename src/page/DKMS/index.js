import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./style.module.scss";
import proxyImg from './img/r1.png'
import PageFooter from "../../components/PageFooter/PageFooter";
import {withTranslation} from "react-i18next";

class DKMS extends Component {


    toDKMS = () => {
        window.open('https://dkms-demo.itering.com/')
    }

    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader/>

                <Container className={styles.featureArea}>
                    <Row className={'d-flex justify-content-center text-center'}>
                        <Col md={10} className={styles.sectionTitle}>
                            <h1>{t('solution_dkms:title')}</h1>
                            <p dangerouslySetInnerHTML={{__html:t('solution_dkms:subtitle')}}></p>
                            <div onClick={() => {this.toDKMS()}} className={styles.dkmsDemoLink}>
                                <p>{t('home_page:view_demo')}</p>
                            </div>
                        </Col>
                        <Col md={10}>
                        </Col>
                    </Row>
                    <Row className={`${styles.lineBox} d-flex justify-content-center`}>
                        <Col md={1}></Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                        <Col md={1}></Col>
                    </Row>

                    <Row className={'d-flex justify-content-center text-center'}>
                        <Col xs={8} md={2}>
                            <img className={'w-100'} src={require('./img/f1.png')} alt=""/>
                            <p>{t('solution_dkms:section_elements-1')}</p>
                        </Col>
                        <Col xs={8} md={2}>
                            <img className={'w-100'} src={require('./img/f2.png')} alt=""/>
                            <p>{t('solution_dkms:section_elements-2')}</p>
                        </Col>
                        <Col xs={8} md={2}>
                            <img className={'w-100'} src={require('./img/f3.png')} alt=""/>
                            <p>{t('solution_dkms:section_elements-3')}</p>
                        </Col>
                        <Col xs={8} md={2}>
                            <img className={'w-100'} src={require('./img/f4.png')} alt=""/>
                            <p>{t('solution_dkms:section_elements-4')}</p>
                        </Col>
                        <Col xs={8} md={2}>
                            <img className={'w-100'} src={require('./img/f5.png')} alt=""/>
                            <p>{t('solution_dkms:section_elements-5')}</p>
                        </Col>
                    </Row>
                </Container>

                <Container className={styles.thresholdArea}>
                    <Row className={'d-flex justify-content-center text-center'}>
                        <Col md={10} className={styles.sectionTitle}>
                            <h1>{t('solution_dkms:section_feature_sign_title')}</h1>
                            <p dangerouslySetInnerHTML={{__html: t('solution_dkms:section_feature_sign_subtitle')}}></p>
                        </Col>
                        <Col md={8}>
                            <table className={`${styles.table} w-100 text-center`}>
                                <tbody>
                                    <tr>
                                        <th width="25%"></th>
                                        <th width="25%">{t('solution_dkms:section_feature_sign_single')}</th>
                                        <th width="25%">{t('solution_dkms:section_feature_sign_multisig')}</th>
                                        <th width="25%">{t('solution_dkms:section_feature_sign_thresholdSig')}</th>
                                    </tr>
                                    <tr>
                                        <th>{t('solution_dkms:section_feature_sign_tb_1')}</th>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_1')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_2')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_2')}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('solution_dkms:section_feature_sign_tb_2')}</th>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_1')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_2')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_lv_3')}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('solution_dkms:section_feature_sign_tb_3')}</th>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_1')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_2')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_3')}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('solution_dkms:section_feature_sign_tb_4')}</th>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_1')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_1')}</td>
                                        <td>{t('solution_dkms:section_feature_sign_tb_safe_3')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>

                <div className={styles.proxyArea}>
                    <Container>
                        <Row className={'d-flex justify-content-center text-center'}>
                            <Col xs={10} md={6}>
                                <img className={'w-100'} src={proxyImg} alt=""/>
                            </Col>
                            <Col md={10} className={styles.sectionTitle}>
                                <h1>{t('solution_dkms:section_feature_proxy_title')}</h1>
                                <p dangerouslySetInnerHTML={{__html: t('solution_dkms:section_feature_proxy_subtitle')}}></p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container className={`${styles.featureArea} ${styles.advanceArea}`}>
                    <Row className={`${styles.box} d-flex justify-content-center text-center`}>
                        <Col md={10} className={styles.sectionTitle}>
                            <h1>{t('solution_dkms:section_feature_advantage_title')}</h1>
                        </Col>
                        <Col md={10}>
                            <Row className={`d-flex justify-content-center text-center`}>
                                <Col xs={6} sm={6} md={3} className={'px-4 mb-4'}>
                                    <img className={'w-100'} src={require('./img/a1.png')} alt=""/>
                                    <p>{t('solution_dkms:section_feature_advantage_1')}</p>
                                </Col>
                                <Col xs={6} sm={6} md={3} className={'px-4 mb-4'}>
                                    <img className={'w-100'} src={require('./img/a2.png')} alt=""/>
                                    <p>{t('solution_dkms:section_feature_advantage_2')}</p>
                                </Col>
                                <Col xs={6} sm={6} md={3} className={'px-4 mb-4'}>
                                    <img className={'w-100'} src={require('./img/a3.png')} alt=""/>
                                    <p>{t('solution_dkms:section_feature_advantage_3')}</p>
                                </Col>
                                <Col xs={6} sm={6} md={3} className={'px-4 mb-4'}>
                                    <img className={'w-100'} src={require('./img/a4.png')} alt=""/>
                                    <p>{t('solution_dkms:section_feature_advantage_4')}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className={`d-flex justify-content-center text-center`}>
                        <Col md={10} className={styles.sectionTitle}>
                            <h1>{t('solution_dkms:section_feature_scene_title')}</h1>
                        </Col>
                        <Col md={10}>
                           <Row className={`d-flex justify-content-center text-center`}>
                               <Col xs={10} md={4} className={'px-4 mb-4'}>
                                   <img className={'w-100'} src={require('./img/s1.png')} alt=""/>
                                   <p>{t('solution_dkms:section_feature_scene_1')}</p>
                               </Col>
                               <Col xs={10} md={4} className={'px-4 mb-4'}>
                                   <img className={'w-100'} src={require('./img/s2.png')} alt=""/>
                                   <p>{t('solution_dkms:section_feature_scene_2')}</p>
                               </Col>
                               <Col xs={10} md={4} className={'px-4 mb-4'}>
                                   <img className={'w-100'} src={require('./img/s3.png')} alt=""/>
                                   <p>{t('solution_dkms:section_feature_scene_3')}</p>
                               </Col>
                           </Row>
                        </Col>

                    </Row>
                </Container>

                <PageFooter/>
            </div>
        )
    }
}

export default withTranslation()(DKMS)
