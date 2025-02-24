document.getElementById("menu-btn").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});

// إغلاق القائمة عند الضغط على أي رابط داخلها
document.querySelectorAll("#nav-links li a").forEach(link => {
  link.addEventListener("click", function() {
    document.getElementById("nav-links").classList.remove("active");
  });
});