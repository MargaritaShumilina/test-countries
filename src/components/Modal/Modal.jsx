import './Modal.css'

function Modal({ countryInfo, onClose }) {

    const handleBackgroundClose = (event) => {
        if (event.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <>
            { countryInfo &&
                <div className="modal" onClick={handleBackgroundClose}>
                    <div className="modal__content">
                        <span className="close" onClick={onClose}>&times;</span>
                        <h2>Информация о стране</h2>
                        <div className='modal__info'>
                            <div className='modal__text-info'>
                                <p className='modal__text'><strong>Общее название:</strong> {countryInfo.name.common}</p>
                                <p className='modal__text'><strong>Официальное название:</strong> {countryInfo.name.official}</p>
                                <p className='modal__text'><strong>Столица:</strong> {countryInfo.capital.join(', ')}</p>
                                <p className='modal__text'><strong>Регион:</strong> {countryInfo.region}</p>
                                <p className='modal__text'><strong>Численность населения:</strong> {countryInfo.population}</p>
                                <p className='modal__text'><strong>Языки:</strong> {Object.values(countryInfo.languages).join(', ')}</p>
                            </div>
                                <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} className='modal__img-info'/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;