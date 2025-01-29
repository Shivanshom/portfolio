import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, subtitle }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="font-playfair text-2xl">   {title}</p>
                <p className="mt-7">
                    {subtitle}
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl ">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                Dive into a collection of projects that showcase my expertise in full-stack development, scalable systems, and innovative solutions. From crafting seamless user interfaces to implementing real-time functionality, each project reflects my passion for technology and problem-solving.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        INNOVATIVE SOLUTIONS
                    </div>
                    <Project title="Inventory Management System" subtitle="Built a scalable system using Spring Boot and React Native for real-time inventory tracking. Managed databases with JPA/Hibernate to ensure seamless operations." />
                    <Project title="Electric Cab Admin Panel" subtitle="Developed an admin dashboard using React and CoreUI for managing electric cab services. Enabled efficient operations with an intuitive user interface."/>

                    {/* ROW 2 */}
                    <Project title="React Legacy Code Upgrade" subtitle="Upgraded 5-year-old React codebase from version 16 to 18, ensuring compatibility and performance. Overcame complex challenges in modernizing legacy systems."/>
                    <Project title="Real-Time GPS Tracking System" subtitle="Created a Python backend with Kafka for handling real-time GPS data streams. Simulated seamless navigation with efficient data flow."/>
                    <Project title="Real-Time Location Tracker" subtitle="Built a mobile app using React Native, Express.js, and MongoDB for real-time user location tracking. Designed for accuracy and performance."/>

                    {/* ROW 3 */}
                    <Project title="Local MQTT Messaging System" subtitle="Implemented a messaging system using the MQTT protocol for publisher-subscriber communication. Focused on local message exchange within a single device."/>
                    <Project title="Location Finder App" subtitle="Built a path-finding app using Google Geolocation APIs, enabling users to input two locations and visualize the route between them."/>
                    
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SEAMLESS INTEGRATION
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Projects;