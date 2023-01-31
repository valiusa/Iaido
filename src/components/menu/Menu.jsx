import React from "react";

// styles
import classNames from "classnames";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={classNames(styles.menu_container)}>
            <div className={classNames(styles.menu_item)}>
                <a href="/" className={classNames(styles.menu_link)}>
                    Начало
                </a>
            </div>
            <div className={classNames(styles.menu_item)}>
                <a href="../About" className={classNames(styles.menu_link)}>
                    За нас
                </a>
            </div>
            <div className={classNames(styles.menu_item)}>
                <a href="../Iaido" className={classNames(styles.menu_link)}>
                    Иайдо
                </a>
            </div>
            <div className={classNames(styles.menu_item)}>
                <a href="../Jodo" className={classNames(styles.menu_link)}>
                    Джодо
                </a>
            </div>
            <div className={classNames(styles.menu_item)}>
                <a href="../Contacts" className={classNames(styles.menu_link)}>
                    Контакти
                </a>
            </div>
        </div>
    );
}
