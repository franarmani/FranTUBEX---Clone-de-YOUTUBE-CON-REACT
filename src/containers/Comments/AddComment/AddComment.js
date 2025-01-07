import React from 'react';
import './AddComment.scss';
import {Form, Image, TextArea} from "semantic-ui-react";
import avatar from '../../../assets/images/avatar.png'; 

export function AddComment() {
  return (
    <div className='add-comment'>
      <Image className='user-image' src={avatar} circular/> 
      <Form>
        <Form.TextArea control={TextArea} autoHeight placeholder='Añadir un comentario público' />
      </Form>
    </div>
  );
}
