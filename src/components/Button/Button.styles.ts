import tailwind from '@utils/tailwind';

const styles = {
  button: tailwind('rounded-lg'),
  bgColor: {
    primary: {
      enabled: tailwind('bg-purple'),
      disabled: { backgroundColor: '#2d2f6a' }
    },
    default: {
      enabled: tailwind('bg-off-white'),
      disabled: tailwind('bg-gray-medium')
    },
    transparent: {
      enabled: tailwind('bg-transparent'),
      disabled: tailwind('bg-transparent')
    }
  },
  borderColor: {
    primary: tailwind('border	border-purple'),
    default: tailwind('border	border-off-white'),
    transparent: tailwind('border-0')
  },
  text: tailwind('normal-case'),
  textColor: {
    primary: {
      contained: {
        enabled: tailwind('text-white'),
        disabled: { color: '#42446e' }
      },
      outlined: {
        enabled: tailwind('text-purple'),
        disabled: tailwind('text-purple bg-opacity-40')
      },
      text: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      }
    },
    default: {
      contained: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      },
      outlined: {
        enabled: tailwind('text-white'),
        disabled: tailwind('text-gray-medium')
      },
      text: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      }
    },
    transparent: {
      contained: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      },
      outlined: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      },
      text: {
        enabled: tailwind('text-charcoal'),
        disabled: tailwind('text-charcoal')
      }
    }
  },
  padding: {
    sm: tailwind(''),
    md: tailwind(''),
    lg: tailwind('')
  }
};

export default styles;
