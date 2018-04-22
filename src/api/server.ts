import app from './app';

const port = 3005;

app.listen(port, () => {
	console.log('Express server listening on port ' + port);
});