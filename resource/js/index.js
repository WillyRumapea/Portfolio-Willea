const downloadCV = document.getElementById("download-CV");
const connectLinkedin = document.getElementById("connect-linkedin");

downloadCV.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1kpsJJ311gjY-yYeHBeis6K9Gq4f9VJWu";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

connectLinkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/willy-rumapea/", "_blank");
});
