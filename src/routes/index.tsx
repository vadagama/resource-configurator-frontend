import React from "react"
import { Route, Routes } from "react-router-dom"
import ProfileContainer from "./../Pages/Profile/ProfileContainer"

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileContainer />} />
    </Routes>
  )
}

export default MyRoutes
