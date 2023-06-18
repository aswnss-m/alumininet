import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "./Forms.css"
import { API_URL } from '../../../../Constants'
import { useNavigate } from 'react-router-dom'

function Staff() {
    const [admins, setAdmins] = useState([])
    const [focus, setFocus] = useState(false)
    const nav = useNavigate()
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API_URL}/register/add/staff`, {email, password, name, department})
        .then(res => {
            window.location.reload()
            nav('/staff')
        })
        .catch(err => {
            console.log(err)
        })
    }
    // Get all alumni list
    useEffect(() => {
        axios.get(`${API_URL}/admin/all/staff`)
        .then(res => {
            setAdmins(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

const handleEventFocus = (e) => {
    setFocus(true)
}
  // Delete an alumni
const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/users/delete?id=${id}`)
      .then((res) => {
        alert('Staff deleted')
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <>
    <div className="form">
        <h5>New Staff</h5>
        <div className="formGroup">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            onFocus={handleEventFocus}
            onChange={(e) => setName(e.target.value)}
            onBlur={()=>{
                if(name === ''){
                    setFocus(false)
                }
            }}
          />
        </div>
       {focus && <>
            <div className="formGroup">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="title">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="title">Department</label>
              <input
                type="text"
                name="department"
                id="department"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="formGroup">
                <button className='primaryButton' onClick={
                    (e) => {
                        handleSubmit(e)
                    }
                }>Submit</button>
            </div>
       </>
       }
    </div>
    <table className='table'>
        <thead className = "tableHead">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {admins.map(admin => (
          <tr key={admin._id}>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>{admin.password}</td>
            <td className='tableAction'>
                {/* <button>
                    <span className='material-symbols-outlined'>edit</span>
                </button> */}
                <button onClick={
                    () => {
                        handleDelete(admin._id)
                    }
                }>
                    <span className='material-symbols-outlined'>delete</span>
                </button>
            </td>
          </tr>
        ))}
        </tbody>
    </table>
    </>
  )
            }

export default Staff
