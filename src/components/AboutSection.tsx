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
                on 19 February 2026
              </p>


            </div>

            <div className="mt-12 p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Organising <span className="text-gradient">Committee</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-base">
                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Principal</p>
                    <p className="text-foreground font-medium">Rev. Prof. Dr. Teddy Kanjooparampil</p>
                  </div>

                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Vice Principals</p>
                    <div className="text-foreground font-medium space-y-1">
                      <p>Prof. Dr. Siby Joseph K</p>
                      <p>Rev. Fr. Jose Mullakkari</p>
                      <p>Dr. Jomon K. V</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Bursar</p>
                    <p className="text-foreground font-medium">Rev. Fr. James Kalayamkandam</p>
                  </div>

                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">HOD</p>
                    <p className="text-foreground font-medium">Dr. Antony Mathews</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Faculty Coordinator</p>
                    <p className="text-foreground font-medium">Dr. Smitha Krishnan</p>
                  </div>

                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Co-Coordinators</p>
                    <div className="text-foreground font-medium space-y-1">
                      <p>Ms. Reenu Paul</p>
                      <p>Ms. Smitha Joseph</p>
                      <p>Ms. Blessy Paul</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Student Coordinators</p>
                    <div className="text-foreground font-medium space-y-1">
                      <p>Adhithyan Manoj</p>
                      <p>Athul Krishnan</p>

                      <p>Blessy T. Willson</p>
                    </div>
                  </div>
                </div>
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
