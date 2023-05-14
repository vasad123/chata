import { Link } from "react-router-dom";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height:"800px",
  
  overflow: "hidden",
};
const slideImages = [
  {
    url: "https://th.bing.com/th/id/R.af28f1c9f3911673b7838b7d131ae28f?rik=ocjrWgsD2Zyolg&pid=ImgRaw&r=0",
  },
  {
    url: "https://th.bing.com/th/id/R.7dabf8247640248e8b2b23ced57665d9?rik=2UMUd4DSQYtigQ&pid=ImgRaw&r=0",
  },
  {
    url: "https://th.bing.com/th/id/OIP.s-blmytA_60Ee_NzD7K13gHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    url: "https://th.bing.com/th/id/OIP.w_zBKGQa9OSNUWSQA_f0FAEsDh?w=230&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    url: "https://th.bing.com/th/id/OIP.XPadpWo9-XAlPXAfMs4RVQHaEK?w=274&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    url: "https://th.bing.com/th/id/OIP.mH8mR6MZvLN7iEO4z94MpQHaFj?w=246&h=184&c=7&r=0&o=5&pid=1.7",
  },
  {
    url: "https://th.bing.com/th/id/OIP.vV5Z-HNHvU7rCQ9BT7gkrwHaFj?w=223&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    url: "https://th.bing.com/th/id/OIP.ShUE2_SmKVsxnaCb5zWxpgHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7",
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
                    backgroundRepeat:` no-repeat`,
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
