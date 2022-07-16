import React, { Component } from 'react'
import '../CSS/Dynamics.css';
import '../CSS/Universal.css'
class Dynamics extends Component {
    state = {  } 
    render() { 
        return (<div>
        <div className='titleWrap'>
            <header>
                <h1>
                    Dynamics
                </h1>
            </header>

            <article>
                <p>
                    Dynamics focuses on the forces that cause motion to a given object. a problem that uses dynamics would be to find what force is required to move an object on a specific surface
                </p>
            </article>
        </div>
            {/* Purple background for formulas */}

            <div className='formulaBackground'>
                <h2 className='formulaHeader'>
                    Formulas
                </h2>

                <h3 id = 'force' className='formula'>
                    Applied Force: F<sub>a</sub> = ma
                </h3>

                <h3 className='formula'>
                    Friction Force: F<sub>f</sub> = F<sub>n</sub> x u<sub>s/k</sub>
                </h3>

                <h3 className='formula'>
                    Spring Force: F<sub>s</sub> = -kx
                </h3>

                <h3 className='formula'>
                    Plane Acceleration: a = mgsin(θ)/m
                </h3>
                
                <h3 className='formula'>
                    Plane Acceleration with Friction: a = (mgsin(θ) - mgcos(θ) x u<sub>k</sub>) / m
                </h3>

                <h3 className='formula'>
                    Pulley Acceleration: a = g(m2 - m1) / (m1 + m2)
                </h3>

            </div>

            
        </div>);
    }
}
 
export default Dynamics;