'use strict';
$(document).ready(function () {
  let $rowDads = $('#row-dads');
  $('#search-dad-jokes').on('click', function () {
    $rowDads.html('');
    let dadSearch = $('#search-dad-jokes').val();
    let dataObject = { limit: 8, term: dadSearch };
    $.get('https://icanhazdadjoke.com/search', dataObject, dadJokeGen, 'json');
    $('#dad-search').val('');
  });
  function dadJokeGen(res) {
    console.log(res.results);
    for (let { joke } of res.results) {
      let t = `
        <div class="col-3 m-3">
          <p>${joke}</p>
        </div>
      `;
      $rowDads.append($(t));
    }
    //res.results.id
  }
});