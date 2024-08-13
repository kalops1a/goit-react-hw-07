import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => (
  <li>
    {contact.name}: {contact.number}
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;