document.addEventListener("DOMContentLoaded", function () {
  const dropdownTrigger = document.getElementById("company-dropdown");
  const dropdown = dropdownTrigger.querySelector(".dropdown");

  dropdownTrigger.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active-dropdown");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!dropdownTrigger.contains(event.target)) {
      dropdown.classList.remove("active-dropdown");
    }
  });

  // Prevent dropdown from closing when clicking inside it
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
