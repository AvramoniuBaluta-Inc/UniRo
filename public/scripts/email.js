const form = document.querySelector(".form1");

function sendMsg(e) {
  e.preventDefault();

  const nume = document.getElementById("name"),
    prenume = document.getElementById("prenume"),
    loc = document.getElementById("loc"),
    msg = document.getElementById("msg");

  Email.send({
    SecureToken: "e5efda31-b064-4a45-9a2a-1f3b26b8ab55",
    To: "contact.uniro@gmail.com",
    From: "uniro.eu@gmail.com",
    Subject: nume.value + " " + prenume.value + " - " + loc.value,
    Body: msg.value,
  }).then((message) => alert("Mesajul a fost transmis cu succes!"));
}

form.addEventListener("submit", sendMsg);
