import React, { useState, type ChangeEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    description: string;
    taxYear: string;
    consent: boolean;
    files: File[];
}

const ContactPage: React.FC = () => {
    const siteKey = import.meta.env.VITE_SITEKEY;
    const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
    const onHCaptchaChange = (token: string) => {
        setHcaptchaToken(token);
    };

    const formatPhoneNumber = (value: string): string => {
        // Remove all non-digit characters
        const cleanedValue = value.replace(/\D/g, '');
        const length = cleanedValue.length;

        if (length === 0) {
            return '';
        } else if (length < 4) {
            return `(${cleanedValue}`;
        } else if (length < 7) {
            return `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3)}`;
        } else {
            return `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3, 6)}-${cleanedValue.slice(6, 10)}`;
        }
    };

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
        taxYear: "",
        consent: false,
        files: [],
    });

    const [selctedFiles, setSelectedFiles] = useState<File[]> ([]);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];

        if (files.length > 0) {
            setSelectedFiles(files);
            setFormData((prevData) => ({
                ...prevData,
                files,
            }));
            console.log(`${files.length} files selected.`);
        } else {
            setSelectedFiles([]);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:
                name === "phone" ? formatPhoneNumber(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!hcaptchaToken) {
            Swal.fire({
                icon: 'error',
                title: "Submission Failed",
                text: 'Please complete the hCaptcha verification to submit the form.',
            });
            return;
        }

        const formKey = import.meta.env.VITE_KEY as string;

        const data = new FormData();
        data.append("access_key", formKey);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("service", formData.service);
        data.append("description", formData.description);
        data.append("taxYear", formData.taxYear);
        data.append("consent", String(formData.consent));
        data.append("h-captcha-response", hcaptchaToken);
        selctedFiles.forEach((file) => {
            data.append(`files[]`, file);
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });
            
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: "Form Submitted",
                    text: 'Thank you for contacting us! We will get back to you shortly.',
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    description: "",
                    taxYear: "",
                    consent: false,
                    files: [],
                });
                setSelectedFiles([]);
                setHcaptchaToken(null);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Submission Failed",
                    text: 'There was an issue submitting the form. Please try again later.',
                });
            }
        }catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                icon: 'error',
                title: "Submission Failed",
                text: 'There was an error submitting the form. Please try again later.',
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col lg:flex-row m-20">
                <div className="lg:w-5/12 bg-linear-to-b from-lime-500 via-lime-600 to-lime-950 text-white p-10 md:p-14 relative overflow-hidden flex flex-col">
                    <h1 className="text-6xl font-bold text-center">We're Here to Help</h1>
                    <p className="text-lg font-semibold text-justify mt-15">At Community Tax & Management Services, you deserve quick, reliable support from a team that understands how stressful tax matters can feel. Our contact form makes it easy to reach out. Whether you need clarity on a notice you received, help preparing documents, or guidance on which service best fits your situation. Just share a few details about your concern, and we’ll make sure your message reaches the right specialist.</p>
                    <p className="text-lg font-semibold text-justify mt-15">If you’d like a quote, need assistance with filings, or want to upload documents for review, you can do so directly through the form. Every submission is handled with care and confidentiality, and our team will respond promptly with the information or next steps you need. We’re committed to making your experience simple, supportive, and stress-free from the very first message.</p>
                </div>
                <div className="lg:w-7/12 p-10 md:p-14 bg-white relative">
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="block">Name</label>
                            <input 
                                name="name" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                type="text" 
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block">Email</label>
                            <input 
                                name="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block">Phone</label>
                            <input 
                                name="phone" 
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(000)-000-0000"
                                type="tel" 
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none" 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="service" className="block">What do you need help with?</label>
                            <select
                                name="service"
                                id="service"
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Select a Service --</option>
                                <option value="Tax Preparation">Tax Preparation</option>
                                <option value="Tax Review & Amendments">Tax Review & Amendments</option>
                                <option value="Offer in Compromise">Offer in Compromise</option>
                                <option value="Installment Agreement Setup">Installment Agreement Setup</option>
                                <option value="Penalty & Interest Abatement">Penalty & Interest Abatement</option>
                                <option value="Federal & State Audit Support">Federal & State Audit Support</option>
                                <option value="Full Tax Management Services">Full Tax Management Services</option>
                                <option value="General Question">General Question</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block">Tell us more (questions / details):</label>
                            <textarea 
                                name="description" 
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none" 
                                rows={4}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="block">Upload Relevant Documents (If Necessary)</label>
                            <div className="relative h-48 rounded-lg border-dashed border-2 border-gray-400 bg-gray-50 flex justify-center items-center">
                                <div className="absolute">
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-15 fill-lime-900">
                                            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                                            
                                        </svg>
                                        <span className="block ">Click to Attach Files</span>
                                    </div>
                                </div>
                                <input 
                                    type="file"  
                                    multiple 
                                    className="h-full w-full opacity-0 hover:cursor-pointer" 
                                    name="files" 
                                    id="files"
                                    onChange={handleFileChange}
                                />
                                
                            </div>
                            <ul>
                                {selctedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <label htmlFor="taxYear" className="block">Tax Year(s) (if applicable)</label>
                            <input
                                name="taxYear" 
                                type="text" 
                                placeholder="e.g. 2022, 2023" 
                                className="w-full border-2 px-3 py-2 bg-gray-50 focus:bg-white rounded-md border-gray-400 focus:border-lime-500 outline-none" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <input 
                                name="consent" 
                                type="checkbox" 
                                onChange={handleChange}
                                required 
                            />
                            <span>I consent to upload documents and/or be contacted.</span>
                        </div>

                        <div data-captcha="true">
                            <HCaptcha
                                sitekey={siteKey}
                                onVerify={onHCaptchaChange}
                            />
                        </div>

                        <button type="submit" className="bg-lime-500 text-white px-4 py-2 rounded-full w-full font-semibold text-xl hover:bg-lime-950 hover:cursor-pointer">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default ContactPage;