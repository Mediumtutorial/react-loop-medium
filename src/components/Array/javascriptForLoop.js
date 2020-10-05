import React, { Component } from 'react'
import axios from 'axios'

export default class javascriptForLoop extends Component {
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
          var i ;
          for(i=0; i < data.length; i++){
              loopData += `<li>${data[i].name}</li>`
          }
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
