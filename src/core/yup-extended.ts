import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';

yup.setLocale({
    string: {
        email: 'Некорректный e-mail',
        length: () => 'Неверный формат данных'
    },
    number: {
        moreThan: ({ more }) => `Значение должно быть больше ${more}`,
        max: ({ max }) => `Значение должно быть меньше ${max}`,
        integer: () => 'Значение должно быть целочисленным'
    },
    mixed: {
        required: 'Обязательное поле',
        notType: ({ type, originalValue }) => {
            if (type === 'number' && originalValue) {
                return 'Только числа';
            }

            if (originalValue) {
                return 'Неправильный формат';
            }

            return 'Обязательное поле';
        }
    }
})

yup.addMethod<yup.StringSchema>(yup.string, 'clearNotDigits', function () {
    return this.transform((value, originalValue) => {
        if (typeof originalValue === 'string') {
            return originalValue.replace(/[^0-9]/g, '');
        }
        return value;
    })
})

yup.addMethod<yup.StringSchema>(yup.string, 'clearNotPhoneSymbols', function () {
    return this.transform((value, originalValue) => originalValue.replace(/[^0-9+]/g, ''));
});

yup.addMethod<yup.StringSchema>(yup.string, 'onlyDigits', function (message?: string) {
    return this.test(
        'only-digits',
        message || 'Должны быть только цифры',
        (value) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^\d*$/);
            return regExp.test(value);
        }
    )
})

yup.addMethod<yup.StringSchema>(yup.string, 'onlyLetters', function (message?: string) {
    return this.test(
        'only-letters',
        message || 'Должны быть только буквы',
        (value) => {
            if (!value) {
                return true
            }

            const regExp = new RegExp(/^[A-Za-zа-яА-Я]+$/);
            return regExp.test(value);
        }
    )
})

yup.addMethod<yup.StringSchema>(yup.string, 'date', function (message?: string) {
    return this.test(
        'date',
        message || 'Неверный формат даты, должно быть в формате дд.мм.гггг',
        (value) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^\d{2}\.\d{2}\.\d{4}$/);
            return regExp.test(value);
        }
    )

})

