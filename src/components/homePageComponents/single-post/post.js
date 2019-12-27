import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { deletePost } from "../../../store/actions/actionType";

class Post extends Component {
  state = {
    img: null,
    day: null,
    month: null,
    year: null
  };

  componentDidMount(){
    try{
      // date formating and storing it the state
      const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let d = new Date(this.props.post.id);
      this.setState({day: d.getDate(), month: month[d.getMonth()], year: d.getFullYear()});
    }catch(e){
      console.log('ERROR', e)
    }
  }

  render() {
    return (
      <div className="post">
        <img alt="post_img" className="post_img" src={this.props.post.image}/>
        <div className="date_n_author_wrapper">
          <p className="post_date">{`${this.state.month} ${this.state.day} ${this.state.year}`}</p>
          <p className="post_author">Posted by <span>{this.props.post.author}</span></p>
        </div>
        <h1 className="post_title">{this.props.post.title}</h1>
        <p className="post_message">{this.props.post.message}</p>
        <div className="buttons_wrapper">
          <Link className="edit" to={{pathname: '/edit-post', data:{post: this.props.post, id: this.props.post.id } }}>Edit</Link>
          <button className="delete" onClick={() => this.props.dispatch(deletePost(this.props.post.id))}
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
