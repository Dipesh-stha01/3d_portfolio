import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aperiam eos possimus consequuntur minima dolorem dicta id ducimus cupiditate, hic porro dolore perspiciatis nemo quaerat ipsa mollitia harum expedita? Cumque eaque, ut aliquam sunt asperiores consequatur aspernatur est eligendi ducimus dolorem, illum sequi! Nobis optio impedit doloribus doloremque laudantium rerum odit non quam maxime illum repudiandae nemo aliquid, beatae quibusdam fugit nihil aut fugiat eius modi quidem labore quasi! Eum odit animi reprehenderit eos natus esse debitis. Nulla at vitae quo fuga autem corporis quasi fugiat? Beatae sit, molestias consectetur facere cupiditate corporis non quibusdam deserunt est, ut tenetur neque.
        </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
/* expty tag(fragment) so that we can wrap it in sectionWrapper that has a div so we can leave  ""  */
