const resultElement = document.getElementById("result");

function copyToClipboard() {
  navigator.clipboard.writeText(resultElement.textContent);
  alert("Copied to clipboard!");
}

const qrRegion = new Html5Qrcode("preview");

qrRegion.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  qrCodeMessage => {
    resultElement.textContent = qrCodeMessage;
    qrRegion.stop(); // Stop scanning after success
  },
  errorMessage => {
    // Ignore scan errors for now
  }
).catch(err => {
  resultElement.textContent = `Camera Error: ${err}`;
});
