export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "City Speed Logistics",
    legalName: "City Speed Logistics",
    tagline: "Speed You Can Count On.",
    description:
      "City Speed Logistics is a Harare-based freight and delivery company providing fast, reliable logistics solutions across Zimbabwe. From same-day city deliveries to cross-border freight, we move it all.",
    phone: "+263 77 880 7444",
    phoneRaw: "+263778807444",
    whatsappNumber: "263778807444",
    email: "dispatch@cityspeedlogistics.co.zw",
    address: "7 Roan Cl, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "25,000+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "city-speed-logistics-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "City",
    logoLine2: "Speed Logistics",
  },

  hero: {
    badge: "Harare's Fastest Logistics & Delivery Service",
    titleParts: [
      { text: "SPEED YOU " },
      { text: "CAN", highlight: true },
      { text: " COUNT ON." },
    ],
    subtitle:
      "Same-day city delivery, nationwide freight, and cross-border logistics. 25,000+ shipments delivered on time, every time.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Track Shipment",
    trustBadge: "25,000+ Deliveries Completed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "City Speed Logistics professional image 1" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "City Speed Logistics professional image 2" },
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "City Speed Logistics showcase" },
    ],
  },

  stats: [
    { number: "25000+", label: "Deliveries Made" },
    { number: "6+", label: "Years Running" },
    { number: "99%", label: "On-Time Rate" },
    { number: "4.8", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Same-Day Delivery",
      desc: "Urgent city deliveries within Harare in as little as 2 hours. Motorcycles, vans, and trucks for every parcel size.",
      icon: "NavigationArrow",
    },
    {
      title: "Nationwide Freight",
      desc: "Scheduled freight services to all major Zimbabwean cities including Bulawayo, Mutare, Masvingo, and Gweru.",
      icon: "Buildings",
    },
    {
      title: "Cross-Border Logistics",
      desc: "Road freight to South Africa, Botswana, Zambia, and Mozambique with full customs documentation support.",
      icon: "Rocket",
    },
    {
      title: "Warehousing",
      desc: "Secure warehouse storage with inventory management, pick-and-pack services, and distribution coordination.",
      icon: "Star",
    },
    {
      title: "E-Commerce Fulfillment",
      desc: "Last-mile delivery solutions for online retailers. Cash-on-delivery collection and proof-of-delivery tracking.",
      icon: "Briefcase",
    },
    {
      title: "Corporate Contracts",
      desc: "Dedicated fleet allocation, priority scheduling, and customized logistics solutions for regular business clients.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Same-Day Delivery",
        slug: "same-day-delivery",
        desc: "Urgent city deliveries within Harare in as little as 2 hours. Motorcycles, vans, and trucks for every parcel size.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
      {
        title: "Nationwide Freight",
        slug: "nationwide-freight",
        desc: "Scheduled freight services to all major Zimbabwean cities including Bulawayo, Mutare, Masvingo, and Gweru.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Cross-Border Logistics",
        slug: "cross-border-logistics",
        desc: "Road freight to South Africa, Botswana, Zambia, and Mozambique with full customs documentation support.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
      {
        title: "Warehousing",
        slug: "warehousing",
        desc: "Secure warehouse storage with inventory management, pick-and-pack services, and distribution coordination.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "E-Commerce Fulfillment",
        slug: "e-commerce-fulfillment",
        desc: "Last-mile delivery solutions for online retailers. Cash-on-delivery collection and proof-of-delivery tracking.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
      {
        title: "Corporate Contracts",
        slug: "corporate-contracts",
        desc: "Dedicated fleet allocation, priority scheduling, and customized logistics solutions for regular business clients.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial City",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in same-day delivery.",
        client: "Commercial Client",
        services: ["Same-Day Delivery", "Nationwide Freight"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential City",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in nationwide freight.",
        client: "Residential Client",
        services: ["Nationwide Freight", "Cross-Border Logistics"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial City",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cross-border logistics.",
        client: "Industrial Client",
        services: ["Cross-Border Logistics", "Warehousing"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional City",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in warehousing.",
        client: "Institutional Client",
        services: ["Warehousing", "E-Commerce Fulfillment"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial City",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in e-commerce fulfillment.",
        client: "Commercial Client",
        services: ["E-Commerce Fulfillment", "Corporate Contracts"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential City",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate contracts.",
        client: "Residential Client",
        services: ["Corporate Contracts", "Same-Day Delivery"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "City Speed delivers our e-commerce orders across Harare and the service is impeccable. Fast, reliable, and our customers love the tracking updates.",
      name: "Tawanda Mashonga",
      role: "E-Commerce Store Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We switched to City Speed for our Bulawayo freight and have not looked back. On-time every single time and the goods always arrive in perfect condition.",
      name: "Nyasha Gumbo",
      role: "Operations Manager, TelOne",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Urgent same-day deliveries are their specialty. I have sent documents across Harare in under two hours. City Speed is a game-changer.",
      name: "Farai Chigombe",
      role: "Legal Practitioner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Our cross-border shipments to Johannesburg are handled seamlessly by City Speed. They manage the customs paperwork and keep us updated throughout.",
      name: "Grace Maposa",
      role: "Import/Export Manager",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "City Speed Logistics was founded to solve Harare's delivery problem: unreliable timelines, damaged goods, and zero tracking. We built a logistics company that treats every shipment as urgent and every customer as a partner.",
      "With over 25,000 deliveries completed and a 99% on-time rate, City Speed has become the logistics partner of choice for businesses across Zimbabwe. Our fleet of motorcycles, vans, and trucks handles everything from a single envelope to full container loads.",
    ],
    values: [
      { title: "99% On-Time Rate", desc: "We track every delivery and hold ourselves accountable. Your shipment arrives when we say it will." },
      { title: "Real-Time Tracking", desc: "GPS-enabled fleet with real-time tracking. Know exactly where your shipment is at every moment." },
      { title: "Flexible Fleet", desc: "Motorcycles for urgent documents, vans for parcels, trucks for freight. The right vehicle for every job." },
      { title: "Insurance Included", desc: "Every shipment is insured. Full accountability and peace of mind from pickup to delivery." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "City Speed delivers our e-commerce orders across Harare and the service is impeccable. Fast, reliable, and our customers love the tracking updates.", name: "Tawanda Mashonga", role: "E-Commerce Store Owner", rating: 5 },
      { text: "We switched to City Speed for our Bulawayo freight and have not looked back. On-time every single time and the goods always arrive in perfect condition.", name: "Nyasha Gumbo", role: "Operations Manager, TelOne", rating: 5 },
      { text: "Urgent same-day deliveries are their specialty. I have sent documents across Harare in under two hours. City Speed is a game-changer.", name: "Farai Chigombe", role: "Legal Practitioner", rating: 5 },
      { text: "Our cross-border shipments to Johannesburg are handled seamlessly by City Speed. They manage the customs paperwork and keep us updated throughout.", name: "Grace Maposa", role: "Import/Export Manager", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "City Speed Logistics",
        address: "7 Roan Cl, Harare, Zimbabwe",
        phone: "+263 77 880 7444",
        email: "dispatch@cityspeedlogistics.co.zw",
      },
    ],
  },

  homeCta: {
    title: "SHIP IT FASTER",
    subtitle: "Same-day city delivery, nationwide freight, and cross-border logistics. Your shipment, our speed. Get a quote now.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello City Speed! I need a delivery/logistics quote.",
    backgroundImage: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85",
  },

  footer: {
    description: "City Speed Logistics is a Harare-based freight and delivery company providing fast, reliable logistics solutions across Zimbabwe. From same-day city d...",
    copyright: "City Speed Logistics",
  },
};

export default siteData;
