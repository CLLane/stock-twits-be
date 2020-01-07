const app = require('./app');

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`)
});

module.exports = app;