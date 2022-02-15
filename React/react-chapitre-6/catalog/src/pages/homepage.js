import React from "react";
import bibli from "../bibli.json";
import { Link } from "react-router-dom";

class homepage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          {bibli.map((movie) => {
            let route = "/movie/" + movie.id;
            return (
              <li>
                <Link to={route} key={movie.id}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default homepage;
