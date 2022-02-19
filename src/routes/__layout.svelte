<script lang="ts" content="module">
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import '../scss/global.scss'
</script>

<div class="layout">
	<Header />
	<slot />
	<Footer />
</div>



<style lang="scss">

	.layout {
		width: 100%;
		background-color: grey;
	}
</style>