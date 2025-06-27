
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPinIcon, PhoneIcon, InstagramIcon } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-forest-700 max-w-2xl mx-auto">
            Ready to plan your escape? We're here to help make your stay unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-forest-900">
                  <PhoneIcon className="h-6 w-6" />
                  <span>Direct Contact</span>
                </CardTitle>
                <CardDescription>
                  Get in touch with us directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-earth-100 p-2 rounded-lg">
                    <PhoneIcon className="h-5 w-5 text-earth-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Phone</p>
                    <a href="tel:+254723656445" className="text-forest-700 hover:text-forest-900">
                      0723656445
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <PhoneIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/254723656445" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <InstagramIcon className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Instagram</p>
                    <a 
                      href="https://instagram.com/earthship" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @earthship
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="text-forest-900">Quick Actions</CardTitle>
                <CardDescription>
                  Get started with these popular options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://wa.me/254723656445?text=Hi! I'm interested in booking a stay at EarthShip Log Cabin House. Can you help me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-earth w-full flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>WhatsApp Booking Inquiry</span>
                </a>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector('#booking');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Check Availability Online
                </Button>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-forest-900">
                  <MapPinIcon className="h-6 w-6" />
                  <span>Our Location</span>
                </CardTitle>
                <CardDescription>
                  Nestled in nature's embrace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-forest-100 to-earth-100 p-6 rounded-lg">
                  <p className="text-forest-800 text-center font-medium">
                    🌲 Sustainable Wilderness Retreat 🌲
                  </p>
                  <p className="text-forest-600 text-center text-sm mt-2">
                    Exact location provided upon booking confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-earth">
            <CardHeader>
              <CardTitle className="text-forest-900">Send us a Message</CardTitle>
              <CardDescription>
                Have questions? We'd love to hear from you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName" className="text-forest-900">Your Name *</Label>
                    <Input
                      id="contactName"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail" className="text-forest-900">Email Address *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactSubject" className="text-forest-900">Subject *</Label>
                  <Input
                    id="contactSubject"
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="mt-2"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <Label htmlFor="contactMessage" className="text-forest-900">Message *</Label>
                  <textarea
                    id="contactMessage"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="mt-2 w-full p-3 border border-earth-200 rounded-md resize-none"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" className="btn-earth w-full text-lg py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-earth rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h3>
            <p className="text-xl mb-6">
              Experience the perfect blend of comfort and nature at EarthShip Log Cabin House
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254723656445"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-forest-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Book via WhatsApp</span>
              </a>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-forest-900 transition-colors"
                onClick={() => {
                  const element = document.querySelector('#booking');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Book Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
