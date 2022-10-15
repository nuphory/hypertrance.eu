<button id="impressum-title" type="button" class="collapsible"><h4>Impressum</h4> </button>
<div class="collapsible-content" id="impressum-content">
  <section id="details">
    <h4>Thomas Jisa</h4>
    Hypertrance e.U.
    <br />Musician and Graphic Design
    <br />3701 Grossweikersdorf
    <br />Unterthern 60
    <br />AUSTRIA
  </section>
</div>

<style>
  button {
    display:flex;
    justify-content: center;
    align-items: center;
    transition: transform 50ms ease;
    background-color: var(--background-color);
  }

  button:hover {
    transform: translateY(-1px);
  }

  button:active {
    transform: translateY(1px);
  }

  .collapsible {
    width: 100%;
    height: 48px;
    padding: px;
    border-radius: 32px;
  }

  .collapsible h4 {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
</style>
