import React, { Component } from 'react';
import { Card } from './card';

class EmonjisComponent extends Component {
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

  getData ()  {
      fetch('/data.json')
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
              var d = sortedData.splice(0,sortedData.length);
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
  };

  filterItems = (q, dataToBeFiltered, key) => {
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
      if(q === ''){
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
            <Card item = {item}/>
          ))}
      </div>
    );
  }
}

export const Emonjis  = EmonjisComponent;