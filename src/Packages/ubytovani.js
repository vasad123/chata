import { Link } from "react-router-dom";
export function Ubytovani() {
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
          <div class="ubytInfo">
            <h3>Ubytování na chatě</h3>
            <br></br>
            <p>
              Chata k pronájmu poskytuje ubytování pro 18 osob v 5 ložnicích.
            </p>
            <br></br>
            <h4>Ložnice a pokoje:</h4>
            <br></br>
            <p>
              V přízemí se nachází jeden dvoulůžkový pokoj. V prvním patře jsou
              velmi prostorné čtyři čtyřlůžkové pokoje.
            </p>
            <br></br>
            <h4>Sociální zařízení:</h4>
            <br></br>
            <p>
              Každý pokoj má svou samostatnou koupelnu se sprchový koutem a
              toaletou. Tedy pět kompletních koupelen. V přízemí jsou 3 společné
              toalety.
            </p>
            <br></br>
            <h4>Vytápění:</h4>
            <br></br>
            <p>Teplo zajištuje tepelné čerpadlo s podlahovým vytápěním.</p>
            <br></br>
            <h4>Doprava, parkování:</h4>
            <br></br>
            <p>
              Parkování je přímo u objektu s kapacitou deseti parkovacích míst.
            </p>
          </div>
        </div>
        <div class="column3"></div>
      </div>
    </>
  );
}
