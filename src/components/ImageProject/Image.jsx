import styles from './Image.module.css';

import {motion} from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export const Image = (props) => {
    const {handleShow} = props;

    return (
        <motion.figure
            key={props.key} 
            className={styles['ImageContainer']} 
            onClick={() => handleShow(props.src)}
            variants={fadeIn(0.2)}
            initial='hidden'
            animate='show'
        >
            <img src={props.src} alt="Project Image"></img>  
        </motion.figure>
    );
}