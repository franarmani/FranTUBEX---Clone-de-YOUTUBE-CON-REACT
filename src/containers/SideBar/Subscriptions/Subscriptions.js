import React from 'react';
import { Subscription } from "./Subscription/Subscription";
import { Divider } from "semantic-ui-react";
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';

import pelis4kImage from '../../../assets/images/pelis4k.jpg';
import teamArmaniImage from '../../../assets/images/teamarmani.jpg';
import servinIngenieriaImage from '../../../assets/images/serviningenieria.jpg';
import weatherFastImage from '../../../assets/images/weatherfast.jpg';
import micaDiseñadoraImage from '../../../assets/images/micadiseñadora.jpg';
import caloClorImage from '../../../assets/images/caloclor.jpg';
import generadorRifasImage from '../../../assets/images/generadorrifas.jpg';
import appSorteoImage from '../../../assets/images/appsorteo.jpg';


export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Proyectos Realizados (clickealos)' />

        <Subscription 
          label='Pelis4K' 
          link='https://pelis4k.online' 
          image={pelis4kImage} 
        />
        <Subscription 
          label='TeamArmani' 
          link='https://teamarmanikyudomugen.netlify.app' 
          image={teamArmaniImage} 
        />
        <Subscription 
          label='Servin Ingenieria S.A.' 
          link='https://serviningenieria-preview.netlify.app' 
          image={servinIngenieriaImage} 
        />

        <Subscription 
          label='Weather Fast' 
          link='https://weatherfastfranarmani.netlify.app' 
          image={weatherFastImage} 
        />
        <Subscription 
          label='Mica Diseñadora' 
          link='https://micaelamunicoydesign.framer.ai' 
          image={micaDiseñadoraImage} 
        />
        <Subscription 
          label='CaloClor' 
          link='https://www.productos-caloclor.com.ar' 
          image={caloClorImage} 
        />
        <Subscription 
          label='Generador de Rifas' 
          link='https://generador-rifas.netlify.app' 
          image={generadorRifasImage} 
        />
        <Subscription 
          label='AppSorteo' 
          link='https://appsorteofran.netlify.app' 
          image={appSorteoImage} 
        />

        <Divider />
      </React.Fragment>
    );
  }
}