yup.addMethod<yup.StringSchema>(yup.string, 'minNotRequired', function (
    minValue: number,
    message?: string | ((minValue: number) => string)
) {
    return this.test(
        'min-not-required',
        (value, context) => {
            const regExp = new RegExp(`.{${minValue},}`);
            if (!value || regExp.test(value)) {
                return true;
            }

            let resultMessage: string;
            if (typeof message === 'function') {
                resultMessage = message(minValue);
            } else {
                resultMessage = message || `Минимум символов: ${minValue}`;
            }

            return context.createError({ message: resultMessage });
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'symbolCountRange', function (
    to: number,
    from: number,
    message?: string | ((to: number, from: number) => string)
) {
    return this.test(
        'symbol-count-range',
        (value, context) => {
            const regExp = new RegExp(`^.{${to},${from}}$`);

            if (!value || regExp.test(value)) {
                return true;
            }

            let resultMessage: string;
            if (typeof message === 'function') {
                resultMessage = message(to, from);
            } else {
                resultMessage = message || `Введенное значение должно быть между ${to} и ${from} символов`;
            }

            return context.createError({ message: resultMessage });
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'minPassword', function (messageLength?: string, messageSymbols?: string) {
    return this.test(
        'min-password',
        (value: any, context) => {

            if (value.length >= 8) {
                const regExp = new RegExp(/^[a-zA-Z0-9_.]*$/);
                if (regExp.test(value)) {
                    return true;
                }
                return context.createError({ message: messageSymbols || 'Допустимые символы: a-z, A-Z, 0-9, "_", "."' });
            }
            
            return context.createError({ message: messageLength || 'Минимум 8 символов' });
        }
    )
})

yup.addMethod<yup.StringSchema>(yup.string, 'fio', function (message?: string) {
    return this.test(
        'fio',
        message || 'Должны быть только буквы, пробел, "-"',
        (value) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^[A-Za-zа-яА-Я]+(?:[-\s][A-Za-zа-яА-Я]+)?$/);
            return regExp.test(value);
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'group', function (message?: string) {
    return this.test(
        'group',
        message || 'Должны быть только буквы, цыфры, пробел, "-"',
        (value) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^[A-Za-zа-яА-Я0-9\s-]+$/);
            return regExp.test(value);
        }
    )
})

yup.addMethod<yup.StringSchema>(yup.string, 'phoneSymbols', function (message?: string) {
    return this.test(
        'phone-symbols',
        message || 'Допустимые символы: "+", "-", "(", ")"',
        (value) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^[0-9-+() ]*$/);
            return regExp.test(value);
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'email', function (message?: string) {
    return this.test(
        'email',
        message || 'Некорректный e-mail',
        (value, context) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

            if (regExp.test(value)) {
                return true;
            }

            return context.createError({ message: message });
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'username', function (message?: string) {
    return this.test(
        'username',
        message || 'Допустимые символы: a-z, A-Z, 0-9, "_", "."',
        (value, context) => {
            if (!value) {
                return true;
            }

            const regExp = new RegExp(/^[a-zA-Z0-9_.]*$/);
            if (regExp.test(value)) {
                return true;
            }

            return context.createError({ message: message });
        }
    );
})

yup.addMethod<yup.StringSchema>(yup.string, 'minDigits', function (
    minValue: number,
    message?: string | ((minValue: number) => string)
) {
    return this.test(
        'min-digits',
        (value, context) => {
            if (!value) {
                return true;
            }

            const digitsValue = value.replace(/[^0-9]/g, '');
            const regExp = new RegExp(`.{${minValue},}`);
            if (regExp.test(digitsValue)) {
                return true;
            }

            let resultMessage: string;

            if (typeof message === 'function') {
                resultMessage = message(minValue);
            } else {
                resultMessage = message || `Минимум цифр: ${minValue}`;
            }

            return context.createError({ message: resultMessage });
        }
    );
});

yup.addMethod<yup.StringSchema>(yup.string, 'maxDigits', function (
    maxValue: number,
    message?: string | ((maxValue: number) => string)
) {
    return this.test(
        'mind-digits',
        (value, context) => {
            if (!value) {
                return true;
            }

            const digitsValue = value.replace(/[^0-9]/g, '');
            const regExp = new RegExp(`^.{0,${maxValue}}$`);
            if (regExp.test(digitsValue)) {
                return true;
            }

            let resultMessage: string;
            if (typeof message === 'function') {
                resultMessage = message(maxValue);
            } else {
                resultMessage = message || `Максимум цифр: ${maxValue}`;
            }

            return context.createError({ message: resultMessage });
        }
    );
});

declare module 'yup' {
    interface StringSchema<TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType> extends yup.BaseSchema<TType, TContext, TOut> {
        clearNotDigits(): StringSchema<TType, TContext>;
        clearNotPhoneSymbols(): StringSchema<TType, TContext>;
        onlyDigits(message?: string): StringSchema<TType, TContext>;
        minNotRequired(minValue: number, message?: string | ((minValue: number) => string)): StringSchema<TType, TContext>;
        symbolCountRange(to: number, from: number, message?: string | ((to: number, from: number) => string)): StringSchema<TType, TContext>;
        fio(message?: string): StringSchema<TType, TContext>;
        group(message?: string): StringSchema<TType, TContext>;
        onlyLetters(message?: string): StringSchema<TType, TContext>;
        date(message?: string): StringSchema<TType, TContext>;
        email(message?: string): StringSchema<TType, TContext>;
        minPassword(messageLength?: string, messageSymbols?: string): StringSchema<TType, TContext>;
        username(message?: string): StringSchema<TType, TContext>;
        phoneSymbols(message?: string): StringSchema<TType, TContext>;
        minDigits(minValue: number, message?: string | ((minValue: number) => string)): StringSchema<TType, TContext>;
        maxDigits(maxValue: number, message?: string | ((maxValue: number) => string)): StringSchema<TType, TContext>;
    }
}

export default yup;
