"use client"

import React, { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import useDebounce from '@/utils/hooks/useDebounce';
import { FormInput, Button } from '@/components';
import { apiURL, isEmailValid } from '@/utils/functions';
import clsx from 'clsx';
import { setSessionData } from '@/utils/login';
import { User } from '@/utils/Types';

enum Status {
    idle = 0,
    success = 1,
    error = 2
};


type ResponseSuccess = {
    message: string;
    user: User;
    token: number;
    error: undefined;
}

type ResponseError = {
    error: string;
}


export default function Form() {
    const { push } = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [emailText, setEmailText] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordText, setPasswordText] = useState("");

    const [formError, setFormError] = useState({
        email: { status: Status.idle, error: "" },
        password: { status: Status.idle, error: "" },
        general: {
            error: ""
        }
    })

    const debouncedEmail = useDebounce(emailText, 500);
    const debouncedPassword = useDebounce(passwordText, 500);

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

    /* Validate the password input field. */
    useEffect(() => {
        setFormError((prev) => ({
            ...prev, general: { error: "" }
        }));
        if (!debouncedPassword) {
            setFormError((prev) => ({
                ...prev, password: { status: Status.idle, error: "" }
            }));
            return;
        }

        setFormError((prev) => ({
            ...prev, password: { status: Status.success, error: "" }
        }));
    }, [debouncedPassword]);

    /* Memoize the value of `canProceed`, which is a boolean indicating whether the form can be
    submitted or not. */
    const canProceed = useMemo(() => {
        return (formError.email.status === Status.success && formError.password.status === Status.success);
    }, [formError.email.status, formError.password.status]);

    const handleSubmit = async (e: FormEvent) => {
        if (loading) return;
        e.preventDefault();
        setLoading(true);
        if (apiURL) {
            try {
                const sendLoginRequest = await fetch(`${apiURL}/users/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: debouncedEmail,
                        password: debouncedPassword,
                    }),
                });

                const ResponseData: ResponseSuccess | ResponseError = await sendLoginRequest.json();
                
                if (ResponseData.error !== undefined) {
                    setFormError((prev) => ({
                        ...prev, 
                        general: { error: ResponseData.error }
                    }));
                    throw new Error(ResponseData.error);
                }

                formRef.current?.reset();

                const { token, message, user } = ResponseData;
                console.log(token, message, user, ResponseData);

                const sessionData = {
                    UID: String(token),
                    user: user
                }

                const performLogin = setSessionData("komas500UID", sessionData);

                if (!performLogin) throw new Error("An Error occurred!");

                push("/dashboard");

            } catch (error) {
                console.error(error);
                setLoading(false);
            }

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
                nameTxt={formError.email.status === Status.error ? formError.email.error : 'email address'}
                className={formError.email.status === Status.error ? "border border-red-400" : ''}
                type="email"
                inputMode='email'
                placeholder=" "
                hasError={formError.email.status === Status.error}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailText(e.target.value)}
                value={emailText}
            />
            <FormInput
                nameTxt={formError.password.status === Status.error ? formError.password.error : 'password'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordText(e.target.value)}
                className={formError.password.status === Status.error ? "border border-red-400" : ''}
                hasError={formError.password.status === Status.error}
                type="password"
                inputMode='text'
                placeholder=" "
                value={passwordText}
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
                      : "Login"
                  }
                className={clsx(
                    'bg-green-500 w-full mt-[10px] text-white text-center text-base font-semibold hover:opacity-80',
                    canProceed ? "active:scale-90 active:opacity-60" : "opacity-60"
                )}
            />
            <div className='flex justify-start gap-1 text-dark_100 font-normal text-sm lg:-mt-[15px] -mt-2 w-full'>
                <span>Don't have an account ? </span>
                <span className='text-primary_100 cursor-pointer' onClick={() => push('/register')}> Register</span>
            </div>
        </form>
    )
}