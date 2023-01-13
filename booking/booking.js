
const reactButtons = document.querySelectorAll("react_button");



function toggleHeart(ev) {
  if (ev.currentTarget.classList.contains("active_react")) {
    ev.currentTarget.classList.remove("active_react");
  } else {
    ev.currentTarget.classList.add("active_react");
  }
}
