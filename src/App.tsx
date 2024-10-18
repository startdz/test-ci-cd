import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Swal from "sweetalert2";

function App() {
  const [value] = useState<string>("halo");

  function onClick() {
    Swal.fire({
      title: `Testing Swal Input Text: ${value}`,
      icon: "info",
      text: "Input Swal",

      confirmButtonText: "Submit",
      showCloseButton: true,
      cancelButtonText: "Close",
      input: "text",
      inputValue: "",
      inputValidator: (inputValue) => {
        if (inputValue !== value) {
          return "Text not matches!";
        } else {
          Swal.fire("your text right!");
        }
      },
    }).then((isConfirmed) => {
      console.log(isConfirmed.value);
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <button
        style={{
          padding: "8px 16px",
          width: 120,
        }}
        onClick={onClick}
      >
        Klik
      </button>
    </>
  );
}

export default App;
