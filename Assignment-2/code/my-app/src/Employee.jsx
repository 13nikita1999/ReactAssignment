import React from "react";
function Employee(props){
return(
    <>
        <div className="cards">
            <div className="profile">{props.profileimg}</div>
            <div className="name">{props.name}</div>
            <div className="location">{props.location}</div>
            <div className="newyork">{props.newyork}</div>
            <div className="blood">{props.bloodgroup}</div>
            <div className="blod">{props.b}</div>
            <div className="age">{props.age}</div>
            <div className="dat">{props.date}</div>
            
        </div>
    </>
);
}
export default Employee;