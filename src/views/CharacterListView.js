import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { getCharacter } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      return <p>taking a look...</p>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  };
};

export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
