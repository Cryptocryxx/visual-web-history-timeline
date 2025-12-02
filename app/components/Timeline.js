'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Browser Timeline — single-file React component
// TailwindCSS + Framer Motion expected in the project.

const CONTENT = {
  timeframes: [
    {
      title: "1990–1995",
      introduction:
        "Between 1990 and 1995, the web transformed from an academic research network into the first visual, navigable public medium. This period marks the birth of the graphical web browser — a tool that shifted the internet from text-only documents to something ordinary people could explore visually. Tim Berners-Lee had already introduced the first web server and the concept of HTML, but it wasn’t until GUI browsers arrived that the web truly “opened” to the world.\n\nIn 1993, the release of NCSA Mosaic changed everything. It allowed inline images for the first time, meaning visuals could appear on the page instead of downloading separately. This single feature dramatically broadened the web’s appeal. By 1994, Mosaic developers left to form Netscape, whose browser quickly became dominant, setting the stage for the first browser war. Meanwhile, Internet Explorer 1.0 emerged in 1995, based on Mosaic licensing.\n\nThis era was chaotic, experimental, and full of firsts: the earliest HTML elements, the first forms, the first clickable navigation, and the first images embedded directly into documents. Browser standards didn’t exist yet, so browsers freely innovated. The primitive nature of early HTML didn’t stop web creators from experimenting wildly with imagery, structure, and early interactive elements.\n\nBy 1995, with Netscape Navigator and IE entering the scene, commercial interest in the web exploded. Browser innovation accelerated at a pace that had never been seen before in desktop software.",
      sections: [
        {
          headline: "NCSA Mosaic (1993) — First Popular GUI Browser",
          description:
            "Mosaic introduced inline images and a user-friendly interface that enabled non-experts to explore the web. Its support for embedded images and a simple GUI were pivotal in turning the web from a text-based research tool into a general-purpose information medium.",
          image: "https://upload.wikimedia.org/wikipedia/en/2/24/NCSA_Mosaic_Browser.png",
        },
        {
          headline: "Netscape Navigator (1994) — The First Web Giant",
          description:
            "Netscape Navigator quickly became the dominant browser due to speed, a modern interface, and aggressive development. It popularized many features and commercialized the web experience, helping drive adoption among non-technical users.",
          image: "https://upload.wikimedia.org/wikipedia/en/0/03/Netscape_Navigator_1.22.png",
        },
        {
          headline: "Birth of JavaScript (1995)",
          description:
            "Created at Netscape by Brendan Eich, JavaScript added dynamic behavior to static pages — enabling client-side scripting, form validation, and early interactive features that would eventually become core to the web platform.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          headline: "Internet Explorer 1.0 (1995)",
          description:
            "Microsoft entered the browser market by licensing Mosaic code and bundling Internet Explorer with Windows. This move set the stage for fierce competition and the commercialization of browsers.",
          image: "https://upload.wikimedia.org/wikipedia/en/3/30/Internet_Explorer_1_screenshot.png",
        },
      ],
      visual_summary:
        "Mostly plain HTML with inline images as the major new capability. Tiled backgrounds, simple icons, early GIF animations, and experimental layout choices dominated — the foundational, experimental phase of visual web design.",
    },
    {
      title: "1995–2000",
      introduction:
        "Between 1995 and 2000 the web matured rapidly as companies recognized its commercial potential. Two browsers — Netscape Navigator and Internet Explorer — battled fiercely for control. This was the era of “browser wars,” marked by speed races, proprietary features, and the lack of standardized web technologies. Microsoft aggressively bundled Internet Explorer with Windows, leading to its eventual dominance.\n\nTechnical innovation exploded, often chaotically. The introduction of CSS1 in 1996 began shifting visual control from HTML to stylesheets. Meanwhile, JavaScript evolved from a simple scripting language into something capable of animations, form validation, and rudimentary interactive components. Opera appeared in 1996, introducing features like tabbed browsing years before others.\n\nWebsites grew more complex as designers embraced tables, frames, and Flash. Commercial websites boomed, and the dot-com era shaped the aesthetic and expectations of the modern web.",
      sections: [
        {
          headline: "Internet Explorer 3–5 — Microsoft's Takeover (1996–1999)",
          description:
            "Internet Explorer added CSS support, scripting enhancements, and deep Windows integration. Microsoft’s strategy of bundling IE with Windows helped it quickly capture market share and set the tone for the late-1990s web.",
          image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Internet_Explorer_5_screenshot.png",
        },
        {
          headline: "Netscape Navigator 3–4 — Innovation & Decline",
          description:
            "Netscape introduced early JavaScript and a plugin architecture, but development slowed as Microsoft invested heavily in IE. Netscape’s struggles highlighted the risks of rapid commercial competition in standards-driven platforms.",
          image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Netscape_Communicator_4_Screenshot.png",
        },
        {
          headline: "CSS1 (1996) — Visual Control Arrives",
          description:
            "CSS1 allowed designers to separate presentation from structure for the first time, introducing a path toward more consistent cross-browser styling — although adoption and implementation varied greatly across browsers.",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Cascading_Style_Sheets_logo.svg",
        },
        {
          headline: "Flash & Plugin Era",
          description:
            "Flash and browser plugins enabled animation, multimedia, and rich interactivity before HTML5's capabilities existed. Sites used Flash for entire interactive experiences, but at the cost of accessibility and performance.",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Adobe_Flash_Player_v11_icon.png",
        },
      ],
      visual_summary:
        "Designs became dense and busy: table-based layouts, framesets, Flash splash pages, animated banners, and heavy ornamentation were common. The web looked commercially flashy and often overwrought.",
    },
    {
      title: "2000–2005",
      introduction:
        "The early 2000s were defined by stability issues in Internet Explorer and the emergence of strong competitors. IE6 dominated globally but was plagued with security flaws and inconsistent standards support. This stability gap motivated developers to create alternatives.\n\nThe Mozilla Foundation released Firefox 1.0 in 2004, quickly gaining attention for tabbed browsing, extensions, and better standards compliance. Safari launched on macOS in 2003, ending Microsoft’s presence on Mac systems. Meanwhile, developers expanded their capabilities with CSS2 which introduced positioning, z-index, and advanced layout control.\n\nThe most transformative development of this era was the arrival of AJAX, enabling asynchronous web apps like Gmail and Google Maps. The modern interactive web was born as pages began to behave more like applications than static documents.",
      sections: [
        {
          headline: "Internet Explorer 6 (2001)",
          description:
            "IE6 achieved massive market share but was criticized for security and poor standards compatibility. Its dominance slowed overall progress toward consistent rendering and modern features until other browsers forced change.",
          image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Internet_Explorer_6_SP2.png",
        },
        {
          headline: "Firefox 1.0 (2004)",
          description:
            "Firefox brought tabbed browsing, a powerful extension ecosystem, and a renewed focus on standards compliance. It revitalized browser competition and pushed vendors to improve speed and compatibility.",
          image: "https://upload.wikimedia.org/wikipedia/en/6/66/Firefox_screenshot.png",
        },
        {
          headline: "Safari 1 (2003)",
          description:
            "Apple's Safari introduced WebKit to the desktop, offering good performance on macOS and later inspiring other projects. WebKit’s evolution would later become central to mobile browser engines.",
          image: "https://upload.wikimedia.org/wikipedia/en/5/58/Safari_1_0_screenshot.png",
        },
        {
          headline: "AJAX (2004–2005)",
          description:
            "AJAX techniques allowed asynchronous requests and partial page updates, enabling web apps that behaved like desktop software — a major turning point for interactivity and usability.",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ajax-loader.gif",
        },
      ],
      visual_summary:
        "Web 2.0 aesthetics begin to appear: glossy buttons, rounded corners, drop shadows, and fixed-width grid layouts (the 960px era). Interfaces became smoother and more application-like.",
    },
    {
      title: "2005–2010",
      introduction:
        "This period is one of the most transformative in browser history. In 2008, Google released Chrome, introducing the V8 JavaScript engine — the fastest of its time — and a minimalist UI that influenced every major browser afterward. Firefox and Safari improved significantly, and Microsoft attempted to recover with IE7 and IE8.\n\nDevelopers gained access to early HTML5 and CSS3 features, while AJAX went mainstream. Browser vendors started competing on speed, standards support, and security rather than proprietary features. The first modern JavaScript frameworks emerged, and interactive web apps became normal.",
      sections: [
        {
          headline: "Google Chrome (2008)",
          description:
            "Chrome introduced a speedy V8 JavaScript engine, process isolation for tabs, and a minimal UI that emphasized page content. It reset expectations for performance and stability and quickly influenced other browsers' designs.",
          image: "https://upload.wikimedia.org/wikipedia/en/7/70/Google_Chrome_screenshot.png",
        },
        {
          headline: "Firefox 2–3",
          description:
            "Firefox continued improving performance and the add-on ecosystem. It became the favorite of many developers for its debugging tools and standards push.",
          image: "https://upload.wikimedia.org/wikipedia/en/6/66/Firefox-logo.png",
        },
        {
          headline: "HTML5 & CSS3 Begin",
          description:
            "New APIs (audio/video/canvas) and CSS3 styling primitives (transforms, border-radius) reduced reliance on plugins and enabled richer media and visuals in native HTML.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          headline: "DevTools Mature",
          description:
            "Chrome DevTools revolutionized front-end development with built-in profiling, inspection, and debugging features — making developer workflows far more efficient.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chrome_DevTools.png/640px-Chrome_DevTools.png",
        },
      ],
      visual_summary:
        "The start of responsive thinking, cleaner layouts, and grid-based systems. Designs moved away from heavy ornament toward clarity and content focus; Flash usage declined.",
    },
    {
      title: "2010–2015",
      introduction:
        "The rise of smartphones and tablets reshaped browser development. Chrome skyrocketed in popularity, Firefox iterated quickly, and Microsoft replaced Internet Explorer with Edge. HTML5 & CSS3 matured, and JavaScript engines became dramatically faster.\n\nFrameworks like AngularJS, Backbone, and jQuery dominated. Responsive design became essential after the iPhone’s success. Browsers focused heavily on security, standards, and developer tools.",
      sections: [
        {
          headline: "Chrome 10–40 (2011–2015)",
          description:
            "Chrome adopted a rapid-release cadence and continued to push JavaScript performance and modern web APIs, solidifying its market leadership.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Google_Chrome_icon_%282011%29.png",
        },
        {
          headline: "Internet Explorer 9–11 → Microsoft Edge",
          description:
            "Microsoft moved toward modern standards with IE9–11 and eventually introduced Edge as a successor. This period marked Microsoft’s attempt to recover from legacy compatibility issues.",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Edge_2015_Logo.svg",
        },
        {
          headline: "CSS3 Full Maturity",
          description:
            "CSS3 features like transitions, animations, Flexbox, and better typography controls became widely supported, enabling richer, more responsive UIs.",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          headline: "Rise of Mobile Browsing",
          description:
            "Mobile usage overtook desktop in many contexts, making responsive design the norm and forcing designers to prioritize adaptable layouts and touch-friendly controls.",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        },
      ],
      visual_summary:
        "Flat design and mobile-first layouts dominate. Typography and spacing become central; skeuomorphism fades in favor of clear, minimal interfaces.",
    },
    {
      title: "2015–2020",
      introduction:
        "Browsers stabilized around shared standards. Chrome dominated, Firefox reinvented itself, Safari optimized battery usage, and Microsoft Edge migrated to Chromium. This was a golden era for performance improvements and new web capabilities.\n\nProgressive Web Apps (PWAs) blurred the line between websites and apps. WebAssembly enabled near-native execution speeds. CSS Grid revolutionized layout design. Privacy concerns became a driving force, with tracking protection and sandboxing.",
      sections: [
        {
          headline: "Edge Chromium (2019)",
          description:
            "Microsoft rebuilt Edge on Chromium, joining the Chromium ecosystem to benefit from its performance, compatibility, and development tooling while contributing to the common platform.",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Microsoft_Edge_logo_%282019%29.svg",
        },
        {
          headline: "WebAssembly (2017)",
          description:
            "WebAssembly opened the browser to compiled languages, enabling high-performance applications (e.g., games, CAD, image processing) to run in the browser with near-native speeds.",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg",
        },
        {
          headline: "Progressive Web Apps",
          description:
            "PWAs provided installability, offline support, and native-like behavior without an app store, blurring the boundary between web and native apps.",
          image: "https://https://upload.wikimedia.org/wikipedia/commons/a/a0/PWA_logo.svg",
        },
        {
          headline: "CSS Grid (2017)",
          description:
            "CSS Grid gave designers two-dimensional layout power in CSS, simplifying complex responsive layouts and reducing reliance on hacks and frameworks.",
          image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/CSS_Grid_Layout_Logo.svg",
        },
      ],
      visual_summary:
        "Dark mode, minimalist app-like interfaces, big typography, and grid-based responsive systems. Design increasingly mirrors native app conventions and emphasizes accessibility and performance.",
    },
    {
      title: "2020–2025",
      introduction:
        "The last five years have seen browser development accelerate through automation, AI, and GPU-powered rendering. Chrome, Safari, Firefox, and Edge compete vigorously on privacy, speed, and advanced APIs. Browsers integrate machine learning for tasks like tab management, content assistance, and performance optimization.\n\nWith WebGPU and WebAssembly maturing, browsers are now powerful platforms for 3D rendering, gaming, scientific computing, and AI inference. Lightweight UI, accessibility standards, and performance-oriented design dominate.",
      sections: [
        {
          headline: "WebGPU (2023)",
          description:
            "WebGPU is a next-generation graphics and compute API for the web, enabling high-performance 3D graphics and GPU compute workloads in the browser and unlocking new classes of applications.",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/WebGPU_logo.png",
        },
        {
          headline: "Privacy Defaults Strengthen",
          description:
            "Browsers implemented stronger tracking prevention, sandboxing, and isolation mechanisms. Privacy became a first-class feature as users and regulators demanded better defaults.",
          image: "https://images.unsplash.com/photo-1526378722448-4e0c47e82d47",
        },
        {
          headline: "AI-integrated Browsers",
          description:
            "AI features such as smart search, tab grouping, auto-summarization, and assistive features began appearing in or alongside browsers, improving productivity and content interaction.",
          image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
        },
        {
          headline: "Fast Release Cycles",
          description:
            "Browsers adopted aggressive release cadences (often monthly), enabling rapid iteration and faster delivery of features, security fixes, and API improvements.",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        },
      ],
      visual_summary:
        "Accessible-by-default design, fluid design systems, dark/light theme syncing, subtle animations and micro-interactions, and clean, content-centered layouts. Visuals balance performance with richness and inclusivity.",
    },
  ],
};

