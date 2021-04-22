import { create } from 'tailwind-rn';
import styles from './styles.json';
import fontStyles from './font-styles.json';
import textStyles from './text-styles.json';

const { tailwind, getColor } = create({
  ...styles,
  ...fontStyles,
  ...textStyles
});

export { getColor };

export default tailwind;
