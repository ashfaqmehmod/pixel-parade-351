// All editable site content for Bill Arena lives here.
import teamShehryar from "@/assets/team-shehryar.png.asset.json";
import teamKashif from "@/assets/team-kashif.png.asset.json";
import teamIbrarAmin from "@/assets/team-ibrar-amin.png.asset.json";
import teamIbrarAli from "@/assets/team-ibrar-ali.png.asset.json";
import teamSaif from "@/assets/team-saif.png.asset.json";
import teamAliYazdan from "@/assets/team-ali-yazdan.png.asset.json";
import teamAshfaq from "@/assets/team-ashfaq.png.asset.json";
import {
  PhoneCall, UserPlus, CalendarDays, BellRing, ShieldCheck, FileCheck2, FileText,
  Receipt, Wallet, ScanSearch, RotateCcw, Landmark, BarChart3, PiggyBank, GraduationCap,
  TrendingDown, Timer, HeartPulse, Leaf, MonitorSmartphone, ClipboardList, Cloud,
  Stethoscope, CalendarCheck, FileSpreadsheet, Pill, BadgeCheck, Globe, Phone,
  MessageSquare, Printer, Sheet, type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Bill Arena",
  tagline: "Less paperwork. More patients.",
  email: "shehryar.bill.07@gmail.com",
  phone: "0317 3264360",
  phoneIntl: "+923173264360",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Tools", href: "#tools" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "13+", label: "Services" },
  { value: "Dedicated", label: "VA support for your practice" },
  { value: "US-hours", label: "Coverage during your business day" },
];

type Item = { icon: LucideIcon; title: string; text: string };

export const serviceGroups: { name: string; items: Item[] }[] = [
  {
    name: "Front Office",
    items: [
      { icon: PhoneCall, title: "Inbound & Outbound Calls", text: "Every patient call answered warmly and on time." },
      { icon: UserPlus, title: "Patient Registration", text: "Clean, complete demographics from day one." },
      { icon: CalendarDays, title: "Appointment Scheduling", text: "Full calendars without the phone-tag." },
      { icon: BellRing, title: "Appointment Reminders", text: "Fewer no-shows with timely nudges." },
    ],
  },
  {
    name: "Insurance & Authorization",
    items: [
      { icon: ShieldCheck, title: "Insurance Eligibility Verification", text: "Coverage confirmed before the visit." },
      { icon: FileCheck2, title: "Prior Authorization", text: "Approvals chased so care isn't delayed." },
      { icon: FileText, title: "Medical Documentation", text: "Organized records that support every claim." },
    ],
  },
  {
    name: "Billing & Revenue Cycle",
    items: [
      { icon: Receipt, title: "Charge Entry", text: "Accurate charges captured quickly." },
      { icon: Wallet, title: "Payment Posting", text: "Payments reconciled, nothing slipping by." },
      { icon: ScanSearch, title: "Claim Scrubbing", text: "Errors caught before claims go out." },
      { icon: RotateCcw, title: "Denial Management", text: "Denials worked and resubmitted fast." },
      { icon: Landmark, title: "Accounts Receivable", text: "Steady follow-up that shrinks aging AR." },
      { icon: BarChart3, title: "Reporting & Reconciliation", text: "Clear numbers you can act on." },
    ],
  },
];

export const benefits: Item[] = [
  { icon: PiggyBank, title: "Real cost savings", text: "Skilled support for a fraction of in-house staffing costs." },
  { icon: GraduationCap, title: "Trained medical VAs", text: "Assistants who know US healthcare workflows and terminology." },
  { icon: TrendingDown, title: "Fewer denials", text: "Careful verification and scrubbing keep claims clean." },
  { icon: Timer, title: "Faster collections", text: "Consistent AR follow-up brings revenue in sooner." },
  { icon: HeartPulse, title: "More time for patients", text: "Hand off the admin and get back to care." },
  { icon: Leaf, title: "Paperless & lower-carbon", text: "Remote, digital-first operations with a lighter footprint." },
];

