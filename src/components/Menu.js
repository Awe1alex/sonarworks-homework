import { Link } from "react-router-dom";

import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <ul className={styles.list}>
            <li>
                <Link to="/privacyPolicy">
                    Privacy Policy →
                </Link>
            </li>
            <li>
                <Link to="/partnershipPolicy">
                    Partnership Policy →
                </Link>
            </li>
        </ul>
    )
}

export default Menu