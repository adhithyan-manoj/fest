const sponsors = [
  {
    name: "Etomosphere",
    logo: "/sponsor-etomosphere.png",
    alt: "Etomosphere - Digital Solutions Partner"
  },
  {
    name: "Edimannickal Gold & Diamonds",
    logo: "/sponsor-edimannickal.png",
    alt: "Edimannickal Gold & Diamonds - Jewelry Partner"
  },
  {
    name: "Kanjirappally Kappi",
    logo: "/sponsor-kappi.png",
    alt: "Kanjirappally Kappi - Local Coffee Partner"
  },
  {
    name: "Sky Line Computers",
    logo: "/sponsor-skyline.png",
    alt: "Sky Line Computers - The Digital Mart"
  }
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Support
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Benefactors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our benefactors who make AIGNITE possible
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center justify-center h-32">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
