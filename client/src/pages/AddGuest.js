import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Button, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function AddGuest() {

    const history = useHistory()

    const [nik, setNik] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const addGuest = () => {
        let data = {
            idCard: nik,
            name: name,
            dateOfBirth: date
        }
        axios.post(' https://dataon-test-rgw.herokuapp.com/guest/create', data)
        .then(res => {
            console.log(res);
            history.push('/')
        })
    }

    return (
        <Container>
            <h1 className='display-1 my-5'>Guest Management App</h1>
            <hr></hr>
            <h1 className='my-3'>Add New Guest</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control type="text" placeholder="16 Digit" value={nik} onChange={(e) => setNik(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder="YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => addGuest()}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}