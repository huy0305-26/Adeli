const translations = {
    vi: {
      home: "Trang Chủ",
      about: "Về Chúng Tôi",
      menu: "Thực Đơn",
      chefs: "Đầu Bếp",
      gallery: "Thư Viện",
      contact: "Liên Hệ",
      "book-table": "Đặt bàn ngay"
    },
    en: {
      home: "Home",
      about: "About Us",
      menu: "Menu",
      chefs: "Chefs",
      gallery: "Gallery",
      contact: "Contact",
      "book-table": "Book a Table"
    }
  };
  
  // Hàm đổi ngôn ngữ
  function changeLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  
    // Lưu ngôn ngữ vào localStorage
    localStorage.setItem("selectedLanguage", lang);
  }
  
  // Kiểm tra và áp dụng ngôn ngữ được lưu trước đó
  document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("selectedLanguage") || "vi";
    changeLanguage(savedLang);
  
    // Gán sự kiện click cho các nút chuyển đổi ngôn ngữ
    document.querySelector(".vi").addEventListener("click", () => changeLanguage("vi"));
    document.querySelector(".en").addEventListener("click", () => changeLanguage("en"));
  });
  