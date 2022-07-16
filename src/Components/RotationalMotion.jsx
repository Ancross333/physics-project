import React, { Component } from 'react'
class RotationalMotion extends Component {
    state = {  } 
    render() { 
        return (<div>
        <div className='titleWrap'>
            <header>
                <h1>
                    Rotational Motion
                </h1>
            </header>

            <article>
                <p>
                    Rotational Motion in physics focuses on the motion of an object in a circular path, such as a swinging rope, or car tires.
                </p>
            </article>
        </div>

            {/* Purple background for formulas */}

            <div className='formulaBackground'>
                <h2 className='formulaHeader'>
                    Formulas
                </h2>

                <h3 className='formula'>
                    Angular Velocity: ω = △θ / △t
                </h3>

                <h3 className='formula'>
                    Angular Acceleration: α = △ω / △t
                </h3>

                <h3 className='formula'>
                    Tangential Velocity: V<sub>t</sub> = rω
                </h3>

                <h3 className='formula'>
                    Centripetal Acceleration: a<sub>c</sub> = ω<sup>2</sup>r OR a<sub>c</sub> = v<sup>2</sup> / r
                </h3>

                <h3 className='formula'>
                    Centripetal Force: F<sub>c</sub> = ma<sub>c</sub>
                </h3>

                <h3 className='formula'>
                    Torque: τ =rFsin(θ) OR Iα where I is the moment of inertia
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>CYLINDER<sub>FROM TIP</sub></sub> = .3ml<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>CYLINDER<sub>THROUGH CENTER OF LONG SIDE</sub></sub> = .5mr<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>SPHERE</sub> = .4mr<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>SPHERE<sub>HOLLOW</sub></sub> = .66mr<sup>2</sup>
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>PRISM</sub> = .5m(l<sup>2</sup> + w<sup>2</sup>)
                </h3>

                <h3 className='formula'>
                    Moment of Inertia: I<sub>PRISM<sub>THIN</sub></sub> = <sup>1</sup>/<sub>12</sub>m(l<sup>2</sup> + w<sup>2</sup>)
                </h3>

                <h3 className='formula'>
                    Angular Acceleration: α = τ / I
                </h3>

                <h3 className = 'formula'>
                    Max Velocity of a car turning a corner: V<sub>max</sub> = sqrt((rF<sub>fs</sub>) / m)
                </h3>

                <h3 className='formula'>
                    Max Velocity of a car on a banked curve w/friction: V<sub>max</sub> = sqrt((gr(sin(θ) + u<sub>s</sub>cos(θ)) / (cos(θ) - u<sub>s</sub>sin(θ)))
                </h3>
            </div>
        </div>);
    }
}
 
export default RotationalMotion;