import React, { Component } from 'react'
import JavascriptMap from './components/Array/javascriptMap'
import JavascriptForLoop from './components/Array/javascriptForLoop'
import JavascriptForEachLoop from './components/Array/javascriptForEachLoop'
import JavascriptWhileLoop from './components/Array/javascriptWhileLoop'
import JavascriptDoWhileLoop from './components/Array/javascriptDoWhileLoop'
import LodashForEach from './components/Array/lodashforEach'
import LodashMap from './components/Array/lodashMap'

import JavascriptForIn from './components/Object/javascriptForInLoop'
import JavascriptObjectKeys from './components/Object/javascriptObjectKeys'
import JavascriptObjectEntries from './components/Object/javascriptObjectEntries'
import LodashForInLoop from './components/Object/lodashForInLoop'
import LodashForOwnLoop from './components/Object/lodashForInLoop'
import LodashForEachLoop from './components/Object/lodashForEachLoop'
import LodashMapMethod from './components/Object/lodashMap'

export default class App extends Component {
  
  render() {
    return (
      <>
      <h1>Arrays</h1>
        <h3>Javascript Map</h3>
        <JavascriptMap/>
        <h3>Javascript for Loop</h3>
        <JavascriptForLoop/>
        <h3>Javascript forEach Loop</h3>
        <JavascriptForEachLoop/>
        <h3>Javascript while Loop</h3>
        <JavascriptWhileLoop/>
        <h3>Javascript Do While Loop</h3>
        <JavascriptDoWhileLoop/>
        <h3>Lodash forEach</h3>
        <LodashForEach />
        <h3>Lodash Map</h3>
        <LodashMap />
      <h1>Objects</h1>
        <h3>Javascript For/In Loop</h3>
        <JavascriptForIn />
        <h3>Javascript Object Keys</h3>
        <JavascriptObjectKeys />
        <h3>Javascript Object Entries</h3>
        <JavascriptObjectEntries  />
        <h3>Lodash forIn Loop</h3>
        <LodashForInLoop />
        <h3>Lodash forOwn Loop</h3>
        <LodashForEachLoop />
        <h3>Lodash forEach Loop</h3>
        <LodashForOwnLoop />
        <h3>Lodash map</h3>
        <LodashMapMethod />
      </>
    )
  }
}

