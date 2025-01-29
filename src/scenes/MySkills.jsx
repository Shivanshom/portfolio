import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24 ">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                    With expertise in scalable backend systems, intuitive interfaces, and real-time solutions, I bring a unique blend of innovation and precision to development. My skills span across modern frameworks like React, Spring Boot, and advanced databases, ensuring seamless integration and performance.                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute  before:-top-10 before:-left-10  before:w-full  before:h-full
                    before:border-2 before:border-blue  before:z-[-1]">

                            <img
                                alt="skills"
                                className="z-10"
                                src="../assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src="../assets/skills-image.png"
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Professional Experience
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    At Electrowaves Electronics, I developed REST APIs using Spring Boot and upgraded legacy systems from React 16 to React 18. My work included designing user-friendly interfaces with React Native and managing robust databases with JPA/Hibernate.                    </p>
                </motion.div>

                {/* INNOVATION */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Innovative Development
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    I thrive on crafting innovative solutions to complex challenges. From building a real-time GPS tracking system with Kafka to implementing MQTT-based communication systems, I leverage cutting-edge technologies to deliver impactful results.                    </p>
                </motion.div>

                {/* TECHNICAL EXPERTISE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Full-Stack Proficiency
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                    My expertise spans backend frameworks like Spring Boot and Express.js, and frontend tools like React and React Native. Projects like the Inventory Management System and Location Finder App demonstrate my ability to integrate APIs and build scalable, user-friendly applications.                    </p>
                </motion.div>
            </div>
        </section>
    )
};

export default MySkills;