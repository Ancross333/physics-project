import React, { Component } from 'react';
class ImpulseMomentum extends Component {
    state = {  } 
    render() { 
        return (<div>
            <div className='titleWrap'>
                <header>
                    <h1>
                        Impulse Momentum
                    </h1>
                </header>

                <article>
                    <p>
                        Momentum in physics is how fast an object is moving pound for pound, or relative to its mass. Since momentum takes into account mass and speed, it can be used to solve problems involving multiple objects, such as collisions.
                    </p>
                </article>
            </div>

            <div className='formulaBackground'>
                <h2 className='formulaHeader'>
                    Formulas
                </h2>

                <h3 className='formula'>
                    Momentum: P = mv
                </h3>

                <h3 className='formula'>
                    Impulse: j = △p
                </h3>

                <h3 className='formula'>
                    LoCoMom: p<sub>i</sub> = p<sub>f</sub>
                </h3>

                <h3 className='formula'>
                    Inelastic Collision: V<sub>f</sub> = ((m1 * V<sub>1i</sub>) + (m2 * V<sub>2i</sub>)) / (m1 + m2)
                </h3>
                <h3 className='formula'>
                    Elastic Collision: V<sub>1f</sub> = (m<sub>1</sub> - m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)V<sub>1i</sub> + (2m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)V<sub>2i</sub>
                </h3>

                <h3 className='formula'>
                    Elastic Collision: V<sub>2f</sub> = (2m<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>)V<sub>1i</sub> + (m<sub>2</sub> - m<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>)V<sub>2i</sub>
                </h3>
            </div>
        </div>);
    }
}
 
export default ImpulseMomentum;