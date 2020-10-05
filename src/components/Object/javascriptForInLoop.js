import React, { Component } from 'react'
import axios from 'axios'

export default class javascriptForInLoop extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: ''
        }
      }
      getData(){
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => {
          var data = res.data
          var loopData = ''
          for(var x in data){
              if(x === 'name' ){
                loopData += `<h5>My name is ${data[x]}</h5>`
              }
            
          }
          this.setState({data: loopData})
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
     const {data} = this.state
        return (
            <>
             <ul dangerouslySetInnerHTML={{__html: data}}></ul>
            </>
        )
    }
}
