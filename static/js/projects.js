$(document).ready(function() {

    $('.tile-filter').isotope({
        // options
        itemSelector: '.tile-card',
        layoutMode: 'masonry',
        masonry: {
            fitWidth: true
        }
    });
    
});

$('#search-button-click').click(function() {
    $('.tile-filter').isotope({ filter: '.abc' })
    alert('Search button has been clicked')
})