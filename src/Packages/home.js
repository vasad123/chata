import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <div class="wrap">
        <div class="column"></div>
        <div class="column2">
          {" "}
          <img
            src="https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-f210-.jpeg"
            id="imageMain"
          ></img>
          <div class="homeInfo">
            <h3>Chata se nachází v Ralsku u Hradčan nedaleko Máchova jezera</h3>
            <p>
              Pronájem nově postavené chalupy s kapacitou až 18 osob je ideální
              pro celeroční dovolenou
            </p>
            <p>
              Možnost ustájit až 6 koní
              <br></br>
              tepelné čerpadlo s podlahovým vytápěním
            </p>
            <p>
              Parkoviště před chatou až s deseti místy
              <br></br>
              WIFI, TV
            </p>
          </div>
        </div>
        <div class="column3"></div>
      </div>
    </>
  );
}
