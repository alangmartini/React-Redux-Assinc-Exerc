import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from './redux/actions/data';

class App extends React.Component {
  componentDidMount() {
    dispatch(fetchData());
  }

  render() {
    const { data, isLoading } = this.props;

    if (isLoading) return <p> Carregando... </p>;

    return (
      <div>
        {data.map((item) => (
          <div key={ item.id }>{item.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
  isLoading: state.data.isLoading,
});

App.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
