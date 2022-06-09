// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES-NOTIFICATIONS
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

//MESSAGE-CHAT
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const colorPalete = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// REMOVE ACTICE CLASS FROM ALL MENU-ITEM
const changeActiceItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiceItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector("#notifications .notifications-count").style.display = "none";
    }
  });
});

// MESSAGES
// SEARCHES CHATS
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// SEARCH CHAT
messageSearch.addEventListener("keyup", searchMessage);

// Box Shadow On Chat Box
messagesNotifications.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  document.querySelector("#messages-notifications .notifications-count").style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// CUSTOMIZE THEME
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// close theme modal
themeModal.addEventListener("click", closeThemeModal);

//  open theme modal
theme.addEventListener("click", openThemeModal);

// ----------------------- FONT SIZE
// remove active class from span or fontsize selector
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem;");
      root.style.setProperty("----sticky-top-right", "-25rem;");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "20px";
      root.style.setProperty("----sticky-top-left", "-13rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // change font size of the root html
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// remove active class from color picker
const removeActiveColorClass = () => {
  colorPalete.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// Change Color Theme
colorPalete.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    removeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// THEME BACKGROUND VALUE
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// CHANGE BACKGROUND COLOR
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

// CHANGE Background 1
Bg1.addEventListener("click", () => {
  // ACTIVE CLASS
  Bg1.classList.add("active");

  // remove activeclass from others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
  // Reload page
  window.location.reload();
});
// CHANGE Background 2
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // ACTIVE CLASS
  Bg2.classList.add("active");

  // remove activeclass from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

// CHANGE Background 3
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // ACTIVE CLASS
  Bg3.classList.add("active");

  // remove activeclass from others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});

// END
