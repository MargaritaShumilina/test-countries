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
                                <p><strong>Общее название:</strong> {countryInfo.name.common}</p>
                                <p><strong>Официальное название:</strong> {countryInfo.name.official}</p>
                                <p><strong>Столица:</strong> {countryInfo.capital.join(', ')}</p>
                                <p><strong>Регион:</strong> {countryInfo.region}</p>
                                <p><strong>Численность населения:</strong> {countryInfo.population}</p>
                                <p><strong>Языки:</strong> {Object.values(countryInfo.languages).join(', ')}</p>
                            </div>
                                <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;