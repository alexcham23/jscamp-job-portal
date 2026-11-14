import app  from './app.js';

if (!process.env.NODE_ENV) {
    app.listen(app.get('port'), () => {
        console.log('Server is running on port:',app.get('port'));
    });
}
