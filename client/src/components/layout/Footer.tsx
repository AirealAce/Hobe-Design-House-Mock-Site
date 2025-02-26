import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-background border-t py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-muted-foreground text-sm">
              Hobe Design House creates elegant, functional products for modern professionals.
              Our commitment to quality and innovation drives everything we do.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-primary">Shipping Information</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center md:text-right">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hobe Design House. All rights reserved.
            </p>
            <img src="/logo.svg" alt="Hobe Design" className="h-8 mt-4 md:mt-0" />
          </div>
        </div>
      </div>
    </footer>
  );
}
