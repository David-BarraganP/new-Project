


import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Escanea el QR </h2>
      <QRCodeCanvas
        value="http://localhost:3000"
        size={200}
        fgColor="#000000"
      />
    </div>
  );
};

export default QrPage;

