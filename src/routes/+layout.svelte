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
		<div class="flex-1 flex flex-row items-center gap-1">
			<img class="w-10" src="favicon.png" alt="" />
			<a class="normal-case text-red-500 text-xl" href="/">Whatflix</a>
		</div>

		<div class="flex-none gap-2">
			<div class="form-control">
				<input type="text" placeholder="Search" class="input input-bordered" />
			</div>
			<div class="dropdown dropdown-end">
				<button tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img alt="avatar" src="https://placeimg.com/80/80/people" />
					</div>
				</button>
				<ul class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a href="/profile" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href="/settings">Settings</a></li>
					<li><a href="/logout">Logout</a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<slot />
