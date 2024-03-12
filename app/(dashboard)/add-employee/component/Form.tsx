"use client"

import React, { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'
import useDebounce from '@/utils/hooks/useDebounce';
import { FormInput, Button } from '@/components';
import { apiURL, isEmailValid, validateFullName } from '@/utils/functions';
import clsx from 'clsx';
import { User } from '@/utils/Types';

enum Status {
    idle = 0,
    success = 1,
    error = 2
};

interface ContactInfo {
    name: string;
    email: string;
    phone: string;
    occupation: string;
    address: string;
    state: string;
}


// Interface for the success response
interface SuccessResponse {
    message: "Employee registered successfully";
    employee: {
        name: string;
        email: string;
        occupation: string;
        phone: number;
        role: string;
        state: string;
        address: string;
        _id: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
}

// Interface for the failure response
interface FailureResponse {
    message: "Employee already exists";
}


export default function Form() {
    const { push } = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [emailText, setEmailText] = useState("");
    const [nameText, setNameText] = useState("");
    const [phoneNumber, setPhoneText] = useState("");
    const [occupationText, setOccupationText] = useState("");
    const [addressText, setAddressText] = useState("");
    const [stateText, setStateText] = useState("");
    const [loading, setLoading] = useState(false);

    const [formError, setFormError] = useState({
        email: { status: Status.idle, error: "" },
        name: { status: Status.idle, error: "" },
        phone: { status: Status.idle, error: "" },
        occupation: { status: Status.idle, error: "" },
        address: { status: Status.idle, error: "" },
        state: { status: Status.idle, error: "" },
        general: {
            error: ""
        }
    });

    const debouncedEmail = useDebounce(emailText, 1000);
    const debouncedName = useDebounce(nameText, 1000);
    const debouncedOccupation = useDebounce(occupationText, 1000);
    const debouncedPhone = useDebounce(phoneNumber, 1000);
    const debouncedAddress = useDebounce(addressText, 1000);
    const debouncedState = useDebounce(stateText, 1000);

    /* Validate the email input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedEmail) {
            setFormError((prev) => ({
                ...prev, email: { status: Status.idle, error: "" }
            }));
            return;
        }

        const test = isEmailValid(debouncedEmail);

        if (!test) {
            setFormError((prev) => ({
                ...prev, email: { status: Status.error, error: "Invalid email address!" }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, email: { status: Status.success, error: "" }
        }));

    }, [debouncedEmail]);

    /* Validate the full name input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedName) {
            setFormError((prev) => ({
                ...prev, name: { status: Status.idle, error: "" }
            }));
            return;
        }

        const [test, error] = validateFullName(debouncedName);

        if (!test) {
            setFormError((prev) => ({
                ...prev, name: { status: Status.error, error: error }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, name: { status: Status.success, error: "" }
        }));

    }, [debouncedName]);

    /* Validate the Phone Number input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedPhone) {
            setFormError((prev) => ({
                ...prev, phone: { status: Status.idle, error: "" }
            }));
            return;
        }

        const [test, error] = [String(debouncedPhone).length > 9,"Invalid phone number length"];

        if (!test) {
            setFormError((prev) => ({
                ...prev, phone: { status: Status.error, error: error }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, phone: { status: Status.success, error: "" }
        }));

    }, [debouncedPhone]);

    /* Validate the Phone Number input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedOccupation) {
            setFormError((prev) => ({
                ...prev, occupation: { status: Status.idle, error: "" }
            }));
            return;
        }

        const [test, error] = [String(debouncedOccupation).length > 3,"Text is too Short"];

        if (!test) {
            setFormError((prev) => ({
                ...prev, occupation: { status: Status.error, error: error }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, occupation: { status: Status.success, error: "" }
        }));

    }, [debouncedOccupation]);

    /* Validate the Phone Number input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedAddress) {
            setFormError((prev) => ({
                ...prev, address: { status: Status.idle, error: "" }
            }));
            return;
        }

        const [test, error] = [String(debouncedAddress).length > 3,"Please provide a valid address"];

        if (!test) {
            setFormError((prev) => ({
                ...prev, address: { status: Status.error, error: error }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, address: { status: Status.success, error: "" }
        }));

    }, [debouncedAddress]);

    /* Validate the Phone Number input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));

        if (!debouncedState) {
            setFormError((prev) => ({
                ...prev, state: { status: Status.idle, error: "" }
            }));
            return;
        }

        const [test, error] = [String(debouncedState).length > 3,"Please provide a valid state"];

        if (!test) {
            setFormError((prev) => ({
                ...prev, state: { status: Status.error, error: error }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, state: { status: Status.success, error: "" }
        }));

    }, [debouncedState]);


    /* Memoize the value of `canProceed`, which is a boolean indicating whether the form can be
    submitted or not. */
    const canProceed = useMemo(() => {
        let result = true;
        (Object.values(formError).forEach((testItem)=>{
            const check = "status" in testItem;
            if (check && testItem.status !== Status.success) {
                result = false;
                return;
            }
        }))
        return result;
    }, [formError]);

    const handleRequest = async() => {
        const payload: ContactInfo = {
            name: debouncedName,
            email: debouncedEmail,
            address: debouncedAddress,
            phone: debouncedPhone,
            occupation: debouncedOccupation,
            state: debouncedState
        }
        try {
            const sendLoginRequest = await fetch(`${apiURL}/employees/employeeRegister`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            const ResponseData: SuccessResponse | FailureResponse = await sendLoginRequest.json();

            if (ResponseData.message === 'Employee already exists') {
                setFormError((prev) => ({
                    ...prev,
                    general: { error: ResponseData.message }
                }));
                throw new Error(ResponseData.message);
            }

            formRef.current?.reset();

            const { message, employee } = ResponseData;

            console.log({
                message,
                employee,
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw new Error(String(error));
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        if (loading) return;
        e.preventDefault();
        setLoading(true);
        if (apiURL) {
            handleRequest();
        }else{
            setFormError((prev) => ({
                ...prev, 
                general: { error: "Something went wrong, please refresh the page" }
            }));
        }
    }

    return (
        <form method='POST' ref={formRef} className='flex flex-col items-center justify-start lg:gap-10 gap-7 lg:mt-2 w-full' onSubmit={handleSubmit}>
            <p className='text-center text-red-500 text-sm'>
                {formError.general.error}
            </p>
            <FormInput
                nameTxt={formError.name.status === Status.error ? formError.name.error : 'Full name:'}
                className={formError.name.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="text"
                inputMode='text'
                placeholder=" "
                hasError={formError.name.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setNameText(e.target.value))}
                value={nameText}
            />

            <FormInput
                nameTxt={formError.email.status === Status.error ? formError.email.error : 'Email address:'}
                className={formError.email.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="email"
                name="email"
                inputMode='email'
                placeholder=" "
                hasError={formError.email.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setEmailText(e.target.value))}
                value={emailText}
            />

            <FormInput
                nameTxt={formError.phone.status === Status.error ? formError.phone.error : 'Phone number:'}
                className={formError.phone.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="number"
                inputMode='numeric'
                placeholder=" "
                hasError={formError.phone.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setPhoneText(e.target.value))}
                value={phoneNumber}
            />

            <FormInput
                nameTxt={formError.occupation.status === Status.error ? formError.occupation.error : 'Occupation:'}
                className={formError.occupation.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="text"
                inputMode='text'
                placeholder=" "
                hasError={formError.occupation.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setOccupationText(e.target.value))}
                value={occupationText}
            />

            <FormInput
                nameTxt={formError.address.status === Status.error ? formError.address.error : 'Address:'}
                className={formError.address.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="text"
                inputMode='text'
                placeholder=" "
                hasError={formError.address.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setAddressText(e.target.value))}
                value={addressText}
            />

            <FormInput
                nameTxt={formError.state.status === Status.error ? formError.state.error : 'State'}
                className={formError.state.status === Status.error ? "border-b border-b-red-400 shadow-sm" : ''}
                type="text"
                inputMode='text'
                placeholder=" "
                hasError={formError.state.status === Status.error}
                onChange={((e: ChangeEvent<HTMLInputElement>) => setStateText(e.target.value))}
                value={stateText}
            />

            <Button
                type={canProceed ? 'submit' : 'button'}
                children={
                    loading
                      ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <style>
                            {`.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}.spinner_Km9P{animation-delay:-.65s}.spinner_JApP{animation-delay:-.5s}@keyframes spinner_MGfb{93.75%, 100% {opacity: .2}}`}
                          </style>
                          <circle className="fill-white spinner_S1WN" cx="4" cy="12" r="3" />
                          <circle className="fill-white spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
                          <circle className="fill-white spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
                        </svg>
                      )
                      : "create"
                  }
                className={clsx(
                    'w-full mt-[10px] text-black text-center text-base font-semibold border border-black',
                    canProceed ? "active:scale-90 active:opacity-60 hover:opacity-80 bg-green-500 text-white border-transparent" : "opacity-60"
                )}
            />
        </form>
    )
}