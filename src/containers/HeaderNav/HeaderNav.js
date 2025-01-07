import React, { useState } from 'react';
import { Form, Icon, Image, Input, Menu } from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.png'; 
import avatar from '../../assets/images/avatar.png'; 
import { Link, useNavigate } from 'react-router-dom';

const HeaderNav = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = () => {
    const escapedSearchQuery = encodeURI(query);
    navigate(`/results?search_query=${escapedSearchQuery}`);
  };

  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link to="/">
          <Image src={logo} size="tiny" />
        </Link>
      </Menu.Item>
      <Menu.Menu className="nav-container">
        <Menu.Item className="search-input">
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Input
                placeholder="Buscar"
                size="small"
                action="Buscar"
                value={query}
                onChange={onInputChange}
              />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon className="header-icon" name="video camera" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="chat" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large" />
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src={avatar} avatar /> 
          </Menu.Item>
        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderNav;
