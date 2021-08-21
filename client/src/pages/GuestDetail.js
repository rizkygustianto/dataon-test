import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function GuestDetail() {

    let { id } = useParams()
    const [guests, setGuests] = useState([])

    const getGuests = () => {
        axios.get(`http://localhost:3000/guest/${id}`)
            .then(res => {
                console.log(res.data);
                setGuests(res.data)
            })
    }

    useEffect(() => {
        getGuests()
    }, [])

    return (
        <Container>
            <h1 className='my-3'>{guests.name}</h1>
            <h5>NIK: {guests.idCard}</h5>
            <h5>Tanggal Lahir: {guests.dateOfBirth}</h5>

            <Table hover>
                <thead>
                    <tr>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guests && guests.Visits ? guests.Visits.map(visit => {
                            return (
                                <tr>
                                    <td>{visit.checkIn}</td>
                                    <td>{visit.checkOut}</td>
                                    <td>{visit.purpose}</td>
                                </tr>
                            )
                        })

                        :
                        <h1>Loading...</h1>
                    }
                </tbody>
            </Table>
        </Container>
    )
}