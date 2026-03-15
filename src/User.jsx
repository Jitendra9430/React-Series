// function User({user}){
//     return(
//         <div>
//             <h2>Name: {user.name}</h2>
//             <h2>Age: {user.age}</h2>
//             <h2>Email: {user.email}</h2>
//         </div>
//     )

// }

function User({name="New User"}){
    return (
        <div>
            <h2>Hii, {name}</h2>
        </div>
    )
}
export default User;