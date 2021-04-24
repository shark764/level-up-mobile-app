import tailwind from '@utils/tailwind';

const styles = {
  button: tailwind('rounded-lg'),
  bgColor: {
    primary: tailwind('bg-purple'),
    default: tailwind('bg-off-white'),
    transparent: tailwind('bg-transparent')
  },
  borderColor: {
    primary: tailwind('border	border-purple'),
    default: tailwind('border	border-off-white'),
    transparent: tailwind('border-0')
  },
  text: tailwind('normal-case'),
  textColor: {
    primary: {
      contained: tailwind('text-white'),
      outlined: tailwind('text-purple'),
      text: tailwind('text-charcoal')
    },
    default: {
      contained: tailwind('text-charcoal'),
      outlined: tailwind('text-off-white'),
      text: tailwind('text-charcoal')
    },
    transparent: {
      contained: tailwind('text-charcoal'),
      outlined: tailwind('text-charcoal'),
      text: tailwind('text-charcoal')
    }
  },
  padding: {
    sm: tailwind('px-3 py-1.5'),
    md: tailwind('px-8 py-3.5'),
    lg: tailwind('px-12 py-4')
  }
};

export default styles;
