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


const axis = document.querySelector('#axis');

function renderDrill() {
    
    const diameter = Number(diameterInput.value);
    const workingLength = Number(workingLengthInput.value);
    const shankLength = Number(shankLengthInput.value);
    const angle = Number(angleInput.value);

    const radius = diameter / 2;

    
    
    // Пользователь дал угол заточки в градусах певодим в радианы
    const angleRad = angle * Math.PI / 180;
    // Половина полного угла
    const halfAngle = angleRad / 2;
    const pointLength = radius / Math.tan(halfAngle);

    edgeTop.setAttribute('x1', 0);
    edgeTop.setAttribute('x2', pointLength);
    // edgeTop.setAttribute('y1', 0);
    edgeTop.setAttribute('y2', -radius);
    edgeBottom.setAttribute('x1', 0);
    edgeBottom.setAttribute('x2', pointLength);
    // edgeBottom.setAttribute('y2', 0);
    edgeBottom.setAttribute('y2', radius);


    

    bodyTop.setAttribute('x1', pointLength);
    bodyTop.setAttribute('y1', -radius);

    bodyTop.setAttribute('x2', workingLength);
    bodyTop.setAttribute('y2', -radius);

    bodyBottom.setAttribute('x1', pointLength);
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



    let langhtDrill = workingLength + shankLength
    svg.setAttribute('viewBox', `-6 ${-(diameter / 2) - 5} ${langhtDrill + 30} ${diameter + 10}`);
    axis.setAttribute('x2', `${langhtDrill + 30}`);
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