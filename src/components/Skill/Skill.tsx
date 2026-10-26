import { motion, MotionProps } from 'framer-motion';
import styles from './Skills.module.css';

interface SkillProps extends MotionProps {
    image: string;
};

export const Skill = ({ image, ...rest }: SkillProps) => {
    return (
        <motion.div
            {...rest}
            viewport={{ once: true }}>
            <img className={styles['techLogo']} src={image} alt="tech-logo" />
        </motion.div>
    );
};