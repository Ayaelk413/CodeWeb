import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import grootImage from './img/groot.jpg';
import stormtrooperImage from './img/stormtrooper.jpg';

const homePage = `
<div class="text-center">
  <h3>Welcome to myMovies !</h3>

  <p>Here you can find a selection of our favorite movies ; )</p>
  <div class="pb-3">
    <img class="img-thumbnail w-50" src="${grootImage}" alt="Groot" />
  </div>

  <div>
    <img
      class="img-thumbnail w-50"
      src="${stormtrooperImage}"
      alt="Stormtrooper"
    />
  </div>
</div>`;

const main = document.querySelector('main');

main.innerHTML = homePage;
