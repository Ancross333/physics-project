import React, { Component } from 'react'
import '../CSS/Home.css'
class Home extends Component {
    state = { } 
    render() { 
        return (<div>
            <div id = 'homeH' className='titleWrap'>
                <header>
                    <h1>
                       Classical Mechanics Project
                    </h1>

                    <h2>
                        <a target='_blank'>Documentation</a>
                    </h2>

                    <h2>
                        <a href='about:blank' target='_blank'>Code</a>
                    </h2>
                </header>
            </div>
        </div>);
    }
}
 
export default Home;