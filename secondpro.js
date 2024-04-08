import React from "react";
import data from "./data";
const App=()=>{
    return <main className="container">
        <ul className="comments-container">
            <li className="comment">
                {data.map((eachObj)=>{
                    const {id,email,name,body}=eachObj;
                    return <ListItem id={id} email={email} name={name} body={body}/>;
                })}
            </li>
        </ul>
    </main>
};
const ListItem=({id,email,name,body})=>{
    return <li key={id} className="comment">
        <div className="comments-header">
            <h3 className="email">{email}</h3>
            <h3 className="name">{name}</h3>

        </div>
        <div className="message">{body}</div>
    </li>
}
export default App;