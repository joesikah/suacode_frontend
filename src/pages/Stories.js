import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PencilAltIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';




const Stories = () => {


    const [loading, setLoading] = useState(true);
    const [allStories, setAllStories] = useState([]);

    const [theTitle, setTheTitle] = useState("");
    const [theBody, setTheBody] = useState("");


    //fetch stories onload
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <>

            <Container>
                <Row>
                    <Col md={4}>
                        <p className='text-xl font-semibold'>Create Story</p>
                        <hr />

                        <div className='mt-4'>
                            <form>
                                <div className='form-group mt-2'>
                                    <input className='form-control' placeholder='Enter title' required autoFocus />
                                </div>
                                <div className='form-group mt-2'>
                                    <textarea className='form-control h-44' placeholder='Enter body' required />
                                </div>
                                <div className='form-group mt-2'>
                                    <button className='form-control text-default_white bg-default_orange'>Post Story</button>
                                </div>
                            </form>
                        </div>
                    </Col>



                    <Col md={8}>
                        <p className='text-xl font-semibold'>List of Stories</p>
                        <hr />

                        <div className='mt-4'>
                            <Row>
                                <Col className='mt-2' md={6}>
                                    <Card className='shadow-sm border-0 rounded-lg'>
                                        <Card.Body>
                                            <div className='float-right clear-both'>
                                                <Link to="#"><PencilAltIcon className='w-6 h-6' /></Link>
                                            </div>
                                            <p className='mt-2 text-lg font-semibold'>Title</p>
                                            <p className='mt-2'>Body here....</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Stories