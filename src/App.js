
import './App.css';
const users = [
    {
    Avatar: "https://t4.ftcdn.net/jpg/13/66/62/19/360_F_1366621973_KNVZ3b4VTVkOojnUDVGlSYLeiWnJGSjk.jpg",
    name: 'samanthi',
    designation: 'java developer',
    salary: 250000,
    code: 1
},
{
    Avatar: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740',
    name:'sameera' ,
    designation: 'fulstack developer',
    salary: 350000,
    code: 2
},
{
    Avatar: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg',
    name: 'konara',
    designation: 'PHP developer',
    salary: 50000,
    code: 3
},
{
    Avatar: 'https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg',
    name: 'shehani',
    designation: 'python developer',
    salary: 60000,
    code: 4
}
]


const UserManager = ()=>{

    return(
    <>
        <div className="wrapper" >
            <SearchForm/>
            <hr/>
            {
                users.map((user,key) => {
                    console.log(key);
                        return  <User {...user}  key = {user.code} />;
                    })
            }
        </div>
        
    </>
    );
}

const SearchForm = () => {

    return (
        <div className="search-outer">
            <form onSubmit={(e) => {e.preventDefault();console.log("ManegeSubmitEvent");}} className="search-form">

                <input type="search" onChange={(e) => {console.log("Search Text: ", e.target.value);}} placeholder="Search User" name = "searchText" className="search-input" />

                <button type="submit" className="search-button" onClick={(e) => {
                console.log("ManegeClickEvent");}}> Search </button>
            </form>
        </div>
    );
}
const User = (props) =>{
    const {Avatar, name, designation, salary} = props;
    return(
        <div className="user-outer">
            <AvatarComponent Avatar = {Avatar}/>
           <UserData name = {name} designation= {designation} salary= {salary} >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  
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
    const printData = (e) => {
        console.log("User Data: ", name, designation, salary);
    }

    return(
        <>
        <div className="user-data">
            <UserName name = {name}/>
            <Designation designation= {designation}/>
            <Salary salary= {salary}/>
            <p className="description">{children}</p>
            <button type="submit" style={{cursor: "pointer"}} className="search-button" onClick={printData}> more... </button>
        </div>
        
        </>
    );
}
const UserName = ({name}) =>{
    

    const inlineStyle = {
        color: "#e74c3c",
        margin: "0",
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
            <h3 className="designation" style={{fontStyle:"italic",margin: "0"}}>{designation}</h3>
        </div>
    );
}

const Salary = ({salary}) =>{
    
    return(
        
        <div>
            <h3 className="salary" style={{ color: "#2ecc71" ,margin: "0"}}>{salary}</h3>
        </div>
    );
}
export  default UserManager;