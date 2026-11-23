document.documentElement.classList.remove("no-js");
document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  var item = btn.closest(".faq-item");
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", function () {
    var open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
