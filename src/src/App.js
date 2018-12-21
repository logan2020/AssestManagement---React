import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layouts/Layout';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <main>
              
            </main>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
