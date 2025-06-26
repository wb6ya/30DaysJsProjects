let qrCode = document.getElementById("qrCode");
let qrImg = document.getElementById("qrImg");
let qrInput = document.getElementById("qrInput");
let errMsg = document.querySelector(".errMsg");

function generateQRCode() {
    if (qrInput.value === "") {
        qrInput.classList.add("error");
        errMsg.innerText = "Please enter a URL or text to generate a QR code.";
        setTimeout(() => {
            qrInput.classList.remove("error");
            qrInput.placeholder = "Enter URL or text";
        }, 600);
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
        qrCode.classList.add("show");
        errMsg.innerText = "";
        qrInput.value = "";
    }
    

}

