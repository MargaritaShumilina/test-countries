import './CountryItem.css'

import {useState} from 'react';

import {fetchCountry} from '../../utils/API/api';
import Modal from '../Modal/Modal'

function CountryItem({countryInfo}) {

    const [aboutCountry, setAboutCountry] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const loadCountry = async (name) => {
        const countryName = name.toLowerCase()
        try {
            const country = await fetchCountry(countryName);
            setAboutCountry(country);
            if (country) {
                setIsModalOpen(!isModalOpen)
            }
        } catch (error) {
            console.error('Error:', error);}
    };

    const onClickFunction = (name) => {
        loadCountry(name)
    }

    const onClose = () => {
        setIsModalOpen(!isModalOpen)
        setAboutCountry([])
    }


    return (
        <>
            {isModalOpen && <Modal countryInfo={aboutCountry[0]} onClose={onClose}/>}
            <p className='countryTable__item'
               onClick={() =>
                   onClickFunction(countryInfo.name.common)
               }>{countryInfo.name.common}
            </p>
        </>

    );
}

export default CountryItem;