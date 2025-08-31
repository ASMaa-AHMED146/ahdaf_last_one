import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../validtions/callingSchema';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Sendmessage() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    const message = `
      ${t('sendmessage.messageHeader')}:
      ${t('sendmessage.nameLabel')}: ${data.name}
      ${t('sendmessage.emailLabel')}: ${data.email}
      ${t('sendmessage.messageLabel')}: ${data.message}
    `;
    const phoneNumber = '201098757146'; // WhatsApp number with country code
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form after submission
    setTimeout(() => {
      reset();
      window.location.reload();
    }, 2000);
  };

  return (
    <form
      className="px-8 lg:py-2"
      onSubmit={handleSubmit(submitForm)}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="text-center text-lg font-semibold mb-4">
        {t('sendmessage.formTitle')}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {t('sendmessage.nameLabel')}
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="mt-1.5 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-orange-500"
        />
        {errors.name?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        )}
      </div>
      <div className="my-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('sendmessage.emailLabel')}
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          className="mt-1.5 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-orange-500"
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">
          {t('sendmessage.messageLabel')}
        </label>
        <textarea
          {...register('message')}
          id="textarea"
          cols={20}
          rows={5}
          className="mt-1.5 w-full rounded-md border border-gray-300 p-2 resize-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        {errors.message?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        {t('sendmessage.submitButton')}
      </button>
    </form>
  );
}