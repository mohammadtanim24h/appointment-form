import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
    const handleAppointment = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        
    };
    return (
        <div>
            <h4 className="text-center mt-3">Make an Appointment</h4>
            <Form onSubmit={handleAppointment} className="custom-form mx-auto">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phone"
                        type="number"
                        placeholder="Phone"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control name="date" type="date" />
                </Form.Group>

                <Button variant="primary" className="w-50" type="submit">
                    Confirm
                </Button>
            </Form>
        </div>
    );
};

export default Appointment;
