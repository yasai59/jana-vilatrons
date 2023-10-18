module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c14161",
          secondary: "#51e8ae",
          accent: "#17137c",
          neutral: "#312636",
          "base-100": "#ffffff",
          info: "#a3d1f5",
          success: "#7be5c9",
          warning: "#f5b00f",
          error: "#f7557a",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
