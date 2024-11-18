// const lng = 'ru';

import { ThemeTypes } from "./types/types";

// Globalize.load(ruLocaleData);
// Globalize.locale(lng);

const Locale = {
    ru: {
        notFound: 'Ничего не найдено',
        errors: {
            DEFAULT: {
                title: 'Что-то пошло не так',
                text: 'Мы уже разбираемся в чем дело. Пожалуйсте повторите попытку позже'
            }
        },
        companyName: '#SAIDOFF',
        logoUrl: '/logo.png',
        defaultUserIcon: '/user-default-icon.png',

        header: {
            themeOptions: [
                {
                    key: ThemeTypes.RED,
                    title: 'Красный'
                },
                {
                    key: ThemeTypes.MAIN,
                    title: 'Синий'
                },
                {
                    key: ThemeTypes.GREEN,
                    title: 'Зеленый'
                }
            ]
        },
        days: [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ]
    },
    uz: {
        notFound: 'Ничего не найдено',
        errors: {
            DEFAULT: {
                title: 'Что-то пошло не так',
                text: 'Мы уже разбираемся в чем дело. Пожалуйсте повторите попытку позже'
            }
        },
        companyName: '#SAIDOFF',
        logoUrl: '/logo.png',
        defaultUserIcon: '/user-default-icon.png',

        header: {
            themeOptions: [
                {
                    key: ThemeTypes.RED,
                    title: 'Красный'
                },
                {
                    key: ThemeTypes.MAIN,
                    title: 'Синий'
                },
                {
                    key: ThemeTypes.GREEN,
                    title: 'Зеленый'
                }
            ]
        },
        days: [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ]
    },
    eng: {
        notFound: 'Ничего не найдено',
        errors: {
            DEFAULT: {
                title: 'Что-то пошло не так',
                text: 'Мы уже разбираемся в чем дело. Пожалуйсте повторите попытку позже'
            }
        },
        companyName: '#SAIDOFF',
        logoUrl: '/logo.png',
        defaultUserIcon: '/user-default-icon.png',

        header: {
            themeOptions: [
                {
                    key: ThemeTypes.RED,
                    title: 'Красный'
                },
                {
                    key: ThemeTypes.MAIN,
                    title: 'Синий'
                },
                {
                    key: ThemeTypes.GREEN,
                    title: 'Зеленый'
                }
            ]
        },
        days: [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
        ]
    },
}

export default Locale;
