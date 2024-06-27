// DARK MODE SESSION STORAGE TIME OF DAY STUFF

// i'm not sure why you
const time = new Date().getHours();

if (!(time < 20 && time > 8)) {
  sessionStorage.setItem("dm", "on");
  document.body.classList.add("dark-mode");
} else {
  sessionStorage.setItem("dm", "off");
  document.body.classList.remove("dark-mode");
}



////////////

// DARK MODE LOCAL STORAGE STUFF

// if dark mode has never been set...
if (!localStorage.getItem("dm")) {
  console.log("dm does not exist");
  // set dm to 'off'
  localStorage.setItem("dm", "off");
  // if dark mode does have a value...
} else {
  // check if dark mode is on and then add the dark-mode class
  if (localStorage.getItem("dm") == "on") {
    document.body.classList.add("dark-mode");
  }
  // do nothin otherwise
  console.log("dark mode is off actually");
}

// same as your version of the function except it doesn't rely on the dmBool variable,
// and uses 'add' and 'remove' instead of toggle.
function toggleDM() {
  if (localStorage.getItem("dm") == "off") {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dm", "on");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dm", "off");
  }
}

/////////////


// ORIGINAL CODE

// if (!localStorage.getItem('visited')) {

//     console.log("first time i see");
    
//     localStorage.setItem('visited', 'true');

//     const time = new Date().getHours();

//     if (!(time < 20 && time > 8)){
//         sessionStorage.setItem('dm','true');
//         var body = document.body;
//         body.classList.toggle("dark-mode");
//     }else{
//         sessionStorage.setItem('dm','false');
//     }
// }
// var dmBool = localStorage.getItem('dm');
// if(dmBool == 'true'){
//     var body = document.body;
//     body.classList.toggle("dark-mode");
//     localStorage.setItem('dm','false');
// }

// function toggleDM(){
//     if (dmBool == 'true'){
//         var body = document.body;
//         body.classList.toggle("dark-mode");
//         localStorage.setItem('dm','false');
//     }else{
//         var body = document.body;
//         body.classList.toggle("dark-mode");
//         localStorage.setItem('dm','true');
//     }
// }