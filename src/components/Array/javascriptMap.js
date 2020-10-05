import React, { Component } from 'react'
import axios from 'axios'

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
        return (
            <>
             <ul>
        {this.state.data.map(d => (<li key={d.id}>{d.name}</li>))} 
                </ul>
            </>
        )
    }
}
