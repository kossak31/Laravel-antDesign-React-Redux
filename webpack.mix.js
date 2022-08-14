// webpack.mix.js

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract(['react'])
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);