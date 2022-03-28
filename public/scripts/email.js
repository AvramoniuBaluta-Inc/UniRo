const form = document.querySelector(".form1");

function sendMsg(e) {
  e.preventDefault();

  const nume = document.getElementById("name"),
    prenume = document.getElementById("prenume"),
    loc = document.getElementById("loc"),
    msg = document.getElementById("msg");

  Email.send({
    SecureToken: "61d10347-3d4f-4d6b-8dac-459786c83f60",
    To: "uniro.eu@gmail.com",
    From: "uniro.eu@gmail.com",
    Subject: nume.value + " " + prenume.value + " - " + loc.value,
    Body: msg.value,
  }).then((message) => alert("Mesajul a fost transmis cu succes!"));
}

form.addEventListener("submit", sendMsg);
