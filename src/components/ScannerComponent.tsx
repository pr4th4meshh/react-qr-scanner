import { useEffect, useState } from "react"
import "./App.css"
import { Html5QrcodeScanner } from "html5-qrcode"

const ScannerComponent = () => {
  const [scanResult, setScanResult] = useState(null)
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
      rememberLastUsedCamera: true,
    },true)

    scanner.render(success, error)
    function success(result) {
      scanner.clear()
      setScanResult(result)
    }

    function error(err) {
      console.warn(err)
    }
  }, [])
  return (
    <div className="App">
      {scanResult ? (
        <div>
          Scsds: <a href={scanResult}>Click this link to navigate to: </a>
          {scanResult}
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  )
}

export default ScannerComponent