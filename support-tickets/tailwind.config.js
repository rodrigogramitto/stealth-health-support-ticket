import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f7fcfd',
          secondary: '#25A18E',
          accent: '#00A5CF',
          neutral: '#2a323c',
          'base-100': 'var(--color-primary)',
          info: '#9FFFCB',
          success: '#36d399',
          warning: '#ec4899',
          error: '#9f1239',
          fontFamily: {'sans': 'Roboto'}
        },
      },
    ],
  },
  plugins: [daisyui],
};

