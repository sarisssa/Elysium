import ContactForm from "../../components/contact-form/contact-form.component";

import './contact.styles.scss';

const ContactPage = () => (
    <div className='contact-page'>
        <div className='contact-page-header'>
            <h1 className='contact-page-title'>
                CONTACT US
            </h1>
            <h2>
                WEBSTORE CUSTOMER SERVICE: SHOP@ELYSM.COM
            </h2>
        </div>
        <div className='contact-page-body'>
            <ContactForm />
        </div>
    </div>
);

export default ContactPage;