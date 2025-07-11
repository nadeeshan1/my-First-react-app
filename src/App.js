
import './App.css';

const user1 = {
    Avatar: "https://t4.ftcdn.net/jpg/13/66/62/19/360_F_1366621973_KNVZ3b4VTVkOojnUDVGlSYLeiWnJGSjk.jpg",
    name: 'samanthi',
    designation: 'java developer',
    salary: 250000
},
user2 = {
    Avatar: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740',
    name:'sameera' ,
    designation: 'fulstack developer',
    salary: 350000
},
user3 = {
    Avatar: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg',
    name: 'konara',
    designation: 'PHP developer',
    salary: 50000
},
user4 = {
    Avatar: 'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
    name: 'shehani',
    designation: 'python developer',
    salary: 250000
}

const UserManager = ()=>{

    return(
    <>
        <div className="wrapper" >
            <User Avatar = {user1.Avatar} name = {user1.name} designation= {user1.designation} salary= {user1.salary}/>
            <User Avatar = {user2.Avatar} name = {user2.name} designation= {user2.designation} salary= {user2.salary}/>
            <User Avatar = {user3.Avatar} name = {user3.name} designation= {user3.designation} salary= {user3.salary}/>
            <User Avatar = {user4.Avatar} name = {user4.name} designation= {user4.designation} salary= {user4.salary}/>
        </div>
    </>
    );
}
const User = (props) =>{
    const {Avatar, name, designation, salary} = props;
    return(
        <div className="user-outer">
            <AvatarComponent Avatar = {Avatar}/>
           <UserData name = {name} designation= {designation} salary= {salary} >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </UserData>


        </div>


    );
}

const AvatarComponent = ({Avatar}) =>{
    return(
        <div className="avatar-outer">
            <img src={Avatar} alt="Avatar-1" className="avatar-1"/>

        </div>
    );
}
const  UserData = ({name, designation, salary,children}) =>{
    console.log(children);
    return(
        <div className="user-data">
            <UserName name = {name}/>
            <Designation designation= {designation}/>
            <Salary salary= {salary}/>
            <p className="description">{children}</p>
        </div>
    );
}
const UserName = ({name}) =>{
    

    const inlineStyle = {
        color: "#e74c3c"
    }

    return(
        <div>
            <h1 className="user-name" style={inlineStyle}>{name}</h1>

        </div>
    );
}


const Designation = ({designation}) =>{
    
    return(
        <div>
            <h3 className="designation" style={{fontStyle:"italic"}}>{designation}</h3>
        </div>
    );
}

const Salary = ({salary}) =>{
    
    return(
        
        <div>
            <h3 className="salary" style={{ color: "#2ecc71" }}>{salary}</h3>
        </div>
    );
}
export  default UserManager;