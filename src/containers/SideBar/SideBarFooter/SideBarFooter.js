import React from 'react';
import './SideBarFooter.scss';

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>Soy Fran Armani, un entusiasta del desarrollo web y móvil.🎨✨
        </div>
      </div>
      
      

      {/* Información adicional del pie de página */}
      <div className='footer-block'>
        <div>©FranArmani - Clone de Youtube con propósitos educativos.</div>
      </div>
    </React.Fragment>
  );
}
