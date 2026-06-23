import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const API_URL = import.meta?.env?.PUBLIC_API_URL || 'http://localhost:3001';

function Contact() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValid = name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim().length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.errors?.[0] || 'Unknown error');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact" title={t.contact.title}>
      <motion.div
        ref={ref}
        className="contact__container bd-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.form
          className="contact__form"
          variants={fadeInUp}
          onSubmit={handleSubmit}
        >
          <motion.input
            type="text"
            placeholder={t.contact.namePlaceholder}
            className="contact__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
            disabled={status === 'sending'}
          />
          <motion.input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            className="contact__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
            disabled={status === 'sending'}
          />
          <motion.textarea
            cols={0}
            rows={10}
            placeholder={t.contact.messagePlaceholder}
            className="contact__input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
            disabled={status === 'sending'}
          />

          <motion.button
            type="submit"
            className={`contact__button button ${status === 'sending' ? 'contact__button--sending' : ''}`}
            whileHover={status !== 'sending' ? { scale: 1.03, boxShadow: '0 10px 40px rgba(13, 148, 136, 0.3)' } : {}}
            whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
            disabled={!isValid || status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="contact__spinner" />
                {t.contact.sending}
              </>
            ) : (
              <>
                <Icon icon="material-symbols:send-rounded" width="18" height="18" />
                {t.contact.send}
              </>
            )}
          </motion.button>

          {/* Feedback messages */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                className="contact__feedback contact__feedback--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Icon icon="material-symbols:check-circle" width="20" height="20" />
                {t.contact.success}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                className="contact__feedback contact__feedback--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Icon icon="material-symbols:error" width="20" height="20" />
                {t.contact.error}
                {errorMsg && <span className="contact__error-detail">({errorMsg})</span>}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
}

export default Contact;
