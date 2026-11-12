import type { Place } from "@/lib/types";

export const aquidneckPlaces: Place[] = [
  {
    slug: "jamestown-ri",
    name: "Jamestown",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "newport",
    tier: "primary",
    description:
      "Christmas light installation in Jamestown, RI. Island homes from the village to Beavertail, scheduled across the bridge from South County.",
    lede: "Jamestown is an island with a bridge, a wind problem, and houses that range from a compact village colonial to an exposed lot near Beavertail.",
    paragraphs: [
      "We schedule Jamestown as its own block of work so the crew crosses the bridge once and finishes the list, rather than bouncing back for a single outlet. Village streets off Narragansett Avenue want a careful roofline. Houses toward Beavertail and the west side want attachments that can take a winter blow off the bay. Warm white is almost always the right palette.",
      "Tell us about long driveways and outdoor outlets that are shut off when the house is empty. A lot of Jamestown homes are quiet in November.",
    ],
    neighborhoods: ["Jamestown village", "Beavertail", "Conanicut Park", "east and west passages"],
    considerations: [
      "Island wind, especially toward Beavertail",
      "Jobs grouped so the bridge crossing is once",
      "Seasonal occupancy and shut-off outlets",
    ],
    faqs: [
      {
        q: "Is the bridge a problem for scheduling?",
        a: "Only if a job is booked as a one-off. We group Jamestown dates so it is a planned day, not a detour.",
      },
      {
        q: "Do you use the same hardware as in sheltered towns?",
        a: "The lamp color may match. The clips, ties, and connections are chosen for the exposure on that lot.",
      },
    ],
    nearby: ["newport-ri", "narragansett-ri", "north-kingstown-ri", "portsmouth-ri"],
  },
  {
    slug: "newport-ri",
    name: "Newport",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "newport",
    tier: "primary",
    description:
      "Christmas light installation in Newport, RI. Bellevue, The Point, Thames Street, and Ocean Drive, with historic-district care.",
    lede: "Newport can absorb a careless install and make it look worse than no lights at all. The street is already doing half the work.",
    paragraphs: [
      "The Point and the historic streets want warm white, precise eaves, and a door that feels dressed rather than advertised. Bellevue and Ocean Drive estates are a scale problem: longer lines, taller access, and a design that should still look quiet from the road. Thames Street and the wharf businesses are commercial work, timed around deliveries and dinner service, with a takedown date the landlord will actually enforce.",
      "If your property sits in a local historic district, say so. Attachment rules and color limits belong in the quote, not in a surprise on install morning. We do not nail roofs to force a line the building should not carry. A certificate of insurance is available when the property or the association requires it.",
    ],
    neighborhoods: ["The Point", "Historic Hill", "Bellevue Avenue", "Ocean Drive", "Thames Street"],
    considerations: [
      "Historic-district attachment and color limits",
      "Estate scale on Bellevue and Ocean Drive",
      "Commercial hours on Thames Street",
    ],
    faqs: [
      {
        q: "Can you work in Newport's historic areas?",
        a: "Yes, within the rules that apply to the property. Tell us the limits you already know and we will plan the attachments around them.",
      },
      {
        q: "Do you light restaurants and inns?",
        a: "Yes. Entries, facades, and a tree if it helps the sidewalk. We schedule around service, not through it.",
      },
    ],
    nearby: ["middletown-ri", "jamestown-ri", "portsmouth-ri", "narragansett-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "custom-displays"],
  },
  {
    slug: "middletown-ri",
    name: "Middletown",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "newport",
    tier: "primary",
    description:
      "Christmas light installation in Middletown, RI. Easton's Point, Paradise, and Aquidneck homes between Newport and Portsmouth.",
    lede: "Middletown is the residential middle of Aquidneck: family houses, water views, and a few streets that take as much wind as Newport.",
    paragraphs: [
      "Easton's Point and the streets toward Second Beach are exposed and often shingle or clapboard. Paradise and the inland side are more sheltered colonials and capes where a clean roofline and a wrapped front-yard tree are the whole composition. We schedule Middletown with Newport and Portsmouth so Aquidneck is one trip, not three.",
      "Commercial frontage on East Main Road is available. It is a different product from a Point house, and the quote will look different.",
    ],
    neighborhoods: ["Easton's Point", "Paradise", "Second Beach area", "East Main Road"],
    considerations: [
      "Wind on the Point and the beach side",
      "Sheltered inland capes that need less, not more",
      "Aquidneck days shared with Newport and Portsmouth",
    ],
    faqs: [
      {
        q: "Do you come to Middletown only if you are already in Newport?",
        a: "Middletown is part of the Aquidneck day on purpose. You do not have to wait for a leftover hour.",
      },
      {
        q: "Warm white or color for a family house?",
        a: "Either, if it is consistent. Mixed temperatures on one roof are what make a house look accidental.",
      },
    ],
    nearby: ["newport-ri", "portsmouth-ri", "jamestown-ri", "tiverton-ri"],
  },
  {
    slug: "portsmouth-ri",
    name: "Portsmouth",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "newport",
    tier: "primary",
    description:
      "Christmas light installation in Portsmouth, RI. Island Park, Common Fence Point, and Aquidneck homes with scheduled takedown.",
    lede: "Portsmouth runs from tight shoreline neighborhoods to larger inland lots. The lighting should follow that, not a single island template.",
    paragraphs: [
      "Island Park and Common Fence Point are close to the water, close to the neighbors, and hard on cheap clips. We keep the design legible from the street without spilling light into the next porch. Inland, toward Turnpike Avenue and the farms, the houses sit back and can hold a tree wrap plus a simple roof. Bristol Ferry and the north end tie naturally into Bristol and Tiverton scheduling when a day is built around the bridges.",
      "Tell us if the house is on a slab, a crawl, or pilings. Outlet location and ladder footing change the hours.",
    ],
    neighborhoods: ["Island Park", "Common Fence Point", "Bristol Ferry", "Aquidneck Avenue"],
    considerations: [
      "Tight waterfront lots and neighbor sightlines",
      "Larger inland properties that are really tree jobs",
      "Bridge-day scheduling with Bristol and Tiverton when it helps",
    ],
    faqs: [
      {
        q: "Is Portsmouth a regular stop?",
        a: "Yes. It is on the Aquidneck calendar with Newport and Middletown.",
      },
      {
        q: "Can an association in Portsmouth request insurance?",
        a: "Yes. Ask for the certificate with the quote and we will send it before the install is scheduled.",
      },
    ],
    nearby: ["middletown-ri", "bristol-ri", "tiverton-ri", "newport-ri"],
  },
  {
    slug: "tiverton-ri",
    name: "Tiverton",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in Tiverton, RI. Four Corners, Stone Bridge, and Highland houses along the Sakonnet.",
    lede: "Tiverton feels rural until the wind comes up the Sakonnet. Stone Bridge and Four Corners need two different kinds of care.",
    paragraphs: [
      "Four Corners is small-scale and historic. Lighting there should be warm and short. Stone Bridge and the Nannaquaket side are more exposed, with houses aimed at the water. Highland Road and the inland stretches are colonials and capes under trees. We do not outline every dormer just because the truck is on the property.",
      "Tiverton schedules cleanly with Little Compton and Portsmouth. If you are comparing us with a Massachusetts crew, the difference is simple: we are already on this side of the bridge for Rhode Island work.",
    ],
    neighborhoods: ["Four Corners", "Stone Bridge", "Nannaquaket", "Highland"],
    considerations: [
      "Historic scale at Four Corners",
      "Sakonnet wind on the water side",
      "Grouped days with Little Compton and Portsmouth",
    ],
    faqs: [
      {
        q: "Do you install at Tiverton Four Corners?",
        a: "Yes. Those houses want a light hand: door, main eave, maybe a tree.",
      },
      {
        q: "Is Little Compton included on the same day?",
        a: "Often. If you are booking both a Tiverton home and a Little Compton property, tell us and we will try to put them together.",
      },
    ],
    nearby: ["little-compton-ri", "portsmouth-ri", "bristol-ri", "middletown-ri"],
  },
  {
    slug: "little-compton-ri",
    name: "Little Compton",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Newport County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in Little Compton, RI. Understated lighting for Commons, Sakonnet, and Adamsville homes.",
    lede: "Little Compton looks wrong with a loud roof. The Commons, the stone walls, and the dark sky are already the design.",
    paragraphs: [
      "Warm white, a precise eave, and an entry are the job on most houses around the Commons, Sakonnet, Adamsville, and Tunipus. Long stone walls and open fields make over-lighting obvious. We would rather leave a gable dark than draw a bright triangle on a house that was never asking for it.",
      "Wind off the sound is real on the southern roads. Attachments get chosen for that, even when the design itself is minimal. Days are grouped with Tiverton so the drive is a plan, not a penalty.",
    ],
    neighborhoods: ["the Commons", "Sakonnet", "Adamsville", "Tunipus"],
    considerations: [
      "A dark-sky, understated standard",
      "Open-field wind on southern roads",
      "Travel grouped with Tiverton",
    ],
    faqs: [
      {
        q: "Will you talk me out of a big display?",
        a: "If the house does not want it, yes. Little Compton is where a smaller plan usually looks more expensive.",
      },
      {
        q: "Do you cover Adamsville?",
        a: "Yes. Adamsville is part of the Little Compton route.",
      },
    ],
    nearby: ["tiverton-ri", "portsmouth-ri", "bristol-ri"],
  },
  {
    slug: "bristol-ri",
    name: "Bristol",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Bristol County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in Bristol, RI. Hope Street, the waterfront, and Metacom Avenue businesses, installed and removed.",
    lede: "Bristol already knows how to dress a street. Christmas lighting should feel as deliberate as the rest of the waterfront.",
    paragraphs: [
      "Hope Street and the historic downtown need storefront and house lighting that respects narrow facades and busy sidewalks. Waterfront streets take wind off the harbor. The colonials up toward Metacom and the north end can hold a fuller roofline and a tree. We separate those quotes. A waterfront inn and a side-street cape do not share a design.",
      "Commercial takedown dates in Bristol are often firm. Put the day you must be dark into the request and we will quote against it.",
    ],
    neighborhoods: ["Hope Street", "the waterfront", "Metacom Avenue", "north end"],
    considerations: [
      "Narrow historic facades downtown",
      "Harbor wind on the water streets",
      "Firm commercial removal dates",
    ],
    faqs: [
      {
        q: "Do you light Hope Street businesses?",
        a: "Yes. Facades, entries, and trees where they do not fight the sign or the sidewalk.",
      },
      {
        q: "Is Bristol on a regular route?",
        a: "Yes. East Bay days include Bristol, Warren, and Barrington.",
      },
    ],
    nearby: ["warren-ri", "barrington-ri", "portsmouth-ri", "tiverton-ri"],
    featuredServices: ["commercial-holiday-lighting", "residential-installation", "custom-displays", "roofline-lighting"],
  },
  {
    slug: "warren-ri",
    name: "Warren",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Bristol County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in Warren, RI. Water Street and the historic neighborhoods between Bristol and Barrington.",
    lede: "Warren is dense, old, and close to the sidewalk. Lighting has to be exact because there is nowhere for a mistake to hide.",
    paragraphs: [
      "Water Street businesses need a clean commercial treatment and a crew that can work around a narrow street. The residential blocks toward the Kickemuit and Market Street are colonials and mill-era houses with short facades. We outline the lines that make the building read, then we stop. Extra gables on a 30-foot-wide house just make a bright scribble.",
      "Warren shares East Bay scheduling with Bristol and Barrington.",
    ],
    neighborhoods: ["Water Street", "Market Street", "Kickemuit"],
    considerations: [
      "Tight historic lots and sidewalks",
      "Short facades that punish over-lighting",
      "East Bay routing with Bristol and Barrington",
    ],
    faqs: [
      {
        q: "Can you work on a street with almost no front yard?",
        a: "Yes. Ladder footing and parking are part of the plan. If we need an early start to hold a space, we will say so.",
      },
      {
        q: "Do you cover the whole town?",
        a: "Yes. Water Street and the residential streets are both in scope.",
      },
    ],
    nearby: ["bristol-ri", "barrington-ri", "east-providence-ri", "tiverton-ri"],
  },
  {
    slug: "barrington-ri",
    name: "Barrington",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Bristol County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in Barrington, RI. Warm-white rooflines for Rumstick, Nayatt, and houses around the river.",
    lede: "Barrington is white clapboard, deep lawns, and a standard of tidy that cheap color breaks immediately.",
    paragraphs: [
      "Rumstick, Nayatt, and the streets off County Road are classic warm-white work: complete eaves, a serious door, and trees only when they are doing a job. The houses are large enough that skipped corners show. We measure the real perimeter instead of guessing from the curb. Association and waterfront rules, where they exist, belong in the first email.",
      "Barrington is an East Bay day with Warren and Bristol, and it also ties toward East Providence when the calendar runs north.",
    ],
    neighborhoods: ["Rumstick", "Nayatt", "County Road", "Barrington River"],
    considerations: [
      "Large colonials where unfinished corners show",
      "Warm white as the standing palette",
      "Lawn depth that changes how trees read from the road",
    ],
    faqs: [
      {
        q: "Is color a bad idea in Barrington?",
        a: "Not if you want it and you use it consistently. Most of these houses look more finished in warm white, and we will start there.",
      },
      {
        q: "Do you handle larger rooflines?",
        a: "Yes. The quote changes with height and length. We do not flatten a big colonial into a cottage price.",
      },
    ],
    nearby: ["warren-ri", "east-providence-ri", "bristol-ri", "east-greenwich-ri"],
  },
  {
    slug: "east-greenwich-ri",
    name: "East Greenwich",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Kent County",
    region: "east-bay",
    tier: "primary",
    description:
      "Christmas light installation in East Greenwich, RI. Hill and Harbour homes and Main Street businesses, quoted in writing.",
    lede: "East Greenwich is a Main Street town with a hill of houses above it. The shop and the colonial are both our work, and they are not the same visit.",
    paragraphs: [
      "Main Street and the blocks around it need commercial lighting that can go up early and come down when the landlord says. Hill and Harbour, Division Street, and the waterfront side are residential: clapboard, shingle, and a few larger roofs that need a real ladder plan. Warm white carries the residential work. A restaurant can go warmer, brighter, or more decorative if the facade supports it.",
      "We schedule East Greenwich with North Kingstown and Warwick. It is not a detour from South County, and it is not a Providence leftover.",
    ],
    neighborhoods: ["Hill and Harbour", "Main Street", "Division Street", "the waterfront"],
    considerations: [
      "Main Street commercial hours and removal dates",
      "Residential roofs above town that vary in pitch",
      "Scheduling with North Kingstown and Warwick",
    ],
    faqs: [
      {
        q: "Do you light Main Street storefronts?",
        a: "Yes. Send the width of the front and the hours a ladder can be on the sidewalk.",
      },
      {
        q: "Are the hill neighborhoods included?",
        a: "Yes. Hill and Harbour and the surrounding streets are standard East Greenwich residential work.",
      },
    ],
    nearby: ["north-kingstown-ri", "warwick-ri", "west-warwick-ri", "barrington-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "custom-displays"],
  },
];
