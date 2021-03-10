import { Link } from "react-router-dom";

import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <ul className={styles.list}>
            <li>
                <Link to="/privacy">
                    Privacy Policy →
                </Link>
            </li>
            <li>
                <Link to="/partnership">
                    Partnership Policy →
                </Link>
            </li>
            <li>
                <Link to="/terms">
                    Terms and Conditions →
                </Link>
            </li>
            <li>
                <Link to="/cookies">
                    Cookies policy →
                </Link>
            </li>
            <li>
                <Link to="/partnership">
                    Support Service →
                </Link>
            </li>
            <li>
                <Link to="/partnership">
                    Sonarworks True-Fi privacy statement →
                </Link>
            </li>
        </ul>
    )
}

export default Menu