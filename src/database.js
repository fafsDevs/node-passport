const { connect } = require('mongoose');
const { mongodb } = require('./keys');

connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
