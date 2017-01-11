$(document).ready(() => {

    // Elements
    const downloadButton = $('.download');
    const featureItems = $('.features li');
    const featureIcons = $('.content .icon');

    // Ticker
    for (let i = 0; i < featureIcons.length; i++) {

        const featureIcon = featureIcons[i];

        $(featureIcon).hover(() => {
            $(featureItems[i]).addClass('show');
        }, () => {
            $(featureItems[i]).removeClass('show');
        });

    }

    // Remove download button on mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        const html = '<span class="button">Available on MacOS...</span>'
        downloadButton.html(html)
    }

});
