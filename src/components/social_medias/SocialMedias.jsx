import React from "react";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// styles
import classNames from "classnames";
import styles from "./SocialMedias.module.scss";

export default function SocialMedias() {
    return (
        <div className={classNames(styles.social_medias_container)}>
            <div className={classNames(styles.social_media_btn_container)}>
                <a
                    href="https://www.facebook.com/IaidoClubSofia"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ color: "#0b0b0d" }}
                        icon={faFacebook}
                        size={"2x"}
                    />
                </a>
            </div>
            <div className={classNames(styles.social_media_btn_container)}>
                <a
                    href="https://www.instagram.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ color: "#000000" }}
                        icon={faInstagram}
                        size={"2x"}
                    />
                </a>
            </div>
            <div className={classNames(styles.social_media_btn_container)}>
                <a
                    href="https://www.youtube.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ color: "#000000" }}
                        icon={faYoutube}
                        size={"2x"}
                    />
                </a>
            </div>
        </div>
    );
}
