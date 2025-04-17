import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Front.css';
import data from './db1.json';

const Front = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const handleItemClick = () => {
        navigate('/more');
    };

    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(cart.length);
        };

        updateCartCount(); // Initial load

        // Listen for storage changes (like from Buy.jsx)
        window.addEventListener('storage', updateCartCount);

        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

    return (
        <div>
            <header>
                <ul className='mainn'>
                    <li className='logoname'>E-Commerce</li>
                    <li className='searchbar'>
                        <input
                            type='text'
                            placeholder='Search for Products, brand and more........'
                            onChange={(e) => setValue(e.target.value)}
                            className='searchhh'
                        />
                        <div className="search-results">
                            {value && data
                                .filter((item) => {
                                    const searchTerm = value.toLowerCase();
                                    const fullName = item.full_name.toLowerCase();
                                    return searchTerm && fullName.startsWith(searchTerm);
                                })
                                .slice(0, 10)
                                .map((item, index) => (
                                    <div key={index} onClick={handleItemClick}>
                                        {item.full_name}
                                    </div>
                                ))
                            }
                        </div>
                    </li>
                    <li className='loginn' id='id1'>
                        <Link to="/Login">
                            <FontAwesomeIcon icon={faUser} /> Login
                        </Link>
                    </li>
                    <li className='cartt' id='id3' onClick={() => navigate('/cart')}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartCount})
                    </li>
                </ul>
            </header>
            <main>
                <div className='sec-1'>
                    <ul className='category-list'>
                        <li>
                            <select>
                                <option>Electronics</option>
                                <option>Smartphones</option>
                                <option>Laptops</option>
                                <option>Tablets</option>
                                <option>Smartwatches</option>
                                <option>Headphones</option>
                                <option>Gaming Consoles</option>
                                <option>Cameras</option>
                                <option>Gaming-Accessories</option>
                                <option>Portable Powerbanks</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Ketchen</option>
                                <option>Cookware sets</option>
                                <option>Kitchen utensils</option>
                                <option>Small appliance</option>
                                <option>Dinnerware sets</option>
                                <option>Cutlery sets</option>
                                <option>Bakeware sets</option>
                                <option>Coffee makers</option>
                                <option>Electric kettles</option>
                                <option>Slow cookers</option>
                                <option>Food processors</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Toys</option>
                                <option>Action figures</option>
                                <option>Dolls</option>
                                <option>Board games</option>
                                <option>Puzzles</option>
                                <option>Building sets</option>
                                <option>Electronic toys</option>
                                <option>Stuffed animals</option>
                                <option>Educational toys</option>
                                <option>Outdoor toys</option>
                                <option>Art supplies</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Home Appliances</option>
                                <option>Refrigerators</option>
                                <option>Washing machines</option>
                                <option>Dryers</option>
                                <option>Dishwashers</option>
                                <option>Air conditioners</option>
                                <option>Vacuum cleaners</option>
                                <option>Microwave ovens</option>
                                <option>Stoves</option>
                                <option>Water purifiers</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Two Wheelers</option>
                                <option>Scooters</option>
                                <option>Motorcycles</option>
                                <option>Bicycles</option>
                                <option>Electric bikes</option>
                                <option>Decors</option>
                                <option>accessories</option>
                                <option>Bike parts</option>
                                <option>Scooter parts</option>
                                <option>Motorcycle gear</option>
                                <option>Bike locks</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Men</option>
                                <option>T-shirts</option>
                                <option>Jeans</option>
                                <option>Shirts</option>
                                <option>Trousers</option>
                                <option>Jackets</option>
                                <option>Footwear</option>
                                <option>Accessories</option>
                                <option>Shoes</option>
                                <option>Activewear</option>
                                <option>Outerwear</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Women</option>
                                <option>Tops</option>
                                <option>Dresses</option>
                                <option>Skirts</option>
                                <option>Trousers</option>
                                <option>Jackets</option>
                                <option>Footwear</option>
                                <option>Accessories</option>
                                <option>Skincare</option>
                                <option>Activewear</option>
                                <option>Outerwear</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Kids</option>
                                <option>T-shirts</option>
                                <option>Jeans</option>
                                <option>Dresses</option>
                                <option>Footwear</option>
                                <option>Accessories</option>
                                <option>Toys</option>
                                <option>Books</option>
                                <option>Schoolsupplies</option>
                                <option>Activewear</option>
                                <option>Outerwear</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </main>
            <div className='slide-back'>
                <img src={img1} id='slide-images' alt="Slide 1" />
                <img src={img2} id='slide-images' alt="Slide 2" />
                <img src={img3} id='slide-images' alt="Slide 3" />
            </div>
            <button className='moree' onClick={() => navigate('/more')}>
                Latest Offers and Collections
            </button>
        </div>
    );
};

export default Front;