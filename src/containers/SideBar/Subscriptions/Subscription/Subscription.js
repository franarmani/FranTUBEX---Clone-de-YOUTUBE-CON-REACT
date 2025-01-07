import React from 'react';
import {Image, Menu} from "semantic-ui-react";
import './Subscription.scss';

export function Subscription(props) {

  let rightElement = null;
  const {broadcasting, amountNewVideos, image} = props;
  if (broadcasting) {
    rightElement = <Icon name='signal' />;
  } else if (amountNewVideos) {
    rightElement = <span className='new-videos-count'>{amountNewVideos}</span>;
  }

  return (
    <Menu.Item>
      <div className='subscription'>
        <div>
          <Image src={image} avatar />
          <span>{props.label}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}
