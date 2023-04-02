import React, { useState, useNavigate, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const variants = {
        active: {
            opacity: 1,
            x: "0",
        },
        disable: {
            opacity: 0,
            x: "100vw",
        },
    };

    return (
        <motion.nav
            initial={{ opacity: 0, scale: 1, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 1 }}
            transition={{ duration: 1 }}
            className="navbar">
            <div className="navbar_container">
                <div className="navbar__home">
                    <div className="navbar__wrap">
                        <div className="navbar__brand">Zjen</div>
                        <div className="navbar__button">
                            <motion.button
                                whileHover={{ color: "#ffff" }}
                                className={`navbar__toggle ${
                                    showMenu ? "active" : "disable"
                                }`}
                                onClick={toggleMenu}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="navbar__hamburger">
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    <motion.ul
                        initial={false}
                        variants={variants}
                        transition={{ bounce: 0 }}
                        animate={showMenu ? "active" : "disable"}
                        className={`navbar__menu ${
                            showMenu ? "active" : "disable"
                        } `}>
                        <li>
                            <motion.a
                                whileHover={{ fontSize: "20px" }}
                                href="#">
                                Home
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                whileHover={{ fontSize: "20px" }}
                                href="#">
                                Abbout
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                whileHover={{ fontSize: "20px" }}
                                href="#">
                                Contact
                            </motion.a>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </motion.nav>
    );
}
