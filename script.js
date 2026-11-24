document.documentElement.classList.remove("no-js");
document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  var item = btn.closest(".faq-item");
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", function () {
    var open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
});

/* Open all page links and link-buttons in a new tab (in-page anchors, tel: and mailto: excluded) */
(function () {
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(tel:|mailto:|javascript:)/i.test(href)) return;
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
})();
