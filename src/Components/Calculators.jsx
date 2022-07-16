import React, { Component } from 'react'
import '../CSS/Calculators.css'

class Calculators extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            result1: "Result: " + 0,
            mass1: 0,
            theta1: 0,
            result2: "Result: " + 0,
            mass2: 0,
            theta2: 0,
            coFric2: 0,
            result3: "Result: " + 0,
            vi3: 0,
            time3: 0,
            acceleration3: 0,
            result4: "Result: " + 0,
            mass4: 0,
            radius4: 0,
            coFric4: 0,
            result5: "Result: " + 0,
            mass5: 0,
            radius5: 0,
            force5: 0,
            result6: "Result: " + 0,
            height6: 0,
            mass6: 0,
            vi6: 0,
            result7: "Result: " + 0,
            mass7: 0,
            other7: 0,
            type7: "",
            result8: "Result: " + 0,
            radius8: 0,
            theta8: 0,
            coFric8: 0,
            result9: "Result: 0",
            massOne9: 0,
            viOne9: 0,
            massTwo9: 0,
            viTwo9: 0,
            result10: "Result: " + 0,
            massOne10: 0,
            viOne10: 0,
            massTwo10: 0,
            viTwo10: 0,
            result11: "Result: " + 0,
            mass11: 0,
            velocity11: 0,
            result12: "Result: " + 0,
            mass12: 0,
            velocity12: 0,
            height12: 0,
            result13: "Result: " + 0,
            mass13: 0,
            other13: 0,
            otherTwo13: 0,
            type13: 0,
            result14: "Result: " + 0,
            force14: 0,
            radius14: 0,
            theta14: 0,
            result15: "Result: " + 0,
            torque15: 0,
            force15: 0,
            theta15: 0,
            result16: "Result: " + 0,
            torque16: 0,
            force16: 0,
            radius16: 0,
            result17: "Result: " + 0,
            vi17: 0,
            theta17: 0,
        }

    }

    planeAcceleration(mass, theta){
    
        //Earth's gravitational Constant is ~9.8 m/s^2
    
        const gravity = 9.80665;
        
        //Convert to Radians
        
        theta *= (Math.PI / 180);
        
        //a = (mgsin(theta)) / mass
        
        const result = (mass * gravity * Math.sin(theta)) / mass;

        this.setState(state => ({
            result1: "Result: " + result
        }))
    }
    
    setTheta(theta){

        this.setState(state => ({
            theta1: theta
        }))
    }

    setMass(mass){
        this.setState(state => ({
            mass1: mass
        }))
    }

//Inclined Plane Acceleration with Friction

planeAccelerationFriction(mass, theta, Uk){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665;
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    
    const result = ((mass * gravity * Math.sin(theta)) - (mass * gravity * Math.cos(theta)) * Uk) / mass;

    this.setState(state => ({
        result2: "Result: " + result,
    }))
}

setMass2(mass){
    this.setState(state => ({
        mass2: mass
    }))
}

setTheta2(theta){
    this.setState(state => ({
        theta2: theta,
    }))
}

setCoFric2(coFric){
    this.setState(state =>({
        coFric2: coFric
    }))
}

accelerationDistance(vi, t, a){

    console.log("" + vi + t + a);
    const result = (vi * t) + (.5 * a * (t * t));

    this.setState(state => ({
        result3: "Result: " + result
    }))
}

setVi3(vi){
    this.setState(state =>({
        vi3: vi
    }))
}

setTime3(time){
    this.setState(state =>({
        time3: time
    }))
}

setAcceleration3(a){
    this.setState(state => ({
        acceleration3: a
    }))
}

//Maximum Velocity of a Car with Friction 

maxVelocityCarFriction(mass, radius, coFric){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665

    const result = (Math.sqrt(((mass * gravity * coFric) * radius) / mass))

    this.setState(state => ({
        result4: "Result: " + result
    }))
}

setMass4(mass){
    this.setState(state =>({
        mass4: mass
    }))
}

setRadius4(r){
    this.setState(state => ({
        radius4: r
    }))
}

setCoFric4(coFric){
    this.setState(state => ({
        coFric4: coFric
    }))
}

maxVelocityCar(mass, radius, force){
    const result = (Math.sqrt((force * radius) / mass))

    this.setState(state => ({
        result5: "Result: " + result
    }))
}

setMass5(mass){
    this.setState({
        mass5: mass
    })
}

setRadius5(r){
    this.setState(state => ({
        radius5: r
    }))
}

