import {useState} from 'react'
import { NavLink, useNavigate  } from 'react-router-dom'

const login = () => {

  
  const history = useNavigate()
  const [user, setUser] = useState({
    email:"",first_name:"",last_name:"", password:""
  })

  const handleInputs= (e: any)=>{
    let namee = e.target.name;
    let value = e.target.value;
    setUser({...user,[namee]:value})
  }
  const PostData = async (e:any) => {
    e.preventDefault()

    const { email,first_name, last_name,password } = user;
    const res = await fetch('https://e-commerce-backend-ay3g.onrender.com/signup', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      email, first_name, last_name, password 
    })
});

  const data = await res.json();

  if (res.status === 201) {
      localStorage.setItem('token', data.token)
      window.alert("Registration Successful")
      window.location.reload();
      history('/')
  } else {
      window.alert("Registration Failed")
  }

}

  return (
    <>
      <section>
                <div className="container mt-5">
                    <div className='row'>

                        <div className="col-sm-6 offset-md-3 offset-sm-1 ">
                            <form method="POST">

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Enter your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="first_name" className="form-control" id="first_name" name="first_name" value={user.first_name}
                                        onChange={handleInputs}
                                        placeholder="Enter your first name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" className="form-control" id="last_name" name="last_name" value={user.last_name}
                                        onChange={handleInputs}
                                        placeholder="Enter your last name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Enter your Password" />
                                </div>

                                <NavLink to='/login'>Already Registered, then Login here!</NavLink><br /><br />
                                <button type="submit" className="btn btn-primary" id='register' name='register' onClick={PostData}>Register</button>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
    </>
  )
}

export default login
