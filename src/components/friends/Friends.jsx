import "./friends.css";

export default function CloseFriend({user}) {
    return (
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    );
  }
// import React from 'react'

// const Friends = () => {
//   return (
//     <div>Friends</div>
//   )
// }

// export default Friends