setForce5(force){
    this.setState(state => ({
        force5: force
    }))
}

//Final Velocity of a Car on a Hill

finalVelocityCarOnHill(height, mass, vi){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665

    const result = (Math.sqrt(((mass * gravity * height) + (.5 * mass * (vi * vi)) * 2) / mass));

    this.setState(state => ({
        result6: "Result: " + result
    }))
}

setHeight6(h){
    this.setState(state => ({
        height6: h
    }))
}

setMass6(mass){
    this.setState(state => ({
        mass6: mass
    }))
}

setVi6(v){
    this.setState(state => ({
        vi6: v
    }))
}

momentOfInertia(mass, other, type){

    let result;
    switch(type){

        case "Cylinder through long side":
             result = ((.5 * mass) * (other * other));
            break;
        case "Cylinder from tip":
             result = ((1 / 3) * mass * (other * other));
            break;
        case "Sphere":
             result = (.4 * mass * (other * other));
            break;
        case "Sphere (Hollow)":
             result = ((2 / 3) * mass * (other * other));
            break;
        case "Circle About Center":
            result = mass * (other * other);
            break;
    }

    this.setState(state => ({
        result7: "Result: " + result
    }))
}

setMass7(mass){
    this.setState(state => ({
        mass7: mass
    }))
}

setOther7(other){
    this.setState(state => ({
        other7: other
    }))
}

setType7(type){
    this.setState(state => ({
        type7: type
    }))
}

bankedCurve(radius, theta, coFric){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665

    //Convert to Radians

    theta *= (Math.PI / 180);
    
    const result = (Math.sqrt(((gravity * radius) * (Math.sin(theta) + coFric * Math.cos(theta))) / (Math.cos(theta) - coFric * Math.sin(theta))));

    this.setState(state => ({
        result8: "Result: " + result
    }))
}

setRadius8(r){
    this.setState(state => ({
        radius8: r
    }))
}

setTheta8(theta){
    this.setState(state => ({
        theta8: theta
    }))
}

setCoFric8(coFric){
    this.setState(state => ({
        coFric8: coFric
    }))
}

inelasticCollision(m1, v1, m2, v2){
    const result = (((m1 * v1) + (m2 * v2)) / (~~m1 + ~~m2));
    this.setState(state => ({
        result9: "Result: " + result
    }))
}

setMassOne9(mass){
    this.setState(state => ({
        massOne9: mass
    }))
}

setViOne9(vi){
    this.setState(state => ({
        viOne9: vi
    }))
}

setMassTwo9(mass){
    this.setState(state => ({
        massTwo9: mass
    }))
}

setViTwo9(vi){
    this.setState(state => ({
        viTwo9: vi
    }))
}

elasticCollision(m1, v1, m2, v2){
    const VF1 = ((((~~m1 - ~~m2) / (~~m1 + ~~m2)) * ~~v1) + (((2 * ~~m2) / (~~m1 + ~~m2)) * ~~v2));
    
    const VF2 = ((((2 * ~~m1) / (~~m1 + ~~m2)) * ~~v1) + ((((~~m2 - ~~m1) / (~~m1 + ~~m2)) * ~~v2)))
    
    this.setState(state => ({
        result10: "V1: " + VF1 + " \nV2: " + VF2
    }))
    return (VF2 + " " + VF1);
}

setMassOne10(mass){
    this.setState(state => ({
        massOne10: mass
    }))
}

setViOne10(vi){
    this.setState(state => ({
        viOne10: vi
    }))
}

setMassTwo10(mass){
    this.setState(state => ({
        massTwo10: mass
    }))
}

setViTwo10(vi){
    this.setState(state => ({
        viTwo10: vi
    }))
}

kineticEnergy(mass, v){
    const result = ((.5 * mass) * (v * v));

    this.setState(state => ({
        result11: "Result: " + result
    }))
}

setMass11(mass){
    this.setState(state => ({
        mass11: mass
    }))
}

setVelocity11(v){
    this.setState(state => ({
        velocity11: v
    }))
}

kineticEnergyHill(mass, v, height){
    const gravity = 9.8;
    const KE = ((.5 * mass) * (v * v));
    
    const result = ((mass * height * gravity) + KE)

    this.setState(state => ({
        result12: "Result: " + result
    }))
}

setMass12(mass){
    this.setState(state => ({
        mass12: mass
    }))
}

setVelocity12(v){
    this.setState(state => ({
        velocity12: v
    }))
}

