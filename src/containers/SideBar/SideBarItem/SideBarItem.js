import React from 'react';
import { Icon, Menu } from "semantic-ui-react";
import './SideBarItem.scss';
import { Link, useLocation } from 'react-router-dom';

const SideBarItem = (props) => {
  const location = useLocation();

  const shouldBeHighlighted = () => {
    const { pathname } = location;
    if (props.path === '/') {
      return pathname === props.path;
    }
    return pathname.includes(props.path);
  };

  const highlight = shouldBeHighlighted() ? 'highlight-item' : null;

  return (
    <Link to={props.path}>
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <div className='sidebar-item-alignment-container'>
          <span><Icon size='large' name={props.icon} /> </span>
          <span>{props.label}</span>
        </div>
      </Menu.Item>
    </Link>
  );
};

export default SideBarItem;
