// ปุ่ม "กลับ"
document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Accordion
const buttons = document.querySelectorAll(".accordion-btn");
buttons.forEach((btn) => {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector("span");

  // เปิดตอนเริ่มต้น (ถ้าต้องการเปิดทุกอัน)
  content.style.display = "block";
  icon.classList.remove("rotate-180");

  btn.addEventListener("click", () => {
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.add("rotate-180");
    } else {
      content.style.display = "block";
      icon.classList.remove("rotate-180");
    }
  });
});
