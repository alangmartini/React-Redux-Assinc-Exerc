import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from './redux/actions/data';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  render() {
    const { data, isLoading } = this.props;
    if (isLoading) return <p> Carregando... </p>;

    return (
      <div className="container">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
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
  data: PropTypes.arrayOf({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
