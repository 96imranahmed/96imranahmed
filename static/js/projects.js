$(document).ready(function() {

    $('.tile-filter').isotope({
        // options
        itemSelector: '.tile',
        layoutMode: 'fitRows'
      });
    
});

$('#search-button-click').click(function() {
    $('.tile-filter').isotope({ filter: '.abc' })
    alert('Search button has been clicked')
})