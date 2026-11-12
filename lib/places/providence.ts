import type { Place } from "@/lib/types";

export const providencePlaces: Place[] = [
  {
    slug: "providence-ri",
    name: "Providence",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Providence, RI. East Side, Federal Hill, Elmhurst, and commercial blocks, with written quotes and January removal.",
    lede: "Providence is older houses on tight lots and a commercial city that needs dates, not a cottage package with a different city name.",
    paragraphs: [
      "College Hill and the East Side are clapboard, brick, and roofs that were not designed for a string of nails. We clip what should be clipped and leave elaborate cornices alone when outlining them would look cheap. Federal Hill, the West End, Silver Lake, and Elmhurst are closer to the street and often want a clean, short run plus a door. Commercial work downtown and along the main corridors is scheduled around access, not around a residential calendar.",
      "Providence is a regular northern day from Westerly, about an hour, and we group those jobs. Travel is in the quote. If you need a single small bush lit tomorrow, we will tell you to wait for the next Providence day rather than pretend it is a local stop.",
    ],
    neighborhoods: ["East Side", "College Hill", "Federal Hill", "Elmhurst", "West End", "Silver Lake"],
    considerations: [
      "Tight lots and street parking",
      "Historic detail that should not be over-outlined",
      "Jobs grouped on Providence days, with travel in the quote",
    ],
    faqs: [
      {
        q: "Do you come to the East Side?",
        a: "Yes. It is one of the main reasons we keep a Providence day on the calendar.",
      },
      {
        q: "Can you work with no driveway?",
        a: "Usually. We plan the parking and the ladder before we promise a morning.",
      },
    ],
    nearby: ["cranston-ri", "east-providence-ri", "pawtucket-ri", "north-providence-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "cranston-ri",
    name: "Cranston",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Cranston, RI. Edgewood, Pawtuxet Village, Garden City, and the neighborhoods in between.",
    lede: "Cranston runs from Pawtuxet Village colonials to mid-century streets and commercial Garden City. We do not quote them as one product.",
    paragraphs: [
      "Edgewood and Pawtuxet Village are older, closer to the water, and stronger in warm white with a finished eave. Garden City and the commercial roads are about entries, facades, and a crew that can work a parking lot at a set hour. Knightsville, Auburn, and the western streets are straightforward residential roofs where consistency matters more than novelty.",
      "Cranston shares days with Providence and Warwick. Say which part of the city you are in so we bring the right ladder plan.",
    ],
    neighborhoods: ["Edgewood", "Pawtuxet Village", "Garden City", "Knightsville", "Auburn"],
    considerations: [
      "Village houses in Edgewood and Pawtuxet",
      "Commercial timing in Garden City",
      "Grouped with Providence and Warwick",
    ],
    faqs: [
      {
        q: "Do you cover both Edgewood and western Cranston?",
        a: "Yes. Tell us the neighborhood in the request so the design assumption is right.",
      },
      {
        q: "Can a Garden City business get a maintenance visit?",
        a: "Yes, on lighting we installed. Public-facing outages go to the front of the December list.",
      },
    ],
    nearby: ["providence-ri", "warwick-ri", "johnston-ri", "west-warwick-ri"],
  },
  {
    slug: "warwick-ri",
    name: "Warwick",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Kent County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Warwick, RI. Warwick Neck, Conimicut, Oakland Beach, Apponaug, and commercial properties.",
    lede: "Warwick is a large residential city with a real coastline. Neck and beach houses are not the same job as a ranch west of Route 2.",
    paragraphs: [
      "Warwick Neck, Conimicut, Oakland Beach, and Buttonwoods take bay wind and often sit on tighter waterfront lots. Apponaug and Pawtuxet have older houses and a small-business scale. The streets toward Natick and the airport commercial zone are simpler roofs and, on the business side, taller facades. We price the exposure and the height, then we group the city onto Kent County days with East Greenwich and West Warwick.",
      "If you are near the water, tell us whether the outlet is on a deck, a piling, or the back of the garage. That detail saves a return trip.",
    ],
    neighborhoods: ["Warwick Neck", "Conimicut", "Oakland Beach", "Apponaug", "Pawtuxet", "Buttonwoods"],
    considerations: [
      "Bay wind on the Neck and the beaches",
      "Older village houses in Apponaug and Pawtuxet",
      "Commercial height near the main corridors",
    ],
    faqs: [
      {
        q: "Do you install on Warwick Neck?",
        a: "Yes. Those houses are scheduled as waterfront work, with attachments chosen for the exposure.",
      },
      {
        q: "Is Warwick far from Westerly?",
        a: "It is a planned Kent County day, not a same-hour response from a Westerly driveway. The quote includes that.",
      },
    ],
    nearby: ["east-greenwich-ri", "cranston-ri", "west-warwick-ri", "north-kingstown-ri"],
  },
  {
    slug: "west-warwick-ri",
    name: "West Warwick",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Kent County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in West Warwick, RI. Arctic, Crompton, Riverpoint, Clyde, and Phenix homes.",
    lede: "West Warwick is mill villages. The houses are close to the road, and a sloppy roofline is visible to the whole street.",
    paragraphs: [
      "Arctic, Crompton, Riverpoint, Clyde, and Phenix have compact facades, mixed gutters, and short front yards. We light the eave that faces the street and the door, and we skip the add-on in the back that nobody will see. Commercial corners on Main Street can be done on the same day if the hours are clear.",
      "The town sits with Warwick and Coventry on the Kent County calendar.",
    ],
    neighborhoods: ["Arctic", "Crompton", "Riverpoint", "Clyde", "Phenix"],
    considerations: [
      "Narrow mill-village lots",
      "Mixed gutter conditions on older houses",
      "Street-facing lines only, unless the side is part of the view",
    ],
    faqs: [
      {
        q: "Do all five villages get service?",
        a: "Yes. Arctic, Crompton, Riverpoint, Clyde, and Phenix are all West Warwick work.",
      },
      {
        q: "What if the gutter is loose?",
        a: "We will not hang a run from a gutter that cannot hold it. We shift to fascia or we leave that side off and say why.",
      },
    ],
    nearby: ["warwick-ri", "coventry-ri", "east-greenwich-ri", "cranston-ri"],
  },
  {
    slug: "coventry-ri",
    name: "Coventry",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Kent County",
    region: "western-ri",
    tier: "primary",
    description:
      "Christmas light installation in Coventry, RI. Eastern neighborhoods and the larger wooded lots toward Greene and Summit.",
    lede: "Coventry changes from suburban streets in the east to long rural drives in the west. The quote should say which one you are.",
    paragraphs: [
      "Tiogue, Washington, and the eastern side are familiar residential roofs, often with a front-yard tree worth wrapping. Greene, Summit, and the western roads are darker, longer, and more about the approach to the house. Johnson's Pond cottages are smaller and closer together. We do not sell the pond a design meant for a colonial on a one-acre lot.",
      "Coventry is grouped with West Warwick and West Greenwich depending on which end of town you are in.",
    ],
    neighborhoods: ["Tiogue", "Washington", "Greene", "Summit", "Johnson's Pond"],
    considerations: [
      "Suburban east versus wooded west",
      "Cottage lots around the pond",
      "Driveway length on the western roads",
    ],
    faqs: [
      {
        q: "Do you come out to Greene and Summit?",
        a: "Yes. Those are western Rhode Island routes, often paired with West Greenwich or Exeter.",
      },
      {
        q: "Can a smaller pond cottage still book?",
        a: "Yes, if the job is a real install. A single strand on a shrub may not be worth a crew day, and we will say so.",
      },
    ],
    nearby: ["west-warwick-ri", "west-greenwich-ri", "warwick-ri", "foster-ri"],
  },
  {
    slug: "west-greenwich-ri",
    name: "West Greenwich",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Kent County",
    region: "western-ri",
    tier: "primary",
    description:
      "Christmas light installation in West Greenwich, RI. Larger wooded parcels where the trees and the driveway set the job.",
    lede: "West Greenwich is dark roads and houses set back in the trees. Lighting is for the people who live there, not for traffic on I-95.",
    paragraphs: [
      "Lots on the west side of town can be long, wooded, and simple at the roofline. We wrap the trees that mark the house and light the roof if it still matters once you are in the clearing. Nearer the highway and the eastern side, the parcels are a little tighter and the work looks more like Coventry. Either way, tell us if a delivery truck can turn around. That is a practical limit, not a detail.",
      "We schedule West Greenwich with Exeter and western Coventry.",
    ],
    considerations: [
      "Tree-forward designs on large lots",
      "Turnaround room for the van",
      "Dark surroundings that make warm white travel farther",
    ],
    faqs: [
      {
        q: "Is a long driveway an extra problem?",
        a: "It is part of the quote if it changes time on site. It does not make the town out of range.",
      },
      {
        q: "Do you light houses that are not visible from the main road?",
        a: "Yes. Most of them are not. We design for the approach you actually use.",
      },
    ],
    nearby: ["exeter-ri", "coventry-ri", "hopkinton-ri", "foster-ri"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "east-providence-ri",
    name: "East Providence",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in East Providence, RI. Riverside, Kent Heights, and the neighborhoods along the Seekonk.",
    lede: "East Providence is riverside neighborhoods and older street grids, with a straight shot to Barrington when we build an East Bay day.",
    paragraphs: [
      "Riverside has a mix of capes, colonials, and houses aimed at the water. Kent Heights and the inland streets are tighter residential roofs. Commercial frontage on the main roads is available when the hours are realistic. We keep residential color consistent. A waterfront house in Riverside usually wants warm white and a solid clip, because the river wind is not theoretical.",
      "East Providence is scheduled with Providence, Barrington, and Warren.",
    ],
    neighborhoods: ["Riverside", "Kent Heights", "Watchemoket", "Riverside Square"],
    considerations: [
      "River wind in Riverside",
      "Compact inland lots",
      "Days shared with Providence and the East Bay",
    ],
    faqs: [
      {
        q: "Do you cover Riverside?",
        a: "Yes. Riverside is the East Providence neighborhood we get asked about most, and it is on the regular list.",
      },
      {
        q: "Can you do a house and a small business in one relationship?",
        a: "Yes. They will still be two quotes if the sites are different. Billing can be combined if you want that.",
      },
    ],
    nearby: ["barrington-ri", "providence-ri", "warren-ri", "pawtucket-ri"],
  },
  {
    slug: "pawtucket-ri",
    name: "Pawtucket",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Pawtucket, RI. Oak Hill, Quality Hill, Fairlawn, and mill-district commercial buildings.",
    lede: "Pawtucket is mill buildings and residential hills. The interesting work is knowing which one you are hiring us for.",
    paragraphs: [
      "Oak Hill, Quality Hill, and Fairlawn are house jobs: porches, gables, and trees on city lots. Downtown mills and commercial lofts are height, access, and a facilities contact. We will not quote a mill facade from a phone photo of the front door. If you have a triple-decker or a single-family on a hill, photos are usually enough.",
      "Pawtucket shares northern days with Central Falls, Providence, and Cumberland.",
    ],
    neighborhoods: ["Oak Hill", "Quality Hill", "Fairlawn", "downtown mills"],
    considerations: [
      "Hill neighborhoods with real porches",
      "Mill buildings that need a site visit",
      "Northern routing with Providence and Cumberland",
    ],
    faqs: [
      {
        q: "Do you light commercial mill buildings?",
        a: "Yes, after a visit. Height and power are the quote. The design is usually architectural lines, not a residential wreath package.",
      },
      {
        q: "Are triple-deckers in scope?",
        a: "Yes, when we can work safely from the street or yard and the owner wants the front elevation lit.",
      },
    ],
    nearby: ["central-falls-ri", "providence-ri", "cumberland-ri", "east-providence-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "central-falls-ri",
    name: "Central Falls",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Central Falls, RI. Tight lots, triple-deckers, and Broad Street commercial frontage.",
    lede: "Central Falls is small lots and buildings close to the sidewalk. The winning install is short, straight, and secure.",
    paragraphs: [
      "Residential work here is often a front elevation only: the eave you see from the street, a porch, a door. Side yards barely exist, so we do not invent a four-sided outline. Commercial frontage on Broad Street and Dexter Street needs an early window and a plan for the ladder. We schedule the city with Pawtucket.",
      "If the outlet is inside a locked hallway, say so. Access, not design, is what delays these jobs.",
    ],
    neighborhoods: ["Broad Street", "Dexter Street", "downtown blocks"],
    considerations: [
      "Front elevations on tight lots",
      "Ladder and parking limits",
      "Scheduled with Pawtucket",
    ],
    faqs: [
      {
        q: "Is a small facade still worth a quote?",
        a: "A full front elevation, yes. A single window, probably not. Send the photo and we will tell you quickly.",
      },
      {
        q: "Do you work for landlords?",
        a: "Yes. The billing contact and the site contact can be different people.",
      },
    ],
    nearby: ["pawtucket-ri", "lincoln-ri", "cumberland-ri", "providence-ri"],
  },
  {
    slug: "north-providence-ri",
    name: "North Providence",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in North Providence, RI. Fruit Hill, Marieville, and Mineral Spring residential streets.",
    lede: "North Providence is compact residential streets. The houses are close, so uneven spacing is the thing people notice.",
    paragraphs: [
      "Fruit Hill, Marieville, and the Mineral Spring corridors are capes, ranches, and raised ranches with straightforward roofs. The craft is even clips, one color temperature, and a door that looks finished. Trees, where they exist in the front yard, are worth wrapping because the roofs are similar from house to house and the tree is what makes yours specific.",
      "We fold North Providence into Providence and Johnston days.",
    ],
    neighborhoods: ["Fruit Hill", "Marieville", "Mineral Spring"],
    considerations: [
      "Close-set houses where spacing shows",
      "Front-yard trees as the distinguishing feature",
      "Grouped with Providence and Johnston",
    ],
    faqs: [
      {
        q: "Do you cover the whole town?",
        a: "Yes. It is a small city and it sits on the Providence calendar.",
      },
      {
        q: "Can neighbors book the same day?",
        a: "If two houses on one street both accept quotes, we will try to hang them together. Mention it in both requests.",
      },
    ],
    nearby: ["providence-ri", "johnston-ri", "lincoln-ri", "cranston-ri"],
  },
  {
    slug: "johnston-ri",
    name: "Johnston",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "providence",
    tier: "primary",
    description:
      "Christmas light installation in Johnston, RI. Residential streets off Atwood and Greenville Avenue, plus commercial frontage.",
    lede: "Johnston is mostly houses on older suburban streets, with commercial work on the main avenues when the site can take a crew safely.",
    paragraphs: [
      "The residential streets off Atwood Avenue and Greenville Avenue are ranches, split-levels, and colonials. We light the street elevation properly instead of adding gadgets. Commercial properties on those same roads are quoted separately, because parking and height are different problems. Scituate is the next town west when a day runs toward the reservoir.",
      "Johnston is a Providence-area date, grouped so the drive from Westerly serves more than one job.",
    ],
    neighborhoods: ["Atwood Avenue side streets", "Greenville Avenue", "Thornton"],
    considerations: [
      "Street-facing residential roofs",
      "Commercial sites quoted for access and height",
      "Providence-area grouping",
    ],
    faqs: [
      {
        q: "Do you install on split-levels?",
        a: "Yes. The upper and lower roofs need a decision about which lines are visible. We do not light a roof nobody can see.",
      },
      {
        q: "Is Johnston a regular area?",
        a: "Yes, on northern Rhode Island days with Providence, North Providence, and Scituate.",
      },
    ],
    nearby: ["cranston-ri", "scituate-ri", "north-providence-ri", "providence-ri"],
  },
  {
    slug: "scituate-ri",
    name: "Scituate",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "western-ri",
    tier: "primary",
    description:
      "Christmas light installation in Scituate, RI. North Scituate village and wooded roads around the reservoir.",
    lede: "Scituate is stone walls, the reservoir, and houses on winding roads. Tree work matters as much as the roof.",
    paragraphs: [
      "North Scituate village is a small center where a careful eave and entry look right. The rest of town, out Chopmist Hill and along the reservoir roads, is larger lots and mature trees. We wrap trunks that frame the house and keep roof lines simple. Roads can be dark and narrow. If your drive needs a spotter or has a steep apron, say so.",
      "Scituate is scheduled with Johnston, Foster, and Glocester.",
    ],
    neighborhoods: ["North Scituate", "Chopmist", "reservoir roads"],
    considerations: [
      "Village scale in North Scituate",
      "Mature trees on reservoir roads",
      "Narrow approaches and steep aprons",
    ],
    faqs: [
      {
        q: "Do you work around the reservoir?",
        a: "Yes. Those roads are normal Scituate work, not a special expedition.",
      },
      {
        q: "Will you staple into a tree?",
        a: "No. Wraps are tensioned and removed in January. We do not fasten into bark.",
      },
    ],
    nearby: ["johnston-ri", "foster-ri", "glocester-ri", "coventry-ri"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "foster-ri",
    name: "Foster",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "western-ri",
    tier: "primary",
    description:
      "Christmas light installation in Foster, RI. Farms, long driveways, and houses along Route 6 and Moosup Valley.",
    lede: "Foster is the western edge of our Rhode Island work: farms, colonials, and driveways that take a minute from the mailbox.",
    paragraphs: [
      "Houses on Route 6, Moosup Valley, and the south side toward the Scituate line usually need a tree plan and a roof that you can see when you reach the yard. Outbuildings get lit only if they are part of the arrival, not because they exist. Tell us about gates, dogs, and where the truck should stop. Those are the details that make a rural install either easy or a lost hour.",
      "We group Foster with Glocester and Scituate so a western day earns the drive.",
    ],
    neighborhoods: ["Moosup Valley", "Route 6", "south Foster"],
    considerations: [
      "Long driveways and gates",
      "Tree and yard scale on farm properties",
      "Grouped with Glocester and Scituate",
    ],
    faqs: [
      {
        q: "Is Foster too far from Westerly?",
        a: "It is a scheduled western day, not a same-morning local route. Once the day is built, it is ordinary work.",
      },
      {
        q: "Can you light a barn as well as the house?",
        a: "If it helps the picture and we can do it safely, yes. It will be its own line on the quote.",
      },
    ],
    nearby: ["glocester-ri", "scituate-ri", "coventry-ri", "west-greenwich-ri"],
  },
  {
    slug: "glocester-ri",
    name: "Glocester",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Glocester, RI. Chepachet village and wooded residential roads off Putnam Pike.",
    lede: "Chepachet is a small historic village. The rest of Glocester is woods. Both are in range on a northern Rhode Island day.",
    paragraphs: [
      "Village houses in Chepachet want the same restraint as Wickford or Hope Valley: warm light, short runs, no carnival. The roads off Putnam Pike open into larger parcels where a wrapped pair of trees will outshine another hundred feet of eave. We design those differently and we schedule them together.",
      "Glocester is paired with Foster, Burrillville, and Smithfield depending on the week's map.",
    ],
    neighborhoods: ["Chepachet", "Putnam Pike", "Harmony"],
    considerations: [
      "Historic village scale in Chepachet",
      "Wooded lots off the pike",
      "Northern days shared with Foster and Burrillville",
    ],
    faqs: [
      {
        q: "Do you install in Chepachet?",
        a: "Yes. Village work stays quiet and warm white unless you ask for something else.",
      },
      {
        q: "Are the rural roads included?",
        a: "Yes. Most Glocester requests are not in the village center.",
      },
    ],
    nearby: ["foster-ri", "burrillville-ri", "smithfield-ri", "scituate-ri"],
  },
  {
    slug: "burrillville-ri",
    name: "Burrillville",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Burrillville, RI. Pascoag, Harrisville, and Mapleville houses and mill-village streets.",
    lede: "Burrillville is mill villages in the woods: Pascoag, Harrisville, and Mapleville, plus houses spread toward Wallum Lake.",
    paragraphs: [
      "Village streets have smaller facades and mixed older gutters. We light what is sound and we skip what is not. Outside the villages, wrapping trees does more of the work, especially where the house sits against dark pines. Wallum Lake properties are farther up the same roads and stay on the Burrillville day rather than becoming their own trip.",
      "This is the north edge of Rhode Island for us. It is still a scheduled day, grouped with Glocester, North Smithfield, and Woonsocket.",
    ],
    neighborhoods: ["Pascoag", "Harrisville", "Mapleville", "Wallum Lake"],
    considerations: [
      "Mill-village facades and older gutters",
      "Pine and hardwood wraps outside the villages",
      "Northern grouping so the drive serves a full day",
    ],
    faqs: [
      {
        q: "Do you come to Pascoag and Harrisville?",
        a: "Yes. Both villages are standard Burrillville stops.",
      },
      {
        q: "Is the northern part of the state actually served?",
        a: "Yes. It is not the same-day response as Westerly. It is a real route day, and the quote is honest about that.",
      },
    ],
    nearby: ["glocester-ri", "north-smithfield-ri", "woonsocket-ri", "foster-ri"],
  },
  {
    slug: "woonsocket-ri",
    name: "Woonsocket",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Woonsocket, RI. Constitution Hill, the North End, and downtown commercial buildings.",
    lede: "Woonsocket is hills, triple-deckers, mill blocks, and single-family streets. Each one has a different safe way to hang lights.",
    paragraphs: [
      "Constitution Hill and the North End residential streets are house jobs with slope and stairs to plan for. Globe and the neighborhoods closer to downtown mix smaller lots and porch fronts. Mill and commercial buildings downtown, along the Blackstone, need a site visit before we name a price. We do not guess the height of a brick block from a listing photo.",
      "Woonsocket is on the northern Rhode Island day with Cumberland, Lincoln, and North Smithfield.",
    ],
    neighborhoods: ["Constitution Hill", "North End", "Globe", "downtown"],
    considerations: [
      "Hills, stairs, and porch access",
      "Mill buildings quoted only after a visit",
      "Northern days with Cumberland and Lincoln",
    ],
    faqs: [
      {
        q: "Do you light triple-deckers in Woonsocket?",
        a: "When it can be done safely and the owner wants the front elevation, yes.",
      },
      {
        q: "Are downtown businesses in scope?",
        a: "Yes, with a visit, a facilities contact, and a takedown date.",
      },
    ],
    nearby: ["cumberland-ri", "north-smithfield-ri", "lincoln-ri", "burrillville-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "cumberland-ri",
    name: "Cumberland",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Cumberland, RI. Diamond Hill, Valley Falls, Arnold Mills, and Berkeley.",
    lede: "Cumberland mixes older village pockets with larger suburban colonials. The newer roofs are easy. The design still has to be even.",
    paragraphs: [
      "Diamond Hill and the northern streets often have bigger colonials, attached garages, and a front-yard tree. Valley Falls is tighter and older. Arnold Mills and Berkeley sit between those scales. We light the architecture you have. A new colonial does not need color to be seen, and an older Valley Falls house does not need every peak outlined.",
      "Cumberland is scheduled with Lincoln, Woonsocket, and Pawtucket.",
    ],
    neighborhoods: ["Diamond Hill", "Valley Falls", "Arnold Mills", "Berkeley"],
    considerations: [
      "Larger colonials in the north of town",
      "Older, tighter streets in Valley Falls",
      "Grouped with Lincoln and Woonsocket",
    ],
    faqs: [
      {
        q: "Do you install in both Valley Falls and Diamond Hill?",
        a: "Yes. Mention the neighborhood so we plan the right day and the right design.",
      },
      {
        q: "Can a new construction house book from photos?",
        a: "Usually. Clean gutters and a simple roof are exactly what photos can describe.",
      },
    ],
    nearby: ["lincoln-ri", "woonsocket-ri", "pawtucket-ri", "north-smithfield-ri"],
  },
  {
    slug: "lincoln-ri",
    name: "Lincoln",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Lincoln, RI. Albion, Manville, Lime Rock, and the newer residential streets.",
    lede: "Lincoln has mill villages and newer subdivisions within a few minutes of each other. We quote the house, not the town average.",
    paragraphs: [
      "Albion and Manville are older and closer to the street. Lime Rock and the newer roads toward the north are larger roofs, attached garages, and foundation plantings that can take a restrained wrap. Say which one you are. A subdivision colonial with intact gutters is one of the cleaner installs we do. A mill-village house may need a different clip and a shorter plan.",
      "Lincoln shares the northern calendar with Cumberland and Woonsocket.",
    ],
    neighborhoods: ["Albion", "Manville", "Lime Rock", "Saylesville"],
    considerations: [
      "Mill villages versus newer subdivisions",
      "Garage-forward facades that need an edited line",
      "Northern Rhode Island scheduling",
    ],
    faqs: [
      {
        q: "Do you cover Manville and Lime Rock?",
        a: "Yes. Both are Lincoln, and both are on the northern route.",
      },
      {
        q: "Should a garage door wall be outlined?",
        a: "Sometimes the roof above it, not the door itself. We will mark it on the quote so you are not surprised.",
      },
    ],
    nearby: ["cumberland-ri", "smithfield-ri", "woonsocket-ri", "north-providence-ri"],
  },
  {
    slug: "smithfield-ri",
    name: "Smithfield",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in Smithfield, RI. Greenville, Stillwater, Esmond, and Georgiaville homes.",
    lede: "Smithfield is larger lots than Providence and a village pattern you can still see in Greenville and Stillwater.",
    paragraphs: [
      "Greenville is the center most people mean: colonials and capes on landscaped lots where a roofline plus one tree is the right composition. Stillwater, Esmond, and Georgiaville keep more of the mill-village scale. We schedule the town with Lincoln, North Providence, and Glocester, and we ask for photos of the front and both front corners because the side returns on these houses are often long enough to matter.",
    ],
    neighborhoods: ["Greenville", "Stillwater", "Esmond", "Georgiaville"],
    considerations: [
      "Landscaped lots in Greenville",
      "Village scale in Stillwater and Esmond",
      "Side returns that photos should include",
    ],
    faqs: [
      {
        q: "Is Greenville the main service area?",
        a: "It is the most requested. Stillwater, Esmond, and Georgiaville are included too.",
      },
      {
        q: "Do you wrap foundation shrubs?",
        a: "When they frame the entry. A hedge around the whole foundation usually looks like a glowing fence, and we will push back.",
      },
    ],
    nearby: ["lincoln-ri", "north-providence-ri", "glocester-ri", "north-smithfield-ri"],
  },
  {
    slug: "north-smithfield-ri",
    name: "North Smithfield",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Providence County",
    region: "northern-ri",
    tier: "primary",
    description:
      "Christmas light installation in North Smithfield, RI. Slatersville, Forestdale, and Branch Village.",
    lede: "North Smithfield is historic mill villages and newer houses between them, at the Massachusetts line.",
    paragraphs: [
      "Slatersville is one of the more careful villages in the state. Lighting there should be warm and architectural. Forestdale and Branch Village are similar in scale. Newer houses on the connecting roads can take a fuller roofline if the gutters are continuous. We do not drop a bright commercial look into Slatersville because a business down the road asked for one.",
      "The town is on the northern day with Woonsocket and Burrillville.",
    ],
    neighborhoods: ["Slatersville", "Forestdale", "Branch Village"],
    considerations: [
      "Historic village restraint in Slatersville",
      "Newer roofs on the connecting roads",
      "Grouped with Woonsocket and Burrillville",
    ],
    faqs: [
      {
        q: "Do you work in Slatersville?",
        a: "Yes. It is the heart of our North Smithfield work, and the design stays quiet.",
      },
      {
        q: "Is the Massachusetts border a problem?",
        a: "No. If the house is in North Smithfield, it is on the Rhode Island northern route.",
      },
    ],
    nearby: ["woonsocket-ri", "burrillville-ri", "smithfield-ri", "lincoln-ri"],
  },
];
