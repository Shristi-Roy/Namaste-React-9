
import User from "./user";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props){
        super(props)

       // console.log("parent Constructor")
    }

    componentDidMount(parent){
      //  console.log("Parent Component did Mount(it will work after all this happens)")
    }

    render(){
        //console.log("parent Render")
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Webseries!</h2> 
                <User/>   
                <UserClass name={"Shristi Roy (Classes)"} location={"Banglore (Classes)"}/>
            </div>
        );
    }
}






// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Webseries!</h2>
//             {/* <User name={"Akshay Shani (function)"}/> */}

//             <UserClass name={"Shristi Roy (Classes)"} location={"Banglore (Classes)"}/>
//         </div>
//     );
// };

export default About;