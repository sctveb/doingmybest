import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Counter from './Counter';
import './CounterList.css';

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));
  return <div className="CounterList">{counterList}</div>;
};

CounterList.propTypes = {
  counters: PropTypes.instanceOf(List),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};
CounterList.defaultProps = {
  counters: [],
  onIncrement: () => console.log('asdf'),
  onDecrement: () => console.log('asdf'),
  onSetColor: () => console.log('asdf'),
};
export default CounterList;
