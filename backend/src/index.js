import app from './app.js'; 

app.listen(app.get('port'),()=>{
	console.log('Listen to port',app.get('port'))
});
