import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import React from 'react'

const BookingPage: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner
                title="Book a Room">
                    <Link to ="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Cover>
            <FeaturedRooms/>
        </React.Fragment>
    )
}

export default BookingPage
