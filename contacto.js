/* ====== EDITÁ SOLO ESTAS TRES LÍNEAS ======
   Número con código de país, sin +, espacios ni guiones.
   Argentina celular: 54 9 + código de área + número (ej: 54 9 11 1234 5678)
   DIRECCION: poné calle, número y localidad tal como la buscarías en Google Maps;
   cuanto más exacta, más preciso queda el pin del mapa. */
const NUMERO_WHATSAPP = "5492304697363";
const MENSAJE = "Hola, quisiera hacer una consulta con el estudio.";
const DIRECCION = "Calle Uno, San Miguel, Buenos Aires";
/* ========================================= */

const link = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(MENSAJE);

document.getElementById("btn-wa").href = link;
document.getElementById("tel-visible").textContent = "+" + NUMERO_WHATSAPP;

/* Dirección y mapa (se arman con la misma dirección) */
const consultaMapa = encodeURIComponent(DIRECCION + ", Argentina");
document.getElementById("dir-visible").textContent = DIRECCION;
document.getElementById("mapa").src = "https://www.google.com/maps?q=" + consultaMapa + "&output=embed&hl=es";
document.getElementById("btn-mapa").href = "https://www.google.com/maps/search/?api=1&query=" + consultaMapa;

/* Código QR de WhatsApp */
if (typeof QRCode !== "undefined") {
    new QRCode(document.getElementById("qrcode"), {
        text: link, width: 180, height: 180,
        colorDark: "#0d0d0f", colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });
} else {
    document.getElementById("qrcode").textContent = "Usá el botón de WhatsApp.";
}
