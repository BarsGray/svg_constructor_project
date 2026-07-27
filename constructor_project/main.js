const svg = document.querySelector('#drill');
// const zoomInput = document.querySelector('#scale');
// const gridBackground = document.querySelector('#gridBackground');
const container = document.querySelector('.svg-container');

const diameterInput = document.querySelector('#diameter');
const workingLengthInput = document.querySelector('#workingLength');
const shankLengthInput = document.querySelector('#shankLength');
const angleInput = document.querySelector('#angle');

const edgeTop = document.querySelector('#edgeTop');
const edgeBottom = document.querySelector('#edgeBottom');

const bodyTop = document.querySelector('#bodyTop');
const bodyBottom = document.querySelector('#bodyBottom');

const shankTop = document.querySelector('#shankTop');
const shankBottom = document.querySelector('#shankBottom');

const diameterLine = document.querySelector('#diameterLine');
const diameterText = document.querySelector('#diameterText');

function renderDrill() {
    
    const diameter = Number(diameterInput.value);
    const workingLength = Number(workingLengthInput.value);
    const shankLength = Number(shankLengthInput.value);
    const angle = Number(angleInput.value);

    const radius = diameter / 2;
    

    bodyTop.setAttribute('x1', 0);
    bodyTop.setAttribute('y1', -radius);

    bodyTop.setAttribute('x2', workingLength);
    bodyTop.setAttribute('y2', -radius);

    bodyBottom.setAttribute('x1', 0);
    bodyBottom.setAttribute('y1', radius);

    bodyBottom.setAttribute('x2', workingLength);
    bodyBottom.setAttribute('y2', radius);



    shankTop.setAttribute('x1', workingLength);
    shankTop.setAttribute('y1', -radius);

    shankTop.setAttribute('x2', shankLength + workingLength);
    shankTop.setAttribute('y2', -radius);

    shankBottom.setAttribute('x1', workingLength);
    shankBottom.setAttribute('y1', radius);

    shankBottom.setAttribute('x2', shankLength + workingLength);
    shankBottom.setAttribute('y2', radius);




    diameterLine.setAttribute('x1', shankLength + workingLength + 5);
    diameterLine.setAttribute('y1', -radius);

    diameterLine.setAttribute('x2', shankLength + workingLength + 5);
    diameterLine.setAttribute('y2', radius);
    
    diameterText.setAttribute('x', shankLength + workingLength + 8);
    diameterText.textContent = `Ø ${diameter} мм`;
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