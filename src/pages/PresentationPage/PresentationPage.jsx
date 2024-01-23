import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";

function PresentationPage() {
  return (
    <>
      <div className="my-5 container d-flex fixed-top">
        <div className="col mt-5">
          <img
            className="w-100 logo"
            src="/src/assets/logo_restaurant.jpg"
            alt="logo du restaurant"
          />
        </div>
        <div className="col mt-5 p-4">
          <h1>Thynk Cafe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea atque
            exercitationem adipisci numquam corporis natus laborum incidunt
            odit. Beatae vel accusamus ipsum in distinctio molestiae esse quam
            rerum sint!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id ea atque exercitationem adipisci numquam corporis natus laborum
            incidunt odit. Beatae vel accusamus ipsum in distinctio molestiae
            esse quam rerum sint!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id ea atque exercitationem adipisci numquam
            corporis natus laborum incidunt odit. Beatae vel accusamus ipsum in
            distinctio molestiae esse quam rerum sint!
          </p>
        </div>
      </div>
    </>
  );
}

export default PresentationPage;
