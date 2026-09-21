import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const { name, email, subject, message } = formState;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: 'success',
        text: "Message sent successfully! I'll get back to you soon."
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Form Submit Error:', error);
      setStatus({
        type: 'error',
        text: 'Something went wrong. Please try again or contact me directly.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          badge="CONTACT"
          title="Let's Connect"
          subtitle="Interested in discussing Java Full Stack Developer opportunities or reviewing my projects? Reach out!"
          icon={Mail}
        />

        <div className="contact-grid">
          <div className="contact-info-list">
            <Card>
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--spacing-lg)' }}>
                Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {personalDetails.location && (
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Location</p>
                      <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personalDetails.location}
                      </p>
                    </div>
                  </div>
                )}

                {personalDetails.email && (
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Email</p>
                      <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                        <a href={`mailto:${personalDetails.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {personalDetails.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {personalDetails.phone && (
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Phone</p>
                      <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personalDetails.phone}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
                <Button href={personalDetails.github} variant="secondary" size="sm" icon={GithubIcon} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </Button>
                <Button href={personalDetails.linkedin} variant="secondary" size="sm" icon={LinkedinIcon} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </Button>
              </div>
            </Card>
          </div>

          <Card>
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--spacing-lg)' }}>
              Send a Message
            </h3>

            {status && (
              <div
                style={{
                  marginBottom: 'var(--spacing-lg)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: status.type === 'success' ? 'var(--accent-emerald-glow)' : 'rgba(239, 68, 68, 0.15)',
                  border: status.type === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                  color: status.type === 'success' ? 'var(--accent-emerald)' : '#f87171'
                }}
              >
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{status.text}</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Recruiter / Manager Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="recruiter@company.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Opportunity for Java Developer role"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Details about job opening or inquiry..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <Button type="submit" variant="primary" icon={Send} size="lg" disabled={isSending}>
                {isSending ? 'Sending...' : 'Submit Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
