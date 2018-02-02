import React, { Component } from 'react';
import styles from '../App.css'

class Emonjis extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount(){
      return (
          this.getData()
      )
  }

  getData = () => {
      fetch('/data.json')
      // fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {

              var sortedData = [];
              for(var key in responseJson){
                  var item = {}
                  if(responseJson.hasOwnProperty(key)){
                      item = {
                          'name': key,
                          'data' :responseJson[key]
                      };
                  }
                  sortedData.push(item)
              }
              var d = sortedData.splice(0,100);
              this.setState({
                  isLoading: false,
                  data : d

              }, function() {
                  // do something with new state
              });
          })
          .catch((error) => {
              console.error(error);
          })
  }

  filterItems = (q, dataToBeFiltered) => {
        return(
            dataToBeFiltered.filter(function(el) {
                return el.name.toLowerCase().indexOf(q.toLowerCase()) > -1;
            })
        )
  };

  getQueryData = (q) => {
      let oldData = this.state.data;
      let newData = oldData;
      let u_data = this.filterItems(q,newData);
      this.setState({
          data: u_data
      })
  };



  searchData  = (elemet) => {
      let q =  elemet.target.value ;
      if(q == ''){
          this.getData()
      }else {
          this.getQueryData(q);
      }
  };

  render() {

    return (

      <div className="App">
        <p>jjjjjj</p>
          <div >
              <input type="text" onChange={this.searchData} placeholder="Filter from here..."/>
          </div>
          {this.state.data.map((item, i) => (
              <div className="column" key={i}>
                  <div className="columnInner">
                      <ul key={i}>
                          <li>Name: {item.name}</li>
                          <li>Char : {item.data.char}</li>
                          <li>Category: {item.data.category}</li>
                          <li>Keywords
                              <ul>
                                  <li>
                                      {item.data.keywords.map((item, i) => (
                                          <div key={i}>{item}</div>
                                      ))}
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          ))}
      </div>
    );
  }
}

export default Emonjis;
