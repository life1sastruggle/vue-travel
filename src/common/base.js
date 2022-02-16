export function goPageTop(name) {
  let element = name && document.querySelector(name) || window;
  element.scrollTo(0, 0);
}
