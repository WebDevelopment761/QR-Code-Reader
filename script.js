const resultElement = document.getElementById("result");

function copyToClipboard() {
  navigator.clipboard.writeText(resultElement.textContent);
  alert("Copied to clipboard!");
}

function startScanner() {
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    qrCodeMessage => {
      resultElement.textContent = qrCodeMessage;
      html5QrCode.stop(); // stop after scanning
    },
    errorMessage => {
      // Ignore scan errors
    }
  ).catch(err => {
    resultElement.textContent = `Camera Error: ${err}`;
  });
}

startScanner();
