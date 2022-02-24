<script lang="ts">
  import Headline from '$lib/components/Headline/index.svelte';
  import Search from '$lib/components/Search.svelte';
</script>

<div class="wrapper">
  <Headline />
  <Search />
</div>


<style lang="scss">
 .wrapper {
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   padding: 1rem;
 }
</style>