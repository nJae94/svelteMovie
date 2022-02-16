<script lang="ts" content="module">
	import Header from '$lib/components/layout/header.svelte';
	import '../scss/global.scss'
</script>

<div class="layout">
	<Header />
	<slot />
</div>



<style lang="scss">

	.layout {
		width: 100%;
		background-color: #00020E;
	}
</style>