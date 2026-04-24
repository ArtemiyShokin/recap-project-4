import { useState } from "react";
import "./ContrastChecker.css";
export default function ContrastChecker({ colorHex, colorContrast }) {
  const [contrastCheckerResponse, setContrastCheckerResponse] = useState("⌛");
  async function postFetch() {
    fetch("https://www.aremycolorsaccessible.com/api/are-they", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ colors: [colorHex, colorContrast] }),
    })
      .then((response) => response.json())
      .then((json) => {
        //   console.log(json);
        setContrastCheckerResponse(json.overall);
      });
  }
  postFetch();

  let background;
  if (contrastCheckerResponse === "Kinda") {
    background = "yellow";
  } else if (contrastCheckerResponse === "Yup") {
    background = "green";
  } else {
    background = "red";
  }

  return (
    <li className="contrast-checker" style={{ backgroundColor: background }}>
      {" "}
      Is this acessible: {contrastCheckerResponse}
    </li>
  );
}
/*

This is how you can send data to an API, it is called a post request.
async function postFetch() {
  const response = await fetch("https://www.some-api-url.com/api", {
    method: "POST",
    body: JSON.stringify({ cool: true }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

*/
