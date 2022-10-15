<script>
  import Impressum from '$lib/components/Impressum.svelte';
</script>

<div id="title"><h4>nuphory</h4></div>

<div id="content">
  <section id="impressum" class="footer-area">
    <Impressum />
  </section>

  <section id="contact" class="footer-area">
    <h4>contact</h4>
    <ul>
      <!-- link opens in new tab-->
      <li>e-mail: <a href="mailto:nuphory@gmail.com" target="_blank">nuphory@gmail.com</a></li>
    </ul>
  </section>
</div>

<div id="copyright">© 2022 nuphory</div>

<style>
  section {
    margin: 16px;
  }

  ul {
    list-style-type: none;
    padding: 0px;
  }

  a {
    color: var(--background-color);
  }

  a:hover {
    color: var(--background-color);
  }

  .footer-area {
    width: 250px;
    /* display: inline-block; */
    text-align: left;
  }

  #title {
    text-align: center;
    margin: 16px;
  }

  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #contact {
    text-align: left;
    margin-bottom: 16px;
  }

  #copyright {
    border-top: 1px solid var(--background-color);
    text-align: center;
    padding-top: 16px;
  }

  @media only screen and (min-width: 768px) {
    #content {
      height: 300px;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  }
</style>
