document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbyVMEQYa0QKGQ3X8R5BP6EyXSip53lMGMxnEQ5M9pHlmt91b4TDxLTGQr-UBkBjnYK9/exec", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "Success") {
          alert("Data berhasil disimpan!");
          form.reset();
        } else {
          alert("Terjadi kesalahan saat menyimpan data.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat menyimpan data.");
      });
  });
});