setHeight12(h){
    this.setState(state => ({
        height12: h
    }))
}

//Prism Moment of Inertia

momentOfInertiaTwo(mass, other, other2, type){

    let result;

    switch(type){
        case "Thin Prism":
            result = (((1 / 12) * mass) * ((other * other) + (other2 * other2)));
            break;
        case "Prism":
            result = (((1 / 2) * mass) * ((other * other) + (other2 * other2)));
            break;
    }

    this.setState(state => ({
        result13: "Result: " + result
    }))
}

setMass13(mass){
    this.setState(state => ({
        mass13: mass
    }))
}

setOther13(other){
    this.setState(state => ({
        other13: other
    }))
}

setOtherTwo13(other){
    this.setState(state => ({
        otherTwo13: other
    }))
}

setType13(type){
    this.setState(state => ({
        type13: type
    }))
}

//Torque knowing force radius and angle

torque(force, radius, theta){
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    
    const result = (force * radius * Math.sin(theta));

    this.setState(state => ({
        result14:  result
    }))
}

setForce14(force){
    this.setState(state => ({
        force14: force
    }))
}

setRadius14(r){
    this.setState(state => ({
        radius14: r
    }))
}

setTheta14(theta){
    this.setState(state => ({
        theta14: theta
    }))
}

radius(torque, force, theta){
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    const result = (torque) / (force * Math.sin(theta));

    this.setState(state => ({
        result15: "Result: " + result
    }))
}

setTorque15(t){
    this.setState(state => ({
        torque15: t
    }))
}

setForce15(force){
    this.setState(state => ({
        force15: force
    }))
}

setTheta15(theta){
    this.setState(state => ({
        theta15: theta
    }))
}

theta(torque, force, radius){
    
    let result = (torque) / (force * radius);
    let theta = Math.asin(result);
    
    //Convert to Degrees
    
    theta *= (180 / Math.PI);
    
    this.setState(state => ({
        result16: "Result: " + theta
    }))
}

setTorque16(t){
    this.setState(state => ({
        torque16: t
    }))
}

setForce16(force){
    this.setState(state => ({
        force16: force
    }))
}

setRadius16(r){
    this.setState(state => ({
        radius16: r
    }))
}

projectileMotion(vi, theta){
    
    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665
    
    //Convert to Radians 
    
    theta *= (Math.PI / 180);
    
    const result = ((vi * vi) * Math.sin(theta * 2)) / gravity 

    this.setState(state => ({
        result17: "Result " + result
    }))
}

setVi17(vi){
    this.setState(state => ({
        vi17: vi
    }))
}

