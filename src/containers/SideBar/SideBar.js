import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import { Subscriptions } from './Subscriptions/Subscriptions';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem path='/' label='Inicio' icon='home'/>
        <SideBarItem path='/feed/trending' label='Tendencias' icon='fire'/>
        <SideBarItem label='Seguidores' icon='spy'/>
        <Divider/>
        <SideBarHeader title='Biblioteca'/>
        <SideBarItem label='Historial' icon='history'/>
        <SideBarItem label='Ver más tarde' icon='clock'/>
        <SideBarItem label='Videos que me gustan' icon='thumbs up'/>
        <Divider/>
        <Subscriptions/>
        <SideBarHeader title='Más de YouTube'/>
        <SideBarItem label='Películas y programas' icon='film'/>
        <Divider/>
        <SideBarItem label='Historial de informes' icon='flag'/>
        <SideBarItem label='Ayuda' icon='help circle'/>
        <SideBarItem label='Enviar comentarios' icon='comment'/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    );
  }
}
