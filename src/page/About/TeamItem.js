import React, {Component} from "react";
import styles from './teamitem.module.scss'
import {withTranslation} from "react-i18next";

class TeamItem extends Component {
    render() {
        const {t} = this.props
        return (
            <div className={styles.teamItem}>
                <img alt="" src={this.props.img}/>
                <div className={styles.titleWrapper}>
                    <p className={styles.name}>{this.props.name}</p>
                    <p className={styles.jobTitle}>{t(`about_page:${this.props.office}`)}</p>
                </div>
                <p className={styles.intro}>{t(`about_page:${this.props.introduction}`)}</p>

            </div>
        );
    }
}

export default withTranslation()(TeamItem);
