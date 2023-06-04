import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FirstSection() {
    return (
        <div className="section">
            <motion.ul>
                <motion.li
                    className=""
                    initial={{ y: 300, opacity: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 1,
                        delay: 0.1,
                    }}
                    viewport={{ once: true }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati veniam mollitia, sit doloribus harum quae
                        itaque possimus deleniti. Libero iure beatae eos alias
                        tempora expedita provident fuga inventore porro
                        voluptate excepturi sit, vitae praesentium cumque
                        officia suscipit explicabo? Atque, id.
                    </p>
                </motion.li>
                <motion.li
                    className=""
                    initial={{ y: 300, opacity: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    viewport={{ once: true }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati veniam mollitia, sit doloribus harum quae
                        itaque possimus deleniti. Libero iure beatae eos alias
                        tempora expedita provident fuga inventore porro
                        voluptate excepturi sit, vitae praesentium cumque
                        officia suscipit explicabo? Atque, id.
                    </p>
                </motion.li>
            </motion.ul>
        </div>
    );
}
