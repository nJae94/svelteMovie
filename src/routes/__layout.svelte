<script lang="ts" content="module">
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import '../scss/global.scss'
</script>

<div class="layout">
	<Header />
	<div class='main'>
		<slot />
	</div>
	<Footer />
</div>



<style lang="scss">

	.layout {
		width: 100%;
		height: 100%;
		background-color: $color--black;

	}

	.main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>