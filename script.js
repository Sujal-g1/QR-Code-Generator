function generateQRCode() {
  const url = document.getElementById('url-input').value;
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = ''; // Clear previous QR

  if (!url) {
    alert('Please enter a URL');
    return;
  }

  QRCode.toCanvas(document.createElement('canvas'), url, function (error, canvas) {
    if (error) console.error(error);
    qrContainer.appendChild(canvas);
  });
}
