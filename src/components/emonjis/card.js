import React, { Component } from 'react'

export class Card extends Component {    
  render() {
    const item= this.props.item;
    return (
        <div className="column" key={item.i}>
            <div className="columnInner">
                <ul key={item.i}>
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
    )
  }
}

