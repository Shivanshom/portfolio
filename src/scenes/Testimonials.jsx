import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {

    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient width="mx-auto w-2/5" />
                <p className="mt-10">
                    Here’s what people are saying about my work. From tackling complex challenges to delivering innovative solutions, I strive to leave a lasting impact. Explore how my skills and dedication have made a difference.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}

            <div className="md:flex md:justify-between gap-8 ">
                <motion.div
                    className="mx-auto relative bg-blue max-w-[400px] h-auto flex flex-col justify-end p-16 mt-48
                        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className="font-playfair text-6xl pt-8">“</p>
                    <p className="text-center text-xl">
                        Shivansh is a dedicated Full Stack Developer with excellent problem-solving skills, adaptability, and a passion for writing clean, efficient code.

                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-red max-w-[400px] h-auto flex flex-col justify-end p-16 mt-48
                        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className="font-playfair text-6xl pt-8">“</p>
                    <p className="text-center text-xl">
                        Shivansh is a talented backend developer with exceptional problem-solving skills, technical expertise, and a collaborative team spirit.
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-yellow max-w-[400px] h-auto flex flex-col justify-end p-16 mt-48
                        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <p className="font-playfair text-6xl pt-8">“</p>
                    <p className="text-center text-xl">
                        Shivansh's passion for technology, strong grasp of algorithms, and quick learning make him an outstanding problem solver and a valuable team asset.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default Testimonials;