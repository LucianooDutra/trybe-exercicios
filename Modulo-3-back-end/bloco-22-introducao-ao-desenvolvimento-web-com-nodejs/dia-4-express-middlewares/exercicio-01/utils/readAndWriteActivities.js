const fs = require('fs/promises');

const data = 'src/data.json';

const readData = async () => {
	try {
		const arrayPosts = await fs.readFile(data, 'utf8');

		return JSON.parse(arrayPosts);
	} catch (error) {
		return null;
	}
};

const getActivities = async () => {
	const arrayData = await readData();
	return arrayData;
};

const insertActiveFile = async (post) => {
	try {
		const arrayPosts = await readData();
		post = {
			...post
		};

		arrayPosts.posts.push(post);

		const content = await fs.writeFile(data, JSON.stringify(arrayPosts));
		return content;
	} catch (error) {
		return null;
	}
};

module.exports = {
  getActivities,
  insertActiveFile,
};