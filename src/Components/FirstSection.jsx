import { motion } from "framer-motion";

export default function FirstSection() {
    return (
        <div className="section">
            <motion.div
                className="section__start"
                initial={{ y: [-20, 0, -20] }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    bounce: 100,
                }}>
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="section__arrow">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
            </motion.div>
            <div className="section__abbout">
                <div className="section__list">
                    <div className="section__title">Who Am I? </div>
                    <div className="section__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Recusandae molestias temporibus minima eum dicta
                        obcaecati vero doloremque tempore omnis, aut itaque
                        animi eius, nisi et. Dolor dolorem vero reiciendis illo.
                    </div>
                </div>
                <div className="section__list">
                    <div className="section__title">Who Am I? </div>
                    <div className="section__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Recusandae molestias temporibus minima eum dicta
                        obcaecati vero doloremque tempore omnis, aut itaque
                        animi eius, nisi et. Dolor dolorem vero reiciendis illo.
                    </div>
                </div>
                <div className="section__list">
                    <div className="section__title">Who Am I? </div>
                    <div className="section__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Recusandae molestias temporibus minima eum dicta
                        obcaecati vero doloremque tempore omnis, aut itaque
                        animi eius, nisi et. Dolor dolorem vero reiciendis illo.
                    </div>
                </div>
            </div>
        </div>
    );
}
