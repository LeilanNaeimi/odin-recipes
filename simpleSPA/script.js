// app.js

function navigateTo(pageId) {
  const pages = document.querySelectorAll(".page");
  const activePage = document.querySelector(".page.active");

  // Update the URL hash
  window.location.hash = pageId;

  // Hide the currently active page
  activePage.classList.remove("active");

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}

// Initially navigate based on the URL hash
const initialPageId = window.location.hash.substring(1) || "page1";
navigateTo(initialPageId);
