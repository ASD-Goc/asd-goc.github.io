document.addEventListener("DOMContentLoaded", function () {
  const companies = document.querySelectorAll(".company-item");
  companies.forEach((company) => {
    company.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#C0C0C0";
    });
    company.addEventListener("mouseout", function () {
      this.style.backgroundColor = "#D3D3D3";
    });
  });
});
