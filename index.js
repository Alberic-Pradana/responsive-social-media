// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES-NOTIFICATIONS
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

//MESSAGE-CHAT
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

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
