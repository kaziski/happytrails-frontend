import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm.js"
import { logout } from "../../actions/currentUser.js"


const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { updateLoginForm, logout })(Logout)