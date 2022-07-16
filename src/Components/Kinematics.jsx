import React, { Component } from 'react'
class Kinematics extends Component {
    state = {  } 
    render() { 
        return (<div>
        <div className='titleWrap'>
            <header>
                <h1>Kinematics</h1>
            </header>

            <article>
                <p>
                    Kinematics problems are about the geometrical position of a given object, without considering the forces. A kinematics problem could ask to find how far an object travels given acceleration and time.
                </p>
            </article>
        </div>
            {/* Purple background for formulas */}

            <div className='formulaBackground'>
                <h2 className='formulaHeader'>
                    Formulas
                </h2>

                <h3 className='formula'>
                    Velocity: v = △x / △t
                </h3>
                <h3 className='formula'>
                    Average Velocity: (v<sub>i</sub> + v<sub>f</sub>) / 2
                </h3>

                <h3 className='formula'>
                    Final velocity: v<sub>f</sub> = v<sub>i</sub> + at
                </h3>

                <h3 className='formula'>
                    Distance w/velocity: △x = vt
                </h3>

                <h3 className='formula'>
                    Distance w/acceleration: △x = v<sub>i</sub>t + .5at<sup>2</sup>
                </h3>
            </div>
        </div>);
    }
}
 
export default Kinematics;