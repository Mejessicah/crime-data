import { useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your crime analysis capabilities? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">contact@crime.si</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400">Available 24/7 for urgent inquiries</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;