$(document).ready(() => {

    const downloadButton = $('.download');
    const featureItems = $('.features li');
    const featureIcons = $('.content .icon');

    for (let i = 0; i < featureIcons.length; i++) {

        const featureIcon = featureIcons[i];

        $(featureIcon).hover(() => {
            $(featureItems[i]).addClass('show');
        }, () => {
            $(featureItems[i]).removeClass('show');
        });

    }

});
