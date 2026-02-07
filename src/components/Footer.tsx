import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-gradient mb-4">AIGNITE</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The flagship technical fest of the Department of Computer Science, St Berchmans College.
              Where innovation meets technology, and ideas transform into reality.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/docs_sb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a>
              </li>
              <li>
                <a href="#exhibition" className="text-muted-foreground hover:text-primary transition-colors">Exhibition</a>
              </li>
              <li>
                <a href="#sponsors" className="text-muted-foreground hover:text-primary transition-colors">Benefactors</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>aignitefest@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>8891155291 - Afnan MPF</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>St. Berchmans College (SB College),<br />Changanassery, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} AIGNITE. Department of Computer Science, St Berchmans College. All rights reserved.</p>
          <p>
            Made with <span className="text-primary">♥</span> by the AIGNITE Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
