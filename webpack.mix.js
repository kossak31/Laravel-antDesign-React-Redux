// webpack.mix.js

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract(['react'])
   // .postCss('resources/css/app.css', 'public/css', [
        //
   // ])
    .webpackConfig({
        module: {
            rules: [{
                test: /\.less$/,
                use: [
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: { '@primary-color': '#307839' },
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            }]
        }
    });