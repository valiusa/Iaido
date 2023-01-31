import React from "react";

// styles
import classNames from "classnames";
import styles from "./Logo.module.scss";

// fonts
import "../../../src/fonts/Japanese3017.ttf";

export default function Logo({ width, height }) {
    return (
        <div className={classNames(styles.logo_container)}>
            <img
                alt="test"
                src={require("../../assets/images/club_logo.jpg")}
                width={width}
                height={height}
                style={{ borderRadius: "50%" }}
                className={classNames(styles.logo_img)}
            />
            <div>
                <h1 className={classNames(styles.logo_text)}>
                    Iaido Club Sofia
                </h1>
            </div>
        </div>
    );
}
