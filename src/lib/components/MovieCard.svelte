<script lang="ts">
	export let imageUrl: string;
	export let likes: number;
	export let title: string;
</script>

<div class="relative group rounded-md">
	<img class="w-full h-full rounded-md" src={imageUrl} alt="" />
	<div
		class="absolute rounded-b-md bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 group-hover:bg-opacity-90"
	>
		<h1>{title}</h1>
	</div>
</div>