setTheta17(theta){
    this.setState(state => ({
        theta17: theta
    }))
}



    render() { 
        return (<div>
            <div className='titleWrap'>
                <header>
                    <h1>
                        Calculators
                    </h1>
                </header>

                <article>
                    <p>
                        Below is a variety of calculators for complex physics problems, sorted by their branch of classical mechanics, as well as a couple cross domain problems.
                    </p>
                </article>
            </div>

            <div className='calcGrid'>
            <div className='calc1'>
                <h2 className='calcHead'>
                    Dynamics
                </h2>

                <h3 className='calculatorTitle'>
                    Acceleration on an Inclined Plane
                </h3>

                <input type = 'number' className='numberInput' placeholder='Mass' onChange={e => this.setMass(e.target.value)}/>

                <div>
                <input type = 'number' className='numberInput' placeholder='θ' onChange={e => this.setTheta(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.planeAcceleration(this.state.mass1, this.state.theta1)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result1}
                </p>

                {/* <div className='marg'>

                </div> */}

                <h3 className='calculatorTitle'>
                    Inclined Plane Accleration with Friction
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeHolder = "Mass" onChange={e => this.setMass2(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeHolder = "θ" onChange={e => this.setTheta2(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeHolder = "Friction Coefficient" onChange={e => this.setCoFric2(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.planeAccelerationFriction(this.state.mass2, this.state.theta2, this.state.coFric2)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result2}
                </p>
                
                <h2 className='calcHead'>
                    Kinematics
                </h2>

                <h3 className='calculatorTitle'>
                    Displacement with Acceleration
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Initial Velocity" onChange={e => this.setVi3(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Time" onChange={e => this.setTime3(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeholder = "Acceleration" onChange={e => this.setAcceleration3(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.accelerationDistance(this.state.vi3, this.state.time3, this.state.acceleration3)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result3}
                </p>

                <h3 className='calculatorTitle'>
                    Projectile Motion
                </h3>

                <input type='number' className = 'numberInput' placeholder = 'Initial Velocity' onChange = {e => this.setVi17(e.target.value)} />

                <div>
                    <input type='number' className = 'numberInput' placeholder = 'θ' onChange = {e => this.setTheta17(e.target.value)} />
                </div>

                <button className='calcButton' onClick={() => this.projectileMotion(this.state.vi17, this.state.theta17)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result17}
                </p>
                <h2 className='calcHead'>
                    Work Energy
                </h2>

                <h3 className='calculatorTitle'>
                    Kinetic Energy
                </h3>

                  <input placeholder='Mass' type='number' className = 'numberInput' onChange={e => this.setMass11(e.target.value)}/>

                <div>
                  <input placeholder='Velocity' type='number' className = 'numberInput'  onChange={e => this.setVelocity11(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.kineticEnergy(this.state.mass11, this.state.velocity11)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result11}
                </p>

                <h3 className='calculatorTitle'>
                    Kinetic Energy of an Object an top of a Hill
                </h3>

                <input placeholder='Mass' type='number' className = 'numberInput' onChange={e => this.setMass12(e.target.value)}/>

                <div>
                    <input placeholder='Velocity' type='number' className = 'numberInput'  onChange={e => this.setVelocity12(e.target.value)}/>
                </div>

                <div>
                    <input placeholder='Height' type='number' className = 'numberInput'  onChange={e => this.setHeight12(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.kineticEnergyHill(this.state.mass12, this.state.velocity12, this.state.height12)}>
                    Calculate
                </button>
                
                <p className='result'>
                    {this.state.result12}
                </p>

                <h3 className='calculatorTitle'>
                    Final Velocity of Object on top of a Hill
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Height of Hill" onChange={e => this.setHeight6(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Mass" onChange={e => this.setMass6(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeholder = "Initial Velocity" onChange={e => this.setVi6(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.finalVelocityCarOnHill(this.state.height6, this.state.mass6, this.state.vi6)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result6}
                </p>

                <h2 className='calcHead'>
                    Impulse  Momentum
                </h2>

                <h3 className='calculatorTitle'>
                    Final Velocity in an Inelastic Collision
                </h3>

                <input type='number' placeholder='Mass 1' className='numberInput' onChange={e => this.setMassOne9(e.target.value)}/>
                
                <div>
                <input type='number' placeholder='Initial Velocity 1' className='numberInput'  onChange={e => this.setViOne9(e.target.value)}/>
                </div>

                <div>
                <input type='number' placeholder='Mass 2' className='numberInput'  onChange={e => this.setMassTwo9(e.target.value)}/>
                </div>

                <div>
                <input type='number' placeholder='Initial Velocity 2' className='numberInput'  onChange={e => this.setViTwo9(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.inelasticCollision(this.state.massOne9, this.state.viOne9, this.state.massTwo9, this.state.viTwo9)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result9}
                </p>

                <h3 className='calculatorTitle'>
                    Final Velocities for Elastic Collisions
                </h3>

                <input type='number' placeholder='Mass 1' className='numberInput' onChange={e => this.setMassOne10(e.target.value)}/>
                
                <div>
                <input type='number' placeholder='Initial Velocity 1' className='numberInput'  onChange={e => this.setViOne10(e.target.value)}/>
                </div>

                <div>
                <input type='number' placeholder='Mass 2' className='numberInput'  onChange={e => this.setMassTwo10(e.target.value)}/>
                </div>

                <div>
                <input type='number' placeholder='Initial Velocity 2' className='numberInput'  onChange={e => this.setViTwo10(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.elasticCollision(this.state.massOne10, this.state.viOne10, this.state.massTwo10, this.state.viTwo10)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result10}
                </p>

                <h2 className='calcHead'>
                    Rotational Motion
                </h2>

                <h3 className='calculatorTitle'>
                    Maximum Velocity of a Turning Car with Force
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Mass" onChange={e => this.setMass5(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Radius" onChange={e => this.setRadius5(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeholder = "Force" onChange={e => this.setForce5(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.maxVelocityCar(this.state.mass5, this.state.radius5, this.state.force5)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result5}
                </p>

                <h3 className='calculatorTitle'>
                    Maximum Velocity of a Turning Car with Friction
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Mass" onChange={e => this.setMass4(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Radius" onChange={e => this.setRadius4(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeholder = "Coefficient of Friction" onChange={e => this.setCoFric4(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.maxVelocityCarFriction(this.state.mass4, this.state.radius4, this.state.coFric4)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result4}
                </p>

                <h3 className='calculatorTitle'>
                    Max Turning Velocity on a Banked Curve with Friction 
                </h3>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "Radius" onChange={e => this.setRadius8(e.target.value)}/>
                </div>

                <div>
                    <input type='number' className = 'numberInput' placeholder = "θ" onChange={e => this.setTheta8(e.target.value)}/>
                </div>
                
                <div>
                    <input type='number' className = 'numberInput' placeholder = "Coefficient of Friction" onChange={e => this.setCoFric8(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.bankedCurve(this.state.radius8, this.state.theta8, this.state.coFric8)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result8}
                </p>

                <h3 className='calculatorTitle'>
                    Torque
                </h3>

                <input className='numberInput' placeholder='Force' type='number' onChange={e => this.setForce14(e.target.value)}/>

                <div>
                    <input className='numberInput' placeholder='Radius' type='number' onChange={e => this.setRadius14(e.target.value)}/>
                </div>

                <div>
                    <input className='numberInput' placeholder='θ, 90 if not given' type='number' onChange={e => this.setTheta14(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.torque(this.state.force14, this.state.radius14, this.state.theta14)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result14}
                </p>

                <h3 className='calculatorTitle'>
                    Radius
                </h3>

                <input className='numberInput' placeholder='Force' type='number' onChange={e => this.setForce15(e.target.value)}/>

                <div>
                    <input className='numberInput' placeholder='Torque' type='number' onChange={e => this.setTorque15(e.target.value)}/>
                </div>

                <div>
                    <input className='numberInput' placeholder='θ' type='number' onChange={e => this.setTheta15(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.radius(this.state.torque15, this.state.force15, this.state.theta15)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result15}
                </p>

                <h3 className='calculatorTitle'>
                    Theta
                </h3>

                <input className='numberInput' placeholder='Force' type='number' onChange={e => this.setForce16(e.target.value)}/>

                <div>
                    <input className='numberInput' placeholder='Torque' type='number' onChange={e => this.setTorque16(e.target.value)}/>
                </div>

                <div>
                    <input className='numberInput' placeholder='Radius' type='number' onChange={e => this.setRadius16(e.target.value)}/>
                </div>

                <button className='calcButton' onClick={() => this.theta(this.state.torque16, this.state.force16, this.state.radius16)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result16}
                </p>

                <h3 className='calculatorTitle'>
                    Moment of Inertia
                </h3>
                
                <div>
                    <input type='number' placeholder = 'Mass' className = 'numberInput' onChange={e => this.setMass7(e.target.value)}/>
                </div>

                <div>
                    <input type='number' placeholder = 'Radius/Length' className = 'numberInput' onChange={e => this.setOther7(e.target.value)}/>
                </div>

                <select className='numberInput'  onChange={e => this.setType7(e.target.value)}>
                    <option>Select Shape</option>
                    <option>Circle About Center</option>
                    <option>Cylinder through long side</option>
                    <option>Cylinder from tip</option>
                    <option>Sphere</option>
                    <option>Sphere (Hollow)</option>
                    
                </select>

                <div>
                  <button className='calcButton' onClick={() => this.momentOfInertia(this.state.mass7, this.state.other7, this.state.type7)}>
                    Calculate
                  </button>
                </div>

                <p className='result'>
                    {this.state.result7}
                </p>

                <h3 className='calculatorTitle'>
                    Moment of Inertia
                </h3>

                    <input className='numberInput' placeholder='Mass' type='number' onChange={e => this.setMass13(e.target.value)}/>

                <div>
                    <input className='numberInput' placeholder='Length' type='number' onChange={e => this.setOther13(e.target.value)}/>
                </div>

                <div>
                    <input className='numberInput' placeholder='Width' type='number' onChange={e => this.setOtherTwo13(e.target.value)}/>
                </div>

                <div>
                    <select className='numberInput' onChange={e => this.setType13(e.target.value)}>
                        <option>Select Shape</option>
                        <option>Thin Prism</option>
                        <option>Prism</option>
                    </select>
                </div>

                <button className='calcButton' onClick={() => this.momentOfInertiaTwo(this.state.mass13, this.state.other13, this.state.otherTwo13, this.state.type13)}>
                    Calculate
                </button>

                <p className='result'>
                    {this.state.result13}
                </p>
                

                


            </div>
            </div>
            
        </div>);
    }
}
 
export default Calculators;