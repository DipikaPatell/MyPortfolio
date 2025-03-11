import { motion } from 'framer-motion';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, Globe, CheckCircle } from 'lucide-react';

// Define proper types for the form status
interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  error: boolean;
  errorMessage?: string; // Added as optional property
}

// Define type for form data
interface FormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    error: false
  });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  
  const [visitorCount, setVisitorCount] = useState<string | number>('Loading...');

  // Fetch visitor count on component mount
  useEffect(() => {
    // This is a placeholder. You would replace this with your actual visitor counter API
    const fetchVisitorCount = async () => {
      try {
        // Replace with your actual API call to get the visitor count
        // const response = await fetch('your-visitor-api-endpoint');
        // const data = await response.json();
        // setVisitorCount(data.count);

        // For demonstration, we'll just set a random count
        setVisitorCount(Math.floor(1000 + Math.random() * 9000));
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setVisitorCount('Error loading');
      }
    };

    fetchVisitorCount();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });

    try {
      // Replace 'your-actual-formspree-id' with your real Formspree ID
      const response = await fetch('https://formspree.io/f/mrbpzwze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          ...formData,
          _replyto: formData.email,
          _subject: `Contact form submission from ${formData.name}`
        })
      });
      
      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, error: false });
        setFormData({ name: '', email: '', website: '', message: '' });
      } else {
        const responseData = await response.json();
        console.error('Form submission error:', responseData);
        setFormStatus({ 
          submitted: false, 
          submitting: false, 
          error: true, 
          errorMessage: responseData.error || 'There was an error sending your message.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ 
        submitted: false, 
        submitting: false, 
        error: true,
        errorMessage: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-xl text-indigo-400 mb-2">Get in touch</h4>
          <h1 className="text-4xl font-bold text-white">Contact</h1>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            {formStatus.submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for contacting me. I'll get back to you soon.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
                  className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    What's your good name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white p-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white p-2"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300">
                    What's your web address?
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white p-2"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white p-2"
                  ></textarea>
                </div>
                {formStatus.error && (
                  <div className="text-red-500 text-sm">
                    {formStatus.errorMessage || 'There was an error sending your message. Please try again.'}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-800 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-400" />
                <a href="mailto:contactportme@gmail.com" className="text-white hover:text-indigo-400">
                  contactportme@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-400" />
                <a href="tel:+917415937635" className="text-white hover:text-indigo-400">
                  +91 7415937635
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <span className="text-white">Available for remote work worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">
            <span className="font-mono">&lt;/&gt;</span> with ❤️ by Dipika Patel😎
          </p>
          <div className="text-gray-400">
            No. of Visitors: <span id="visitor-count">{visitorCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};