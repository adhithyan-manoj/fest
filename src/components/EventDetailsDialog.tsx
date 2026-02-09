import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, Users, Trophy, ExternalLink, CheckCircle2, Banknote } from "lucide-react";

export interface EventDetails {
  title: string;
  category: string;
  description: string;
  prize: string;
  date: string;
  image: string;
  time?: string;
  teamSize?: string;
  venue?: string;
  rules: string[];
  highlights: string[];
  registrationLink: string;
  fee?: string;
  coordinators?: {
    teachers?: string[];
    students?: string[];
  };
}

interface EventDetailsDialogProps {
  event: EventDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailsDialog = ({ event, isOpen, onClose }: EventDetailsDialogProps) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-full max-w-2xl max-h-[90vh] p-0 bg-card border-border overflow-hidden">
        {/* Event Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">
              {event.category}
            </span>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                {event.title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        <ScrollArea className="max-h-[calc(90vh-12rem)]">
          <div className="p-6 space-y-6">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{event.date}</span>
              </div>
              {event.time && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
              )}
              {event.teamSize && (
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.teamSize}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">{event.prize}</span>
              </div>
              {event.fee && (
                <div className="flex items-center gap-2 text-sm">
                  <Banknote className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{event.fee}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">About the Event</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  Spot registration ends at <span className="text-primary font-bold">9:30 AM on 19th February</span>.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Event Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Rules & Guidelines</h4>
              <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                <ol className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Coordinators */}
            {event.coordinators && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.coordinators.teachers && event.coordinators.teachers.length > 0 && (
                  <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                    <h5 className="font-semibold text-foreground text-sm mb-2">Teacher Coordinators</h5>
                    <ul className="space-y-1">
                      {event.coordinators.teachers.map((teacher, index) => (
                        <li key={index} className="text-sm text-muted-foreground">{teacher}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.coordinators.students && event.coordinators.students.length > 0 && (
                  <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                    <h5 className="font-semibold text-foreground text-sm mb-2">Student Coordinators</h5>
                    <ul className="space-y-1">
                      {event.coordinators.students.map((student, index) => (
                        <li key={index} className="text-sm text-muted-foreground">{student}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Registration Summary & Actions */}
            <div className="pt-4 space-y-4">
              {event.fee && (
                <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Banknote className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Registration Fee</p>
                      <p className="text-lg font-display font-bold text-secondary">{event.fee}</p>
                    </div>
                  </div>
                </div>
              )}

              <Button
                variant="neon"
                size="lg"
                className="w-full h-14 text-base font-bold shadow-lg shadow-primary/20"
                onClick={() => window.open(event.registrationLink, '_blank')}
              >
                Register For This Event
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                You will be redirected to Google Forms for registration
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsDialog;
