


import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Escanea el QR </h2>
      <QRCodeCanvas
        value="https://new-project-bice-two.vercel.app/"
        size={200}
        fgColor="#000000"
      />
    </div>
  );
};

export default QrPage;

