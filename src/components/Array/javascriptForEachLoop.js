import React, { Component } from 'react'
import axios from 'axios'

export default class javascriptForEachLoop extends Component {
    constructor(props){
        super(props)
        this.state = {
          userName: ''
        }
      }
    
      getData(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
          var data = res.data
          var forEachData = ''
          data.forEach(d => forEachData += `<li>${d.name}</li>`)

          this.setState({userName: forEachData})
          
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
      const {userName} = this.state
        return (
            <>
             <ul dangerouslySetInnerHTML={{__html: userName}}></ul>
            </>
        )
    }
}
