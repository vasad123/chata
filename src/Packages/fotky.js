import { Link } from "react-router-dom";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "900px",
  backgroundImage: "no-repeat",
  overflow: "hidden",
};
const slideImages = [
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-536e-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-f210-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-18c8-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a5de-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-0bc3-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a186-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-8156-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-485d-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-b65f-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-cbd1-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/f85dc298-dc02-4a62-b9b6-41b3b3593fe4-3066-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/94fc3130-1545-4921-ba4d-34d657acd580-2d1f-.jpeg",
  },
  {
    url: "https://www.e-chalupy.cz/kokorinsko/_15931/4052da33-656d-4a27-b27b-5c0a8f399340-911a-.jpeg",
  },

];

export function Fotky() {
  return (
    <>
      <div className="imgContainer">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}
