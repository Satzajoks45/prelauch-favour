import CryptoJS from 'crypto-js';
import { User } from './Types';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY!;

// Function to encrypt the value
const encryptValue = (value: string) => {
    const encryptedValue = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    return encryptedValue;
};

// Function to decrypt the value
const decryptValue = (encryptedValue: string) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedValue;
};

// Function to set the session data in localStorage
type ValueType = {
    UID: string,
    user: User
}
export const setSessionData = (key: string, value: ValueType) => {
    try {
        value.UID = encryptValue(value.UID);
        const sessionString = JSON.stringify(value);
        localStorage.setItem(key, sessionString);
        return true;
    } catch (error) {
        return false;
    }
};