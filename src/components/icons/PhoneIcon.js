import React from 'react';

const PhoneIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    {props.title && <title>{props.title}</title>}
    <path d="M52.2,18.9l0.7,0.5l8,5.7l0.8,0.5l-0.4,0.8l-5.7,10.2c-0.3,0.7-0.8,1.2-1.4,1.5c-0.8,0.5-1.8,0.9-3,1.1
      c-0.6,0.1-1.1,0.2-1.6,0.2c-2.9,5.4-2.9,15.6,0.1,21c0.5,0,1.1,0.1,1.5,0.2c1.2,0.2,2.2,0.6,3.1,1.2c0.6,0.4,1.1,0.9,1.4,1.5
      l5.7,10.3l0.4,0.8L61,74.9l-8,5.7l-0.7,0.5l-0.6-0.5c-17.6-15.3-17.6-45.8,0-61.1L52.2,18.9 M52,15.8L50.6,17L50,17.5
      c-8.9,7.8-14,19.6-14,32.4c0,12.9,5.1,24.7,14.2,32.6l0.6,0.5l1.4,1.3l1.5-1.1l0.7-0.5l8-5.7l0.8-0.5l1.7-1.3l-1.1-1.9l-0.4-0.8
      l-5.7-10.2c-0.5-0.9-1.2-1.6-2.1-2.3c-1.2-0.8-2.4-1.3-4.1-1.5c-0.2-0.1-0.3-0.1-0.4-0.1c-1.9-4.5-1.9-12-0.1-16.5
      c0.1-0.1,0.3-0.1,0.4-0.1c1.5-0.3,2.8-0.8,3.9-1.5c1-0.7,1.7-1.4,2.2-2.4l5.7-10.2l0.4-0.8l1.1-1.9L63,23.7L62.3,23l-8-5.7l-0.7-0.5
      L52,15.8L52,15.8z"/>
  </svg>
);

export default PhoneIcon;
