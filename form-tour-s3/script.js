document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    question: document.getElementById("question").value,
    nickname: document.getElementById("nickname").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwdozJp8fyWDCqpAeJdBviE9QK6k4fiis_3o47U91Efyp2tCV6FAYTE8elNCplAC6Tzpg/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        document.getElementById("message").textContent = "Data berhasil dikirim!";
        document.getElementById("registrationForm").reset();
      } else {
        document.getElementById("message").textContent = "Gagal mengirim data.";
      }
    })
    .catch((err) => {
      document.getElementById("message").textContent = "Terjadi kesalahan.";
      console.error(err);
    });
});

