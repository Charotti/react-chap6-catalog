import React from "react";
import bibli from "../bibli.json";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const movie = bibli[id - 1];
    this.setState({ movie });
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.movie.title}</li>
          <li>{this.state.movie.director}</li>
          <li>{this.state.movie.stars}</li>
          <li>
            <img src={this.state.movie.image} alt="picture" />
          </li>
          <li>{this.state.movie.description}</li>
        </ul>
      </div>
    );
  }
}
export default Movies;
