module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    FontFamily: {
      "sans": ["Pridi", "sans-serif"]
    },
    extend: {
      fontFamily: {
        "pridi": 'Pridi',
        "neuropol": 'Neuropol',
        "conthrax": 'Conthrax Sb'
      },
      colors: {
        bg_emphasis: "var(--color-bg-emphasis)",
        bg_base: "var(--color-bg-base)",
        bg_side: "var(--color-bg-side)",
        bg_island: "var(--color-bg-island)",
        bg_inverse: "var(--color-bg-inverse)",
        content_base: "var(--color-content-base)",
        content_emphasis: "var(--color-content-emphasis)",
        content_inverse: "var(--color-content-inverted)",
      },
      // textColor: {
      //   skin: {
      //     base: "var(--color-content-base)",
      //     emphasis: "var(--color-content-emphasis)",
      //     inverse: "var(--color-content-inverted)",
      //   }
      // },
      // backgroundColor: {
      //   skin: {
      //     emphasis: "var(--color-bg-emphasis)",
      //     base: "var(--color-bg-base)",
      //     side: "var(--color-bg-side)",
      //     island: "var(--color-bg-island)",
      //     inverse: "var(--color-bg-inverse)",
      //   }
      // },
      // textDecorationColor: {
      //   base: "var(--color-content-base)",
      //   emphasis: "var(--color-content-emphasis)",
      //   inverse: "var(--color-content-inverted)",
      // },
      // divideColor: {
      //   skin: {
      //     base: "var(--color-content-base)",
      //     emphasis: "var(--color-content-emphasis)",
      //     inverse: "var(--color-content-inverted)",
      //   }
      // },
      // accentColor: {
      //   skin: {
      //     base: "var(--color-content-base)",
      //     emphasis: "var(--color-content-emphasis)",
      //     inverse: "var(--color-content-inverted)",
      //   }
      // },
      // borderColor: {
      //   skin: {
      //     emphasis: "var(--color-bg-emphasis)",
      //     base: "var(--color-bg-base)",
      //     side: "var(--color-bg-side)",
      //     island: "var(--color-bg-island)",
      //     inverse: "var(--color-bg-inverse)",
      //   }
      // },
    }
  },
  plugins: []
}
