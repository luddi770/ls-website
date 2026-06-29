import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

import myData from '../data/myData.json'

const Contact = () => {
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


    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    
    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message,
            };
            
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY,
            );

            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            reset();
        }
    };

    const { t, i18n } = useTranslation();

   return (
  <main className="flex-grow">    
    <section className="relative pt-xxl pb-xl px-lg">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col gap-md">
          <span className="font-label-mono text-primary-fixed uppercase tracking-widest">
            {t("contact-header")}
          </span>
          <h1 className="font-display-lg text-5xl md:text-7xl">
            {t("contact-cta-header")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-text-max">
            {t("contact-cta-description")}
          </p>
        </div>
      </div>
    </section>

    <section className="px-lg pb-xxl">
      <div className="max-w-container-max mx-auto">
        <div className="contact-grid">
         
          <div className="glass-panel p-lg rounded-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-lg"
            >
             
              <div className="grid md:grid-cols-2 gap-lg">
                <div>
                  <label className="font-label-mono text-label-mono text-on-surface-variant">
                    {t("contact-form-name")}
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: { value: true, message: t("contact-error-name") },
                      maxLength: { value: 30, message: t("contact-error-name-length") },
                    })}
                    placeholder={t("contact-form-name-example")}
                    className="input-glow w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-md outline-none text-on-surface placeholder:text-on-surface-variant/30 font-body-md transition-all duration-300"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm mt-xs block">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="font-label-mono text-label-mono text-on-surface-variant">
                    {t("contact-form-email")}
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    placeholder={t("contact-form-email-example")}
                    className="input-glow w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-md outline-none text-on-surface placeholder:text-on-surface-variant/30 font-body-md transition-all duration-300"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm mt-xs block">{t("contact-error-email")}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="font-label-mono text-label-mono text-on-surface-variant">
                  {t("contact-form-subject")}
                </label>
                <input
                  type="text"
                  {...register("subject", {
                    required: { value: true, message: t("contact-error-subject") },
                    maxLength: { value: 75, message: t("contact-error-subject-length") },
                  })}
                  placeholder={t("contact-form-subject-example")}
                  className="input-glow w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-md outline-none text-on-surface placeholder:text-on-surface-variant/30 font-body-md transition-all duration-300"
                />
                {errors.subject && (
                  <span className="text-red-400 text-sm mt-xs block">{errors.subject.message}</span>
                )}
              </div>

              <div>
                <label className="font-label-mono text-label-mono text-on-surface-variant">
                  {t("contact-form-message")}
                </label>
                <textarea
                  rows={6}
                  {...register("message", { required: true })}
                  placeholder={t("contact-form-message-example")}
                  className="input-glow w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-md outline-none text-on-surface placeholder:text-on-surface-variant/30 font-body-md transition-all duration-300"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-xs block">{t("contact-error-message")}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={disabled}
                className="bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim px-xl py-md rounded-lg font-medium transition disabled:opacity-50"
              >
                {t("contact-form-submit-btn")}
              </button>
            </form>
          </div>

   
          <div className="space-y-6">
            <div className="backdrop-blur-xl glass-panel border border-white/10 rounded-3xl p-lg">
              <h3 className="font-headline-sm text-headline-sm mb-lg">
                {t("contact-details-title")}
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="font-label-mono text-label-mono text-on-surface-variant">Email</p>
                  
                  <a className="text-body-md text-on-surface hover:text-primary-fixed transition-colors"
                    href={`mailto:${myData.email}`}
                  >
                    {myData.email}
                  </a>
                </div>

                <div>
                  <p className="font-label-mono text-label-mono text-on-surface-variant"> {t("contact-details-location-header")}</p>
                  <p className="font-body-md text-on-surface">
                    {t("contact-details-location")}
                  </p>
                </div>

                <div className="relative h-64 w-full rounded-xl overflow-hidden border border-outline-variant/30">
                  <iframe
                    src={ myData['map-link']}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center p-md border-t border-outline-variant/10">
                
                <a className="text-on-surface-variant hover:text-primary-fixed transition-all duration-300 hover:-translate-y-1"
                  href={myData.github}
                >
                  <span className="font-label-mono text-label-mono">GitHub</span>
                </a>
                
                <a className="text-on-surface-variant hover:text-primary-fixed transition-all duration-300 hover:-translate-y-1"
                  href={myData.linkedin}
                >
                  <span className="font-label-mono text-label-mono">LinkedIn</span>
                </a>
              </div>
            </div>

            {alertInfo.display && (
              <div
                className={`rounded-2xl p-md border ${
                  alertInfo.type === "success"
                    ? "bg-green-500/10 border-green-500/30 text-green-300"
                    : "bg-red-500/10 border-red-500/30 text-red-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{alertInfo.message}</span>
                  <button
                    onClick={() => setAlertInfo({ display: false, message: "", type: "" })}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  </main>
);
};

export default Contact;


