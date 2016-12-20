const dock = document.getElementsByClassName('dock')[0];
const caption = document.getElementsByClassName('icon-caption')[0];

setTimeout(() => {
    dock.classList.remove('hide');
    caption.classList.add('animate');
}, 1000)
