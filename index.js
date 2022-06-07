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
