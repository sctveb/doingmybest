import CounterList from '../components/CounterList';
import * as actions from '../modules';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
  counters: state.get('counters'),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
