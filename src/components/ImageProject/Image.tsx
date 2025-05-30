import styles from './Image.module.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface ImageProps {
    src: string;
    handleShow: (src: string) => void;
}

export const Image = (props: ImageProps) => {
    const { handleShow, src } = props;

    return (
        <motion.figure
            className={styles['ImageContainer']}
            onClick={() => handleShow(src)}
            variants={fadeIn(0.2)}
            initial='hidden'
            animate='show'
        >
            <img src={src} alt="Project Image" />
        </motion.figure>
    );
};