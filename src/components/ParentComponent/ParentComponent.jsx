import React, {Component} from 'react';
import PropTypes from 'react'
import styles from './ParentComponent.scss';

class KeyValue extends Component{
  constructor(props) {
    super(props);
    console.log(this.props);
    this.setKey = this.setKey.bind(this);
    this.setValue = this.setValue.bind(this);
    this.state = {
      key: "",
      value: ""
    };
  }

  render() {
    return(
      <tr>
        <td>
          <input onChange={this.setKey.bind(this)} placeholder={"Key"}/>
        </td>
        <td>
          <input onChange={this.setValue.bind(this)} placeholder={"Value"}/>
        </td>
      </tr>
    )
  }

  setKey(e) {
    this.props.keyCallback(this.props.id, e.target.value);
  }

  setValue(e){
    this.props.valueCallback(this.props.id, e.target.value);
  }
}

class ParentComponent extends Component{
  id = 0;
  keys = [];
  values = [];

  constructor(props) {
    super(props);
    this.keyCallback = this.keyCallback.bind(this);
    this.valueCallback = this.valueCallback.bind(this);
    this.state = {rows: [<KeyValue id={this.id} keyCallback={this.keyCallback} valueCallback={this.valueCallback}/>]};
    this.id += 1;
  }

  render(){

    return(
      <div data-test-hook="ParentComponentPage" className={styles.parentComponent}>
        <p className={styles.parentText}>
          Hi! This is the parent component
        </p>
        <p className={styles.header}>
          this is your header
          <button onClick={this.addKeyValue.bind(this)}>+</button>
        </p>
        <table className={styles.table}>
          {this.state.rows.map((r) => (

              <tr>{r}</tr>

          ))}
          <caption align="bottom">
            <button onClick={this.submitKeyValues.bind(this)} className={styles.submit}>
              Submit
            </button>
          </caption>
        </table>

      </div>
    )
  }

  keyCallback(id, key){
    this.keys[id] = key;
    this.setState({});
  }

  valueCallback(id, value){
    this.values[id] = value;
    this.setState({});
  }

  addKeyValue() {
    this.state.rows.push(<KeyValue id={this.id} keyCallback={this.keyCallback} valueCallback={this.valueCallback}/>);
    this.id += 1;
    this.keys.push(0);
    this.values.push(0);
    this.setState({});
  }

  submitKeyValues() {
    var keyValJSON = {};
    for (var i = 0; i < this.state.rows.length; i++){
      keyValJSON[this.keys[i]] = this.values[i];
    }
    console.log(JSON.stringify(keyValJSON))
  }
}

export default ParentComponent;
