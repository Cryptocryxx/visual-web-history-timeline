'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const CONTENT = {
  timeframes: [
    {
      title: "1990–1995",
      introduction:
        "Between 1990 and 1995 the web moved from CERN research project to the first public, visual network. Tim Berners-Lee created the first browser/editor (WorldWideWeb — later Nexus), and simple text-mode clients (Line Mode Browser, LYNX) made the web accessible on a wide range of terminals. The watershed moment arrived in 1993 with NCSA Mosaic, the first broadly popular graphical browser; in 1994 Netscape Navigator followed and in 1995 Microsoft shipped Internet Explorer, launching the first intense era of browser competition.",
      sections: [
        {
          headline: "WorldWideWeb / Nexus (1990)",
          description:
            "Tim Berners-Lee’s original browser and editor for the NeXT workstation allowed users not only to view but also to edit pages — a defining early design for the web as a read/write medium. It introduced fundamental concepts like hyperlinks, URLs, and basic styling. Although primitive, the application defined the interaction model that all later browsers would refine.",
          image: "/ressources/worldwideweb.png",
        },
        {
          headline: "Line Mode Browser (1991)",
          description:
            "A cross-platform, text-based browser written by Nicola Pellow and Tim Berners-Lee to support older terminals; one of the earliest ways non-graphical systems accessed the web. Its simplicity made it suitable for universities and research environments where graphical systems were rare. Despite lacking images or styling, it helped spread the web to diverse computer systems.",
          image: "/ressources/LineModeBrowser.png",
        },
        {
          headline: "LYNX (1992)",
          description:
            "A customizable, cursor-addressable, text-mode browser first developed in 1992; still maintained and notable as one of the longest-running browser projects. Its focus on speed and accessibility allowed users to browse even on extremely slow or low-bandwidth connections. LYNX’s longevity speaks to its utility in technical and accessibility-focused environments.",
          image: "/ressources/LYNX.png",
        },
        {
          headline: "NCSA Mosaic (1993) — Graphical Browsing",
          description:
            "Mosaic (Marc Andreessen & Eric Bina) popularized inline images, a simple GUI, and multi-platform support — making the web approachable to non-technical users and igniting public interest. It unified text and images in a single window, which was revolutionary at the time. Mosaic’s intuitive interface became the template for all graphical browsers that followed.",
          image: "/ressources/Mosaic.png",
        },
        {
          headline: "Netscape Navigator (1994) — Mainstream Adoption",
          description:
            "Originally released as 'Mosaic Netscape', Netscape Navigator introduced progressive rendering (text visible while images loaded) and a modern GUI that accelerated adoption on dial-up connections. Its speed and reliability quickly won over users, helping the web expand beyond academic and technical circles. Navigator soon became the dominant browser of the mid-1990s.",
          image: "/ressources/Netscape.png",
        },
        {
          headline: "Internet Explorer enters (1995)",
          description:
            "Microsoft bundled Internet Explorer with Windows 95 (initially via the Plus! pack), initiating the commercial competition that would become known as the 'browser wars'. Although early versions were basic, Microsoft’s distribution power quickly boosted market share. This move marked the beginning of aggressive browser development cycles.",
          image: "/ressources/InternetExplorer4.0.png",
        },
        {
          headline: "Tim Berners-Lee & Early Principles",
          description:
            "The conceptual foundations laid by Tim Berners-Lee—open standards, URIs, and the idea of linked documents—underpinned these earliest browsers and the web’s growth. His vision of a decentralized, interoperable information system shaped the culture of early web development. Even as commercial interests grew, these principles influenced key web standards.",
          image: "/ressources/TimBernersLee.png",
        },
      ],
      visual_summary:
        "A period defined by the transition from purely text-based interfaces to the very first graphical representations of the web. Early browsers like WorldWideWeb and line-mode clients displayed nothing but plain text, but Mosaic revolutionized visual browsing with inline images and a GUI. Web pages were extremely simple, mostly linear documents with occasional images, default fonts, and little-to-no layout control. The visual identity of the web began here, marked by minimalism, experimentation, and the first recognitions that the web could carry not just information but also visual communication.",
    },

    {
      title: "1995–2000",
      introduction:
        "1995–2000 was dominated by rapid browser innovation and fragmentation. Netscape and Microsoft fought for distribution and features, CSS was introduced (1996) to separate style from markup, and lightweight alternatives like Opera appeared. Plugins such as Flash extended what browsers could show before native APIs existed.",
      sections: [
        {
          headline: "The Browser Wars Intensify",
          description:
            "Netscape and Microsoft competed on features and distribution. Microsoft's strategy of bundling IE with Windows dramatically shifted market share and developer behavior. As a result, the web splintered into incompatible implementations that made cross-browser development extremely challenging.",
          image: "/ressources/BrowserWars.png",
        },
        {
          headline: "Netscape Communicator & Open-Sourcing (1998)",
          description:
            "Netscape released Communicator and later open-sourced its code in 1998, creating the Mozilla Project — a foundational move toward open-source browser engines and future standards-focused browsers. Though Communicator struggled with stability, the open-source transition sowed the seeds for Firefox. It also helped rally the developer community around open standards.",
          image: "/ressources/Netscape6.png",
        },
        {
          headline: "CSS1 (1996) — Styling Arrives",
          description:
            "CSS1 introduced stylesheet-based control of fonts, colors, and spacing for the first time — the first step toward modern layout and visual design separation. This shifted visual decisions away from HTML tags and toward reusable styles. It also marked the beginning of serious attempts to standardize browser rendering.",
          image: "/ressources/HTML5.png",
        },
        {
          headline: "Opera — Lightweight Innovation",
          description:
            "Opera prioritized efficiency and accessibility, introducing early innovations that would later appear more broadly (keyboard navigation, small footprint, early multi-document ideas). Its alternative design philosophy appealed to power users and those on limited hardware. Opera’s influence later surfaced in tabbed browsing and mobile interfaces.",
          image: "/ressources/Opera2.0.png",
        },
        {
          headline: "Flash and Plugins Era",
          description:
            "Developers relied on plugins like Flash and Shockwave for animations and rich content long before comparable native APIs were available. Flash offered interactivity that standard HTML could not yet match. The downside was heavy CPU usage, poor accessibility, and security risks that would eventually drive the web away from plugins.",
          image:
            "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1600&q=80",
        },
        {
          headline: "Market Shifts (late 1990s)",
          description:
            "By the late 1990s Netscape’s market share fell as Internet Explorer (especially IE5) grew through OS integration, causing developers to optimize sites for IE-specific features. This set the stage for a single-browser–dominant web. However, it also created long-term technical debt that the industry would eventually have to unwind.",
          image: "/ressources/ChromewinsoverIE.png",
        },
      ],
      visual_summary:
        "Design exploded into complexity due to rapid browser feature expansion and lack of standards. Table-based layouts, framesets, animated GIFs, hit counters, and Flash intros became iconic visuals of the era. Designers pushed every available trick to stand out in a crowded and increasingly commercialized web. Visuals were dense, cluttered, and often inconsistent between browsers because each one implemented its own ideas. This resulted in a chaotic but highly creative period where the visual language of the “dot-com era” took shape: shiny buttons, saturated colors, and bold, attention-grabbing graphics.",
    },

    {
      title: "2000–2005",
      introduction:
        "2000–2005 was a consolidation period. Internet Explorer 6 dominated but struggled with security and standards; Mozilla and Firefox rose as an alternative; Safari entered the market with WebKit; and AJAX emerged to enable richer, application-like experiences.",
      sections: [
        {
          headline: "Netscape 6 & Mozilla Beginnings",
          description:
            "Netscape attempted a restart with Netscape 6 (early Mozilla-based builds) but faced performance criticisms. The codebase was large and experimental, which slowed adoption. Still, it marked the beginning of Mozilla's commitment to open-source, standards-based browsing.",
          image: "/ressources/Netscape6.png",
        },
        {
          headline: "Internet Explorer 6 (2001) — Widespread Adoption",
          description:
            "IE6 shipped with Windows XP and became ubiquitous. Its security flaws and inconsistent standards support would hinder cross-browser progress for years. The dominance of IE6 effectively stalled many web innovations until competitors re-emerged.",
          image: "/ressources/IE6.png",
        },
        {
          headline: "Mozilla / Firefox (2002–2004)",
          description:
            "Mozilla 1.0 and then Firefox 1.0 emerged as viable, standards-focused alternatives — lighter, faster, and with a growing community of users and add-ons. Firefox’s commitment to web standards inspired developers frustrated with IE’s stagnation. It soon became the browser of choice for early adopters.",
          image: "/ressources/MozillaFirefox.png",
        },
        {
          headline: "Safari & WebKit (2003)",
          description:
            "Apple introduced Safari and the WebKit engine, which later influenced mobile browser architectures and the development of other engines. WebKit’s lightweight performance made it ideal for the upcoming mobile era. Safari also pushed for cleaner rendering and improved standards compliance.",
          image: "/ressources/Safari.png",
        },
        {
          headline: "AJAX & Dynamic Interfaces",
          description:
            "AJAX techniques allowed partial page updates and asynchronous requests, catalyzing the move from static pages to interactive web applications. Sites like Google Maps and Gmail showcased what was possible. This pattern paved the way for modern single-page application frameworks.",
          image: "/ressources/crossplatformImprovements.png",
        },
        {
          headline: "Opera Continues (2005)",
          description:
            "Opera 8 and later versions introduced enhanced tab management, better security, and built-in utilities like email. Its innovations pushed other browsers toward more advanced user interfaces. Even though its user share remained small, its influence on UX was outsized.",
          image: "/ressources/Opera8.png",
        },
      ],
      visual_summary:
        "Visual design began to mature as browsers stabilized and CSS adoption grew. Designers moved away from heavy table layouts toward cleaner, more structured pages with clearer hierarchy. Gradients, soft shadows, and gloss effects emerged as early markers of the Web 2.0 aesthetic. Standardized navigation bars, rounded corners, and more consistent grid-like layouts gained popularity. AJAX introduced dynamic interactions that changed how pages behaved visually, allowing content to update without a full page refresh — a major step toward app-like visuals.",
    },

    {
      title: "2005–2010",
      introduction:
        "2005–2010 saw Chrome’s arrival (2008) and the accelerating decline of plugin reliance. HTML5 and CSS3 began to expose native multimedia and graphics capabilities, while developer tools and performance profiling matured.",
      sections: [
        {
          headline: "Google Chrome (2008) — Performance & Minimalism",
          description:
            "Chrome introduced a minimal UI, multiprocess architecture, and the V8 JavaScript engine — raising expectations for speed, stability, and developer tooling. Its rapid release cycle contrasted sharply with slower competitors. Chrome quickly set new standards for how modern browsers should behave.",
          image: "/ressources/Chrome.png",
        },
        {
          headline: "Firefox Growth & Extensions",
          description:
            "Firefox enhanced its add-on ecosystem and developer tools, positioning itself as a powerful, customizable alternative for developers and privacy-minded users. Its open-source model encouraged innovation and community contributions. Firefox became a favorite for developers who demanded robust debugging features.",
          image: "/ressources/Firefox2.png",
        },
        {
          headline: "HTML5 & CSS3 Begin to Replace Plugins",
          description:
            "Native APIs for audio, video, and canvas reduced the need for Flash, while CSS3 introduced richer styling capabilities and transitions. This shift marked the beginning of the end for plugin-dominated web experiences. Browsers began to converge around more consistent implementations.",
          image: "/ressources/HTML5.png",
        },
        {
          headline: "DevTools & Performance Culture",
          description:
            "Built-in developer tools and performance measurement became essential for web teams, influencing code and design decisions for faster, more responsive sites. Developers gained visibility into network usage, layout bottlenecks, and rendering issues. These tools helped professionalize front-end engineering.",
          image: "/ressources/ChromeV100.png",
        },
        {
          headline: "Mobile Seedlings — iPhone Influence",
          description:
            "Smartphones and the mobile web (accelerated by the iPhone) began to push designers toward simpler, touch-friendly interfaces. This shift laid the groundwork for later responsive design philosophies. Browsers were forced to adapt to much smaller screens and new interaction paradigms.",
          image: "/ressources/MobileSafari.png",
        },
      ],
      visual_summary:
        "A visual shift toward cleaner, more minimalist layouts took hold as CSS3 and HTML5 began replacing plugin-based visual elements. Flash-heavy pages started fading as native video, animation, and canvas APIs became possible. Chrome’s introduction pushed visual simplicity with its clean UI, influencing broader design trends. Designers embraced whitespace, grid systems, and more subtle UI treatments. Early responsive concepts emerged, encouraging scalable visuals and flexible layouts. The web’s visual identity moved decisively toward clarity over decoration.",
    },

    {
      title: "2010–2015",
      introduction:
        "The mobile era reshaped priorities between 2010 and 2015. Responsive design went mainstream, Chrome’s rapid release cadence accelerated feature delivery, and Microsoft started modernizing IE before launching Edge.",
      sections: [
        {
          headline: "Mobile Browsing & Responsive Design (2010+)",
          description:
            "Mobile traffic growth made flexible, fluid layouts essential. Media queries and mobile-first approaches became standard practice. For the first time, mobile UX drove design trends instead of desktop norms.",
          image: "/ressources/MobileSafari.png",
        },
        {
          headline: "Chrome Rapid Release & Ecosystem",
          description:
            "Chrome’s frequent updates and broad API support helped cement its position and pushed the web platform forward faster than previously possible. Its dominance created a more predictable development environment. The ecosystem around Chrome DevTools became a critical part of modern web workflows.",
          image: "/ressources/ChromeV100.png",
        },
        {
          headline: "Firefox Quantum (roots & work)",
          description:
            "Work leading to Firefox Quantum focused on parallelization and performance (Servo, Stylo), aiming to reduce memory usage and improve rendering speed. These foundational projects prepared Firefox for a major performance comeback. Quantum would later reinvigorate Mozilla’s competitive stance.",
          image: "/ressources/FirefoxQuantum.png",
        },
        {
          headline: "Microsoft Moves Toward Edge",
          description:
            "Microsoft released IE9–11 with incremental improvements and then introduced Edge (EdgeHTML) with Windows 10 as a fresh start for standards and performance. Although EdgeHTML never overtook Chrome, it represented Microsoft’s attempt to modernize and shed legacy constraints. This transitional period shaped the future Chromium-based Edge.",
          image: "/ressources/Edge.png",
        },
        {
          headline: "HTML5 Matures",
          description:
            "HTML5 gained broad support across major browsers; features like video and canvas were widely used in production sites. The specification stabilized, enabling developers to rely on a consistent baseline. This shift accelerated the decline of both Flash and plugin ecosystems.",
          image: "/ressources/HTML5.png",
        },
      ],
      visual_summary:
        "The rise of mobile browsing forced websites to rethink visuals entirely. Designs adopted fluid grids, mobile-first workflows, and flexible components to work on every screen size. Flat design replaced skeuomorphic textures — shadows, bevels, and glossy buttons gave way to solid colors, thin typography, and simplified iconography. Visual identity became more systematic, emphasizing readability, spacing, and touch-friendly UI elements. This was a turning point where consistency, adaptability, and performance became defining visual priorities.",
    },

    {
      title: "2015–2020",
      introduction:
        "2015–2020 centered on standardization and platform parity: PWAs, WebAssembly, CSS Grid, and stronger privacy and performance features. Microsoft rebuilt Edge on Chromium to regain compatibility and performance.",
      sections: [
        {
          headline: "Edge Rebuilt on Chromium (2018–2020)",
          description:
            "Microsoft announced and released the Chromium-based Edge, aligning its browser with Chromium’s rendering and compatibility advantages. This marked the end of the EdgeHTML engine. The transition brought major performance increases and reduced compatibility issues across the ecosystem.",
          image: "/ressources/newEdge.png",
        },
        {
          headline: "Progressive Web Apps & Offline-first",
          description:
            "PWAs added installability, offline support, and native-like background capabilities, narrowing the gap between web and native applications. Service workers enabled sophisticated caching strategies. PWAs became increasingly common on both desktop and mobile platforms.",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
        },
        {
          headline: "WebAssembly — Near-Native Performance",
          description:
            "WebAssembly enabled compute-heavy applications (games, editors, scientific code) to run in the browser with near-native speed. Projects like AutoCAD, Unity, and Figma embraced it to deliver rich experiences. WebAssembly broadened the browser's role as an application runtime.",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
        },
        {
          headline: "Privacy & Alternative Search",
          description:
            "Privacy-focused tools and search providers (DuckDuckGo, Ecosia) and enhanced tracker protections became more prominent in browser offerings. Users increasingly demanded transparency around data collection. This momentum pushed browsers toward stronger built-in privacy defaults.",
          image: "/ressources/duckduckgo.png",
        },
        {
          headline: "Ecosystem Tools & Frameworks",
          description:
            "Modern frameworks (Angular, React, Vue) and tooling ecosystems matured, enabling large-scale single-page applications and improved developer workflows. These tools defined the next generation of complex web apps. They also contributed to the shift toward component-driven development.",
          image: "/ressources/Angular2.0.png",
        },
      ],
      visual_summary:
        "Web design matured into a highly polished, grid-based, accessibility-aware discipline. CSS Grid and Flexbox enabled layouts that were once impossible without hacks. Dark mode became mainstream, bringing dual-theme design systems. Visuals became influenced by native mobile app conventions — clean surfaces, clear typography, minimal chrome, and subtle animations. PWAs blurred the line visually between native and web apps. The era emphasized refinement, responsiveness, and performance-focused visuals over ornament.",
    },

    {
      title: "2020–2025",
      introduction:
        "From 2020 through 2025, browsers focused on performance, privacy, and new platform APIs. WebGPU introduced modern GPU access, AI-assisted features appeared in multiple browsers, and privacy protections and rapid release cycles continued to shape the platform.",
      sections: [
        {
          headline: "WebGPU & High-Performance Graphics",
          description:
            "WebGPU brought modern GPU access to the web for 3D rendering and parallel compute tasks, expanding the browser’s suitability for games, visualization, and ML workloads. Its design exposes lower-level control compared to WebGL while improving performance. Developers gained unprecedented computational power directly in the browser.",
          image: "/ressources/crossplatformImprovements.png",
        },
        {
          headline: "AI-Assisted Browsing (2022–2024)",
          description:
            "Major browsers integrated or experimented with AI features — in-browser summarization, chat assistants, writing tools, and tab organization — often via partnerships between browser vendors and AI services. These tools reduced cognitive load and enhanced productivity. AI-driven insights began shaping how users explore and understand the web.",
          image: "/ressources/AiAssistedBrowsingEdge.png",
        },
        {
          headline: "Privacy & Tracker Protections",
          description:
            "Browsers strengthened tracking protections (ITP, Total Cookie Protection, DNS-over-HTTPS) and privacy-minded browsers like Brave and DuckDuckGo grew in visibility. The industry moved toward phasing out third-party cookies. Users became more aware of the importance of data control and anonymity.",
          image: "/ressources/Ecosia.png",
        },
        {
          headline: "Chromium Dominance & Engine Consolidation",
          description:
            "Chromium-based browsers (Chrome, new Edge, Brave, Opera variants) became dominant across platforms, while independent engine development (e.g., EdgeHTML) receded. This consolidation simplified development but raised concerns about engine monoculture. Meanwhile, Firefox and Safari continued pushing for alternative approaches to performance and privacy.",
          image: "/ressources/AllBrowsers.png",
        },
        {
          headline: "Green Browsing & New Niche Projects",
          description:
            "New browser projects and initiatives emphasized privacy, sustainability, or niche goals (e.g., tree-planting search partnerships and low-energy modes). These efforts reflected shifting user values beyond pure performance. Environmental awareness and ethical tech practices increasingly influenced browser positioning.",
          image: "/ressources/NoMoreIE.png",
        },
      ],
      visual_summary:
        "Visual design entered a phase defined by adaptability, environmental awareness (dark/light themes, system contrast preferences), and motion as a subtle communicator. Accelerated rendering tech (WebGPU) enabled more immersive experiences without plugins. Browsers added visual integration with OS-level themes and accessibility settings, making interfaces more personal and flexible. AI-assisted browsing influenced visual presentation, offering summaries and smart UI entry points. Micro-interactions, minimal chrome, and highly optimized design systems defined a visually mature, user-centric web.",
    },
  ],
};






