// import React, { useState, useEffect, useRef } from 'react';

// export default function FeedbackCounter() {
//   return (
//     <div className='bg-gradient-to-r from-[#1A7474]  to-[#F36C35] p-4 md:justify-between text-white flex flex-wrap gap-[20px] items-center'>
//       <Feed icon="😊" number={200} text="عميل راضي" />
//       <Feed icon="⏳" number={7} text="سنوات من الخبرة" />
//       <Feed icon="📦" number={100} text="عدد المشاريع المنجزة" />
//       <Feed icon="🧹" number={10} text="فريق عمل محترف" />
//     </div>
//   );
// }

// function Feed({ icon, number, text }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           // Optionally, unobserve after first intersection to prevent repeated triggers
//           // observer.unobserve(ref.current);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the component is visible
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     const end = number;
//     if (start === end) return;

//     const duration = 10500; // Animation duration in milliseconds (faster: 1 second)
//     const increment = end / (duration / 16); // Increment per frame (assuming 60fps)
//     let current = start;

//     const animate = () => {
//       current += increment;
//       if (current >= end) {
//         setCount(end);
//         return;
//       }
//       setCount(Math.ceil(current));
//       requestAnimationFrame(animate);
//     };

//     const timer = setTimeout(() => {
//       requestAnimationFrame(animate);
//     }, 100); // Slight delay to ensure component is mounted

//     return () => clearTimeout(timer);
//   }, [isVisible, number]);

//   return (
//     <div
//       ref={ref}
//       className='px-[50px] m-auto flex items-center gap-[20px] md:max-w-[45%] lg:w-[350px] justify-center'
//     >
//       <div className='text-[30px] md:text-[25px]'>{icon}</div>
//       <div className='md:w-[500px]'>
//         <p className='font-bold text-[25px] md:text-[22px] pr-[20px]'>{count} +</p>
//         <p className='text-[20px] w-full'>{text}</p>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FeedbackCounter() {
  const { t } = useTranslation();

  return (
    <div className='bg-gradient-to-r from-[#1A7474] to-[#F36C35] p-4 md:justify-between text-white flex flex-wrap gap-[20px] items-center'>
      <Feed icon="😊" number={200} text={t('feedbackCounter.satisfiedClients')} />
      <Feed icon="⏳" number={7} text={t('feedbackCounter.yearsExperience')} />
      <Feed icon="📦" number={100} text={t('feedbackCounter.completedProjects')} />
      <Feed icon="🧹" number={10} text={t('feedbackCounter.professionalTeam')} />
    </div>
  );
}

function Feed({ icon, number, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isArabic } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally, unobserve after first intersection to prevent repeated triggers
          // observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    if (start === end) return;

    const duration = 10500; // Animation duration in milliseconds (faster: 1 second)
    const increment = end / (duration / 16); // Increment per frame (assuming 60fps)
    let current = start;

    const animate = () => {
      current += increment;
      if (current >= end) {
        setCount(end);
        return;
      }
      setCount(Math.ceil(current));
      requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100); // Slight delay to ensure component is mounted

    return () => clearTimeout(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      className={`px-[50px] m-auto flex items-center gap-[20px] md:max-w-[45%] lg:w-[350px] justify-center ${isArabic ? 'flex-row' : 'flex-row'}`}
    >
      <div className='text-[30px] md:text-[25px]'>{icon}</div>
      <div className='md:w-[500px]'>
        <p className={`font-bold text-[25px] md:text-[22px] ${isArabic ? 'pr-[20px] text-right' : 'pl-[20px] text-left'}`}>
          {count} +
        </p>
        <p className={`text-[20px] w-full ${isArabic ? 'text-right' : 'text-left'}`}>
          {text}
        </p>
      </div>
    </div>
  );
}