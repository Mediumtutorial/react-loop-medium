import React, { Component } from 'react'
import axios from 'axios'
import _map from 'lodash/map'

export default class javascriptMap extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
      }
    
      getData(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
          var data = res.data
            this.setState({data : data})
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
      const {data} = this.state
        return (
            <>
             <ul>
        {_map(data, d => (<li key={d.id}>{d.name}</li>))} 
                </ul>
            </>
        )
    }
}
