import logo from "../../../src/logo.svg";

// styles
import classNames from "classnames";
import styles from "../app/App.module.scss";

function App() {
    return (
        <div className={classNames(styles.App)}>
            <header className={classNames(styles.App_header)}>
                <img
                    src={logo}
                    className={classNames(styles.App_logo)}
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={classNames(styles.App_link)}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
