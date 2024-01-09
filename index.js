const express = require('express');
const pug = require('pug');
const app = express();
const port = 3000;
const morgan = require ("morgan");
// const compiledFunction = pug.compileFile('template.pug');
const usersRouter = require ('./routes/users');


app.use(morgan('dev'));
app.use(express.static('./assets'));

app.set('views', './views'); //sets views for the app
app.set('view engine', 'pug');

app.get('/',(req,res)=> {
    console.log(req.url);
    res.render('template');
});

app.get('/signup',(req,res)=> {
    console.log('success!');
    res.render('signup');
});

app.use('/signup', usersRouter);

app.get('/download-panda-bamboo', (req, res) => {
    res.download('./assets/panda.avif');
});
app.get('/download-panda-boba', (req, res) => {
    res.download('./assets/panda-boba.jpeg');
});


app.listen(port,() => {
    console.log(`server is running on port ${port}`);
}); 