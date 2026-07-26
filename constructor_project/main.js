console.log('text');

let path = document.querySelector('path');

let paths = [
    'M 20 20 l 40 40 l 40 40',
    'M 20 20 l 40 40 l 40 80',
    'M 20 20 l 40 40 l 40 0'
];

let i = 0;

setInterval(() => {
    path.setAttribute('d', paths[i]);

    i++;

    if (i >= paths.length) {
        i = 0;
    }
}, 300);