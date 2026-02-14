import { useForm, FormProvider } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import imgBack from "@/png/back.png";
import imgLogoLiquid from "@/png/logo_liquid.png";
import { useState } from "react";
import { postSubscribe } from "@/api/subscribe";

/**
 * Subscribe to email notify page
 * @example
 * return <Subscribe />
*/
export default function Subscribe({}) {
    const methods = useForm();
    const [ isLoading, setLoading ] = useState<boolean>(false);
    const [ isOk, setOk ] = useState<boolean>(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await postSubscribe(data.username, data.email);
        }
        finally {
            setLoading(false);
            setOk(true);
        }
    }

    document.title = "Subscribe!";

    return (
        <div className="bg-linear-to-r from-[#7cbaf7] to-[#97c5f9] z-0 relative flex-1 w-full h-full flex justify-center items-center min-h-screen flex-col text-dark-text gap-4 px-4 py-8">
            <img
                src={imgBack}
                className="absolute left-0 w-full bottom-0 -z-1"
            />
            <div
                className="absolute left-0 top-0 w-full h-full z-0 bg-[url('/src/png/noize.png')] opacity-45"
            />
            <img
                src={imgLogoLiquid}
                className="w-50 z-1"
            />
            <div className="w-[60%] max-md:w-full flex flex-col gap-4">
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="relative flex flex-col gap-4 px-4 py-2 rounded-2xl z-0 overflow-hidden border border-dark-bg shadow-[0_5px_10px_rgba(0,0,0,.5)] text-xl"
                    >
                        <p className="text-2xl text-center uppercase text-shadow-md font-bold"><span className="text-primary">Subscribe to</span> <span className="text-dark-outline">news</span></p>
                        <div
                            className="absolute top-0 left-0 w-full h-full -z-1 bg-dark-bg/50 backdrop-blur-sm"
                        />
                        {!isOk ? (
                            <>
                                <input
                                    type="text"
                                    placeholder="Your name..."
                                    disabled={isLoading}
                                    {...methods.register("username")}
                                    className="px-4 py-2 outline-none backdrop-blur-sm rounded-2xl shadow-[inset_2px_2px_2px_rgba(0,0,0,.25),2px_2px_2px_rgba(255,255,255,.25)]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email..."
                                    disabled={isLoading}
                                    {...methods.register("email")}
                                    className="px-4 py-2 outline-none backdrop-blur-sm rounded-2xl shadow-[inset_2px_2px_2px_rgba(0,0,0,.25),2px_2px_2px_rgba(255,255,255,.25)]"
                                />
                                <div className="flex w-full gap-4 justify-end items-center">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-dark-primary/50 transition-all text-dark-text backdrop-blur-sm w-fit px-4 py-2 rounded-2xl shadow-[2px_2px_2px_rgba(0,0,0,.25),inset_2px_2px_2px_rgba(255,255,255,.25)] hover:shadow-[2px_2px_4px_rgba(0,0,0,.25),inset_2px_2px_4px_rgba(255,255,255,.25)] active:shadow-[inset_2px_2px_1px_rgba(0,0,0,.25),2px_2px_1px_rgba(255,255,255,.25)] cursor-pointer font-normal"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <p className="text-center text-[12pt] font-light">if you want unsubscribe send email with subject "unsubscribe" to <Link to="mailto:support@wmgcat.net">support@wmgcat.net</Link></p>
                            </>
                        ) : (
                            <p className="text-center">Thanks for subscribe!</p>
                        )}
                        
                    </form>
                    <NavLink to="/">
                        <button
                            type="button"
                            className="bg-dark-bg/50 transition-all text-xl text-dark-text backdrop-blur-sm w-full px-4 py-2 rounded-2xl shadow-[2px_2px_2px_rgba(0,0,0,.25),inset_2px_2px_2px_rgba(255,255,255,.25)] hover:shadow-[2px_2px_4px_rgba(0,0,0,.25),inset_2px_2px_4px_rgba(255,255,255,.25)] active:shadow-[inset_2px_2px_1px_rgba(0,0,0,.25),2px_2px_1px_rgba(255,255,255,.25)] cursor-pointer font-normal"
                        >
                            Back to website
                        </button>
                    </NavLink>
                </FormProvider>
                
            </div>
        </div>
    );
}