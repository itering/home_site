import React, {Component} from "react";
import {Container, Row, Col, Image, Nav} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import section1_main from './img/section-1-main.png'
import solution1 from './img/section-2-solution-1.png'
import solution2 from './img/section-2-solution-2.png'
import solution3 from './img/section-2-solution-3.png'
import solution4 from './img/section-2-solution-4.png'
import section3_bg from './img/section-3-bg.png'
import feature1 from './img/section-3-feature-1.png'
import feature2 from './img/section-3-feature-2.png'
import feature3 from './img/section-3-feature-3.png'
import feature4 from './img/section-3-feature-4.png'
import demo1 from './img/section-4-demo-1.png'
import demo2 from './img/section-4-demo-2.png'
import demo3 from './img/section-4-demo-3.png'
import demo4 from './img/section-4-demo-4.png'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";

import Dropdown from "../../../node_modules/react-bootstrap/es/Dropdown";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            area1: false,
            area2: false,
            area3: false,
        }
    }

    componentDidMount(){
        archorsComponent()
    }

    areaMapHandle = (key, status) => {
        this.setState({
            [key]: status
        })
    }

    toIteringID = () => {
    }

    render() {
        const {t} = this.props
        const {area1, area2, area3} = this.state
        return (
            <div>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader} theme="dark"/>
                    <Container>
                        <Row className={`${styles.promoteContentArea} d-flex justify-content-center`}>
                            <Col xs={11} sm={{ span: 7, offset: 3 }}>
                                <p>{t('home_page:slogan')}</p>
                                <div className={styles.line}></div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <a className="external" id="core_technology"></a>
                <div className={styles.section1}>
                    <Container>
                        <a className="external" id="core_technology"></a>
                        <Row className={[styles.darkTitle, 'justify-content-md-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <div>{t('home_page:section_1_title')}</div>
                                <div className={styles.line}></div>
                            </Col>
                            <div className={styles.landscapeBox}>
                                <div className={styles.landscape}>
                                    <img src={section1_main}/>
                                </div>
                                <ul>
                                    <li>
                                        <div>
                                            {t('home_page:section_1_alliance_chain')}
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            {t('home_page:section_1_depository')}
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            {t('home_page:section_1_chain_network')}
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            {t('home_page:section_1_platform')}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
                
                <a id="solution"></a>
                <div className={styles.section2}>
                    <Container className={styles.lgSpaceSection}>
                        <Row className={[styles.darkTitle, 'justify-content-md-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <div>{t('home_page:section_2_title')}</div>
                                <div className={styles.line}></div>
                            </Col>
                            <ul>
                                <li>
                                    <Image src={solution1} rounded/>
                                    <div>{t('home_page:section_2_feature_1_title')}</div>
                                    <p>{t('home_page:section_2_feature_1_content')}</p>
                                </li>
                                <li>
                                    <Image src={solution2} rounded/>
                                    <div>{t('home_page:section_2_feature_2_title')}</div>
                                    <p>{t('home_page:section_2_feature_2_content')}</p>
                                </li>
                                <li>
                                    <Image src={solution3} rounded/>
                                    <div>{t('home_page:section_2_feature_3_title')}</div>
                                    <p>{t('home_page:section_2_feature_3_content')}</p>
                                </li>
                                <li>
                                    <Image src={solution4} rounded/>
                                    <div>{t('home_page:section_2_feature_4_title')}</div>
                                    <p>{t('home_page:section_2_feature_4_content')}</p>
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>

                <a id="characteristic"></a>
                <div className={styles.section3}>
                    <Container className={styles.fullSpaceSection}>
                        <Row className={[styles.lightTitle, 'justify-content-md-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <div>{t('home_page:section_3_title')}</div>
                                <div className={styles.line}></div>
                            </Col>
                            <div className={styles.section3Wrapper}>
                                <Image src={section3_bg}/>
                                <ul>
                                    <li>
                                        <Image src={feature1}/>
                                        <div className={styles.section3IntroWrapper}>
                                            <div>{t('home_page:section_3_feature_1_title')}</div>
                                            <p>{t('home_page:section_3_feature_1_content')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <Image src={feature2}/>
                                        <div className={styles.section3IntroWrapper}>
                                            <div>{t('home_page:section_3_feature_2_title')}</div>
                                            <p>{t('home_page:section_3_feature_2_content')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <Image src={feature3}/>
                                        <div className={styles.section3IntroWrapper}>
                                            <div>{t('home_page:section_3_feature_3_title')}</div>
                                            <p>{t('home_page:section_3_feature_3_content')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <Image src={feature4}/>
                                        <div className={styles.section3IntroWrapper}>
                                            <div>{t('home_page:section_3_feature_4_title')}</div>
                                            <p>{t('home_page:section_3_feature_4_content')}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
                
                <a id="product"></a>
                <div className={styles.section4}>
                    <Container className={styles.lgSpaceSection}>
                        <Row className={[styles.darkTitle, 'justify-content-md-center']}>
                            <Col lg={10} className={styles.sectionTitle}>
                                <div>{t('home_page:section_4_title')}</div>
                                <div className={styles.line}></div>
                            </Col>
                            <ul>

                                <li>
                                    <a href="/solution/dkms">
                                        <Image src={demo1}/>
                                        <div>{t('home_page:section_4_dkms')}</div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://id.itering.com/">
                                        <Image src={demo2}/>
                                        <div>{t('home_page:section_4_itering')}</div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://subscan.io/">
                                        <Image src={demo3}/>
                                        <div>{t('home_page:section_4_browser')}</div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://nft.itering.com/">
                                        <Image src={demo4}/>
                                        <div>{t('home_page:section_4_nft')}</div>
                                    </a>
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Home);
