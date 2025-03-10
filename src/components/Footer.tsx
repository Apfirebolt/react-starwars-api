import React, { Fragment, FC } from "react";

const FooterComponent: FC = () => {
  return (
    <Fragment>
      <footer
        className="bg-primary-100
             text-xl text-secondary-100 text-center
             border-t-4 border-primary-400
             px-2
             py-6"
      >
        <div className="grid grid-cols-3 gap-4 border-b-2 border-neutral-600">
          <div>
            <h3 className="text-center text-lg font-bold my-2">Films</h3>
            <p>All the films in the starwars universe</p>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold my-2">People</h3>
            <p>People in Starwars</p>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold my-2">Starships</h3>
            <p>All Starships in Starwars universe</p>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold my-2">Vehicles</h3>
            <p>Get all vehicles from the Franchise</p>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold my-2">Planets</h3>
            <p>All planet data from Starwars</p>
          </div>
        </div>
        <div className="mt-8">
          <p>Copyright @2025 Starwars Info</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterComponent;
