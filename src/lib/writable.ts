import { writable, type Writable } from 'svelte/store';
export const title = writable('');
export const note = writable('');
export const array: Writable<{ title: string; note: string }[]> = writable([]);
