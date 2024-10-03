    tailwind.config = {
      theme: {
        extend: {
          colors: {
            black: '#000000',
            black1: '#242323',
            black2: '#191818',
            black3: '#191919',
            black4: '#231300',
            gray: '#7F7F7F',
            gray1: '#7C7C7C',
            gray2: '#767676',
            gray3: '#8E8E8E',
            gray4: '#D9D9D9',
            white: '#FFFFFF',
            white1: '#FFFCF8',
            white2: '#FEFEFE',
            orange1: '#EBD96B',
            orange2: '#E5C643',

          },
          fontFamily: {
            'popins': ['poppinsregular', 'sans-serif'],
            'roboto': ['robotoblack', 'sans-serif']
          },
          screens: {
            'min-4xxl': {'min': '2000px'},
            
            'max-4xl': {'max': '1920px'},

            'max-3xxl': {'max': '1800px'},

            'max-3xl': {'max': '1700px'},

            'max-2xl': {'max': '1536px'},
      
            'max-xl': {'max': '1280px'},
      
            'max-lg': {'max': '1024px'},

            'max-xmd': {'max': '992px'},
      
            'max-md': {'max': '768px'},
      
            'max-sm': {'max': '576px'},
          },
          backgroundImage: {
            'custom-gradient': 'linear-gradient(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%)',
          },
        }
      }
    }
