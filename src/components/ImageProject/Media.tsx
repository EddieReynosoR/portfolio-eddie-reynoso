import styles from './Image.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { isVideo } from '../../utils/helper';

interface MediaProps {
  src: string;
  handleShow: (src: string) => void;
  poster?: string; 
}

export const Media = ({ handleShow, src, poster }: MediaProps) => {
  return (
    <motion.figure
      className={styles['ImageContainer']}
      onClick={() => handleShow(src)}
      variants={fadeIn(0.2)}
      initial="hidden"
      animate="show"
    >
      {isVideo(src) ? (
        <video
          className={styles['Media']}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
        >
          <source src={src} />
        </video>
      ) : (
        <img className={styles['Media']} src={src} alt="Project media" loading="lazy" decoding="async" />
      )}
    </motion.figure>
  );
};
