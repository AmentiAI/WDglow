import type { Place } from "@/lib/types";

export const connecticutPlaces: Place[] = [
  {
    slug: "pawcatuck-ct",
    name: "Pawcatuck",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "home",
    description:
      "Christmas light installation in Pawcatuck, CT. The Westerly crew, across the river, for homes and downtown Mechanic Street.",
    lede: "Pawcatuck is the other half of Westerly. The river is the state line, not a service boundary.",
    paragraphs: [
      "Mechanic Street, Prospect Street, and the residential blocks off Route 1 are on the same weekly plan as downtown Westerly. The houses are a mix of village colonials, capes, and streets that feel continuous with White Rock. We do not add a travel charge theater to a job that is ten minutes from the last Rhode Island stop.",
      "If you own a business on the Pawcatuck side and a house on the Westerly side, tell us. We can quote them together and, when the dates allow, hang them in one pass.",
    ],
    neighborhoods: ["Mechanic Street", "Prospect Street", "downtown Pawcatuck", "Route 1"],
    considerations: [
      "Treated as Westerly's home market",
      "Village houses and small commercial fronts",
      "No fictional distance from the Rhode Island crew",
    ],
    faqs: [
      {
        q: "Do you charge extra because Pawcatuck is in Connecticut?",
        a: "No. It is part of the home route. Farther Connecticut towns are a different story, and we say so.",
      },
      {
        q: "Is Pawcatuck covered with Stonington?",
        a: "Pawcatuck has its own page because that is how people search. Stonington Borough is a separate, tighter historic job.",
      },
    ],
    nearby: ["westerly-ri", "stonington-ct", "north-stonington-ct", "mystic-ct"],
  },
  {
    slug: "stonington-ct",
    name: "Stonington",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "home",
    description:
      "Christmas light installation in Stonington, CT. Borough streets, Lord's Point, Mason's Island, and the town outside the village.",
    lede: "Stonington Borough is narrow, historic, and unforgiving. The rest of town opens up. We plan those as different installs.",
    paragraphs: [
      "Water Street and the borough lanes need a crew that can work in a tight street, with warm light and nothing sticking into the walk. Parking is part of the quote. Lord's Point, Mason's Island, and the roads toward Wamphassuc are more exposed and more residential. Lambert's Cove and the inland side of town sit between those extremes. Pawcatuck is its own page. Mystic, which Stonington shares with Groton, is its own page too.",
      "Salt air is a given south of Route 1. Clips and connections are chosen for it.",
    ],
    neighborhoods: ["Stonington Borough", "Lord's Point", "Mason's Island", "Lambert's Cove"],
    considerations: [
      "Narrow borough streets and parking",
      "Salt exposure on the points and islands",
      "Separate plans for village, shore, and inland houses",
    ],
    faqs: [
      {
        q: "Can you work in Stonington Borough?",
        a: "Yes. We schedule it when we can stage the van without blocking the lane, often earlier in the day.",
      },
      {
        q: "Do you cover Mason's Island?",
        a: "Yes. Send the gate or bridge details with the request.",
      },
    ],
    nearby: ["pawcatuck-ct", "mystic-ct", "westerly-ri", "north-stonington-ct"],
  },
  {
    slug: "mystic-ct",
    name: "Mystic",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "home",
    description:
      "Christmas light installation in Mystic, CT. Downtown storefronts and houses on both the Groton and Stonington sides of the river.",
    lede: "Mystic is a downtown that has to look composed, and a ring of houses that have to look like houses, not like an extension of the drawbridge.",
    paragraphs: [
      "West Main and East Main businesses need lighting that helps the storefront without fighting the sign, the awning, or the sidewalk. We time that work around deliveries and dinner. The residential streets on River Road and back from the village, on both the Groton and Stonington sides, are a home install: warm white, a real roofline, takedown in January. People search for Mystic, so Mystic has a page, even though the zip codes say Groton or Stonington.",
      "This is home territory with Pawcatuck and Stonington. Holiday weeks fill. Ask early if you need to be lit before Thanksgiving.",
    ],
    neighborhoods: ["Downtown Mystic", "West Main", "East Main", "River Road"],
    considerations: [
      "Storefront hours and sidewalk limits",
      "Houses on both sides of the river",
      "Home-route scheduling from Westerly",
    ],
    faqs: [
      {
        q: "Do you light Mystic shops and houses?",
        a: "Yes. They are different quotes. A shop is a facade and an entry. A house is a roof, a door, and maybe a tree.",
      },
      {
        q: "Does it matter which side of the river I am on?",
        a: "For scheduling, no. For design, only in the way the building itself differs. Tell us the street.",
      },
    ],
    nearby: ["stonington-ct", "groton-ct", "pawcatuck-ct", "westerly-ri"],
    featuredServices: ["commercial-holiday-lighting", "residential-installation", "custom-displays", "roofline-lighting"],
  },
  {
    slug: "groton-ct",
    name: "Groton",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Groton, CT. City of Groton, Noank, Mumford Cove, and Eastern Point homes and businesses.",
    lede: "Groton includes a downtown, a military-adjacent community, and shoreline villages like Noank that want a quieter hand.",
    paragraphs: [
      "Noank is the careful village job: tight streets, water nearby, warm light. Mumford Cove and Eastern Point are residential and exposed. The City of Groton and Long Hill are a broader mix of houses and small commercial sites. Mystic addresses that say Groton are covered on the Mystic page as well. We schedule Groton with New London and Mystic so the Thames River towns share a day when the map allows.",
      "Wind on the coast and ordinary suburban roofs inland should not receive the same clip spec. The quote names what we are using and where.",
    ],
    neighborhoods: ["Noank", "City of Groton", "Mumford Cove", "Eastern Point", "Long Hill"],
    considerations: [
      "Noank's village scale",
      "Exposed points versus inland streets",
      "Days shared with Mystic and New London",
    ],
    faqs: [
      {
        q: "Do you install in Noank?",
        a: "Yes. Noank is one of the Groton villages we specifically plan for, with a lighter design.",
      },
      {
        q: "What about base-adjacent housing?",
        a: "If the property allows a civilian crew and the access rules are clear, yes. Send the rules with the request.",
      },
    ],
    nearby: ["mystic-ct", "new-london-ct", "stonington-ct", "ledyard-ct"],
  },
  {
    slug: "new-london-ct",
    name: "New London",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in New London, CT. Pequot Avenue, Ocean Beach, Bank Street, and the residential hills.",
    lede: "New London is a working downtown and a shoreline of houses. The install has to respect both the wind and the parking.",
    paragraphs: [
      "Pequot Avenue and the Ocean Beach neighborhood are the residential show: larger houses, salt air, warm white, solid attachments. Bank Street and downtown commercial fronts are a schedule-and-sidewalk problem. The streets up the hill mix triple-deckers and single-families where we usually light the front elevation and stop. We do not sell a lawn display to a building that has no lawn.",
      "New London is a core Connecticut day with Groton and Waterford.",
    ],
    neighborhoods: ["Pequot Avenue", "Ocean Beach", "Bank Street", "Montauk Avenue"],
    considerations: [
      "Salt air on Pequot Avenue",
      "Downtown sidewalk and hour limits",
      "Front-elevation work on tighter streets",
    ],
    faqs: [
      {
        q: "Do you light downtown New London businesses?",
        a: "Yes. Hours, sidewalk use, and the takedown date need to be in the request.",
      },
      {
        q: "Is Ocean Beach included?",
        a: "Yes. Those houses are scheduled as shoreline work.",
      },
    ],
    nearby: ["groton-ct", "waterford-ct", "montville-ct", "mystic-ct"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "seasonal-maintenance"],
  },
  {
    slug: "waterford-ct",
    name: "Waterford",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Waterford, CT. Jordan Village, Great Neck, Pleasure Beach, and Rope Ferry Road.",
    lede: "Waterford is shoreline neighborhoods and inland colonials between New London and Niantic. Both are regular Connecticut work.",
    paragraphs: [
      "Great Neck, Pleasure Beach, and Jordan Cove take wind and want the same coastal hardware we use in New London. Jordan Village is smaller-scale. The inland streets toward the school campuses and the north end of town are conventional residential roofs where even spacing and one color do most of the work. Rope Ferry is the connector, and the houses along it vary enough that we want a photo of the front before we lock a design.",
      "Waterford shares days with New London and East Lyme.",
    ],
    neighborhoods: ["Jordan Village", "Great Neck", "Pleasure Beach", "Rope Ferry"],
    considerations: [
      "Coastal wind on the neck and beaches",
      "Inland roofs that are simpler than the shore",
      "Grouped with New London and East Lyme",
    ],
    faqs: [
      {
        q: "Do you cover Great Neck and Pleasure Beach?",
        a: "Yes. They are waterfront Waterford, and the quote treats them that way.",
      },
      {
        q: "Can a house inland of Route 1 book the same week?",
        a: "Yes. Inland and shore are one town on the schedule, with different hardware where the exposure changes.",
      },
    ],
    nearby: ["new-london-ct", "east-lyme-ct", "montville-ct", "groton-ct"],
  },
  {
    slug: "east-lyme-ct",
    name: "East Lyme",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in East Lyme and Niantic, CT. Beach cottages, Black Point, and downtown Niantic shops.",
    lede: "Niantic is the name most people use, and it is a real mix: a small downtown, beach cottages, and Black Point's tighter shore streets.",
    paragraphs: [
      "Main Street Niantic can take a commercial entry and a tree without looking like a boardwalk carnival, which is the line we try to hold. Black Point and the beach roads are wind, salt, and houses that may be empty in November. Flanders and the inland side are larger lots and more traditional roofs. Send access details if the cottage is closed for the season.",
      "East Lyme is scheduled with Waterford and Old Lyme.",
    ],
    neighborhoods: ["Niantic", "Black Point", "Flanders", "Main Street"],
    considerations: [
      "Seasonal cottages and access",
      "Downtown Niantic scale",
      "Black Point wind",
    ],
    faqs: [
      {
        q: "Do you install in Black Point?",
        a: "Yes. Include any association rule and the best door or gate contact.",
      },
      {
        q: "Are you lighting downtown Niantic?",
        a: "Yes, for businesses that want a composed entry rather than a full facade of color. Color is available if the building wants it.",
      },
    ],
    nearby: ["waterford-ct", "old-lyme-ct", "new-london-ct", "old-saybrook-ct"],
  },
  {
    slug: "old-lyme-ct",
    name: "Old Lyme",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Old Lyme, CT. Lyme Street, Sound View, and the historic village, kept warm and quiet.",
    lede: "Old Lyme's village is one of the easiest places to overdo. Lyme Street looks better with less.",
    paragraphs: [
      "The historic houses on Lyme Street and around the library want warm white and an entry, not a full outline of every window. Sound View and the shore roads are more exposed and more cottage-like. Rogers Lake and the northern streets sit in the trees. We will recommend the smaller plan when the smaller plan is the one that looks expensive.",
      "Old Lyme is grouped with East Lyme, Old Saybrook, and Lyme's neighboring roads.",
    ],
    neighborhoods: ["Lyme Street", "Sound View", "Rogers Lake"],
    considerations: [
      "Historic village restraint",
      "Shore exposure at Sound View",
      "A bias toward editing, not adding",
    ],
    faqs: [
      {
        q: "Will you keep a Lyme Street house quiet?",
        a: "Yes. That is the default. If you want more, we will do more, and we will still keep the color temperature consistent.",
      },
      {
        q: "Is Sound View included?",
        a: "Yes. It is windier and often a simpler roof, and it is on the same town day.",
      },
    ],
    nearby: ["east-lyme-ct", "old-saybrook-ct", "essex-ct", "waterford-ct"],
  },
  {
    slug: "old-saybrook-ct",
    name: "Old Saybrook",
    state: "Connecticut",
    stateCode: "CT",
    county: "Middlesex County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Old Saybrook, CT. Main Street, Saybrook Point, and the neighborhoods off Route 1.",
    lede: "Old Saybrook is a Main Street, a point, and a lot of residential streets that want a finished roof more than a theme.",
    paragraphs: [
      "Main Street businesses get a commercial quote with hours and a takedown date. Saybrook Point and the water side get coastal hardware. Fenwick is by request and only when access is explicit. The inland streets and Knollwood are standard residential work and the bulk of the town's jobs. We schedule Old Saybrook with Old Lyme and Westbrook.",
      "This is still shoreline Connecticut, our regular range, not an inland trip day.",
    ],
    neighborhoods: ["Main Street", "Saybrook Point", "Knollwood", "Indiantown"],
    considerations: [
      "Main Street commercial rules",
      "Coastal exposure on the point",
      "Fenwick only with clear access",
    ],
    faqs: [
      {
        q: "Do you light Main Street?",
        a: "Yes. Storefronts are quoted around the hours a ladder can be out front.",
      },
      {
        q: "How far west of Westerly is this?",
        a: "Far enough that we group the day with Old Lyme and Westbrook. Near enough that it stays on the regular shoreline calendar.",
      },
    ],
    nearby: ["old-lyme-ct", "westbrook-ct", "essex-ct", "east-lyme-ct"],
    featuredServices: ["commercial-holiday-lighting", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "westbrook-ct",
    name: "Westbrook",
    state: "Connecticut",
    stateCode: "CT",
    county: "Middlesex County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Westbrook, CT. Shoreline cottages and Route 1 homes between Old Saybrook and Clinton.",
    lede: "Westbrook is a smaller shoreline town. Cottages near the water and colonials along the Boston Post Road need different edits.",
    paragraphs: [
      "Beach-side houses take wind and often have a simple roof that looks better with a strong entry than with extra gables. The streets off Route 1 are more conventional and can hold a full eave in warm white. We do not import a Mystic storefront look onto a residential road. Westbrook is booked with Clinton and Old Saybrook.",
    ],
    neighborhoods: ["Westbrook center", "the beach side", "Route 1"],
    considerations: [
      "Simple shore roofs versus inland colonials",
      "Wind on the water streets",
      "Grouped with Clinton and Old Saybrook",
    ],
    faqs: [
      {
        q: "Is Westbrook on the regular shore route?",
        a: "Yes. It sits between Old Saybrook and Clinton on shoreline days.",
      },
      {
        q: "Can a cottage be done in color?",
        a: "Yes, if the whole install is one decision. Half warm and half color is what we will not do.",
      },
    ],
    nearby: ["old-saybrook-ct", "clinton-ct", "old-lyme-ct", "essex-ct"],
  },
  {
    slug: "clinton-ct",
    name: "Clinton",
    state: "Connecticut",
    stateCode: "CT",
    county: "Middlesex County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Clinton, CT. Harbor-area homes and the downtown streets off Route 1.",
    lede: "Clinton is a harbor town with a practical downtown and residential streets set just far enough inland to forget the wind. We do not forget it on the water side.",
    paragraphs: [
      "Houses near the harbor get coastal attachments and a design that stays tidy on smaller lots. Downtown and the Route 1 streets can include a business facade when the sidewalk plan is clear. North of the highway the lots open up and tree wraps start to matter. Clinton is paired with Westbrook and Madison.",
    ],
    neighborhoods: ["the harbor", "downtown Clinton", "north of Route 1"],
    considerations: [
      "Harbor wind and smaller lots",
      "Downtown hours for commercial work",
      "More tree work north of the highway",
    ],
    faqs: [
      {
        q: "Do you come as far as Clinton from Westerly?",
        a: "Yes, on shoreline days. It is a planned route, and the quote includes the travel.",
      },
      {
        q: "Are harbor houses treated differently?",
        a: "The hardware is. The palette is still usually warm white unless you want color.",
      },
    ],
    nearby: ["westbrook-ct", "madison-ct", "old-saybrook-ct", "guilford-ct"],
  },
  {
    slug: "madison-ct",
    name: "Madison",
    state: "Connecticut",
    stateCode: "CT",
    county: "New Haven County",
    region: "ct-shore",
    tier: "extended",
    description:
      "Christmas light installation in Madison, CT. Town-green streets and shoreline homes, scheduled from Westerly on shore days.",
    lede: "Madison's green and its shoreline streets look best when the lighting is calm. We schedule the town on planned shore days from Westerly.",
    paragraphs: [
      "Houses around the town green want warm white and complete, even eaves. Middle Beach and the shore roads add wind. The lots are often large enough that a single well-wrapped tree does more than lighting every shrub. This is farther than Niantic. We group Madison with Guilford and Clinton so the day is full, and travel is part of the written quote.",
    ],
    neighborhoods: ["the town green", "Middle Beach", "Route 1"],
    considerations: [
      "Green-side colonials that show uneven work immediately",
      "Shore wind",
      "Extended shore scheduling, travel included in the quote",
    ],
    faqs: [
      {
        q: "Is Madison a local route or a trip?",
        a: "It is a scheduled shoreline day, not a same-morning Westerly stop. We are clear about that before you book.",
      },
      {
        q: "Do you install around the green?",
        a: "Yes. Those houses are the center of the Madison work.",
      },
    ],
    nearby: ["guilford-ct", "clinton-ct", "branford-ct", "westbrook-ct"],
  },
  {
    slug: "guilford-ct",
    name: "Guilford",
    state: "Connecticut",
    stateCode: "CT",
    county: "New Haven County",
    region: "ct-shore",
    tier: "extended",
    description:
      "Christmas light installation in Guilford, CT. The town green, Mulberry Point, and Sachem's Head on scheduled shore days.",
    lede: "Guilford's green is historic and public. The points south of it are windier than they look on a map.",
    paragraphs: [
      "Houses on the green need the same discipline as Old Lyme or Wickford. Mulberry Point and Sachem's Head need coastal hardware and a design that still feels quiet. We do not treat a point house like a downtown New Haven storefront. Guilford is grouped with Madison and Branford on extended shoreline days, and the quote includes travel from Westerly.",
    ],
    neighborhoods: ["the town green", "Mulberry Point", "Sachem's Head"],
    considerations: [
      "Historic green restraint",
      "Wind on the points",
      "Travel included, days grouped with Madison and Branford",
    ],
    faqs: [
      {
        q: "Do you cover Sachem's Head?",
        a: "Yes, when access is clear. It is part of Guilford shoreline work.",
      },
      {
        q: "Will a green house get multicolor by default?",
        a: "No. Warm white is the starting point.",
      },
    ],
    nearby: ["madison-ct", "branford-ct", "clinton-ct", "new-haven-ct"],
  },
  {
    slug: "branford-ct",
    name: "Branford",
    state: "Connecticut",
    stateCode: "CT",
    county: "New Haven County",
    region: "ct-shore",
    tier: "extended",
    description:
      "Christmas light installation in Branford, CT. Stony Creek, Short Beach, Indian Neck, and the town center.",
    lede: "Branford has a downtown and a set of shore villages, especially Stony Creek, that should not be lit like a mall.",
    paragraphs: [
      "Stony Creek's granite and tight streets want a light touch. Short Beach and Indian Neck are more exposed. The town center can include a business facade on a commercial quote. We schedule Branford with Guilford and, when the day runs longer, New Haven. Travel from Westerly is in the quote. This is extended shoreline, still a real route, not a favor.",
    ],
    neighborhoods: ["Stony Creek", "Short Beach", "Indian Neck", "town center"],
    considerations: [
      "Stony Creek's small scale",
      "Shore exposure at Short Beach",
      "Extended scheduling with Guilford",
    ],
    faqs: [
      {
        q: "Do you install in Stony Creek?",
        a: "Yes. The design stays small and warm unless you ask for more.",
      },
      {
        q: "Is Branford grouped with New Haven?",
        a: "Sometimes, when the calendar supports it. It is always quoted as its own property.",
      },
    ],
    nearby: ["guilford-ct", "new-haven-ct", "madison-ct", "clinton-ct"],
  },
  {
    slug: "essex-ct",
    name: "Essex",
    state: "Connecticut",
    stateCode: "CT",
    county: "Middlesex County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Essex, CT. Village streets and river houses, with warm-white architectural lighting.",
    lede: "Essex village is ivory clapboard and a standard of finish. Lighting that looks temporary will stand out for the wrong reason.",
    paragraphs: [
      "Main Street and the streets off the cove want even warm-white lines, careful entries, and no novelty. North of the village the lots are larger and trees start to help. We schedule Essex with Old Saybrook and Old Lyme. It is shoreline Connecticut, a regular part of the map, and it is one of the towns where we are most willing to argue for doing less.",
    ],
    neighborhoods: ["Essex village", "North Cove", "Ivoryton"],
    considerations: [
      "Village clapboard that shows bad spacing",
      "A strong case for warm white",
      "Scheduled with Old Saybrook and Old Lyme",
    ],
    faqs: [
      {
        q: "Do you cover Ivoryton as well as the village?",
        a: "Yes. Ivoryton is part of Essex work.",
      },
      {
        q: "Can the install be very minimal?",
        a: "Yes. A door and a single clean eave is a complete Essex job when that is what the house wants.",
      },
    ],
    nearby: ["old-saybrook-ct", "old-lyme-ct", "westbrook-ct", "clinton-ct"],
  },
  {
    slug: "north-stonington-ct",
    name: "North Stonington",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "home",
    description:
      "Christmas light installation in North Stonington, CT. Wooded properties between Westerly and Norwich, on the home side of the map.",
    lede: "North Stonington is the rural stretch north of Westerly. The driveways are longer and the trees do more of the talking.",
    paragraphs: [
      "Route 2 and the side roads hold colonials, capes, and newer houses set in woods. We wrap the trees that mark the entrance and light the roof if it reads from the yard. Village center properties are smaller and closer to the road. This is home-side Connecticut with Hopkinton and Pawcatuck, not a shoreline village and not a Norwich trip.",
    ],
    neighborhoods: ["North Stonington village", "Route 2", "the side roads toward Hopkinton"],
    considerations: [
      "Tree-forward rural lots",
      "Close enough to Westerly to sit on home routes",
      "Longer driveways",
    ],
    faqs: [
      {
        q: "Is North Stonington considered local?",
        a: "Yes. It is on the Westerly side of Connecticut, with Hopkinton and Pawcatuck.",
      },
      {
        q: "Do you wrap pines and hardwoods?",
        a: "Trunks, yes, when they are part of the view. We will not climb a hazardous tree to wrap a tip nobody sees.",
      },
    ],
    nearby: ["hopkinton-ri", "pawcatuck-ct", "ledyard-ct", "stonington-ct"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "ledyard-ct",
    name: "Ledyard",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Ledyard, CT. Gales Ferry, Ledyard Center, and larger lots above the Thames.",
    lede: "Ledyard is larger lots between Groton and Preston. Most requests are houses, trees, and a driveway, not a village storefront.",
    paragraphs: [
      "Gales Ferry, down toward the river, and Ledyard Center are both in scope. The roofs vary. The common thread is space: you can usually see a wrapped tree, and you usually should. Avery Hill and the residential roads east of Route 12 follow the same idea. We schedule Ledyard with Groton, North Stonington, and Preston.",
    ],
    neighborhoods: ["Gales Ferry", "Ledyard Center", "Avery Hill"],
    considerations: [
      "Larger lots and visible trees",
      "A mix of older and newer roofs",
      "Grouped with Groton and Preston",
    ],
    faqs: [
      {
        q: "Do you cover Gales Ferry?",
        a: "Yes. It is part of regular Ledyard work.",
      },
      {
        q: "Is this close to Westerly?",
        a: "Close enough for the New London County calendar. It is not the same five-minute hop as Pawcatuck, and we do not describe it that way.",
      },
    ],
    nearby: ["groton-ct", "preston-ct", "north-stonington-ct", "norwich-ct"],
  },
  {
    slug: "preston-ct",
    name: "Preston",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Preston, CT. Preston City and the rural roads between Norwich and Ledyard.",
    lede: "Preston is rural Connecticut between Norwich and the river towns. Expect trees, setbacks, and a straightforward residential quote.",
    paragraphs: [
      "Preston City and the roads toward Ledyard and Norwich are colonials and capes on larger parcels. We design for the yard you pull into. Commercial work is rare here and gets quoted only when the site is specific. Preston shares days with Ledyard and Norwich.",
    ],
    neighborhoods: ["Preston City", "the roads toward Norwich", "the roads toward Ledyard"],
    considerations: [
      "Rural setbacks",
      "Tree wraps as a primary feature",
      "Scheduled with Ledyard and Norwich",
    ],
    faqs: [
      {
        q: "Is Preston far enough to be a special trip?",
        a: "No. It is New London County, on the regular Connecticut calendar.",
      },
      {
        q: "Do you need a site visit?",
        a: "Photos cover many of these houses. Long drives and steep roofs are the cases where we come look.",
      },
    ],
    nearby: ["ledyard-ct", "norwich-ct", "north-stonington-ct", "montville-ct"],
  },
  {
    slug: "norwich-ct",
    name: "Norwich",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Norwich, CT. Norwichtown, Chelsea Parade, Broadway, and downtown commercial buildings.",
    lede: "Norwich has a real historic district and a downtown of larger buildings. We do not pretend they are one kind of job.",
    paragraphs: [
      "Norwichtown and the streets around Chelsea Parade and Broadway are some of the better residential architecture in this part of Connecticut. Warm white, measured eaves, and entries matter. Downtown commercial and the mill-scale buildings need a visit, a contact on site, and a takedown date. Taftville and the outer neighborhoods are more ordinary residential work and can often be quoted from photos.",
      "Norwich is a regular New London County day with Preston, Montville, and Ledyard.",
    ],
    neighborhoods: ["Norwichtown", "Chelsea Parade", "Broadway", "Taftville", "downtown"],
    considerations: [
      "Historic residential streets that show sloppy lines",
      "Downtown buildings that need a site visit",
      "Regular county scheduling, not an extended trip",
    ],
    faqs: [
      {
        q: "Do you light Norwichtown homes?",
        a: "Yes. That is the residential work we most want to do carefully in Norwich.",
      },
      {
        q: "Can a downtown business book?",
        a: "Yes, after we see the access and the height. The quote will not be a residential package with a different address.",
      },
    ],
    nearby: ["preston-ct", "montville-ct", "ledyard-ct", "north-stonington-ct"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "custom-displays"],
  },
  {
    slug: "montville-ct",
    name: "Montville",
    state: "Connecticut",
    stateCode: "CT",
    county: "New London County",
    region: "ct-shore",
    tier: "primary",
    description:
      "Christmas light installation in Montville, CT. Uncasville, Oakdale, and Chesterfield homes away from the commercial strip.",
    lede: "Montville's residential streets are the job. The commercial strip is a different request, and we keep those quotes apart.",
    paragraphs: [
      "Oakdale, Chesterfield, and the residential parts of Uncasville are houses on lots that can hold a roofline and a tree. We are not trying to compete with large entertainment lighting nearby. If you want a home that looks calm from the road, that is the brief. Commercial sites get a commercial quote with hours and power confirmed.",
      "Montville is scheduled with Norwich, New London, and Waterford.",
    ],
    neighborhoods: ["Oakdale", "Chesterfield", "Uncasville"],
    considerations: [
      "Residential work kept distinct from the commercial strip",
      "Standard roofs and front-yard trees",
      "Grouped with Norwich and New London",
    ],
    faqs: [
      {
        q: "Do you install in Uncasville?",
        a: "Yes, for homes and for businesses that want architectural lighting rather than a spectacle.",
      },
      {
        q: "Will you match a neighboring commercial display?",
        a: "Not if it fights the house. We will light your property so it looks finished on its own.",
      },
    ],
    nearby: ["norwich-ct", "waterford-ct", "new-london-ct", "preston-ct"],
  },
  {
    slug: "new-haven-ct",
    name: "New Haven",
    state: "Connecticut",
    stateCode: "CT",
    county: "New Haven County",
    region: "ct-extended",
    tier: "extended",
    description:
      "Christmas light installation in New Haven, CT. East Rock, Westville, and Wooster Square on scheduled days from Westerly.",
    lede: "New Haven is a scheduled trip from Westerly, not a local route. When the project is real, we put it on a city day and the quote includes the drive.",
    paragraphs: [
      "East Rock, Westville, and Wooster Square are the residential neighborhoods where a careful roofline belongs. Houses are close, historic, and full of detail that a heavy outline ruins. Commercial work on Chapel or in a business district needs access, hours, and insurance sorted before we reserve a crew. We do not advertise same-week emergency installs from the Rhode Island shore. We do take New Haven when the date is planned.",
      "Branford and Guilford often share the travel day. If your job can flex by a few days, say so. Grouping is what makes the trip make sense.",
    ],
    neighborhoods: ["East Rock", "Westville", "Wooster Square", "Morris Cove"],
    considerations: [
      "Extended scheduling, travel written into the quote",
      "Historic houses that need editing",
      "Commercial work only with access and insurance sorted",
    ],
    faqs: [
      {
        q: "Will you claim to be a New Haven neighborhood installer?",
        a: "No. We are a Westerly company that takes New Haven on planned days. The work is the same standard. The logistics are honest.",
      },
      {
        q: "Which neighborhoods are the best fit?",
        a: "East Rock, Westville, Wooster Square, and Morris Cove are the ones we are usually asked about, and all four are in scope.",
      },
    ],
    nearby: ["branford-ct", "guilford-ct", "hartford-ct", "fairfield-county-ct"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "hartford-ct",
    name: "Hartford",
    state: "Connecticut",
    stateCode: "CT",
    county: "Hartford County",
    region: "ct-extended",
    tier: "extended",
    description:
      "Christmas light installation in Hartford, CT. West End homes and commercial properties on scheduled route days from Westerly.",
    lede: "Hartford is a dedicated day from Westerly, not a stop on the way to Mystic. Larger homes and well-defined commercial jobs are the ones that belong on that day.",
    paragraphs: [
      "The West End and the residential streets with a real facade are the Hartford work that fits us: warm architectural light, a written quote, a takedown date. Downtown commercial lighting is in scope when there is a site contact, a loading plan, and enough of a project to justify the crew. We also group nearby towns — West Hartford, Wethersfield, Glastonbury — onto a Hartford day when more than one job is ready.",
      "If you need a single small house lit on 48 hours' notice in December, we will probably say no. If you can hold a date, we can plan the trip properly.",
    ],
    neighborhoods: ["West End", "West Hartford on grouped days", "Wethersfield", "Glastonbury"],
    considerations: [
      "A dedicated travel day, disclosed in the quote",
      "Better fit for defined residential and commercial projects",
      "Nearby towns grouped rather than driven one at a time",
    ],
    faqs: [
      {
        q: "Do you serve West Hartford too?",
        a: "Yes, when it can share a Hartford day. Mention it and we will schedule accordingly.",
      },
      {
        q: "Is travel extra?",
        a: "Travel is included in the written number. You will not see a surprise mileage line after the install.",
      },
    ],
    nearby: ["central-connecticut-ct", "new-haven-ct", "quiet-corner-ct", "norwich-ct"],
  },
  {
    slug: "fairfield-county-ct",
    name: "Fairfield County",
    state: "Connecticut",
    stateCode: "CT",
    county: "Fairfield County",
    region: "ct-extended",
    tier: "extended",
    description:
      "Christmas light installation for Fairfield County, CT. Greenwich, Stamford, Darien, New Canaan, Norwalk, Westport, and Fairfield on scheduled days.",
    lede: "Fairfield County is the far end of the state from Westerly. We take it when the project is defined and the crew can spend a real day there.",
    paragraphs: [
      "Greenwich, Stamford, Darien, New Canaan, Norwalk, Westport, Fairfield, and Southport are full of houses that reward exactly the kind of lighting we do: warm white, precise eaves, trees used once and used well. The distance is the constraint, not the architecture. A quote for this county includes travel and assumes we are grouping work or installing a property large enough to stand on its own. We will not describe ourselves as the local Stamford crew. We will do the work at the same standard as Watch Hill, on a day that was actually planned.",
      "Historic districts, associations, and insurance requests are common here. Send them with the first note.",
    ],
    neighborhoods: ["Greenwich", "Stamford", "Darien", "New Canaan", "Norwalk", "Westport", "Fairfield", "Southport"],
    considerations: [
      "Distance is real and is written into the quote",
      "Best for larger homes and grouped neighborhood days",
      "Insurance and association paperwork handled up front",
    ],
    faqs: [
      {
        q: "Which Fairfield County towns do you cover?",
        a: "Greenwich, Stamford, Darien, New Canaan, Norwalk, Westport, Fairfield, Southport, and the towns between them when the day is scheduled.",
      },
      {
        q: "Can a single cottage book a Fairfield County day?",
        a: "Rarely on its own. A substantial house, or two properties that can share the day, is the honest fit.",
      },
    ],
    nearby: ["new-haven-ct", "branford-ct", "hartford-ct", "old-saybrook-ct"],
    featuredServices: ["residential-installation", "roofline-lighting", "tree-and-landscape-wrapping", "commercial-holiday-lighting"],
  },
  {
    slug: "quiet-corner-ct",
    name: "Quiet Corner",
    state: "Connecticut",
    stateCode: "CT",
    county: "Windham County",
    region: "ct-extended",
    tier: "extended",
    description:
      "Christmas light installation in Connecticut's Quiet Corner. Putnam, Killingly, Plainfield, Sterling, and Brooklyn on scheduled days.",
    lede: "The Quiet Corner sits north of Westerly across a rural map. Wooded properties in Putnam, Killingly, Plainfield, Sterling, and Brooklyn are a natural fit when we build a northern Connecticut day.",
    paragraphs: [
      "These are tree-and-roofline towns: colonials, capes, and houses set back from Route 6, Route 12, and Route 14. Danielson, Putnam's downtown, and the mill villages want a lighter hand than a house on a five-acre lot. We group this territory so the drive from Westerly produces a full day. Travel is in the quote. If you are in Sterling or Plainfield, you are closer than Putnam, and the schedule can reflect that.",
    ],
    neighborhoods: ["Putnam", "Killingly", "Danielson", "Plainfield", "Sterling", "Brooklyn"],
    considerations: [
      "Tree-forward rural properties",
      "Mill villages that want a lighter hand",
      "Travel disclosed, days grouped",
    ],
    faqs: [
      {
        q: "Is the Quiet Corner actually served?",
        a: "Yes, on scheduled days. It is closer than Fairfield County and farther than Pawcatuck, and the quote matches that.",
      },
      {
        q: "Do you wrap trees out here?",
        a: "Yes. On many of these properties the trees are the main event.",
      },
    ],
    nearby: ["north-stonington-ct", "norwich-ct", "hartford-ct", "burrillville-ri"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "central-connecticut-ct",
    name: "Central Connecticut",
    state: "Connecticut",
    stateCode: "CT",
    county: "Hartford County",
    region: "ct-extended",
    tier: "extended",
    description:
      "Christmas light installation in central Connecticut. Middletown, Meriden, New Britain, Waterbury, and nearby towns on scheduled days.",
    lede: "Central Connecticut is served on planned days from Westerly. Middletown, Meriden, New Britain, Waterbury, Bristol, Southington, and Cheshire are the towns we group.",
    paragraphs: [
      "The right projects are houses with a clear front elevation and commercial sites with a real facade and a site contact. We are not the crew that lives ten minutes away, and we will not pretend a December rush job in Waterbury can jump the shoreline calendar. If you can pick a week, we can build a central Connecticut day and put travel in the number before you accept it.",
      "Residential design is the same as the rest of the state: warm white unless you want color, clips instead of nails, takedown on a date we choose now.",
    ],
    neighborhoods: ["Middletown", "Meriden", "New Britain", "Waterbury", "Bristol", "Southington", "Cheshire"],
    considerations: [
      "Grouped travel days, disclosed in the quote",
      "Best for defined projects, not last-minute single shrubs",
      "Same install standard as the shoreline",
    ],
    faqs: [
      {
        q: "Which central Connecticut towns are included?",
        a: "Middletown, Meriden, New Britain, Waterbury, Bristol, Southington, Cheshire, and the towns between them when we are already building that day.",
      },
      {
        q: "Can you quote from photos?",
        a: "For many houses, yes. Tall commercial buildings get a visit.",
      },
    ],
    nearby: ["hartford-ct", "new-haven-ct", "old-saybrook-ct", "quiet-corner-ct"],
  },
];