export const steps = [
  { title: "Free consultation", text: "We learn your practice, pain points and goals." },
  { title: "Workflow setup", text: "We map your systems and build clear checklists." },
  { title: "Your VA starts", text: "A dedicated assistant joins your team during US hours." },
  { title: "Ongoing reporting", text: "Regular updates keep everything transparent." },
];

export const toolGroups: { name: string; items: Item[] }[] = [
  {
    name: "EHR & Practice Management",
    items: [
      { icon: MonitorSmartphone, title: "EHR systems", text: "Charts, documentation, registration" },
      { icon: Cloud, title: "AdvancedMD", text: "Cloud EHR, practice management, billing" },
      { icon: ClipboardList, title: "Optimantra", text: "Practice management and billing" },
      { icon: CalendarCheck, title: "SimplePractice", text: "Scheduling, client records, billing" },
    ],
  },
  {
    name: "Claims & Authorizations",
    items: [
      { icon: Stethoscope, title: "Claim.MD", text: "Claim submission, scrubbing, tracking" },
      { icon: Pill, title: "CoverMyMeds", text: "Prior authorization requests" },
      { icon: BadgeCheck, title: "Availity", text: "Eligibility, claim status, authorizations" },
      { icon: Globe, title: "Insurance Portals", text: "Eligibility checks and payer follow-up" },
    ],
  },
  {
    name: "Communication",
    items: [
      { icon: Phone, title: "RingCentral", text: "Inbound and outbound calls" },
      { icon: MessageSquare, title: "Google Voice", text: "Calls and texting for reminders" },
      { icon: Printer, title: "AR Fax", text: "Secure faxing" },
    ],
  },
  {
    name: "Reporting",
    items: [{ icon: Sheet, title: "Google Sheets", text: "Reports, trackers, AR follow-up lists" }],
  },
];
export const ToolFallbackIcon = FileSpreadsheet;

type TeamMember = { name: string; role: string; bio: string; linkedin?: string; photo?: string };

export const teamLead: TeamMember = {
  name: "Shehryar Khan",
  role: "Senior VA · Team Lead",
  bio: "Leads the team and keeps every client workflow calm, organized and on schedule.",
  linkedin: "https://www.linkedin.com/in/shehryar-khan-3614a8443",
  photo: teamShehryar.url,
};

export const team: TeamMember[] = [
  { name: "Kashif Mashroof", role: "Assistant VA", bio: "Friendly voice on the phones and a pro at scheduling.", linkedin: "https://www.linkedin.com/in/kashif-mashroof-0a8aa841a/", photo: teamKashif.url },
  { name: "Ibrar Amin", role: "Accountant", bio: "Careful, accurate hands on the numbers that keep billing clean.", photo: teamIbrarAmin.url },
  { name: "Saif Ullah", role: "Marketing Executive", bio: "Gets Bill Arena in front of the practices that need it most.", photo: teamSaif.url },
  { name: "Ashfaq Mehmood", role: "Developer (IT)", bio: "Keeps the website and internal tools fast, secure and running.", photo: teamAshfaq.url },
  { name: "Ibrar Ali", role: "Assistant VA", bio: "Reliable hands on scheduling, records and daily admin.", photo: teamIbrarAli.url },
  { name: "Ali Yazdan", role: "HR Manager", bio: "Keeps the team supported, organized and growing.", photo: teamAliYazdan.url },
];

export const faqs = [
  { q: "How does pricing work?", a: "We offer simple monthly plans based on hours and services needed. Book a free consultation for a tailored quote." },
  { q: "Are you HIPAA-aware?", a: "Yes. Our team follows HIPAA-aware practices and uses secure access to your systems. We never share patient information." },
  { q: "What hours do you work?", a: "We work during US business hours. Tell us your time zone and we'll confirm coverage." },
  { q: "How fast can we get started?", a: "Timelines depend on your systems and needs — we'll give you a clear start date after the free consultation." },
  { q: "Which EHRs do you support?", a: "AdvancedMD, Optimantra, SimplePractice and many other EHRs. If you use something else, we adapt quickly." },
];

export const serviceOptions = serviceGroups.flatMap((g) => g.items.map((i) => i.title));
