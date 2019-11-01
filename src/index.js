const faviconsContext = require.context(
  '!!file-loader?name=./images/favicons/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);

faviconsContext.keys().forEach(faviconsContext);

function requireAll(r) {
    return r.keys().map(r);
}

requireAll(require.context('./', true, /\.js|scss$/));

