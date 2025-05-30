import { motion, MotionProps } from 'framer-motion';
import styles from './Skills.module.css';

interface SkillProps extends MotionProps {
    image: string;
    index: number;
};

export const Skill = ({ image, index, ...rest }: SkillProps) => {
    return (
        <motion.div
            {...rest}
            viewport={{ once: true }}
            className={styles[`div${index + 1}`]}>
            <img className={styles['techLogo']} src={image} alt="tech-logo" />
        </motion.div>
    );
};