import React, { Component } from 'react'
import axios from 'axios'
import _forIn from 'lodash/forIn'

export default class lodashForIn extends Component {
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
          _forIn(data, (value,key) => {
            if(key === 'name'){
              loopData += `<h5>My name is ${value}</h5>`
            }
          })
         
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
