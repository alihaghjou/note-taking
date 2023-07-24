<script lang="ts">
	import { title, note, array } from '$lib/writable.js';
	function handleSubmit() {
		array.set([...$array, { title: $title, note: $note }]);
		note.set('');
		title.set('');
	}
</script>

<form class="flex flex-col gap-4" on:submit={handleSubmit}>
	<div>
		<label for="title" class="block mb-2 text-lg font-medium text-gray-900">Title</label>
		<input
			bind:value={$title}
			type="text"
			id="title"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-none focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
			placeholder="For Note"
			required
		/>
	</div>
	<div>
		<label for="message" class="block mb-2 text-lg font-medium text-gray-900">Your message</label>
		<textarea
			required
			bind:value={$note}
			id="message"
			rows="8"
			class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-blue-500 focus-visible:border-blue-500"
			placeholder="Write your thoughts here..."
		/>
	</div>
	<div class="flex justify-end">
		<button
			type="submit"
			class="text-gray-900 mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
			>Submit</button
		>
	</div>
</form>
