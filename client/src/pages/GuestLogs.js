import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Button, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function GuestLogs() {

    const history = useHistory()
    const [guests, setGuests] = useState([])

    const getGuests = () => {
        axios.get('http://localhost:3000/guests')
            .then(res => {
                console.log(res.data);
                setGuests(res.data)
            })
    }

    const guestLogs = (id) => {
        history.push(`/guest/${id}`)
    }

    useEffect(() => {
        getGuests()
    }, [])

    return (
        <Container>
            <h1 className='display-1 my-5'>Guest Management App</h1>
            <hr></hr>
            <h1 className='my-3'>Guest List</h1>

            <Table hover>
                <thead>
                    <tr>
                        <th>NIK</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guests.map(guest => {
                            return (
                                <tr>
                                    <td>{guest.idCard}</td>
                                    <td>{guest.name}</td>
                                    <td>{guest.dateOfBirth}</td>
                                    <td><Button onClick={() => guestLogs(guest.idCard)}>Log Details</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}