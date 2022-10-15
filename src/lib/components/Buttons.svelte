<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  import type ButtonType from '$lib/assets/buttons/button';

  import streamButtons from '$lib/assets/buttons/streaming.json';
  import socialButtons from '$lib/assets/buttons/socials.json';
  import contactButtons from '$lib/assets/buttons/contact.json';
  import { browser } from '$app/environment';

  const buttonsArray: ButtonType[][] = [streamButtons, socialButtons, contactButtons];

  let index = 0;

  function count() {
    let current = index;
    index++;
    return current;
  }

  let innerWidth: number;

  if (browser) {
    innerWidth = window.innerWidth;
  }
</script>

{#if innerWidth < 768}
  <div class="buttons" id={`stream-buttons`}>
    {#each streamButtons as { label, href, img }, i}
      <fade-in duration="500ms" order={count()}>
        <Button {label} {href} {img} />
      </fade-in>
    {/each}
  </div>
  <div class="buttons" id={`social-buttons`}>
    {#each socialButtons as { label, href, img }}
      <fade-in duration="500ms" order={count()}>
        <Button {label} {href} {img} />
      </fade-in>
    {/each}
  </div>
{:else}
  <div class="buttons" id={`social-buttons`}>
    {#each socialButtons as { label, href, img }}
      <fade-in duration="500ms" order={count()}>
        <Button {label} {href} {img} />
      </fade-in>
    {/each}
  </div>
  <div class="buttons" id={`stream-buttons`}>
    {#each streamButtons as { label, href, img }, i}
      <fade-in duration="500ms" order={count()}>
        <Button {label} {href} {img} />
      </fade-in>
    {/each}
  </div>
{/if}
<div class="buttons" id={`contact-buttons`}>
  {#each contactButtons as { label, href, img }}
    <fade-in duration="500ms" order={count()}>
      <Button {label} {href} {img} />
    </fade-in>
  {/each}
</div>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    list-style: none;
  }
  #stream-buttons {
    order: 0;
  }
  #social-buttons {
    order: 1;
  }
  #contact-buttons {
    order: 2;
  }

  @media only screen and (min-width: 768px) {
    .buttons {
      flex-direction: row;
    }
    #stream-buttons {
      order: 1;
    }
    #social-buttons {
      order: 0;
    }
  }
</style>