const TIMEFRAMES = CONTENT.timeframes.map((t) => t.title);

const PALETTE = [
  "#ef4444",
  "#fb7185",
  "#60a5fa",
  "#f97316",
  "#facc15",
  "#34d399",
  "#7c3aed",
];

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
                <button
                  className="mb-6 px-3 py-1 border rounded text-sm text-white bg-white/20 hover:bg-white/30"
                  onClick={closePanel}
                >
                  Close
                </button>

                <div className="space-y-6">
                  <h2 className="text-4xl font-semibold text-emerald-200">
                    {selectedGroup != null ? TIMEFRAMES[selectedGroup] : ""}
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {selectedGroup != null ? CONTENT.timeframes[selectedGroup].introduction : ""}
                  </p>

                  <div className="space-y-4">
                    {selectedGroup != null &&
                      CONTENT.timeframes[selectedGroup].sections.map((s, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-white/5">
                          <img src={s.image} alt="" className="w-28 h-20 object-cover rounded" />
                          <div>
                            <h3 className="font-medium">{s.headline}</h3>
                            <p className="text-sm text-white/70">{s.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>

                  {selectedGroup != null && (
                    <div className="mt-4 p-4 rounded bg-white/6">
                      <strong className="block mb-1">Visual summary</strong>
                      <p className="text-sm text-white/80">{CONTENT.timeframes[selectedGroup].visual_summary}</p>
                    </div>
                  )}
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
