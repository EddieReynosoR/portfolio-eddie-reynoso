import {motion} from 'framer-motion'
import styles from './Skills.module.css'

export const Skill = ({image, index , ...rest}) => {
    return (
        <motion.div 
            {...rest}
            viewport={{once:true}}
            className={styles[`div${index+1}`]}>
                <img src={image} alt="tech-logo" />
        </motion.div>
    )
}