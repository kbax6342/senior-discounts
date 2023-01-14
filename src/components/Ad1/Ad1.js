import React, { Component, useEffect } from 'react'

export default class AdComponent extends Component {
    componentDidMount () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  
  render () {
      return (
      <div>
        <ins class="adsbygoogle"
        style={{display:'block'}}
        data-ad-client="ca-pub-9604401375033815"
        data-ad-slot="9213937627"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      
      </div>
        
      );
    }
  }