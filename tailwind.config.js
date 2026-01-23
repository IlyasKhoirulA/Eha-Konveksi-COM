/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        // Durasi 20s agar pergerakan lebih lambat dan smooth
        'slide-left': 'slide-left 20s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          // Gerakkan 100% dari lebar container, bukan 50%
          // Karena kita menduplikasi gambar, animasi akan kembali ke awal dengan mulus
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
    },
  },
  plugins: [],
}