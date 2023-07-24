<script lang="ts">
	import { array } from '$lib/writable.js';
	import Form from './Form.svelte';
</script>

<main class="w-1/2 p-4 m-auto">
	<Form />
	<ul class="border-t mt-4 p-4 border-gray-200">
		{#each $array as text}
			<li>
				{text.title}
			</li>
		{/each}
	</ul>
</main>
