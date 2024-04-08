import React from "react";
const App=()=>{
    // const clickHandle=(e)=>{
    //     console.log(e);
    // }
    function clickHandle(e,firstName){
        console.log("Hello i am lakshmi",e,firstName);
    };
    return <main className="container">
        <img src={profileimg}/>
        <button className="button" onClick={function(e){
            return clickHandle(e,"gaja");
        }}>Click me</button>
    </main>
};
// let Flowerobj={
//  title:"FLOWERS",
//  imgURL:"https://media.istockphoto.com/id/1454962600/photo/summer-meadow.webp?s=1024x1024&w=is&k=20&c=gQKWRB_Qft7MjUuG0jb2Yc46y36d3hmXb1L659mkn94=",
// };
// const Index=()=>{
//     return <section className="movie-container">
//     <Movie 
//     imgURL={Flowerobj.imgURL}
//     title={Flowerobj.title}
//     />
//     <Movie  fullName="GAJALAKSHMI"/>
//     </section>
// };
// const Movie =(props)=>{
//     console.log(props);
//     return <article className="each">
//        <img src={props.imgURL}/>
//        <h1>{props.title}</h1>
//        <p>lorem20 img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
//        </p>
//     </article>
// };

export default App;