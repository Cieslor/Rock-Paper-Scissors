export const tokenPickerContainerVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        duration: 0.8,
        ease: 'backInOut',
      },
      opacity: {
        duration: 1.5,
      },
    },
  },
};
