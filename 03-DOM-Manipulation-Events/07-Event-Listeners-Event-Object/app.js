// document.querySelector('.clear-tasks').addEventListener('click',
// function (e) {
//     console.log('Hello World');
//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log("clicked");

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // Timestamp
    val = e.timestamp;

    // Coords event relative to the window
    val = e.clientX;
    val = e.clientY;

    // Coords event relative to the window
    val = e.offsetX;
    val = e.offsetY;

    console.log(val);
}
