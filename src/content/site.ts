// Single source of truth for all site copy. Text is taken verbatim from the
// client brief — do not add statistics, prices, staff, or testimonials here.

export const contact = {
  name: "Mickey Academy",
  fullName: "Mickey Academy Daycare",
  street: "11 Brighton Rd",
  streetLong: "11 Brighton Road",
  city: "Clifton",
  state: "NJ",
  zip: "07012",
  directors: "Larisa Taube & Lora Telyan",
  phones: ["(973) 249-0707", "(973) 632-8596", "(216) 536-8284"],
  email: "mickeyacademy@hotmail.com",
  hours: "Monday–Friday, 7am–7pm",
  hoursShort: "Mon–Fri 7am–7pm",
  hoursNote: "Closed major holidays",
  locationNote:
    "Next to Clifton Elementary School No. 9, easily accessible from all major routes.",
  lat: 40.845948,
  lng: -74.15803,
};

export const tel = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
  { label: "Parents' Forms", href: "#forms" },
  { label: "Contact", href: "#contact" },
];

export const mission = {
  statement: "Our mission is to make each child and parent smile with satisfaction.",
  short: "Making each child and parent smile with satisfaction.",
  body: "Mickey Academy Daycare is a haven where children develop holistically, thanks to a conscientious, caring staff who serve their needs and provide a clean, healthy environment every day.",
};

export const trust = [
  "Ages 2 weeks–5 years",
  "Open-Door Policy",
  "Daily Activity Reports",
  "CPR & First Aid Trained Teachers",
  "24/7 Video Cameras",
  "All Government Programs Accepted",
  "Open 7am–7pm",
];

export type IconName =
  | "bottle"
  | "blocks"
  | "brush"
  | "music"
  | "apple"
  | "shield"
  | "camera"
  | "clock"
  | "door"
  | "report"
  | "heart"
  | "people"
  | "dance"
  | "computer"
  | "cook"
  | "sun"
  | "puzzle"
  | "star"
  | "pencil"
  | "backpack"
  | "grad";

export const difference = {
  intro:
    "Our center keeps growing because we take feedback from parents and teachers seriously, whether in conversation or in writing. We take to heart what anyone who walks through our doors thinks.",
  cards: [
    {
      icon: "door" as IconName,
      title: "Open-Door Policy",
      body: "Parents are welcome to visit their children anytime and observe our services.",
    },
    {
      icon: "report" as IconName,
      title: "Daily Activity Report",
      body: "At pickup, you receive a report noting how long your child napped, how much of their lunch they ate, how potty-training is going, the fun activities and games they shared with friends, and a personal note from the teacher about your child's best moment of the day.",
    },
    {
      icon: "people" as IconName,
      title: "Owners + Director",
      body: "The owners are available to children, families, and faculty every day. Our Director is responsible for curriculum and programming. This dual management lets the Director observe classrooms, mentor faculty, and build a healthy learning environment for each child.",
    },
    {
      icon: "shield" as IconName,
      title: "Commitment to Safety",
      body: "Multiple video cameras record 24 hours a day, 7 days a week, and every child receives one-on-one attention from our teachers.",
    },
  ],
  closing:
    "The more carefully we watch your children grow, the stronger the team between parent, child, and teacher.",
};

export const rooms = [
  { icon: "bottle" as IconName, name: "Baby Room", detail: "From 2 weeks old", tint: "coral" },
  { icon: "blocks" as IconName, name: "Toddler Room", detail: "An age-specific room", tint: "sky" },
  { icon: "puzzle" as IconName, name: "Older Toddler Room", detail: "An age-specific room", tint: "mint" },
  {
    icon: "pencil" as IconName,
    name: "Pre-Kindergarten Room",
    detail: "Preparation for grade school",
    tint: "sun",
  },
  {
    icon: "backpack" as IconName,
    name: "Before & After School Program",
    detail:
      "For school-age children: age-appropriate activities like arts and crafts, cooking, music, outdoor play, group projects, and time to do homework.",
    tint: "coral",
  },
] as const;

export const activities: { icon: IconName; label: string }[] = [
  { icon: "brush", label: "Arts & Crafts" },
  { icon: "dance", label: "Dance" },
  { icon: "computer", label: "Computer Literacy" },
  { icon: "cook", label: "Cooking" },
  { icon: "music", label: "Music" },
  { icon: "sun", label: "Outdoor Play" },
  { icon: "people", label: "Group Projects" },
  { icon: "star", label: "Individual Projects" },
  { icon: "grad", label: "Preparation for Grade School" },
];

