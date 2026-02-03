import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Banknote, Trophy } from "lucide-react";
import sprintAiImage from "@/assets/event-sprint-ai.jpg";
import webXcelerateImage from "@/assets/event-webxcelerate.jpg";
import pitchMindAiImage from "@/assets/event-pitch-mind-ai.jpg";
import EventDetailsDialog, { EventDetails } from "./EventDetailsDialog";

const events: EventDetails[] = [
  {
    image: sprintAiImage,
    title: "Sprint AI",
    category: "AI-Powered Ideathon",
    description: "An AI-powered ideathon by the Dept. of Computer Science, St. Berchmans College. Teams tackle niche problems, present innovative solutions, and optionally build an MVP prototype. This is your chance to showcase your problem-solving skills and creativity using AI technologies.",
    prize: "₹10,000",
    date: "6 February 2026",
    time: "9:00 AM - 5:00 PM",
    teamSize: "1-4 Members",
    venue: "Computer Science Lab",
    highlights: [
      "AI-powered problem solving",
      "MVP prototype development",
      "Expert mentorship available",
      "Networking opportunities",
      "Certificates for all participants",
      "Cash prizes for winners"
    ],
    rules: [
      "Preliminary Filter (MCQ Round): Conducted if >10 teams register. 20-min Technical MCQ (Prompt Engineering, AI Ethics, Logic). Top 10 proceed.",
      "Main Event - 90-Minute Design Sprint: Countdown begins on Theme Reveal. Teams identify specific problem within theme.",
      "Niche Locking: First-Come, First-Served basis. No two teams can work on the same niche.",
      "Creation Task: Use AI tools (ChatGPT, Gemini, etc.) to produce Solution Blueprint (Presentation) and optional Miniature Version (Demo).",
      "Pitching Round: 10 mins per team (7 min pitch + 3 min Q&A).",
      "Evaluation Focus: Innovation, Technical feasibility, Impact & ethics.",
      "Core solution must be AI-powered. At least one part must be implemented or demonstrated.",
      "All solutions must be ethical and socially beneficial."
    ],
    registrationLink: "https://forms.gle/E2eEoXzu9jxpcbT39",
    fee: "₹400",
    coordinators: {
      teachers: ["Ms. Divya S", "Ms. Greeshma Muraly", "Ms. Bobby Joseph"],
      students: ["John Joji (+91 70751 87123)", "Melvin Thomas"]
    }
  },
  {
    image: webXcelerateImage,
    title: "WebXcelerate AI",
    category: "AI-Based Web Designing Competition",
    description: "A team-based AI web designing competition. Showcase your frontend design skills power-packed with AI tools. Create stunning, responsive web interfaces and present your concepts to the judges.",
    prize: "₹10,000",
    date: "6 February 2026",
    time: "10:00 AM - 4:00 PM",
    teamSize: "2-4 Members",
    venue: "Computer Science Lab",
    highlights: [
      "Team-based competition",
      "AI-assisted design",
      "Real-time challenges",
      "Presentation round",
      "Certificates for all participants",
      "Cash prizes for winners"
    ],
    rules: [
      "Team-based event: 2 to 4 members per team.",
      "All participants must actively take part in designing and presentation.",
      "Allowed tools: Figma, Antigravity / Lovable, ChatGPT, Gemini, and other AI-supported tools.",
      "A common topic will be provided at the start. Teams must design within the time limit.",
      "Earliest completion gets priority.",
      "Teams must present their website: Concept, Design approach, Tools used.",
      "Judges may ask questions during presentation; all members should respond confidently."
    ],
    registrationLink: "https://forms.gle/TspZSzLhNbSRRxhe9",
    fee: "₹400",
    coordinators: {
      teachers: ["Ms. Dhanya C. Nair (+91 82812 71755)", "Ms. Jasmin Sebastine", "Ms. Rini Elizabeth"],
      students: ["Aromal Sreekumar (+91 7012011756)", "Athul Krishnan", "Adithyan Manoj"]
    }
  },
  {
    image: pitchMindAiImage,
    title: "Pitch Mind AI",
    category: "Project Idea Presentation Event",
    description: "Pitch Mind AI is an offline project idea presentation event conducted by the Department of Computer Science, St. Berchmans College, Changanassery. The event aims to identify and encourage students with innovative software project or startup ideas, with a preference for AI-powered solutions (mandatory). All proposed solutions must be ethical, responsible, and socially beneficial.",
    prize: "₹10,000",
    date: "6 February 2026",
    time: "10:00 AM - 4:00 PM",
    teamSize: "1-4 Members",
    venue: "St. Berchmans College",
    highlights: [
      "Offline project idea presentation",
      "AI-powered solutions (mandatory)",
      "Ethical and responsible innovation",
      "Participation certificate for all",
      "Cash prize for winners"
    ],
    rules: [
      "Participants may register individually or as a team (maximum 4 members per team).",
      "Submitted projects will be evaluated through presentations at the college.",
      "If the number of registered participants or teams exceeds 10, an online preliminary elimination round will be conducted before the offline evaluation.",
      "All participants will receive a participation certificate.",
      "The most promising and impactful project will be recognized with a cash prize."
    ],
    registrationLink: "https://forms.gle/fHmjQkizPfAjsw8h7",
    fee: "₹400",
    coordinators: {
      teachers: ["Mr. Prasobh John", "Mr. Albin Andrews", "Ms. Reenu Paul"],
      students: ["Tom Alex", "Neha Sam (+91 6282 108 574)"]
    }
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEventClick = (event: EventDetails) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participate in exciting events designed to challenge your skills and expand your horizons
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Event Cards - Image Based */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              onClick={() => handleEventClick(event)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Event Poster Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Click Indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-xs font-medium">Click for details</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Prize Badge */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-primary font-display font-bold text-xs md:text-sm">Prize: {event.prize}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/50 shadow-[0_0_20px_rgba(234,179,8,0.3)] animate-pulse-slow">
                      <Banknote className="w-4 h-4 text-secondary" />
                      <span className="text-secondary font-display font-bold text-sm md:text-base">Entry Fee: {event.fee}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-sm text-muted-foreground mb-2">{event.date}</div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>

                  {/* Category */}
                  <p className="text-primary font-medium mb-4">{event.category}</p>

                  {/* View Details Button */}
                  <Button
                    variant="neon"
                    className="w-full group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                  >
                    View Details & Register
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Events Coming Soon */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground"></p>
        </div>
      </div>

      {/* Event Details Dialog */}
      <EventDetailsDialog
        event={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default EventsSection;
