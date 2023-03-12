const $$$ = document.querySelector.bind(document);
const open = (file) => {
  document.body.removeChild($$$("#drop-target"));
  console.log("file", file);
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      document.open();
      document.write(reader.result);
      document.close();
    };
    reader.onerror = function (evt) {
      alert("error reading file");
      window.location.reload();
    };
  }
};

const dragOverHandler = (e) => e.preventDefault();
const dropHandler = (e) => {
  e.preventDefault();
  const item = Array.from(e.dataTransfer.items).find(
    (item) => item.kind === "file"
  );
  if (item) {
    const entry = item.webkitGetAsEntry();
    open(entry.isFile ? item.getAsFile() : entry).catch((e) =>
      console.error(e)
    );
  }
};
const dropTarget = $$$("#drop-target");
dropTarget.addEventListener("drop", dropHandler);
dropTarget.addEventListener("dragover", dragOverHandler);

$$$("#file-input").addEventListener("change", (e) => open(e.target.files[0]));
$$$("#file-button").addEventListener("click", () => {
  const inputElement = document.querySelector("#file-input");
  inputElement.click();
});
