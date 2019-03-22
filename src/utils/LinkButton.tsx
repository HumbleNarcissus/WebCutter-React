import React from 'react';
import { Link } from 'react-router-dom';
import { any } from 'prop-types';

const LinkButton = (link: string) => ({...props}) =>{
    return  <Link {...props} to={link} /> 
}

export default LinkButton;