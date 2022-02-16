<script lang="ts">
  import Logo from '$lib/components/Logo.svelte'

  const menus = [
    {
      href: '/',
      name: 'Search',
    },
    {
      href: '/movie/:id',
      name: 'Movie',
    },
    {
      href: '/about',
      name: 'About',
    }
  ]
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as {href, name} (name) }
        <li>
          <a {href}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>



<style lang="scss">

  header :global(a.active) {
    color: red;
  }
</style>