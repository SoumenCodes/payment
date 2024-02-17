import React from "react";
import QRCode from "qrcode.react";

function PaymentQRCode({ amount }) {
  // Replace 'yourmerchant@upi' with your merchant UPI ID
  const merchantUPI = "soumen19j@okicici";
  //   const merchantUPI = "yourmerchant@upi";

  // Construct the payment URL with the specified amount
  const paymentURL = `upi://pay?pa=${merchantUPI}&pn=MerchantName&am=${amount}&cu=INR`;

  return (
    <div>
      <h2>Scan QR Code to Pay ₹{amount}</h2>
      <QRCode value={paymentURL} />
    </div>
  );
}

export default PaymentQRCode;
