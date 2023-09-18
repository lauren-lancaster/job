import { useState, useEffect } from 'react'

function Dashboard() {
  return (
    <>
      <header>
        <p id="header-title">JOB</p>
        {/* <div className="center"> */}
        <a href="/search">Search</a>
        <a href="/">Dashboard</a>
        {/* </div> */}
      </header>
    </>
  )
}

export default Dashboard
