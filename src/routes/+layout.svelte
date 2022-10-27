<script>
	import '../app.css';

	import { webVitals } from '../lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { darkMode } from '$lib/uistore';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
</script>

<div class={`${darkMode ? 'dark' : ''} w-screen min-h-screen   dark:bg-slate-800`}>
	<div class="h-screen flex flex-col">
		<slot />
	</div>
</div>
