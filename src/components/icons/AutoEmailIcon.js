import React from 'react';

const AutoEmailIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24" overflow='visible'>
    {props.title && <title>{props.title}</title>}
    <path d="M16.4615108,8.21155577 C15.2620069,7.20283874 14.5,5.69081683 14.5,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,9.12539658 C21.3802045,9.36726844 20.7056741,9.5 20,9.5 C19.3412815,9.5 18.7097001,9.38434472 18.124444,9.17222253 L12,13 L4,8 L4,6 L12,11 L16.4615108,8.21155577 Z" id="Shape" fillRule="nonzero"></path>
    <path d="M20,8 C17.79,8 16,6.21 16,4 C16,1.79 17.79,0 20,0 C22.21,0 24,1.79 24,4 C24,6.21 22.21,8 20,8 Z M20.5,4.10868246 L20.5,1 L19.5,1 L19.5,4.69000244 L19.5051733,4.68901951 L22.0980762,6.18603273 L22.5980762,5.32000732 L20.5,4.10868246 Z" id="Combined-Shape" ></path>
  </svg>
);


export default AutoEmailIcon;
