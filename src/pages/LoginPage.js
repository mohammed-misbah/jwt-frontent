import React,{useContext,AuthContext} from 'react'

const LoginPage = () => {
let {loginUser} = useContext(AuthContext)                                                                                                                                                              
  return (
    <div>
      <form onSubmit={loginUser}>
       <input type="text" name="username" placeholder='Enter username'/>
       <input type='password' name='paswd' placeholder='Enter Password'/>
       <input type='submit'/>
      </form>
    </div>
  )
}

export default LoginPage
