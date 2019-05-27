import './js/favicons.js'
import './scss/main.scss'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(
    require.context('./blocks', true, /\.(scss)$/)
  );
