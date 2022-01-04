const high = document.querySelector('#ToHigh');

high.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});