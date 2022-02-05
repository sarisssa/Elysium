import { v4 as uuidv4 } from 'uuid';

import CustomButton from "../custom-button/custom-button.component";

import './contact-form.styles.scss';

const dropdown = [
    'Reason for Contacting',
    'Return Item',
    'Exchange Item',
    'Address Change',
    'Received Wrong Item',
    'Damaged Item',
    'Cancel Order',
    'Other'
]

const ContactForm = () => (
    <div className='contact-form'>
        <h2 className='contact-form-heading'> Contact Us </h2>
        <form>
            <div className='contact-form-first-row'>
                <div className='width-50-percent'>
                    <label>
                        Your Name <span className='required'>*</span>
                    </label>
                    <input 
                        className='contact-name' 
                        type="text" 
                        placeholder='Your Name' 
                        required 
                    />
                </div>
                <div>
                    <label>
                        Your Email <span className='required'>*</span>
                    </label>
                    <input 
                        className='contact-email' 
                        type="text" 
                        placeholder='Email' 
                        required 
                    />
                </div>
            </div>
            <div className='contact-form-second-row'>
                <div className='width-50-percent'>
                    <label>
                        Order # <span className='required'>*</span>
                    </label>
                    <input 
                        className='contact-order-number' 
                        type="text" 
                        placeholder='Order # &nbsp;&nbsp;&nbsp;' 
                        required 
                    />
                </div>
                <div>
                    <label>
                        Dropdown <span className='required'>*</span>
                    </label>
                    <select className='contact-reason' type="text" required>
                        {dropdown.map(ele => (
                            <option key={uuidv4()} value={ele}>{ele}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label>
                    Message <span className='required'>*</span>
                </label>
                <textarea
                    className='contact-message-field'
                    row='8'
                    type="text"
                    placeholder='Message'
                    required
                />
            </div>
            <CustomButton type='submit'>Submit</CustomButton>
        </form>
    </div>
);

export default ContactForm;

