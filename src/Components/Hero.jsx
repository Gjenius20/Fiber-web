import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

export default function Hero() {
    return (
        <div className="hero">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 190, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                    duration: 0.8,
                    // delay: 2,
                }}
                viewport={{ once: true }}></motion.div>
        </div>
    );
}
