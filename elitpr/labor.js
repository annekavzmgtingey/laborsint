function addClassById(elementId, className) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add(className);
  }
}

addClassById("preapproval", "hidden");
