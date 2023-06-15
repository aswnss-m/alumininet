import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "./Forms.css"
import { API_URL } from '../../../../Constants'

function Student() {
    const [students, setStudents] = useState([])

    // Get all students list
    useEffect(() => {
        axios.get(`${API_URL}/admin/all/students`)
        .then(res => {
            setStudents(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // Delete a student
    const handleDelete = (id) => {
        axios
          .delete(`${API_URL}/admin/delete/student?id=${id}`)
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
        {students.map(student => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.batch}</td>
            <td>{student.branch}</td>
            <td className='tableAction'>
                {/* <button>
                    <span className='material-symbols-outlined'>edit</span>
                </button> */}
                <button>
                    <span className='material-symbols-outlined'>delete</span>
                </button>
            </td>
          </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Student
