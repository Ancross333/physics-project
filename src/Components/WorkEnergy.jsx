import React, { Component } from 'react'
class WorkEnergy extends Component {
    state = {  } 
    render() { 
        return (<div>
        <div className='titleWrap'>
            <header>
                <h1>
                    Work Energy
                </h1>
            </header>

            <article>
                <p>
                    Work is very similar to dynamics, as it mostly ties back to force. However, work is able to use forces to find displacement, which dynamics cannot. Energy is defined as the ability to do work. A work energy problem may ask to find how far an object tumbling down a hill may travel.
                </p>
            </article>
        </div>
            {/* Purple background for formulas */}

            <div className='formulaBackground'>
                <h2 className='formulaHeader'>
                    Formulas
                </h2>

                <h3 className='formula'>
                    Work: w = fdcos(θ)
                </h3>

                <h3 className='formula'>
                    Power: P = w / △t
                </h3>
                <h3 className='formula'>
                    Gravitational Potential Energy: PE<sub>g</sub> = mgh
                </h3>

                <h3 className='formula'>
                    Elastic Potential Energy: PE<sub>E</sub> = .5kx<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Kinetic Energy: KE = .5mv<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Final Velocity: V<sub>f</sub> = sqrt(2ME / m)
                </h3>

                <h3 className='formula'>
                    LoCoME: ME<sub>i</sub> = ME<sub>f</sub>
                </h3>
            </div>
        </div>);
    }
}
 
export default WorkEnergy;