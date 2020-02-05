import React from 'react';
import ListCards from './components/ListCards/ListCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <div className="bg-white">
            <div className="h-60"></div>
            <ListCards />
            <Footer />
        </div>
    );
}

export default Home;
