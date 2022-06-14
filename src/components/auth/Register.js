import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const email = useRef()
  const firstName = useRef()
  const lastName = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "username": username.current.value,
      "password": password.current.value,
      "email": email.current.value,
      "first_name": firstName.current.value,
      "last_name": lastName.current.value 
    }
    
    // how do i get the id of this user after the object is created
    // so i can push the client to a view to fill out their profile info?
    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push(`/create-profile/${res.new_user}`)
      }
    })
  }

return (
  <main>
    <form onSubmit={handleRegister}>
      <h3>Register an account</h3>
      <fieldset>
        <label htmlFor="inputFirstName"> First Name </label>
        <input ref={firstName} type="text" name="firstname" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputLastName"> Last Name </label>
        <input ref={lastName} type="text" name="lastName" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputUsername"> Username </label>
        <input ref={username} type="text" name="username" placeholder="Username" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Password </label>
        <input ref={password} type="password" name="password" placeholder="Password" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputEmail"> Email </label>
        <input ref={email} type="text" name="email" placeholder="Email" required />
      </fieldset>
      <fieldset>
        <button type="submit">Register</button>
      </fieldset>
    </form>
    <section>
      Already registered? <Link to="/login">Login</Link>
    </section>
  </main>
)
}
