import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
    return (
        <div>
            <h4 className="text-center mt-3">Make an Appointment</h4>
            <Form className="custom-form mx-auto">
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
                    <Form.Control name="date" type="date"/>
                </Form.Group>

                <Button variant="primary" className="w-50" type="submit">
                    Confirm
                </Button>
            </Form>
        </div>
    );
};

export default Appointment;
