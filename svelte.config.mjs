import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

export default {
    extensions: ['.svelte', '.md'],
    preprocess: [mdsvex(), preprocess()],
};
