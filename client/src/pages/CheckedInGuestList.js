import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Button, Table } from 'react-bootstrap'

export default function CheckedInGuestList() {

    const [guests, setGuests] = useState([])
    const [nik, setNik] = useState('')
    const [purpose, setPurpose] = useState('')

    const getGuests = () => {
        axios.get('http://localhost:3000/guests/current')
        .then(res => {
            console.log(res.data);
            setGuests(res.data)
        })
    }

    const checkOut = (id) => {
        let data = {
            idCard: id
        }
        axios.post('http://localhost:3000/checkout', data)
        .then(res => {
            console.log(res);
            getGuests()
        })
    }

    const checkIn = () => {
        let data = {
            idCard: nik,
            purpose: purpose
        }
        axios.post('http://localhost:3000/checkin', data)
        .then(res => {
            console.log(res);
            getGuests()
            setNik('')
            setPurpose('')
        })
    }

    useEffect(() => {
        getGuests()
    }, [])

    return (
        <Container>
            <h1 className='display-1 my-5'>Guest Management App</h1>
            <hr></hr>
            <h1 className='my-3'>Check-In Guest</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control type="text" placeholder="16 digit" value={nik} onChange={(e) => setNik(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Purpose of visit</Form.Label>
                    <Form.Control as="textarea" rows={3} value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={() => checkIn()}>
                Check-In
            </Button>
            <hr></hr>

            <h1 className='my-3'>Current Guest Inside</h1>

            <Table hover>
                <thead>
                    <tr>
                        <th>NIK</th>
                        <th>Name</th>
                        <th>Check-In</th>
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
                                    <td>{guest.Visits[0].checkIn}</td>
                                    <td><Button onClick={() => checkOut(guest.idCard)}>Check-Out</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


        </Container>
    )
}