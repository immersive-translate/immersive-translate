// const themeOptions = {
//   underline: [
//     {
//       name: "color",
//       required: false,
//       type: "color",
//     },
//     {
//       name: "width",
//       required: false,
//       type: "number",
//     },
//   ],
// };

// const form = document.querySelector("#form");
// let html = "";

// html = themeOptions.underline
//   .map((i) => {
//     return `<label>${i.name}:<input type=${i.type} name=${i.name} /></label> `;
//   })
//   .join(" ");
// form.innerHTML = html;
function change() {
  const root = document.querySelector("body");
  // 获取 :root 上 --money-color 变量的值
  const color = getComputedStyle(root)
    .getPropertyValue("background-color")
    .trim();
  console.log(color);
  root.style.setProperty(
    "background-color",
    color === "rgb(240, 130, 172)" ? "#3082a5" : "rgb(240, 130, 172)"
  );
}
