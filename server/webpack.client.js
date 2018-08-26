const path = require('path');


module.exports  = {
    //entrypoint 
    entry : './src/client/client.js',

    //where to put the output file to be generated 
    output : {
        filename : 'bundle.js',
        path :  path.resolve(__dirname, 'public')
    },

    //Tell webpack to run for all js file 
    module : {
        rules :  [
            {
                test : /\.js?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                options : {
                    presets : [
                        'react',
                        'stage-0',
                        [ 'env', { targets : { browsers : ['last 2 versions'] }}]
                    ]
                }

            }
        ]
    }
}