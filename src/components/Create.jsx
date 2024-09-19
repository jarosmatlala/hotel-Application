import React from 'react'

function Create() {
  return (
    <div>

        <h1>Admin Panel</h1>
        <div className="Links">
        <Link
        to="/"
        style={{
            color: "rgb(77,77,77)",
        }}
        >
        All Rooms
        </Link>

        <Link
        tp="/create"
        style={{
            color:"white",
            backgroundColor: "rgb (7,77,77",
            borderRadius:"8px",
        }}
        >
        New Rooms
        </Link>
        </div>
       
    </div>
  )
}

export default Create