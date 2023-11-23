import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"

type Result = string

type Error = string       

const ScannerComponent = () => {
  const [scanResult, setScanResult] = useState<Result | null>(null)
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
    function success(result: Result | undefined) {
      scanner.clear()
      setScanResult(window.location.href = result as Result )
      // handleSr()
    }

    function error(err : Error | null) {
      console.warn(err)
    }
  }, [])
  return (
    <div>
    <div style={{fontSize: '10px'}} >
      <h1>Qr code scanner</h1>
    </div>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>Click this link to navigate to: </a>
          {scanResult}
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  )
}

export default ScannerComponent