export const teachers = {
  body: "All of our teachers share a love of working with children and a passion for teaching. Every teacher has passed CPR and First Aid training and gone through a rigorous screening process to confirm their expertise with young children. Their nurturing personalities are just as essential to early childhood development.",
};

export type Day = { day: string; subject: string; text: string };
export type Week = { theme: string; days: Day[]; note?: string };

export const curriculum: Week[] = [
  {
    theme: "Farm Animals and Insects",
    days: [
      {
        day: "Mon",
        subject: "Science",
        text: "Where do butterflies come from? The differences between butterflies and moths, and all about monarch butterflies.",
      },
      {
        day: "Tue",
        subject: "Math",
        text: "Review sequencing (what happens first, second, and third) and patterns.",
      },
      { day: "Wed", subject: "Reading", text: "Things that go together, word matches." },
      { day: "Thu", subject: "Music", text: "Music class review." },
      { day: "Fri", subject: "Fun Day", text: "Fun Day." },
    ],
  },
  {
    theme: "Our Planet Earth",
    days: [
      { day: "Mon", subject: "Art", text: "Spring art (flowers)." },
      { day: "Tue", subject: "Reading", text: "Letters, opposites, starting sounds." },
      {
        day: "Wed",
        subject: "Math",
        text: "Numbers 13–16, reviewing 0–12, counting and writing numbers, shapes and colours, money, clocks, and sizes.",
      },
      { day: "Thu", subject: "Earth Day", text: "Earth Day project and discussion." },
      { day: "Fri", subject: "Projects", text: "Project time and review." },
    ],
    note: "April 22 is Earth Day. Talk with your kids about taking care of the land, water, air, and animals of our Earth.",
  },
  {
    theme: "Spring Season",
    days: [
      {
        day: "Mon",
        subject: "Science",
        text: "The life cycle of a chicken and other animals that hatch from eggs.",
      },
      { day: "Tue", subject: "Math", text: "Reviewing numbers 1–12 and shapes." },
      { day: "Wed", subject: "Reading", text: "Letters and reviewing opposites." },
      { day: "Thu", subject: "Computer & Music", text: "Computer and music classes." },
      { day: "Fri", subject: "Fun Day", text: "Fun Day and review." },
    ],
  },
  {
    theme: "Dinosaurs",
    days: [
      { day: "Mon", subject: "Computers", text: "Computers and review of shapes, colours, and letters." },
      { day: "Tue", subject: "Math", text: "Reviewing addition and numbers 1–16." },
      { day: "Wed", subject: "Reading", text: "Matching words, rhyming words, reviewing opposites." },
      { day: "Thu", subject: "Art & Music", text: "Art and music classes." },
      { day: "Fri", subject: "Fun Day", text: "Fun Day and art." },
    ],
  },
];

export const forms = [
  { title: "Registration Form", file: "/forms/registration-form.pdf" },
  { title: "Child Care Contract", file: "/forms/child-care-contract.pdf" },
  { title: "Acknowledgement of Policies", file: "/forms/acknowledgement-of-policies.pdf" },
  { title: "Policy Statement", file: "/forms/policy-statement.pdf" },
  { title: "Discipline Statement", file: "/forms/discipline-statement.pdf" },
  { title: "Emergency Medical Care", file: "/forms/emergency-medical-care.pdf" },
  { title: "Permission Forms", file: "/forms/permission-forms.pdf" },
  { title: "First Day Item List", file: "/forms/first-day-item-list.pdf" },
];

export const enrollSteps = [
  {
    n: "01",
    title: "Visit us.",
    body: "Call or stop by. Our open-door policy means you're always welcome to see us in action.",
    link: { label: "Call (973) 249-0707", href: tel("(973) 249-0707") },
  },
  {
    n: "02",
    title: "Complete the forms.",
    body: "Download the registration packet below.",
    link: { label: "Go to Parents' Forms", href: "#forms" },
  },
  {
    n: "03",
    title: "First day!",
    body: "Use the First Day Item List so your child has everything they need.",
    link: { label: "First Day Item List (PDF)", href: "/forms/first-day-item-list.pdf" },
  },
];

export const testimonials = [
  {
    quote:
      "As a full-time working mother, I needed to find a daycare where my son could bond with his caretakers, would receive both fun and structure, and would be appreciated for his 'spunkiness' instead of called 'overactive' if he wanted to walk around the room frequently. Luckily for me, all children at Mickey Academy Daycare are regarded as individuals and equally important children.",
    name: "Linda",
    role: "mother of a five-year-old",
  },
  {
    quote:
      "After constant searching, telephone calls, and Internet research for violations, I knew the moment I met a Mickey Academy person and saw the daycare facility that it was right for my daughter, Maria. This was such a relief that I actually shed tears of joy as I drove away on that first day.",
    name: "Jackie",
    role: "mother of a three-month-old",
  },
  {
    quote:
      "When I surprisingly popped in to see how my son was dealing with his first week of daycare, I was so pleased to find that he was not just well adjusted, but even better. He was laughing with staff and other children and playing different learning games, and this was all in the hour that I visited. The twinkle in his eyes was enough for me to decide that this was MY daycare center.",
    name: "Stanley",
    role: "father of a three-year-old",
  },
];

