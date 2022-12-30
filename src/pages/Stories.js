import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import global_variables from '../mixins/globarVars';
import BaseService from '../mixins/baseServices';
import moment from 'moment-timezone';
import ShowAlert from '../components/Alerts/all_alerts';
import { DeleteStory, PostNewStory, UpdateStory } from '../functions/AllFunctions';




const Stories = () => {

    var today = new Date();

    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [allStories, setAllStories] = useState([]);
    const [searchQry, setSearchQry] = useState("");

    const [storyId, setStoryId] = useState("");
    const [theTitle, setTheTitle] = useState("");
    const [theBody, setTheBody] = useState("");
    const [createdDate, setCreatedDate] = useState("");


    //fetch stories onload
    useEffect(() => {
        fetchStories();
    }, []);



    //fetch stories function
    const fetchStories = () => {
        setLoading(true);

        const the_route = global_variables().get_stories;

        BaseService.get_api(the_route)
            .then((response) => {
                console.log(response);
                setAllStories(response.data.payload);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })

    }



    //create new story
    const doCreate = (e) => {
        e.preventDefault();
        if (isEditing === true) {
            ShowAlert.question_alert('Confirm', 'Do you wish to edit this story?', 'Proceed')
                .then((result) => {
                    if (result.isConfirmed) {
                        var data = {
                            "title": theTitle,
                            "body": theBody,
                            "dateCreated": createdDate,
                            "dateUpdated": today.toISOString()
                        };

                        ShowAlert.loading_alert('Udating Story...');
                        UpdateStory(storyId, data);
                    }
                })
        }
        else {
            ShowAlert.question_alert('Confirm', 'Do you wish to create this story?', 'Proceed')
                .then((result) => {
                    if (result.isConfirmed) {
                        var data = {
                            "title": theTitle,
                            "body": theBody,
                            "dateCreated": today.toISOString(),
                            "dateUpdated": today.toISOString()
                        };

                        ShowAlert.loading_alert('Creating New Story...');
                        PostNewStory(data);
                    }
                })
        }
    }


    //edit story
    const trigger = (i) => {
        var go = allStories[i]['_id'];

        var uniqueData = allStories.filter(function (theData) {
            return theData._id === go;
        });

        console.log(uniqueData[0]);

        setStoryId(uniqueData[0]['_id']);
        setTheTitle(uniqueData[0]['title']);
        setTheBody(uniqueData[0]['body']);
        setCreatedDate(uniqueData[0]['createdAt']);
        setIsEditing(true);
    }


    //Delete story checkPoint before perfoming the action
    const checkPoint = (i) => {
        var go = allStories[i]['_id'];

        var uniqueData = allStories.filter(function (theData) {
            return theData._id === go;
        });

        console.log(uniqueData[0]['_id']);

        ShowAlert.question_alert('Confirm', 'Do you wish to delete this story?', 'Proceed')
            .then((result) => {
                if (result.isConfirmed) {
                    ShowAlert.loading_alert('Deleting Story...')
                    DeleteStory(uniqueData[0]['_id']);
                }
            })
    }




    return (
        <>

            <Container>
                <Row>
                    <Col md={4} className='mt-3'>
                        <p className='text-xl font-semibold'>Create Story</p>
                        <hr />

                        <div className='mt-4'>
                            <form onSubmit={doCreate}>
                                <div className='form-group mt-2'>
                                    <input className='form-control' value={theTitle} onChange={(e) => setTheTitle(e.target.value)} placeholder='Enter title' required autoFocus />
                                </div>
                                <div className='form-group mt-2'>
                                    <textarea className='form-control h-44' value={theBody} onChange={(e) => setTheBody(e.target.value)} placeholder='Enter body' required />
                                </div>
                                <div className='form-group mt-2'>
                                    <button className='form-control text-default_white bg-default_orange'>
                                        {
                                            isEditing ? "Update Story"
                                                :
                                                "Post Story"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>



                    <Col md={8} className='mt-3'>
                        <p className='text-xl font-semibold'>List of Stories</p>
                        <hr />

                        {/* Search bar */}
                        <div className='row mb-3 mt-4'>

                            <div className='col-md-6'> <i className='fa fa-sync btn' title='Reset' onClick={() => { fetchStories() }}></i> </div>

                            <form className="col-md-6">
                                <div className="input-group">

                                    <input
                                        className="form-control shadow-none"
                                        placeholder="Search title..."
                                        id="storySearch"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                        autoComplete="off"
                                        type='text'
                                        style={{ border: "1px solid #d9e2ef" }}
                                        value={searchQry}
                                        onChange={(e) => setSearchQry(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn outline outline-1 outline-default_orange bg-default_orange text-default_white text-md hover:text-default_white hover:bg-default_orange">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>

                        </div>

                        <div className='mt-2'>
                            <Row>

                                {
                                    loading ?
                                        <>
                                            <div className='mt-2 text-center'>
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <p>Fetching Stories...</p>
                                            </div>
                                        </>
                                        :
                                        <>
                                            {
                                                allStories.length === 0 ?
                                                    <>
                                                        <div className='mt-2 text-center'>
                                                            <p>No story found...</p>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            allStories.map((dd, index) => {
                                                                return (
                                                                    <Col className='mt-3' md={6} key={index}>
                                                                        <Card className='shadow-sm rounded-lg border-y-0 border-default_orange border-b-0 border-x-2'>
                                                                            <Card.Body>
                                                                                <div className='float-right clear-both flex gap-3'>
                                                                                    <Link to="#" title='Edit Story' onClick={trigger.bind(this, index)}><PencilAltIcon className='w-6 h-6' /></Link>
                                                                                    <Link className='text-default_red' to="#" title='Edit Story' onClick={checkPoint.bind(this, index)}><TrashIcon className='w-6 h-6' /></Link>
                                                                                </div>
                                                                                <p className='mt-2 text-lg font-semibold'>{dd.title}</p>
                                                                                <p className='mt-2'>{dd.body}</p>

                                                                                <div className='mt-4 text-default_grey'>
                                                                                    <small>Created on: {moment(dd.createdAt).format('Do MMM YYYY - HH:MMa')}</small>
                                                                                    <br />
                                                                                    <small>Updated on: {moment(dd.updatedAt).format('Do MMM YYYY - HH:MMa')}</small>
                                                                                </div>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                )
                                                            })
                                                        }
                                                    </>
                                            }
                                        </>
                                }

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Stories