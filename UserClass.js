import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props)

       // console.log(props)

        // Create state
        this.state = {
            userInfo: {
                name:"dummy",
                location: "Default",
            },
        };

         console.log("Child Constructor")
    };

    // increment(){
    //     this.setState({count: this.state.count + 1})
    // }


    async componentDidMount(){

        this.timer = setInterval(() => {
            console.log("Namaste React OP!")
        }, 1000);
        
        //console.log("Child Component did mount(it will work after rendering)")
       
        // API call
        const data = await fetch("https://api.github.com/users/Akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        //console.log("Component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("Component will Unmount");
    }

    render(){

        const {name, location, avatar_url, bio} =  this.state.userInfo;
        //console.log("Child Render")

        return (
            <div className="user-Card">
                <img src={avatar_url}/>
                <h1>{bio}</h1>
                <h1>Name:{name}</h1>
                <h2>Contact: React Component</h2>
                <h3>Address:{location}</h3>
            </div>
        );
    };
};

export default UserClass;