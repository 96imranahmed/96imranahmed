var $grid = null;
let filters = new Set();

function updateFilterCount() {
    if ($grid.data('isotope').filteredItems.length == 0) {
        $('.items-count').html(
            '<strong>No projects</strong>')
    } else if ($grid.data('isotope').filteredItems.length == 1) {
        $('.items-count').html(
            '<strong>1</strong> post')
    } else {
        $('.items-count').html(
            '<strong>' + $grid.data('isotope').filteredItems.length + '</strong> projects')
    }
}

function updateSelectedBar() {
    $('.filter-button-group').children('button').each(function () {
        var filterValue = $(this).attr('data-filter');
        var parseClassName = null;
        if (filterValue == "*") {
            parseClassName = "filter-All"
        } else {
            parseClassName = "filter-" + filterValue.substring(1)
        }
        if (filters.has(filterValue)) {
            $(this).addClass(parseClassName)
        } else {
            $(this).removeClass(parseClassName)
        }
    })
}

$(document).ready(function() {
    $grid = $('.tile-filter').isotope({
        // options
        itemSelector: '.tile-card',
        layoutMode: 'masonry',
        masonry: {
            fitWidth: true
        }
    });
    updateFilterCount();
    $('.cards-section-padding').css('visibility', 'visible');
});

$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');

    if (filters.has("*") || filterValue == "*") {
        filters.clear()
        filters.add("*")
    } else {
        if ($(this).hasClass("filter-" + filterValue.substring(1))) {
            filters.delete(filterValue)
            if (filters.size == 0) {
                filters.add("*")
            }
        } else {
            if (filters.size == 4) {
                filters.clear()
                filters.add("*")
            } else {
                filters.add(filterValue)
            }
        }
    }
    $grid.isotope({ filter: [...filters].join(', ') });
    updateFilterCount()
    updateSelectedBar()
});
