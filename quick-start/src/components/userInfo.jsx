import "./myglobal.css"

const userInfo = {
    name: "Paradox",
    age: 25
}

const myUserInfo = (
    <div className="box">
        <h3>This user name is {userInfo.name}</h3>
        <h4>The user is {userInfo.age} year old.</h4>
    </div>
)

export default function UserInfo() {
    return (
        <div 
            className="box"
            style={{
                backgroundColor: "yellow"
            }}
        >
            <h1>User Information</h1>
            {myUserInfo}
        </div>
    )
}