import { Link } from "react-router-dom";
export function Cenik() {
  return (
    <>
      <div class="wrap">
        <div class="column"></div>
        <div class="column2">
          <div class="firstTitle">
            <p>Ceník</p>
          </div>
          <div class="secondTitle">
            <b>
              {" "}
              <span>Zimní sezóna</span> <br></br>
              <p>
                {" "}
                leden - březen 25 000 Kč /týden<br></br>v sezóně se pronajímá
                chalupa minimálně na celý týden
              </p>
            </b>
          </div>
        </div>

        <div class="column3"></div>
      </div>
    </>
  );
}