export type Photo = { src: string; alt: string; width: number; height: number };

export const photos = {
  front: {
    src: "/images/front.jpg",
    alt: "The Mickey Academy building on Brighton Road: a tan two-storey house with a brick entrance, trimmed hedges, and a yellow Child Care sign",
    width: 800,
    height: 600,
  },
  babyRoom: {
    src: "/images/classroom-0011.jpg",
    alt: "Two teachers playing with babies and toddlers on colourful foam floor mats in the baby room",
    width: 1600,
    height: 1200,
  },
  computers: {
    src: "/images/classroom-0007.jpg",
    alt: "Two teachers helping a group of preschoolers at the classroom computers beneath a bulletin board of children's artwork",
    width: 1600,
    height: 1200,
  },
  circleTime: {
    src: "/images/classroom-0005.jpg",
    alt: "A teacher leading circle time with a large group of children sitting on an alphabet rug in a bright yellow classroom",
    width: 1600,
    height: 1200,
  },
  toddlers: {
    src: "/images/photo-016.jpg",
    alt: "Five toddlers lined up smiling in a playroom with a play kitchen and a dollhouse bookshelf",
    width: 800,
    height: 600,
  },
  costumes: {
    src: "/images/photo-p1000616.jpg",
    alt: "A smiling teacher with face paint surrounded by children in costumes, including a witch, a fairy, and a ladybug",
    width: 1208,
    height: 961,
  },
  graduation: {
    src: "/images/photo-p1000141.jpg",
    alt: "Pre-K graduates in blue caps and gowns singing while a guitarist plays under a Congrats Graduate banner",
    width: 1600,
    height: 1200,
  },
  birthday: {
    src: "/images/photo-015.jpg",
    alt: "A toddler standing in front of a yellow classroom wall decorated with a birthday balloon chart and colour posters",
    width: 600,
    height: 800,
  },
  tree: {
    src: "/images/photo-018.jpg",
    alt: "Toddlers at a table in front of a big paper tree mural on a sunny yellow wall",
    width: 600,
    height: 800,
  },
  pumpkin: {
    src: "/images/photo-p1000674.jpg",
    alt: "A baby in an orange pumpkin shirt holding a bucket in the infant room, with a smiling little girl in the foreground",
    width: 1200,
    height: 1600,
  },
} satisfies Record<string, Photo>;

// Gallery order follows the brief.
export const gallery: Photo[] = [
  photos.babyRoom,
  photos.computers,
  photos.toddlers,
  photos.circleTime,
  photos.costumes,
  photos.graduation,
  photos.birthday,
  photos.tree,
  photos.pumpkin,
  photos.front,
];

export const comparisonRows = [
  "Open-door visits anytime",
  "Daily written activity report",
  "Personal teacher note every day",
  "24/7 video cameras",
  "CPR & First Aid trained teachers",
  "Age-specific rooms",
  "One-on-one attention",
  "12-hour day (7am–7pm)",
  "All government programs accepted",
];

export const faq = [
  {
    q: "What ages do you accept?",
    a: "Children from two weeks to five years old, plus a before & after school program for school-age children.",
  },
  { q: "What are your hours?", a: "Monday to Friday, 7am to 7pm. Closed on major holidays." },
  {
    q: "Can I visit my child during the day?",
    a: "Yes. We have an open-door policy, and parents are welcome anytime.",
  },
  {
    q: "How will I know how my child's day went?",
    a: "You'll get a Daily Activity Report at pickup covering naps, lunch, potty-training, activities, and a personal note from the teacher.",
  },
  { q: "Do you accept government programs?", a: "Yes, all government programs are accepted." },
  {
    q: "How do you keep children safe?",
    a: "Multiple video cameras record 24/7, teachers are CPR and First Aid trained and screened, and every child gets one-on-one attention.",
  },
  {
    q: "Where are you located?",
    a: "11 Brighton Road, Clifton, NJ, right next to Clifton Elementary School No. 9 and easily accessible from all major routes.",
  },
];

export const ageChips = ["Infant", "Toddler", "Older Toddler", "Pre-K", "School-age"];
