import React, {useState, useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {useParams, useHistory} from "react-router-dom";
  import './posts.css';
  import {Button, Modal } from 'react-bootstrap'

export const PostsComponent = () => {
    const [posts, setPosts] = useState()
    const [postComments, setPostComments] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (postId) => {
        setShow(true)
        console.log(postId)
       
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data =>{
            setPostComments(data)
            console.log(data)
            
        })
    };
    

    // let { id } = useParams();

    const [userPostComments, setUserPostComments] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>{
            setPosts(data)
        })
        }, [])
        
    let postsUsers
    if (!posts){
        return <h1>Loading...</h1>
    }else{
        [postsUsers] = posts
        console.log(posts.id)
    }
    
 
    //    const commentsID = comments.filter( elemento => console.log('comments ID', elemento.postId))
    //    if (posts.id === commentsID) {
    //     console.log('exitoso')
    // }
    

   

    return (<>
        <div>
           <div className="App">
                <header className="App-header">
                    <FaBeer />

                    <ul className="list-group">

                    {
                    posts.map((post)=>
                        <li  key={post.id}>
                            <Link to={`posts/${post.id}/comments`} className="list-group-item posts">"{post.title}"</Link>
                            <Button variant="outline-secondary" onClick={() => handleShow(post.id)}>
                                See all comments
                            </Button>
                            
                            {/* <button type="button" className="btn btn-outline-secondary btn-sm commentbutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            See all comments
                            </button>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                            </div> */}
                            
                            

                        </li>)
                    }
                    </ul>
                    <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>ALL COMMENTS</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  { 
                                    postComments.map((postComment)=>
                                    <li key={postComment.id}>{postComment.body}</li>)
                                    }
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                </header>
            </div>
        </div></>
    )
}
