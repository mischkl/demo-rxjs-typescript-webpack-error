var wpconfig = require('./webpack.config');
wpconfig.module.loaders[0].loader = 'awesome-typescript-loader';
module.exports = wpconfig;