<script lang="ts">
  export let label: string;
  export let href: string;
  export let img: string;
</script>

<a target="_blank" {href} class="button">
  {#if img}
  <img width="48px" height="48px" src={img} alt={label} />
  {/if}
  <span class="label">{label.toUpperCase()}</span>
</a>

<style>
  img {
    aspect-ratio: 1;
    height: 48px;
    width: 48px;
  }

  .button {
    margin: 4px 8px;
    border-radius: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--foreground-color);
    color: var(--background-color);
    text-decoration: none;
    transition: all 50ms ease-in-out;
  }

  .button:hover {
    transform: translateY(-1px);
    opacity: 0.8;
  }

  .button:active {
    transform: scale(0.95);
  }

  .button:visited {
    text-decoration: none;
  }

  .label {
    font-family: Yeysk, sans-serif;
    text-align: left;
    width: 160px;
  }

  @media only screen and (min-width: 768px) {
    img {
      height: 64px;
      width: 64px;
    }
    .label {
      display: none;
    }
  }
</style>
