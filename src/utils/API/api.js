export const fetchCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const text = await response.text();
            console.error(`HTTP error! Status: ${response.status}. Response: ${text}`);
            throw new Error('HTTP error!');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchCountry = async (value) => {
    const url = `https://restcountries.com/v3.1/name/${value}?fullText=true`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const text = await response.text();
            console.error(`HTTP error! Status: ${response.status}. Response: ${text}`);
            throw new Error(`HTTP error!`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching filtered users:', error);
        throw error;
    }
};