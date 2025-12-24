import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Services = () => {
    return (
        <div className="tab-content">
            <TypeAnimation
                sequence={[
                    './list_services.sh',
                    1000,
                    'Static Website Development:\n- Responsive design\n- SEO-friendly structure\n- Fast loading times\n- Basic contact forms\n\nDynamic Website Development:\n- CMS integration (WordPress/Laravel)\n- User login and registration\n- Dynamic content management\n- Interactive forms\n\nTravel CRM System:\n- Automated booking management\n- Client profiles & history\n- Invoice & payment integration\n- Booking forms & notifications\n\nHotels CRM Management:\n- Real-time room availability\n- Guest check-in/out tracking\n- Billing & invoice management\n- Housekeeping scheduling',
                    500,
                ]}
                wrapper="div"
                cursor={false}
                repeat={0}
                speed={60}
                style={{ whiteSpace: 'pre-line' }}
            />
        </div>
    );
};

export default Services;