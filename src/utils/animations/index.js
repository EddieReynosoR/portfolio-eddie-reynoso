
/** 
 * Make component fade in from opacity 0 to opacity 1
 * @param {number} [delay=0] - in seconds
 * @returns {Variants} Variants
 */

export const fadeIn = (delay = 0) => ({
    hidden:{
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay,
        }
    }
})

/** 
 * Make component fade in from opacity 0 to opacity 1
 * @param {number} [delay=0] - in seconds
 * @returns {Variants} Variants
 */

export const fadeInDetails = (delay = 0) => ({
  hidden:{
      opacity: 0,
  },
  show:{
      opacity: 1,
      transition: {
          type: 'spring',
          duration: 0.3,
          delay,
      }
  }
})

/**
 * Makes component slide in from given direction
 * @param {number} [object.delay=0] - delay in seconds
 * @param {Direction} [object.direction="up"] - The direction from which the component should slide in
 * @param {number} [object.offset=10] - The offset from which components should slide in
 * @param {number} [object.duration] - Transition's duration
 * @returns {Variants} Variants
 */

export const slideIn = ({delay=0, direction= 'up', offset = 10}) => {
    return {
        hidden: {
          y: direction === 'down' ? -offset : direction === 'up' ? offset : 0,
          x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
          opacity: 0,
        },
        show: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay,
          },
        },
    }
}

export const slideUp = ({
  delay = 0,
  duration = 1.25,
  offset = 20,
}) => ({
  hidden: {
    y: offset,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay,
      duration,
    },
  },
});

export const slideRight = ({
  delay = 0,
  duration = 1.25,
  offset = 20,
}) => ({
  hidden: {
    x: 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: offset,
    transition: {
      type: 'spring',
      delay,
      duration,
    },
  },
});

export const smoothAppear =  ({
  delay = 0,
  duration = 1.25,
}) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
    },
  },
});


export const skillsVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      delay: 0.2 * i,
      // duration: 0.5,
    },
  }),
};

export const projectVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      delay: 0.2 * i,
      // duration: 0.5,
    },
  }),
};