import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader";
import {Comment} from './Comment/Comment';
import {AddComment} from './AddComment/AddComment';

export class Comments extends React.Component {
  render() {
    if (!this.props.comments) {
      return <div/>;
    }

    const comentarios = this.props.comments.map((comentario) => {
      return <Comment comment={comentario} key={comentario.id}/>;
    });

    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment key='add-comment'/>
        {comentarios}
      </div>
    );
  }
}
