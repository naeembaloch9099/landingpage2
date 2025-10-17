import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export default function QRModal({ open, onClose, data }) {
  if (!open) return null;

  // Simple modal portal
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white dark:bg-[var(--surface)] rounded-xl p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Your QR Code
          </h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-md dark:bg-[var(--surface)]">
            <QRCode value={JSON.stringify(data)} size={180} />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
            Scan this QR code with any QR app to view order details.
          </p>

          <button
            onClick={() =>
              alert("Simulated scan result:\n" + JSON.stringify(data, null, 2))
            }
            className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Simulate scan (show data)
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
