document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbzX-GC6fQs50MGdIObiPTmjnApBHjPI_nfbO6b4LBsuSvVr7RdJi_If7uwA0kLjq026/exec", {
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
