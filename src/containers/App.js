import React from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { getRandomColor } from '../utils';

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index)),
});

const App = (props) => {
  const { onCreate, onRemove } = props;
  return (
    <div>
      <Buttons onCreate={onCreate} onRemove={onRemove} />
      <CounterListContainer />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(App);
