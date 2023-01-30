// componets
import Home from "../home/Home";

// styles
import classNames from "classnames";
import styles from "../app/App.module.scss";

function App() {
    return (
        <div className={classNames(styles.App)}>
            <Home />
        </div>
    );
}

export default App;
