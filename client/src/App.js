import {Component} from 'react';
import StatusTable from './Component/Table/Table'
import { fetchDistance } from './redux/operations';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.onFetchDistance()
  }

  render(){
  return (
    <div className="App">
      <h1>Horse Betting Status</h1>
      <StatusTable />
    </div>
  )};
}

const mapDispatchToProps = dispatch => ({
  onFetchDistance: () => dispatch(fetchDistance())
})

export default connect(0, mapDispatchToProps)(App);
