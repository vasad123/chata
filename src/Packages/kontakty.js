import { Link } from "react-router-dom";
export function Kontakty() {
  return (
    <>
      <div class="wrap">
        <div class="column"></div>
        <div class="column2">
          <img
            id="img-kontakty"
            src="https://www.e-chalupy.cz/kokorinsko/_15931/u-kutnaru-18c8-.jpeg"
          ></img>

          <div class="kontakty">
            <h2><u>Zavolejte nám</u></h2> <br></br>
            <p>
              Kutnár <br></br>
              tel.: + 420  731 556 023 | 603 486 680 <br></br>
              roubenkaella@gmail.com <br></br>
              Hradčany 431 <br></br>
              471 24 Ralsko <br></br>
              <br></br>
              <br></br>
              <h4><u>Provozovatel</u></h4>
              Kutnár <br></br>
              IČO: 87691809 <br></br>
              Fakturační adresa: Hradčany 431 
              471 24 Ralsko
            </p>
          </div>
          <div class="img-kontakty-kytka">
            <img src="https://www.vezuvaute.cz/418-large_default/samolepka-na-auto-kvetina-01.jpg"></img>
          </div>
        </div>
        <div class="column3"></div>
      </div>
    </>
  );
}
