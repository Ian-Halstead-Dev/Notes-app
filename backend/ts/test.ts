import express from 'express';

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App is open on port ${port}`);
});
