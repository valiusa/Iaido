import React from "react";

// componets
import SocialMedias from "../social_medias/SocialMedias";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";

// styles
import classNames from "classnames";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={classNames(styles.home_container)}>
            <img
                alt="sakura_birch"
                src={require("../../assets/images/sakura.jpg")}
                className={classNames(styles.sakura_top)}
            />
            <Menu />
            <SocialMedias />
            <Logo width={400} height={400} />
            <img
                alt="sakura_birch"
                src={require("../../assets/images/sakura.jpg")}
                className={classNames(styles.sakura_bottom)}
            />
        </div>
    );
}
