
//Inclined Plane Acceleration

function planeAcceleration(mass, theta){
    
    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.8;
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    
    //a = (mgsin(theta)) / mass
    
    return (mass * gravity * Math.sin(theta)) / mass;
}

//Inclined Plane Acceleration with Friction

function planeAccelerationFriction(mass, theta, Uk){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.8;
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    
    return ((mass * gravity * Math.sin(theta)) - (mass * gravity * Math.cos(theta)) * Uk) / mass;
}

//Distance with Acceleration (Kinematics)

function accelerationDistance(vi, t, a){
    return (vi * t) + (.5 * a * (t * t));
}

//Max Velocity of a Turning Car with Friction

function maxVelocityCarFriction(mass, radius, coFric){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665

    return (Math.sqrt(((mass * gravity * coFric) * radius) / mass))
}

function maxVelocityCar(mass, radius, force){
    return (Math.sqrt((force * radius) / mass))
}

function finalVelocityCarOnHill(height, mass, vi){

    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665

    return(Math.sqrt(((mass * gravity * height) + (.5 * mass * (vi * vi)) * 2) / mass))
}

function momentOfInertia(mass, other, type){
    switch(type){
        case "Cylinder":
            return (.5 * mass * (other * other));
        case "Rod":
            return (.5 * mass * (other * other));
        case "Sphere":
            return (.4 * mass * (other * other));
    }
}

//Max Turning Velocity on Banked Curve

function bankedCurve(radius, theta, coFric){
    
    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665
    theta *= (Math.PI / 180);
    
    return (Math.sqrt(((gravity * radius) * (Math.sin(theta) + coFric * Math.cos(theta))) / (Math.cos(theta) - coFric * Math.sin(theta))));
}

//Final Velocity for Inelastic Collision

function inelasticCollision(m1, v1, m2, v2){
    return (((m1 * v1) + (m2 * v2)) / (m1 + m2));
}

//Final Velocities for Elastic Collisions

function elasticCollision(m1, v1, m2, v2){
    const VF1 = ((((~~m1 - ~~m2) / (~~m1 + ~~m2)) * ~~v1) + (((2 * ~~m2) / (~~m1 + ~~m2)) * ~~v2));
    
    const VF2 = ((((2 * ~~m1) / (~~m1 + ~~m2)) * ~~v1) + ((((~~m2 - ~~m1) / (~~m1 + ~~m2)) * ~~v2)))
    
    return (VF2 + " " + VF1);
}

//Kinetic Energy

function kineticEnergy(mass, v){
    return((.5 * mass) * (v * v));
}

//Kinetic Energy on a Hill

function kineticEnergyHill(mass, v, height){
    const gravity = 9.8;
    const KE = ((.5 * mass) * (v * v));
    
    return((mass * height * gravity) + KE)
}

//Prism Moment of Inertia

function momentOfInertiaTwo(mass, other, other2, type){
    switch(type){
        case "Thin Prism":
            return (((1 / 12) * mass) * ((other * other) + (other2 * other2)));
        case "Prism":
            return (((1 / 2) * mass) * ((other * other) + (other2 * other2)));
    }
}

//Torque with force radius and theta

function torque(force, radius, theta){
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    
    return (force * radius * Math.sin(theta));
}

//Find radius knowing torque force and theta

function radius(torque, force, theta){
    
    //Convert to Radians
    
    theta *= (Math.PI / 180);
    return (torque) / (force * Math.sin(theta));
}

//Find Theta knowing torque force and Radius

function theta(torque, force, radius){
    
    let result = (torque) / (force * radius);
    theta = Math.asin(result);
    
    //Convert to Degrees
    
    theta *= (180 / Math.PI);
    return theta;
}

function projectileMotion(vi, theta){
    
    //Earth's gravitational Constant is ~9.8 m/s^2

    const gravity = 9.80665
    
    //Convert to Radians 
    
    theta *= (Math.PI / 180);
    
    return((vi * vi) * Math.sin(theta * 2)) / gravity 
}