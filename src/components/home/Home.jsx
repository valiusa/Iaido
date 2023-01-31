import React from "react";

// componets
import SocialMedias from "../social_medias/SocialMedias";
import Logo from "../logo/Logo";

// styles
import classNames from "classnames";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={classNames(styles.home_container)}>
            <SocialMedias />
            <Logo width={400} height={400} />
        </div>
    );
}
