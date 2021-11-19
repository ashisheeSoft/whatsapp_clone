import React,{useRef} from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import { v4 as uuidV4} from 'uuid'

export default function Login({onIdSubmit}) {
   const refId=useRef();
   function handleSubmit(e){
       e.preventDefault();
       onIdSubmit(refId.current.value);
   }
   function createNewId(){
       onIdSubmit(uuidV4())
   }
    return (
        <Container className="align-items-center d-flex bg-info" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group className="mb-2">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={refId} required></Form.Control>
                </Form.Group>
                <Button type="submit">Login</Button>
                <Button variant="secondary" onClick={createNewId} className="m-2">Create A New ID</Button>
            </Form>
        </Container>
    )
}
