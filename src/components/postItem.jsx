
import {link} from "react-router-dom";
import PropTypes from 'prop-types'
import {useStateContext} from "../ContextProvider";
import router from './router'


export default function postItem({ post, onDelete = () => {} }){
    const { deletePost} = useStateContext()


    function onDeleteClick(post){
        if(!window.confirm("Are you sure you want to delete post")){
            return;

        }
        deletePost(post.id)
    }
    return (
        <div className="card md-4">
            <div className="card-body">
                <h5 classsName="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
        <div className="text-end">
          <Link to={`/edit/${post.id}`} className="btn btn-primary me-2"
          >Edit</Link>

          <button
          onClick={() => onDeleteClick(post)}
          className="btn btn-danger"
          >
            Delete
          </button>
            </div>
        </div>
        </div>
    )

    }

    postItem.propTypes ={
        post: PropTypes.object.isRequired
    }
