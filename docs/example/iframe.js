const iframe = document.querySelector("#testframe");
const parent = document.querySelector("#parent");
// insert iframe into parent

parent.innerHTML = '<iframe src="frame.html"></iframe>';

// add mouse over event listener
//

// console.log("iframe", iframe);
// iframe.contentWindow.addEventListener("mouseover", (event) => {
//   console.log("event", event);
// });
//
// iframe.contentWindow.addEventListener("keydown", (event) => {
//   console.log("event", event);
// });
