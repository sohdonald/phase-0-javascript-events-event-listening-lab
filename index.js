
const input = document.getElementById('button');

function addingEventListener() {

    function clickAlert() {
    alert('I was clicked!');
}
 
    input.addEventListener('click', clickAlert);

}


//putting this inside addingEventListener function passes test
// but now the clickAlert is not working



// const input = document.getElementById('button');
// input.addEventListener('click', function() {
//     alert('I was clicked!');
// });


//invokes clickAlert

// const button2 = document.querySelector("#button2");
// //now everything in button2 activate clickAlert
// button2.addEventListener('click', clickAlert);
