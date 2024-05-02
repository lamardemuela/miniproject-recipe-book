import React from "react";
import image404 from "../assets/images/image404.jpg";

function NotFound() {
  const image404Style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={image404Style}>
      <img src={image404}  alt="not-found" width="500px" />
    </div>
  );
}

export default NotFound;
