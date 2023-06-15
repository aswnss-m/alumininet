import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "./Forms.css"
import { API_URL } from '../../../../Constants'
import { useNavigate } from 'react-router-dom'

function Alumini() {
    const [aluminis, setAluminis] = useState([])
    const nav = useNavigate()

    // Get all alumni list
    useEffect(() => {
        axios.get(`${API_URL}/admin/all/alumni`)
        .then(res => {
            setAluminis(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  // Delete an alumni
const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/admin/delete/alumni?id=${id}`)
      .then((res) => {
        console.log(res);
        nav("/alumini")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <table className='table'>
        <thead className = "tableHead">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Batch</th>
                <th>Branch</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {aluminis.map(alumini => (
          <tr key={alumini._id}>
            <td>{alumini.name}</td>
            <td>{alumini.email}</td>
            <td>{alumini.batch}</td>
            <td>{alumini.branch}</td>
            <td className='tableAction'>
                {/* <button>
                    <span className='material-symbols-outlined'>edit</span>
                </button> */}
                <button onClick={
                    () => {
                        handleDelete(alumini._id)
                    }
                }>
                    <span className='material-symbols-outlined'>delete</span>
                </button>
            </td>
          </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Alumini