const TIMEFRAMES = CONTENT.timeframes.map((t) => t.title);

// animation variants for content landing page
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 32 } },
};
const heroVariants = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const PALETTE = [
  "#ef4444",
  "#fb7185",
  "#60a5fa",
  "#f97316",
  "#facc15",
  "#34d399",
  "#7c3aed",
];

/*
// assign placeholder image paths (user will drop images into /assets/images/...)
(function assignPlaceholders() {
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  CONTENT.timeframes.forEach((tf) => {
    const slug = slugify(tf.title);
    tf.sections.forEach((s, i) => {
      s.image = `/assets/images/${slug}-${i + 1}.jpg`;
    });
  });
})();
*/

export default function BrowserTimeline() {
  const containerRef = useRef(null);
  const panelRef = useRef(null); // aside wrapper
  const contentScrollRef = useRef(null); // the inner scrollable content div inside the panel
  const [containerRect, setContainerRect] = useState({ top: 0, height: typeof window !== 'undefined' ? window.innerHeight : 900 });
  const [scrollY, setScrollY] = useState(0);
  const [isHoveringTimeline, setIsHoveringTimeline] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
  setIsHoveringTimeline(true); // enable timeline scroll on first load
}, []);

  // Layout constants
  const BOXES_PER_GROUP = 5; // user requested 5 boxes per timeframe
  const BOX_HEIGHT = 40; // px (outer container height - keeps distances constant)
  const BOX_GAP = 8; // gap between boxes inside a group
  const GROUP_GAP = 24; // gap between groups (slightly larger than BOX_GAP)
  const END_GAP = 120; // extra space between end and beginning to show it's "ended"
  const COPIES = 3; // render 3 copies (previous, current, next) for seamless loop

  // Build a flat list of boxes for positioning and independent animation
  const boxes = [];
  let cumulative = 0; // position offset from top of list
  const groupHeights = [];

  for (let g = 0; g < TIMEFRAMES.length; g++) {
    const groupHeight = BOXES_PER_GROUP * BOX_HEIGHT + (BOXES_PER_GROUP - 1) * BOX_GAP;
    groupHeights.push(groupHeight);
    for (let b = 0; b < BOXES_PER_GROUP; b++) {
      const boxTop = cumulative + b * (BOX_HEIGHT + BOX_GAP);
      boxes.push({
        group: g,
        localIndex: b,
        color: PALETTE[g % PALETTE.length],
        top: boxTop,
      });
    }
    cumulative += groupHeight;
    if (g < TIMEFRAMES.length - 1) cumulative += GROUP_GAP; // add group gap
  }

  const totalListHeight = cumulative; // height of one cycle
  const cycle = totalListHeight + END_GAP; // full cycle length including visible gap

  // clamp helper
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // measure container rect (we want to center relative to this, not window)
  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setContainerRect({ top: r.top, height: r.height });
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    const t = setTimeout(measure, 120);
    return () => { window.removeEventListener('resize', measure); window.removeEventListener('orientationchange', measure); clearTimeout(t); };
  }, []);

  // Resize handler for vw
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Wheel handling: default behavior = native scrolling (content). Only hijack wheel events when hovering the timeline.
  useEffect(() => {
    const onWheel = (e) => {
      if (!isHoveringTimeline) return; // let browser handle scrolling normally (content scrolls by default)
      e.preventDefault();
      setScrollY((s) => s + e.deltaY * 0.9);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isHoveringTimeline]);

  // We want the "visual" list to sit so that its center is at 50% from top of container.
  // Instead of changing box math everywhere, we'll translate the whole list by `baseline`.
  // baseline = (containerHeight - totalListHeight)/2 will place the single-cycle list centered.
  const baseline = (containerRect.height - totalListHeight) / 2;

  // Keep scrollY wrapped inside [-cycle/2, cycle/2] to avoid runaway numbers.
  const wrapScroll = (s) => {
    if (!cycle || cycle === 0) return s;
    // normalize to [-cycle/2, cycle/2)
    const wrapped = ((s + cycle / 2) % cycle + cycle) % cycle - cycle / 2;
    return wrapped;
  };

  // Normalize scrollY occasionally to keep numbers reasonable
  useEffect(() => {
    if (Math.abs(scrollY) > cycle) {
      setScrollY((s) => wrapScroll(s));
    }
    // if scrollY drifts slightly beyond bounds, also wrap
    // (no dependencies — we check whenever scrollY changes)
  }, [scrollY, cycle]);

  // Compute scale for a given box index (based on its center Y vs container center)
  const computeScaleForBox = (boxTopWithCopiesOffset) => {
    // include baseline because the whole list is translated by `baseline` in the DOM transform
    const boxCenterY = baseline + boxTopWithCopiesOffset + BOX_HEIGHT / 2 + scrollY; // visual center in container coordinates
    const containerCenter = containerRect.height / 2;
    const dist = Math.abs(boxCenterY - containerCenter);
    const maxDist = containerRect.height / 2 + BOX_HEIGHT * 3;
    // scale ranges from 0.85 (far) to 1.25 (center)
    const scale = 1.25 - (dist / maxDist) * 0.4;
    return clamp(scale, 0.85, 1.25);
  };

  // Compute small y-offset for parallax feel so each box nudges based on position
  const computeYOffsetForBox = (boxTopWithCopiesOffset) => {
    const boxCenterY = baseline + boxTopWithCopiesOffset + BOX_HEIGHT / 2 + scrollY;
    const containerCenter = containerRect.height / 2;
    const raw = (boxCenterY - containerCenter) / 18; // softer movement
    return clamp(raw, -24, 24);
  };

  // Helper: smoothly animate scrollY to a target value (with wrapping)
  const scrollAnimRef = useRef(null);
  const animateScrollTo = (from, to, duration = 520) => {
    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeInOutQuad
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const value = from + (to - from) * eased;
      setScrollY(value);
      if (t < 1) {
        scrollAnimRef.current = requestAnimationFrame(animate);
      } else {
        scrollAnimRef.current = null;
        setScrollY((s) => wrapScroll(s));
      }
    };
    scrollAnimRef.current = requestAnimationFrame(animate);
  };

  // Compute the start Y of a group inside one cycle
  const computeGroupStart = (groupIndex) => {
    const groupHeight = BOXES_PER_GROUP * BOX_HEIGHT + (BOXES_PER_GROUP - 1) * BOX_GAP;
    let start = 0;
    for (let i = 0; i < groupIndex; i++) {
      start += groupHeight;
      if (i < TIMEFRAMES.length - 1) start += GROUP_GAP;
    }
    return start;
  };

  // Scroll the timeline so the group's center aligns with container center
  const scrollToGroup = (groupIndex) => {
    const groupStart = computeGroupStart(groupIndex);
    const groupHeight = BOXES_PER_GROUP * BOX_HEIGHT + (BOXES_PER_GROUP - 1) * BOX_GAP;
    const groupCenter = groupStart + groupHeight / 2;

    const containerCenter = containerRect.height / 2;
    // desired scrollY so that baseline + groupCenter + scrollY = containerCenter
    const desired = containerCenter - baseline - groupCenter;
    // choose wrapped target closest to current scrollY to avoid long jumps
    const current = scrollY;

    // produce candidates by adding multiples of cycle, pick closest
    let best = null;
    let bestDiff = Infinity;
    for (let k = -1; k <= 1; k++) {
      const candidate = desired + k * cycle;
      const diff = Math.abs(candidate - current);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = candidate;
      }
    }

    const target = best;
    animateScrollTo(current, target);
  };

  // When clicking any box, open panel for the box's group and move timeline so group center is centered in container
  const handleBoxClick = (groupIndex) => {
    // first scroll timeline into place
    scrollToGroup(groupIndex);
    // then open the content panel
    setSelectedGroup(groupIndex);
    setIsOpen(true);
  };

  const closePanel = () => {
    setIsOpen(false);
    setSelectedGroup(null);
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden font-sans">
      {!isOpen && (
  <div className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center p-12 pointer-events-none">
    <h1 className="text-6xl font-extrabold text-white leading-tight">
      Browsers<br />across Time
    </h1>
  </div>
)}
      <div className="h-full flex items-center justify-center relative">
        {/* LEFT content panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              ref={panelRef}
              key="content"
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute left-0 top-0 bottom-0 w-3/5 flex items-center z-40"
            >
              {/* NOTE: this inner div is the actual scrollable area. we attach contentScrollRef to it. */}
              <div ref={contentScrollRef} onMouseEnter={() => setIsHoveringTimeline(false)} className="mx-12 p-8 max-h-[80vh] overflow-auto">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-5xl font-extrabold text-emerald-200 tracking-tight">{selectedGroup != null ? TIMEFRAMES[selectedGroup] : "A visual history of browsers"}</h1>
                    <p className="mt-3 text-lg text-white/80 max-w-2xl">
                      {selectedGroup != null ? CONTENT.timeframes[selectedGroup].introduction : "Explore the major eras of web browsers — from early GUI experiments to modern GPU-powered web platforms. Click any item on the timeline to jump to a focused article."}
                    </p>
                  </div>

                  <div className="ml-6 flex-shrink-0 flex items-center gap-3">
                    <button
                      className="px-4 py-2 rounded-md text-sm font-medium bg-white/20 text-white hover:bg-white/30"
                      onClick={closePanel}
                    >
                      Close
                    </button>
                    {selectedGroup == null && (
                      <button
                        className="px-4 py-2 rounded-md text-sm font-medium bg-white/6 text-white/80 hover:bg-white/10"
                        onClick={() => { /* show all - nothing to do */ }}
                      >
                        View timeline
                      </button>
                    )}
                  </div>
                </div>


                {/* Articlescdcd area */}
                <div className="space-y-8">
                  {/* If no group selected, show teaser cards for each timeframe */}
                  {selectedGroup == null ? (
                    <div className="grid grid-cols-1 gap-6">
                      {CONTENT.timeframes.map((tf, i) => (
                        <article key={i} className="p-6 rounded-lg bg-white/5 hover:bg-white/6 transition cursor-pointer" onClick={() => { scrollToGroup(i); setSelectedGroup(i); setIsOpen(true); }}>
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-md flex items-center justify-center bg-white/10 text-2xl font-bold" style={{background: PALETTE[i % PALETTE.length]}}>
                              {i+1}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{tf.title}</h3>
                              <p className="mt-2 text-sm text-white/70 max-w-3xl">{tf.introduction.slice(0, 220)}{tf.introduction.length > 220 ? '…' : ''}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    // show the selected group's articles as single-article sections
                    <div className="space-y-6">
                      {CONTENT.timeframes[selectedGroup].sections.map((s, idx) => (
                        <article key={idx} className="grid grid-cols-3 gap-6 items-start p-6 rounded-lg bg-white/4">
                          <img src={s.image} alt="" className="col-span-1 w-full h-40 object-cover rounded-md" />
                          <div className="col-span-2">
                            <h3 className="text-2xl font-semibold">{s.headline}</h3>
                            <p className="mt-2 text-sm text-white/80">{s.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}

                  {/* Final summary block */}
                  <motion.div variants={itemVariants} initial="hidden" animate={"show"} className="mt-6 p-6 rounded-lg bg-white/5">
                    <h4 className="text-lg font-semibold">Summary</h4>
                    <p className="mt-2 text-sm text-white/80">
                      {selectedGroup != null ? CONTENT.timeframes[selectedGroup].visual_summary : "This timeline highlights major browser eras. Click into any era to read a short article, or use the timeline to browse visually."}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* timeline area (center -> will move right when open) */}
        <div className="relative flex-1 h-full flex items-center justify-center" ref={containerRef}>
          <motion.div
            onMouseEnter={() => setIsHoveringTimeline(true)}
            onMouseLeave={() => setIsHoveringTimeline(false)}
            animate={isOpen ? { x: vw * 0.25 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            style={{ width: isOpen ? '25vw' : '54vw' }}
            className="relative h-[92vh] flex items-center justify-center z-10"
          >
            {/* vertical track line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[6px] bg-white/6 rounded-full" />

            {/* list (translateY by scrollY + baseline) */}
            <div className="relative w-full h-full flex items-start justify-center pointer-events-none">
              <div
                className="pointer-events-auto"
                style={{
                  transform: `translateY(${scrollY + baseline}px)`,
                  width: 260,
                  position: 'relative',
                  height: cycle * COPIES, // large enough to hold copies vertically
                }}
              >
                {/* render multiple copies for seamless looping */}
                {Array.from({ length: COPIES }).map((_, copyIndex) => {
                  // center copyIndex so that 1 is the main copy, 0 previous, 2 next
                  const copyOffset = (copyIndex - Math.floor(COPIES / 2)) * cycle;

                  return (
                    <div key={copyIndex} style={{ position: 'absolute', top: copyOffset + (cycle - totalListHeight - END_GAP) / 2 }}>
                      {boxes.map((box, idx) => {
                        const boxTop = box.top; // within single-cycle coordinates
                        const instanceTop = boxTop; // position inside this copy
                        const visualTopWithOffset = instanceTop + copyOffset; // used for scale/y calculations

                        const scale = computeScaleForBox(visualTopWithOffset);
                        const yOffset = computeYOffsetForBox(visualTopWithOffset);
                        const isCenterLabel = box.localIndex === Math.floor(BOXES_PER_GROUP / 2); // middle box to place label
                        const showLabel = isCenterLabel;

                        return (
                          <motion.div
                            key={`${copyIndex}-${idx}`}
                            onClick={() => handleBoxClick(box.group)}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: yOffset }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                            className="absolute left-0 right-0 mx-auto w-[220px] rounded-md cursor-pointer pointer-events-auto"
                            style={{
                              top: instanceTop,
                              height: BOX_HEIGHT,
                            }}
                          >
                            <motion.div
                              className="w-full h-full rounded-md"
                              style={{
                                transformOrigin: 'center center',
                              }}
                              animate={{ scale }}
                              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                            >
                              <div
                                style={{
                                  height: '100%',
                                  background: box.color,
                                  borderRadius: 8,
                                  boxShadow: selectedGroup === box.group && isOpen ? `${box.color}33 0px 18px 40px` : undefined,
                                  border: '1px solid rgba(0,0,0,0.08)'
                                }}
                              />
                            </motion.div>

                            {/* label overlay centered at the group's middle box */}
                            {showLabel && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-sm font-semibold text-black/95 bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm">{TIMEFRAMES[box.group]}</span>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 text-xs text-white/60">
        Tip: Hover the timeline (right) to scroll it with the wheel. Click any box to open the content panel on the left.
      </div>
    </div>
  );
}
