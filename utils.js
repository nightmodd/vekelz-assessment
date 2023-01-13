const navItems = document.querySelectorAll(".avilable_pages li");
const dateMilesItems = document.querySelectorAll(".miles_statistics_date");
const dateCarsItems = document.querySelectorAll(".cars_statistics_date");
const displayStyleButtons = document.querySelectorAll(".display_style_img");

function toggleClass(items, addedClass, ev) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(addedClass)) {
      items[i].classList.remove(addedClass);
    }
    ev.currentTarget.classList.add(addedClass);
  }
}

function addActiveClass(ev) {
  if (ev.currentTarget.classList.contains("nav_item")) {
    toggleClass(navItems, "active_page", ev);
  }
  if (ev.currentTarget.classList.contains("miles_statistics_date")) {
    toggleClass(dateMilesItems, "active_date_miles", ev);
  }

  if (ev.currentTarget.classList.contains("cars_statistics_date")) {
    toggleClass(dateCarsItems, "active_date_car", ev);
  }
  if (ev.currentTarget.classList.contains("display_style_img")) {
    toggleClass(displayStyleButtons, "active_display_style", ev);
  }
}
