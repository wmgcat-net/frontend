import { useForm, FormProvider } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import imgLogoLiquid from "@/png/logo_liquid.png";
import { useState } from "react";
import { postSubscribe } from "@/api/subscribe";
import { Button, Container } from "@/components";
import { BiChevronsLeft } from "react-icons/bi";

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
        <div className="bg-bg z-0 dark:bg-dark-bg w-full flex justify-center min-h-screen text-text dark:text-dark-text flex-1 h-full items-center flex-col gap-4 px-4 py-8">
            <div
                className="fixed left-0 top-0 w-full h-full z-0 bg-[url('/src/png/noize.png')] opacity-45"
            />
            <img
                src={imgLogoLiquid}
                className="w-50 z-1"
            />
            <div className="w-[60%] max-md:w-full flex flex-col gap-4">
                <FormProvider {...methods}>
                    <Container>
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="relative flex flex-col gap-4 px-4 py-2 rounded-2xl z-0 overflow-hidden text-xl"
                        >
                            <p className="text-2xl text-center uppercase text-shadow-md font-bold"><span className="text-primary">Subscribe to</span> <span className="text-dark-outline">news</span></p>
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
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={isLoading}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                    <p className="text-center text-[12pt] font-light">if you want unsubscribe send email with subject "unsubscribe" to <NavLink to="mailto:support@wmgcat.net">support@wmgcat.net</NavLink></p>
                                </>
                            ) : (
                                <p className="text-center">Thanks for subscribe!</p>
                            )}
                            
                        </form>
                    </Container>
                    <NavLink to="/">
                        <Button
                            type="button"
                            variant="second"
                        >
                            <BiChevronsLeft />
                            Back to website
                        </Button>
                    </NavLink>
                </FormProvider>
                
            </div>
        </div>
    );
}