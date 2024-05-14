$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#f0ebe9', '#f0ebe9', '#f0ebe9'],
        anchors: ['section1', 'section2', 'section3'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) {
                animateChart();
            }
        }
    });

    $(function () {
        var availableTags = ["A Sign Of Affection", "The Garden Of Words", "All The Light We Cannot See", "Tokyo Ghoul", "Jujutsu Kaisen", "Omniscient Reader's Viewpoint", "Unholy Blood", "I Had That Same Dream Again"];
        $("#search").autocomplete({
            source: availableTags,
            select: function (event, ui) {
                // When a title is selected from the autocomplete dropdown, filter the cards
                filterCards(ui.item.value);
            }
        });
    });

    function filterCards(title) {
        // Hide all cards
        $('.card').hide();
        // Show only the card corresponding to the selected title
        $('.card:contains("' + title + '")').show();
    }

    // Add an event listener for the search form submission
    $('form').submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the value from the search input
        var title = $('#search').val();

        // Filter the cards based on the search title
        filterCards(title);
    });

    tippy('.card-img-top.reserve-trigger', {
        content: 'Find Out More!', 
        arrow: true, // Show an arrow for the tooltip
        theme: 'light',
        placement: 'bottom', 
        animation: 'fade', 
    });

    // Add click event listener to the card image to open the modal
    $('.card-img-top.reserve-trigger').on('click', function () {
        var $card = $(this).closest('.card');
        var title = $card.data('title');
        var author = $card.data('author');
        var description = $card.data('description');

        // Update modal content with the clicked card's information
        $('#bookModalTitle').text(title);
        $('#bookModalAuthor').text(author);
        $('#bookModalDescriptionText').text(description);

        // Show the modal
        $('#bookModal').modal('show');
    });


    // Book Reservation
$('.reserve-trigger').click(function () {
    var $button = $(this);
    var reserved = $button.attr('data-reserved') === 'true';

    if (!reserved) {
        // If not reserved, reserve the book
        $button.attr('data-reserved', 'true');
        $button.text('Reserved');
        $button.addClass('reserved-btn'); // Add the reserved class
        $button.prop('disabled', true); // Disable the button after reservation
    }
});





    var ctx = document.getElementById('library-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Romance', 'Novel', 'Thriller', 'Supernatural', 'Fantasy', 'Action'],
            datasets: [{
                label: 'Popularity',
                data: [20, 35, 15, 45, 25, 50],
                backgroundColor: [
                    'rgba(201, 169, 197, 0.7)',
                    'rgba(201, 194, 169, 0.7)',
                    'rgba(169, 174, 201, 0.7)',
                    'rgba(201, 188, 169, 0.7)',
                    'rgba(185, 169, 201, 0.7)',
                    'rgba(201, 198, 169, 0.7)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    $('#library-table').DataTable();

    anime({
        targets: '.section',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(200),
    });

    anime({
        targets: '.logo',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 500,
    });

    anime({
        targets: '.card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(200),
    });

    anime({
        targets: '.card-img-top',
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
    });

    anime({
        targets: '.card-body',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
    });

    anime({
        targets: '.reserve-btn',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
    });

    
    tippy('.reserve-btn', {
        content: 'Click to reserve this book',
        arrow: true,
        theme: 'light',
        placement: 'bottom',
        animation: 'fade',
    });


    $('#genreFilter').change(function () {
        var selectedGenre = $(this).val();

        // Filter the cards based on the selected genre
        filterCardsByGenre(selectedGenre);
    });

    // Function to filter cards by genre
    function filterCardsByGenre(genre) {
        // If no genre selected, show all cards
        if (!genre) {
            $('.card').show();
            return;
        }

        // Hide all cards
        $('.card').hide();

        // Show only the cards corresponding to the selected genre
        $('.card[data-genre="' + genre + '"]').show();
    }

    // Add an event listener for the search form submission
    $('form').submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the value from the search input
        var title = $('#search').val();

        // Filter the cards based on the search title
        filterCards(title);
    });

    function animateChart() {
        // Select the canvas element containing the chart
        var canvas = document.getElementById('library-chart');

        // Animate the chart elements using anime.js
        anime({
            targets: canvas,
            opacity: [0, 1], // Fade in animation
        translateY: [50, 0], // Move up animation
        duration: 1000, // Animation duration
        easing: 'easeInOutQuad', // Easing function
    });
}
});