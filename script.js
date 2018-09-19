'use strict';
$(document).ready(function() {
  $('#search-dad-jokes').on('click', function() {
    let dadSearch = $('#search-dad-jokes').val();
    let dataObject = { limit: 8, term: dadSearch };
    $.get('https://icanhazdadjoke.com/search', dataObject, dadJokeGen, 'json');
    $('#dad-search').val('');
  });
  function dadJokeGen(res) {
    let $rowDads = $('#row-dads');
    console.log(res.results);
    for (let { id } of res.results) {
      let t = `<img class="img-fluid" src="https://icanhazdadjoke.com/j/${id}.png"></img>`;
      $rowDads.append($(t));
    }
    //res.results.id
  }
});