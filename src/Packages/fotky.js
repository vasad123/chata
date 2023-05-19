import { Link } from "react-router-dom";
import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-536e-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-536e-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a186-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a186-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-8156-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-8156-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-18c8-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-18c8-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a5de-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-a5de-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-b65f-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-b65f-.jpeg",
  },
  {
    original:
      "https://www.e-chalupy.cz/kokorinsko/_15931/f85dc298-dc02-4a62-b9b6-41b3b3593fe4-3066-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/f85dc298-dc02-4a62-b9b6-41b3b3593fe4-3066-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-485d-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-485d-.jpeg",
  },
  {
    original: "https://www.e-chalupy.cz/kokorinsko/_15931/94fc3130-1545-4921-ba4d-34d657acd580-2d1f-.jpeg",
    thumbnail:
      "https://www.e-chalupy.cz/kokorinsko/_15931/94fc3130-1545-4921-ba4d-34d657acd580-2d1f-.jpeg",
  },
];

export function Fotky() {
  return (
    <div class="wrap">
      <div class="column"></div>
      <div class="column2">
        <ImageGallery items={images} />
      </div>
      <div class="column3"></div>
    </div>
  );
}
