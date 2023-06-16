$(function () {
  $("body").on("click", function (e) {
    let target = e.target;

    // check is close event
    const closeBox = isCloseIcon(target);
    if (closeBox) {
      const parentBox = closeBox.parentElement;
      if (parentBox) {
        parentBox.remove();
        return;
      }
    } else {
      if (!isValid(e.target)) {
        const isParentValid = e.target.parentElement &&
          isValid(e.target.parentElement);
        if (!isParentValid) {
          // check parent of parent is valid
          const isParentOfParentValid = e.target.parentElement &&
            e.target.parentElement.parentElement &&
            isValid(e.target.parentElement.parentElement);
          if (!isParentOfParentValid) {
            return;
          } else {
            target = e.target.parentElement.parentElement;
          }
        } else {
          target = e.target.parentElement;
        }
      }
      if (target.resizabled) return;
      target.resizabled = true;
      // $(target).resizable();
      $(target).draggable({
        handle: ".immersive-translate-draggable-box",
      });
    }
  });
});

function isValid(ele) {
  return ele.className &&
    ele.className.indexOf("immersive-translate-resizable") >= 0;
}

function isCloseIcon(ele) {
  let isBox = ele.className &&
    ele.className.indexOf("immersive-translate-close-box") >= 0;
  if (!isBox) {
    isBox = ele.className && ele.className.indexOf("close-icon") >= 0;
    if (isBox) {
      return ele.parentElement;
    } else {
      return false;
    }
  } else {
    return ele;
  }
}
