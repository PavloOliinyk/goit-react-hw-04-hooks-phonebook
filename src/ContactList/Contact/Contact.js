import PropTypes from 'prop-types';
import s from './Contact.module.css';

function Contact({ contact: { name, number, id }, deleteContact }) {
  return (
    <li className={s.card}>
      <div className={s.cardContent}>
        <p className={s.cardInfo}>{name}</p>
        <p className={s.cardInfo}>{number}</p>
        <button className={s.cardButton} onClick={() => deleteContact(id)}>
          Delete contact
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default Contact;
