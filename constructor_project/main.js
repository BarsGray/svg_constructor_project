const svg = document.querySelector('#drill');
// const zoomInput = document.querySelector('#scale');
// const gridBackground = document.querySelector('#gridBackground');
const container = document.querySelector('.svg-container');

const diameterInput = document.querySelector('#diameter');
const workingLengthInput = document.querySelector('#workingLength');
const shankLengthInput = document.querySelector('#shankLength');
const angleInput = document.querySelector('#angle');



function renderDrill() {
    
    const diameter = Number(diameterInput.value);
    const workingLength = Number(workingLengthInput.value);
    const shankLength = Number(shankLengthInput.value);
    const angle = Number(angleInput.value);
    
}














diameterInput.addEventListener( 'input', renderDrill );
workingLengthInput.addEventListener( 'input', renderDrill );
shankLengthInput.addEventListener( 'input', renderDrill );
angleInput.addEventListener( 'input', renderDrill );

renderDrill();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const svg = document.querySelector('#drill');
// const zoomInput = document.querySelector('#scale');
// const gridBackground = document.querySelector('#gridBackground');
// const container = document.querySelector('.svg-container');

// function renderDrill() {
//     const zoom = Number(zoomInput.value);

//     const width = container.clientWidth / container.clientHeight * zoom;
//     const height = container.clientHeight / container.clientHeight * zoom;

//     const x = -width / 2;
//     const y = -height / 2;

//     svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
//     gridBackground.setAttribute('x',x);
//     gridBackground.setAttribute('y',y);
//     gridBackground.setAttribute('width',width);
//     gridBackground.setAttribute('height',height);
// }

// zoomInput.addEventListener('input',renderDrill);

// renderDrill();



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('text');

// let path = document.querySelector('path');

// let paths = [
//     'M 20 20 l 40 40 l 40 40',
//     'M 20 20 l 40 40 l 40 80',
//     'M 20 20 l 40 40 l 40 0'
// ];

// let i = 0;

// setInterval(() => {
//     path.setAttribute('d', paths[i]);

//     i++;

//     if (i >= paths.length) {
//         i = 0;
//     }
// }, 300);