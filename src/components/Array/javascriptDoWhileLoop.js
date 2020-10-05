import React, { Component } from 'react'
import axios from 'axios'

export default class javascriptDoWhileLoop extends Component {
    constructor(props){
        super(props)
        this.state = {
          userName: ''
        }
      }
      getData(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
          var data = res.data
          var loopData = ''
          var i = 0 ;
          do {
            loopData += `<li>${data[i].name}</li>`;
            i++;
          }
          while (i < data.length); 
          this.setState({userName: loopData})
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
