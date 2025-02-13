import React from 'react';
import { navigate } from 'gatsby';
import SEO from '../components/seo';
import Container from '../components/container';
import './contact.scss';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...state }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <SEO title="Contact Me" />
      <p className="contact-intro">
        Say hi, hire me, tell me a joke, suggest a TV show, compliment me, roast
        me or toast me.
      </p>
      <form
        className="form"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" type="text" rows="8" onChange={handleChange} />

        <button type="submit">Send Message</button>
      </form>
    </Container>
  );
}

export default Contact;

// const StyledText = styled.p`
//   margin-top: 1.5rem;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   margin-bottom: 3rem;

//   label {
//     text-transform: uppercase;
//     margin-bottom: 5px;
//     letter-spacing: 1px;
//   }

//   input,
//   textarea,
//   button {
//     padding: 5px;
//     margin-bottom: 1.5rem;
//     /* border: 1px solid $black-olive; */
//     border: 1px solid black;
//   }

//   button {
//     cursor: pointer;
//     background: $primary-color;
//     color: white;
//     border: 2px solid transparent;
//     align-self: center;
//     margin-top: 20px;
//     font-weight: 700;
//     transition: all 0.2s ease;
//     padding: 5px 20px;

//     &:hover {
//       background: $primary-lighten;
//       transition: all 0.2s ease;
//     }

//     @media (max-width: 576px) {
//       align-self: unset;
//     }
//   }
// `;
