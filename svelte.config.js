import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({

		postcss: {
			plugins: [
				autoprefixer
			]
		},
		scss: {
			prependData: `@import 'src/scss/global.scss';`
		}
	}),

	kit: {
		adapter: adapter({})
	}
};

export default config;