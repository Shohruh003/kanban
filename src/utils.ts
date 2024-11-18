
export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const formattedDate = (date?: string) => {
    let resultDate = new Date();
    if (date) {
        resultDate = new Date(date);
    }
    return `${resultDate.getFullYear()}.${(resultDate.getMonth() + 1).toString().padStart(2, '0')}.${resultDate.getDate().toString().padStart(2, '0')}`;
}

export const localFormatDate = (date?: Date | string) => {
    let transformedDate = new Date();
    if (date) {
        if (typeof date === 'string') {
            transformedDate = new Date(date);
        } else {
            transformedDate = date;
        }
    }

    const checkLenght = (data: string) => {
        return data.length === 1 ? `0${data}` : data;
    }

    let month = transformedDate.getUTCMonth() + 1;
    const resultDate = `${checkLenght(transformedDate.getUTCDate().toString())}.${checkLenght(month.toString())}.${transformedDate.getFullYear()}`;
    const resultTime = `${checkLenght(transformedDate.getHours().toString())}:${checkLenght(transformedDate.getMinutes().toString())}:${checkLenght(transformedDate.getSeconds().toString())}`;
    return `${resultDate} ${resultTime}`;
}

export const localFormatTime = (date: Date | string) => {
    let transformedDate: Date;
    if (typeof date === 'string') {
        transformedDate = new Date(date);
    } else {
        transformedDate = date;
    }

    const checkLenght = (data: string) => {
        return data.length === 1 ? `0${data}` : data;
    }

    return `${checkLenght(transformedDate.getHours().toString())}:${checkLenght(transformedDate.getMinutes().toString())}:${checkLenght(transformedDate.getSeconds().toString())}`;
}

export const checkDateSymbolesCount = (value: number) => {
    return value.toString().length === 1 ? `0${value}` : value;
}

export const getFormattedTimeDifference = (enterTime: Date, exitTime: Date) => {
    const enterTimeSeconds = enterTime.getTime();
    const exitTimeSeconds = exitTime.getTime();

    const difference = exitTimeSeconds - enterTimeSeconds;

    if (isNaN(difference) || difference < 0) return '--:--';

    const hours = Math.floor(difference / 3600000);
    let a = difference - hours * 3600000;
    const minutes = Math.floor(a / 60000);
    a = a - minutes * 60000;
    const seconds = Math.floor(a / 1000);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};