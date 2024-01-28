import styles from './Image.module.css'

export const Image = (props) => {
    const {handleShow} = props

    return (
    <figure className={styles['ImageContainer']} onClick={() => handleShow(props.src)}>
        <img src={props.src} alt="Project Image"></img>  
    </figure>
    )
}