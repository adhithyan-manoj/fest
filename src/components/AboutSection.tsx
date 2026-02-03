import { Cpu, Lightbulb, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Technology",
    description: "Cutting-edge tech challenges and workshops",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Platform for groundbreaking ideas",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with tech enthusiasts",
  },
  {
    icon: Trophy,
    title: "Competition",
    description: "Compete for exciting prizes",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">AIGNITE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
            <div className="text-center mb-6">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                <span className="text-gradient">AIGNITE</span>
              </h3>
              <p className="text-lg italic text-muted-foreground">
                (Ignite Ideas, Innovations and Intelligence through AI)
              </p>
            </div>

            <div className="text-left space-y-4">
              <p>
                In pursuance of Government of India's vision of <span className="text-foreground font-semibold">Atmanirbhar Bharat</span> and <span className="text-foreground font-semibold">Viksit Bharat</span> and in the context of <span className="text-foreground font-semibold">India AI Summit 2026</span>, the Department of Computer Science, St Berchmans College, Changanassery is organizing <span className="text-foreground font-semibold">AIGNITE</span>, <span className="text-foreground font-semibold">AI focused Intercollegiate Competitions</span>:
              </p>

              <div className="pl-6 space-y-2">
                <p className="text-foreground font-semibold">• Project Presentation/Startup Idea</p>
                <p className="text-foreground font-semibold">• Website Design and Ideathon</p>
              </div>

              <p className="text-center font-medium text-foreground mt-4">
                on 6 February 2026
              </p>

              <p className="text-center italic mt-6">
                Kindly support this academic event.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <p className="text-foreground font-semibold mb-3">The initiative is organized under the leadership of:</p>
              <div className="space-y-2 text-base">
                <p><span className="text-primary font-semibold">Academic Coordinator:</span> Dr. Smitha Krishnan</p>
                <p><span className="text-primary font-semibold">Co-Coordinators:</span> Ms. Smitha Joseph, Ms. Blessy Paul</p>
                <p><span className="text-primary font-semibold">Student Coordinators:</span> Afnan Muhammed, Adhithyan Manoj, Athul Krishnan, Blessy T Willson</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)] transition-shadow duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
