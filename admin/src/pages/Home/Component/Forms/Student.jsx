import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "./Forms.css"
import { API_URL } from '../../../../Constants'

function Student() {
    useEffect(() => {
        axios.get(`${API_URL}/admin/all/students`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <table className='table'>
        <thead className = "tableHead">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>batch</th>
                <th>branch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>name</td>
                <td>email</td>
                <td>username</td>
                <td>batch</td>
                <td>branch</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Student
