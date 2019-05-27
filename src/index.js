import './js/favicons.js'
import './scss/main.scss'

// const scssContext = require.context(
//     '!!file-loader?name=./blocks/avatar/[name].[ext]!.',
//     true,
//     /\.(scss)$/
//   );

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(
    require.context('./blocks', true, /\.(scss)$/)
  );
