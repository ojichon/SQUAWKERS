import { generateSlug } from 'random-word-slugs';

const slug = generateSlug(3, { format: 'title' });
console.log(slug);