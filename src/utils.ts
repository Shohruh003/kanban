export const getStoredData = (key: string, defaultValue: any) => {
    try {
        const rawData = localStorage.getItem(key);
        if (rawData) {
            return JSON.parse(rawData);
        }
        return defaultValue;
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return defaultValue;
    }
};

export const setStoredData = <T>(key: string, value: T): void => {
    try {
        const existingData = getStoredData(key, []);
        const newData = [...existingData, value];
        localStorage.setItem(key, JSON.stringify(newData));
    } catch (error) {
        console.error("Error setting localStorage data:", error);
    }
};
