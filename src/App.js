
import './App.css';


const UserManager = ()=>{

    return(
    <>
        <div className="wrapper" >
            <User Avatar = "https://t4.ftcdn.net/jpg/13/66/62/19/360_F_1366621973_KNVZ3b4VTVkOojnUDVGlSYLeiWnJGSjk.jpg" name = 'samanthi' designation= 'java developer' salary= '250000'/>
            <User Avatar='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740' name = 'sameera' designation= 'fulstack developer' salary= '350000'/>
            <User Avatar='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg' name = 'konara' designation= 'PHP developer' salary= '50000'/>
            <User Avatar='https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg' name = 'shehani' designation= 'python developer' salary= '250000'/>
        </div>
    </>
    );
}
const User = (props) =>{
    console.log(props);
    return(
        <div className="user-outer">
            <Avatar Avatar = {props.Avatar}/>
           <UserData name = {props.name} designation= {props.designation} salary= {props.salary}/>


        </div>


    );
}

const Avatar = (props) =>{
    return(
        <div className="avatar-outer">
            <img src={props.Avatar} alt="Avatar-1" className="avatar-1"/>

        </div>
    );
}
const  UserData = (props) =>{
    console.log(props);
    return(
        <div className="user-data">
            <UserName name = {props.name}/>
            <Designation designation= {props.designation}/>
            <Salary salary= {props.salary}/>
        </div>
    );
}
const UserName = (props) =>{
    

    const inlineStyle = {
        color: "#e74c3c"
    }

    return(
        <div>
            <h1 className="user-name" style={inlineStyle}>{props.name}</h1>

        </div>
    );
}


const Designation = (props) =>{
    
    return(
        <div>
            <h3 className="designation" style={{fontStyle:"italic"}}>{props.designation}</h3>
        </div>
    );
}

const Salary = (props) =>{
    
    return(
        
        <div>
            <h3 className="salary" style={{ color: "#2ecc71" }}>{props.salary}</h3>
        </div>
    );
}
export  default UserManager;