import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppLink } from '../utils/whatsapp';
import siteConfig from '../data/siteConfig';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const location = useLocation();

  const [name, setName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [phoneError, setPhoneError] = useState(' ');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);
  const [website, setWebsite] = useState('');
  const [formLoadedAt] = useState(Date.now());
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleWhatsAppClick = (e) => {
    const timeSpent = Date.now() - formLoadedAt;

    if (website) {
      e.preventDefault();
      return;
    }

    if (timeSpent < 3000) {
      e.preventDefault();
      alert('Please take a moment to fill the form.');
      return;
    }

    setShowToast(true);

    setTimeout(() => {
      navigate('/thank-you');
    }, 2000);
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    console.log('enter');
    setClientPhone(value);

    if (!/^[6-9]\d{9}$/.test(value) && value.length !== 10) {
      setPhoneError('Enter a valid 10-digit mobile number');
    } else {
      setPhoneError('');
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith('/services/')) {
      const serviceFromUrl = location.pathname
        .replace('/services/', '')
        .replace('-', ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      setService(serviceFromUrl);
    }
  }, [location.pathname]);

  const isValid = name.trim() && message.trim() && !phoneError;

  const whatsappMessage = `I am interested in Ananya Home Services. My details are -
Name: ${name}
Phone: ${clientPhone}
Service required: ${service || 'Not specified'}
Message: ${message}`;
  const emailSubject = encodeURIComponent('Service Enquiry');
  const emailBody = encodeURIComponent(whatsappMessage);

  return (
    <section className='page contact'>
      <h1>Contact Us</h1>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className='contact-form'>
          <input
            type='text'
            placeholder='Your name *'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          <input
            type='number'
            placeholder='Your 10 digit mobile number *'
            value={clientPhone}
            onChange={handlePhoneChange}
            onBlur={() => setTouched(true)}
          />

          <input
            type='text'
            placeholder='Service required'
            value={service}
            onChange={(e) => setService(e.target.value)}
            readOnly={location.pathname.startsWith('/services/')}
          />

          <textarea
            placeholder='Your message *'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setTouched(true)}
          />

          {!isValid && touched && (
            <p className='error-text'>
              Please enter your name, phone number and message.
            </p>
          )}
          {phoneError && <small className='error-text'>{phoneError}</small>}
          <div className='submit'>
            <a
              href={
                isValid
                  ? getWhatsAppLink(siteConfig.phone, whatsappMessage)
                  : '#'
              }
              className={`whatsapp-submit ${!isValid ? 'disabled' : ''}`}
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleWhatsAppClick}
            >
              Send via WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}
              className={`email-fallback ${!isValid ? 'disabled' : ''}`}
              onClick={handleWhatsAppClick}
            >
              Prefer email instead?
            </a>
          </div>

          <input
            type='text'
            name='website'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ display: 'none' }}
            tabIndex='-1'
            autoComplete='off'
          />
        </form>
      </div>
      {showToast && (
        <div className='toast-success'>✅ Message sent successfully!</div>
      )}
    </section>
  );
}

export default Contact;
