import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                name,
                email,
                subject,
                message,
            };

            // Use emailjs to email contact form data
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY,
            );

            // Display success alert
            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            // Display error alert
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form fields after submission
            reset();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8">
            <div className="ContactForm p-8">
                <h2 className='text-3xl font-semibold mb-6 text-center'>Contact Me</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <div className="w-full text-center">
                            <div className="contactForm">
                                <form
                                    id="contact-form"
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate
                                    className="space-y-6"
                                >
                                    {/* Row 1 of form */}
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <input
                                                type="text"
                                                name="name"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Please enter your name",
                                                    },
                                                    maxLength: {
                                                        value: 30,
                                                        message: "Please use 30 characters or less",
                                                    },
                                                })}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Name"
                                            />
                                            {errors.name && (
                                                <span className="text-red-600 text-sm">
                                                    {errors.name.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email", {
                                                    required: true,
                                                    pattern:
                                                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                })}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Email address"
                                            />
                                            {errors.email && (
                                                <span className="text-red-600 text-sm">
                                                    Please enter a valid email address
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 2 of form */}
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            {...register("subject", {
                                                required: {
                                                    value: true,
                                                    message: "Please enter a subject",
                                                },
                                                maxLength: {
                                                    value: 75,
                                                    message: "Subject cannot exceed 75 characters",
                                                },
                                            })}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Subject"
                                        />
                                        {errors.subject && (
                                            <span className="text-red-600 text-sm">
                                                {errors.subject.message}
                                            </span>
                                        )}
                                    </div>

                                    {/* Row 3 of form */}
                                    <div className="mb-6">
                                        <textarea
                                            rows={3}
                                            name="message"
                                            {...register("message", {
                                                required: true,
                                            })}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Message"
                                        ></textarea>
                                        {errors.message && (
                                            <span className="text-red-600 text-sm">
                                                Please enter a message
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                                        disabled={disabled}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {alertInfo.display && (
                    <div
                        className={`mt-5 p-4 rounded-md ${alertInfo.type === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            } flex justify-between items-center`}
                        role="alert"
                    >
                        <span>{alertInfo.message}</span>
                        <button
                            type="button"
                            className="ml-4 text-xl font-semibold leading-none focus:outline-none"
                            onClick={() =>
                                setAlertInfo({ display: false, message: "", type: "" })
                            }
                        >
                            &times;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;


