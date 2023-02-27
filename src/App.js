import React, { Component } from 'react';
import Search from "../src/Components/Search/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <div>
    <MuiThemeProvider>
      <div>
       <Search />
       </div>
      </MuiThemeProvider>
    </div>
  )
}

export default App