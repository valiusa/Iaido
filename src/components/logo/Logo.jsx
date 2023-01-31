import React from "react";

// styles
import classNames from "classnames";
import styles from "./Logo.module.scss";

// fonts
import "../../../src/fonts/Japanese3017.ttf";

export default function Logo({ width, height }) {
    return (
        <div className={classNames(styles.logo_container)}>
            <div
                className={classNames(styles.logo_img_container)}
                style={{ widows: width, height: height, borderRadius: "50%" }}
            >
                <img
                    alt="test"
                    src={require("../../assets/images/club_logo.jpg")}
                    width={width}
                    height={height}
                    style={{ borderRadius: "50%" }}
                />
            </div>
            <div>
                <h1 className={classNames(styles.logo_text)}>
                    Iaido Club Sofia
                </h1>
            </div>
        </div>
    );
}
