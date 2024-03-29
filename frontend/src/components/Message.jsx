import React, { Children } from 'react'
import {Alert} from 'react-bootstrap';


const Message = (variant, children) => {
  return (
   <Alert variant={variant}>
    {children}
   </Alert>
  )
};

Message.defaultPros = {
    variant: 'info'
};

export default Message;