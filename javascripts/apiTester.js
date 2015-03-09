

var favoriteArtist = document.getElementById('artID').value;



$('#action-button').click(function(){

    $.ajax({
   //url: 'https://itunes.apple.com/search?term=' + favoriteArtist, 462006
   url: 'https://itunes.apple.com/lookup?id=' + favoriteArtist + '&entity=album', 
   data: {
      format: 'json'
   },
   error: function() {
      $('#info').html('<p>An error has occurred</p>');
   },
   dataType: 'jsonp',
   success: function(data) {
      for (i = 1; i < data.results.length; i++){
      var $album = $('<h2>').text(data.results[i].collectionName);
      var $artist = $('<p>').text(data.results[i].artistName);
      var $artwork = $('<img>')
      $artwork.attr("src", data.results[i].artworkUrl100);

      $('#info')
         .append($album)
         .append($artist)
         .append($artwork);
      }
   },
   type: 'GET'
});
    
});