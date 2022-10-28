<script lang="ts">
	import type { PageServerData } from '.svelte-kit/types/src/routes/movies/[id]/$types';

	export let data: PageServerData;
</script>

<div>
	{JSON.stringify(data.movie)}
</div>
