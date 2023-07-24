<script>
	import { writable } from 'svelte/store';
	let value = '';
	let show = writable(false);
	function handleSubmit() {
		show.set(true);
	}
</script>

<main class="w-1/2 p-4 m-auto">
	<form>
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
		<textarea
			bind:value
			id="message"
			rows="4"
			class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-blue-500 focus-visible:border-blue-500"
			placeholder="Write your thoughts here..."
		/>
		<button
			on:click={handleSubmit}
			type="submit"
			class="text-gray-900 mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
			>Submit</button
		>
	</form>
	{#if $show}
		<p class="border-t mt-4 p-4 border-gray-200">
			{value}
		</p>
	{/if}
</main>
