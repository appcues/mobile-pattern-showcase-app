export const color = {
  neutral0: '#FFFFFF',
  neutral50: '#F7FAFF',
  neutral100: '#D0D7E4',
  neutral500: '#8492AE',
  neutral600: '#627293',
  neutral700: '#425678',
  neutral800: '#1F2F4F',
  neutral900: '#0B1A38',
  burple600: '#5C5CFF',
};

export const gradient = {
  blurpleHaze: ['#5C5CFF', '#8960FF'],
  moodLighting: ['#5C5CFF', '#8AD5FF'],
  galaxy: ['#5C5CFF', '#FF92C6'],
  tropico: ['#8960FF', '#FF5290'],
  babyHaze: ['#DDDDFD', '#CFEEFF'],
  regulus: ['#0B1A38', '#3B456A'],
};

export const shadow = {
  elevation100: {
    shadowColor: color.neutral900,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
  elevation200: {
    shadowColor: color.neutral900,
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    elevation: 16,
  },
  elevation300: {
    shadowColor: color.neutral900,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 34,
    elevation: 34,
  },
  elevation400: {
    shadowColor: color.neutral900,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 34,
    elevation: 34,
  },
};
