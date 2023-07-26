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
        "conthrax": 'Conthrax Sb',
        "michroma": 'Michroma',
        "yeysk": "Yeysk",
        "suissnord": "Suissnord"
      },
      colors: {
        bg_emphasis: "var(--color-bg-emphasis)",
        bg_base: "var(--color-bg-base)",
        bg_side: "var(--color-bg-side)",
        bg_island: "var(--color-bg-island)",
        bg_inverse: "var(--color-bg-inverse)",
        content_base: "var(--color-content-base)",
        content_emphasis: "var(--color-content-emphasis)",
        content_inverse: "var(--color-content-inverse)",
      },
    }
  },
  plugins: []
}
