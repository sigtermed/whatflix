<script>
	import { webVitals } from '../lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import '../app.css';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
</script>

<nav>
	<div class="navbar bg-neutral text-neutral-content">
		<div class="flex flex-row items-center gap-1">
			<img class="w-10" src="favicon.png" alt="" />
			<a class="normal-case text-red-500 text-xl" href="/">Whatflix</a>
		</div>
	</div>
</nav>

<slot />
