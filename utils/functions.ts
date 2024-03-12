export const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const nairaConverter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: "NGN"
})

export const cleanName = (name: string): string => {
    return name.replace(/%20/g, ' ').replace(/%26/g, '&');
}

export function isEmailValid(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

export const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
};

function validateName (name: string): boolean {
    const test = /[^a-zA-Z\s]/.test(name);
    return test;
}

export function validateFullName(name: string): [boolean, string] {
    let errorMessage = "";
    let condition = true;
    const splitName = name.split(" ");

    if (splitName.length < 2) {
        errorMessage = "Enter Fullname.";
        condition = false;
    }
    else if (splitName.length > 2) {
        errorMessage = "Only first and last name";
        condition = false;
    }
    else if (splitName[0].length < 3) {
        errorMessage = "(First name) - too short";
        condition = false;
    }
    else if (splitName[1].length < 3) {
        errorMessage = "(Last name) - too short";
        condition = false;
    }
    else if (validateName(splitName[0])) {
        errorMessage = "(First name) - Avoid numbers and special characters.";
        condition = false;
    }
    else if (validateName(splitName[1])) {
        errorMessage = "(Last name) - Avoid numbers and special characters.";
        condition = false;
    }
    else if (validateName(name)) {
        errorMessage = "Stick to common letters in your name.";
        condition = false;
    }
    else if (name.toLowerCase() === "john doe") {
        errorMessage = "Enter your real name, not 'John Doe.";
        condition = false;
    }


    return [condition, errorMessage];
}
