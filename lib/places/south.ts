import type { Place } from "@/lib/types";

export const southPlaces: Place[] = [
  {
    slug: "westerly-ri",
    name: "Westerly",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Westerly, RI. WDGLOW designs, installs, maintains, and removes holiday lighting for homes and downtown businesses.",
    lede: "Westerly is home base. The houses change completely between downtown, Dunn's Corners, Avondale, and the shore, and the lighting has to change with them.",
    paragraphs: [
      "A Westerly install is planned around the block, not a package. Downtown around Wilcox Park still has Victorian and Greek Revival detail that looks wrong under a heavy color outline. Dunn's Corners and White Rock are a different roof and a different ladder plan. Beach streets toward Misquamicut take more wind than a sheltered yard off Granite Street. We quote the house in front of us.",
      "November and the first week of December are built from Westerly outward. If you want lights before Thanksgiving, say so immediately. If you own a shop near Dixon Square or a property that needs an association certificate, put that on the request so the date and the paperwork land in the same quote. Watch Hill, Misquamicut, and Weekapaug have their own pages because people search for them that way. They are still Westerly, and they are still on this crew's first routes.",
      "Bradford, Shelter Harbor, and Avondale sit in the same week as downtown. You do not need a separate company because your mailing address says one village and your driveway sits in another.",
    ],
    neighborhoods: ["Downtown", "Watch Hill", "Misquamicut", "Weekapaug", "Dunn's Corners", "Avondale", "Shelter Harbor", "Bradford", "White Rock"],
    considerations: [
      "Salt air and November wind on anything south of Route 1",
      "Older downtown detail that should be outlined, not buried",
      "Shops and houses on the same weekly routes",
    ],
    faqs: [
      {
        q: "Do you cover every part of Westerly?",
        a: "Yes. Downtown, Watch Hill, Misquamicut, Weekapaug, Dunn's Corners, Avondale, Shelter Harbor, Bradford, and White Rock are all home-market routes.",
      },
      {
        q: "Can a Westerly home still be lit before Thanksgiving?",
        a: "Some can, and some cannot. Send the request with the date you care about. We would rather give you an early-December day than pretend a full week is still open.",
      },
    ],
    nearby: ["watch-hill-ri", "misquamicut-ri", "weekapaug-ri", "pawcatuck-ct", "charlestown-ri", "hopkinton-ri"],
    featuredServices: ["residential-installation", "roofline-lighting", "commercial-holiday-lighting", "takedown-and-storage"],
  },
  {
    slug: "watch-hill-ri",
    name: "Watch Hill",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Watch Hill, Rhode Island. Quiet rooflines and tree lighting for shingle-style houses and waterfront properties.",
    lede: "Watch Hill rewards restraint. The houses are the point. Lighting should trace them and then get out of the way.",
    paragraphs: [
      "Most Watch Hill work is warm white on a shingle-style or weathered facade, with one or two trees if they frame the entry. A full multicolor outline fights the architecture and the dark around the point. We plan for wind off the sound, longer walks from the truck, and properties where the crew needs to be quiet and finished when we said we would be.",
      "Bay Street and the village are a different scale than the residential lanes. A small commercial front can be lit. A large lawn display usually cannot, and we will say that. If the house is a seasonal home, we can install from a clear access plan and send photos when we leave.",
    ],
    neighborhoods: ["Bay Street", "the Point", "ocean-side lanes", "Napatree approach"],
    considerations: [
      "Wind and salt on exposed elevations",
      "Shingle architecture that wants warm white, not color",
      "Access, parking, and privacy planned before install day",
    ],
    faqs: [
      {
        q: "Do you use color in Watch Hill?",
        a: "Only when you specifically want it. The default here is warm white, short runs, and trees that support the house.",
      },
      {
        q: "Can you work from photos if we are away?",
        a: "For many houses, yes. Steep or complex roofs still need a walkthrough. We will tell you which one yours is.",
      },
    ],
    nearby: ["westerly-ri", "misquamicut-ri", "weekapaug-ri", "stonington-ct"],
  },
  {
    slug: "misquamicut-ri",
    name: "Misquamicut",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Misquamicut, RI. Coastal-rated lighting for beach cottages and shoreline houses near Westerly.",
    lede: "Misquamicut is wind, salt, and simpler rooflines. The install has to look cheerful without failing in the first storm.",
    paragraphs: [
      "Cottages and raised houses along Atlantic Avenue and the side streets take weather that a downtown Westerly yard never sees. We use connections and clips that can live in that spray, and we do not leave loose tails that become a problem on a wet night. Color is more at home here than it is in Watch Hill, if that is what the house wants. Warm white still looks right on the quieter streets.",
      "Many of these homes are closed up after the beach season. Send the access plan with the request: who has the key, where the outside outlets are, and whether the breaker panel is labeled. A dark outlet is the most common reason a shoreline job slips a day.",
    ],
    neighborhoods: ["Atlantic Avenue", "Montauk Avenue side streets", "Pleasant View", "Shore Road"],
    considerations: [
      "Salt spray and sustained wind",
      "Seasonal houses with limited midweek access",
      "Shorter rooflines where the entry and a tree do more than extra eaves",
    ],
    faqs: [
      {
        q: "Will beach weather knock the lights down?",
        a: "We build for it. Nothing on the coast is storm-proof, which is why maintenance exists, but we do not hang indoor-grade sets and hope.",
      },
      {
        q: "Do you light rental cottages?",
        a: "Yes, with the owner's approval and a clear rule about color and takedown. Managers can be the billing contact.",
      },
    ],
    nearby: ["westerly-ri", "watch-hill-ri", "weekapaug-ri", "charlestown-ri"],
  },
  {
    slug: "weekapaug-ri",
    name: "Weekapaug",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Weekapaug, Rhode Island. Understated warm-white lighting for shoreline homes near Westerly.",
    lede: "Weekapaug is a private shoreline, not a display contest. The work should feel settled when you drive up.",
    paragraphs: [
      "Houses around Weekapaug Breachway and the pond side usually want a clean eave, a composed door, and restraint everywhere else. We treat it closer to Watch Hill than to Misquamicut's cottage streets: warm white, careful clips, and no lawn motifs unless you ask for one and the site can hold it in the wind.",
      "Access is the whole job. Narrow drives, shared lanes, and owners who are not on site in November are normal. The quote includes how we get in and where we park, not just how many feet of eave you have.",
    ],
    considerations: [
      "Exposed shoreline wind",
      "A preference for warm white and short, exact lines",
      "Access plans for owners who are away",
    ],
    faqs: [
      {
        q: "Is Weekapaug on the regular Westerly schedule?",
        a: "Yes. It is part of the home market, not a special trip.",
      },
      {
        q: "Can the lighting stay very minimal?",
        a: "That is the usual request, and it is often the better design. A door, a roof edge, and one tree is a complete Weekapaug job.",
      },
    ],
    nearby: ["westerly-ri", "misquamicut-ri", "charlestown-ri", "watch-hill-ri"],
  },
  {
    slug: "charlestown-ri",
    name: "Charlestown",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Charlestown, RI, including the beaches and Quonochontaug. Coastal installs with January removal.",
    lede: "Charlestown stretches from sheltered inland yards to beach roads that take a full Atlantic wind. We quote those as different houses.",
    paragraphs: [
      "Charlestown Beach, Quonochontaug, and the streets off Route 1 see the same salt and gusts as Misquamicut. Inland, toward Carolina and the northern side of town, the lots get wooded and the work shifts toward trees and longer driveways. Ninigret and the coastal ponds sit between those two, with low houses and big sky. A single package price would be a fiction here.",
      "We run Charlestown with Westerly. If your house is on a barrier or a private beach road, tell us about parking passes and gate codes in the first message so the crew is not stopped at the entrance.",
    ],
    neighborhoods: ["Charlestown Beach", "Quonochontaug", "Cross Mills", "Carolina"],
    considerations: [
      "Beach-road wind versus inland tree work",
      "Gate and parking rules on private roads",
      "Low roofs that still need clean corners, not more lamps",
    ],
    faqs: [
      {
        q: "Do you install in Quonochontaug?",
        a: "Yes. Send the road name and any guest-pass rule with the request.",
      },
      {
        q: "Are inland Charlestown properties a separate trip?",
        a: "No. They sit on the same South County days as the beaches. The design is just different: more tree, less salt.",
      },
    ],
    nearby: ["westerly-ri", "weekapaug-ri", "south-kingstown-ri", "richmond-ri"],
  },
  {
    slug: "hopkinton-ri",
    name: "Hopkinton",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Hopkinton, RI. Tree wrapping and rooflines for Hope Valley, Ashaway, and wooded lots near Westerly.",
    lede: "Hopkinton is five minutes from Westerly and a completely different kind of property: wooded lots, dark roads, and trees that matter more than extra roof edge.",
    paragraphs: [
      "Hope Valley, Ashaway, and Rockville are on our home routes. Houses often sit back from the road, so the lighting has to read at the end of a driveway, not just at the curb of a village lot. Trunk wraps and one clean roof line usually do more than outlining every gable. Canonchet and the larger parcels north of Route 138 get the same treatment: we light what you see when you arrive.",
      "Power is the practical question. Tell us where the outside outlets are and whether the drive is tight for a van. Long driveways are normal here and they belong in the quote.",
    ],
    neighborhoods: ["Hope Valley", "Ashaway", "Rockville", "Canonchet"],
    considerations: [
      "Wooded lots where trees outrank extra roofline",
      "Longer driveways and limited outlet locations",
      "Dark surroundings, so warm white carries farther",
    ],
    faqs: [
      {
        q: "Is Hopkinton close enough to be on the Westerly crew?",
        a: "Yes. It is home territory, especially Hope Valley and Ashaway.",
      },
      {
        q: "Do you wrap large trees?",
        a: "We wrap trunks and the branch structure we can do safely. If a tree needs a bucket or sits on a service drop, we will say no rather than guess.",
      },
    ],
    nearby: ["westerly-ri", "richmond-ri", "exeter-ri", "north-stonington-ct"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "richmond-ri",
    name: "Richmond",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "home",
    description:
      "Christmas light installation in Richmond, RI, including Wyoming, Carolina, and Shannock. Home-route service from Westerly.",
    lede: "Richmond is mill villages and wooded residential roads between Westerly and the rest of South County. The installs are usually houses, not storefronts.",
    paragraphs: [
      "Wyoming, Carolina, Kenyon, and Shannock each have a cluster of older houses close to the road and larger lots farther out. We light both. Village houses need a tidy eave and a door that does not overwhelm a small facade. The back roads want tree work and a roof you can pick out at the end of the drive.",
      "Richmond sits on the same weekly plan as Hopkinton and Westerly. You are not waiting on a northern crew to pass through.",
    ],
    neighborhoods: ["Wyoming", "Carolina", "Shannock", "Kenyon"],
    considerations: [
      "Small village facades versus deep wooded lots",
      "Older houses with mixed gutter conditions",
      "Home-route scheduling from Westerly",
    ],
    faqs: [
      {
        q: "Do you cover Shannock and Wyoming?",
        a: "Yes. Both are part of regular Richmond work.",
      },
      {
        q: "Can you light a house with no gutter?",
        a: "Often, with the right clip on the fascia or by shifting the line. We will not nail the roof to make up for a missing gutter.",
      },
    ],
    nearby: ["hopkinton-ri", "charlestown-ri", "exeter-ri", "westerly-ri"],
  },
  {
    slug: "south-kingstown-ri",
    name: "South Kingstown",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "primary",
    description:
      "Christmas light installation in South Kingstown, RI. Wakefield, Peace Dale, Matunuck, and Kingston homes and small businesses.",
    lede: "South Kingstown is four towns wearing one name. Wakefield, Peace Dale, Matunuck, and Kingston do not take the same lighting.",
    paragraphs: [
      "Wakefield and Peace Dale are village streets: colonials, capes, and storefronts around High Street and Kingstown Road that look best with a disciplined roofline and a real entry. Matunuck and Snug Harbor are closer to the Charlestown problem, wind and lower houses near the ponds. Kingston, up by the university, is older street trees and houses set under a canopy. We schedule the town as one area and design each stop on its own.",
      "Commercial work on Main Street in Wakefield can share a day with residential work in Matunuck. Tell us if you need to be dark the first week of January for a rental turnover. That date gets written down before we install.",
    ],
    neighborhoods: ["Wakefield", "Peace Dale", "Matunuck", "Kingston", "Snug Harbor"],
    considerations: [
      "Village commercial and residential on the same streets",
      "Coastal wind in Matunuck versus canopy shade in Kingston",
      "Rental calendars that need a hard takedown date",
    ],
    faqs: [
      {
        q: "Do you install in both Wakefield and Matunuck?",
        a: "Yes. They are both South Kingstown, and both are on the South County calendar.",
      },
      {
        q: "Can a shop on Main Street get a simpler package than a house?",
        a: "Yes. A facade, an entry, and a tree if you have one. We do not drag a residential lawn display onto a village sidewalk.",
      },
    ],
    nearby: ["narragansett-ri", "charlestown-ri", "north-kingstown-ri", "richmond-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "tree-and-landscape-wrapping"],
  },
  {
    slug: "narragansett-ri",
    name: "Narragansett",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "primary",
    description:
      "Christmas light installation in Narragansett, RI. The Pier, Bonnet Shores, Boston Neck, and Galilee, installed and removed by WDGLOW.",
    lede: "Narragansett houses are built for a view and a wind. Lighting has to survive both and still look like it belongs on Ocean Road.",
    paragraphs: [
      "The Pier and Ocean Road are exposed. Large shingle houses want warm white along the major lines, not every jog in the roof. Bonnet Shores and the private-road neighborhoods need the same access conversation we have in Weekapaug: codes, parking, and where a ladder can actually stand. Boston Neck is grander lots and longer drives. Galilee is commercial, salty, and practical — entries and buildings, not residential romance.",
      "We group Narragansett with South Kingstown days. If your house is on the ocean side, expect the quote to mention attachment and wind, not just footage.",
    ],
    neighborhoods: ["The Pier", "Ocean Road", "Bonnet Shores", "Boston Neck", "Galilee"],
    considerations: [
      "Open ocean wind on Ocean Road and the Pier",
      "Private-road access in Bonnet Shores",
      "Commercial work in Galilee kept separate from house design",
    ],
    faqs: [
      {
        q: "Do you install on Ocean Road?",
        a: "Yes. Those houses are a core Narragansett job: warm white, solid attachments, and a takedown that does not wait until spring.",
      },
      {
        q: "Can you light a Galilee business?",
        a: "Yes. Send the frontage and the hours you can have a crew in the lot.",
      },
    ],
    nearby: ["south-kingstown-ri", "north-kingstown-ri", "jamestown-ri", "charlestown-ri"],
  },
  {
    slug: "exeter-ri",
    name: "Exeter",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "western-ri",
    tier: "primary",
    description:
      "Christmas light installation in Exeter, RI. Wooded properties and longer driveways off Routes 2, 3, and 102.",
    lede: "Exeter is woods, distance from the road, and houses you light for the arrival, not for passing traffic.",
    paragraphs: [
      "Properties off Route 102, Route 3, and Route 2 often sit in a clearing. The roof may be simple. The trees are the elevation. We wrap what frames the house and outline the roof only where it still reads after the leaves are down. Arcadia-adjacent roads can be narrow. Tell us if a large van will need a turnaround.",
      "Exeter is scheduled with Hopkinton and West Greenwich, not as an afterthought on a Providence day.",
    ],
    considerations: [
      "Long driveways and turnaround room",
      "Tree-forward designs on wooded lots",
      "Dark roads where warm white is plenty",
    ],
    faqs: [
      {
        q: "Is Exeter too rural for a lighting crew?",
        a: "No. Rural is most of this job in western Rhode Island. We need a sound driveway and a working outlet more than a sidewalk.",
      },
      {
        q: "Do you require a site visit?",
        a: "Photos of the approach, the front, and the trees cover many Exeter houses. If the roof is steep or the trees are huge, we visit.",
      },
    ],
    nearby: ["hopkinton-ri", "richmond-ri", "west-greenwich-ri", "south-kingstown-ri"],
    featuredServices: ["tree-and-landscape-wrapping", "residential-installation", "roofline-lighting", "takedown-and-storage"],
  },
  {
    slug: "north-kingstown-ri",
    name: "North Kingstown",
    state: "Rhode Island",
    stateCode: "RI",
    county: "Washington County",
    region: "south-county",
    tier: "primary",
    description:
      "Christmas light installation in North Kingstown, RI. Wickford village, Saunderstown, and Quonset commercial properties.",
    lede: "North Kingstown splits cleanly in two: Wickford and Saunderstown, which want care, and Quonset, which wants a schedule.",
    paragraphs: [
      "Wickford village is dense, historic, and close to the street. Brown Street and the side lanes look best with warm white, short runs, and nothing that blocks a sidewalk. Saunderstown and the Boston Neck houses are larger and more exposed, closer in spirit to Jamestown and Narragansett. Quonset commercial buildings are a separate quote: big facades, parking-lot access, and a manager who needs the date in writing.",
      "We do not treat a village colonial and a warehouse elevation as the same product. Tell us which one you have in the first sentence of the request.",
    ],
    neighborhoods: ["Wickford", "Saunderstown", "Quonset", "Davisville"],
    considerations: [
      "Historic village scale in Wickford",
      "Waterfront wind in Saunderstown",
      "Commercial timelines at Quonset",
    ],
    faqs: [
      {
        q: "Do you light Wickford homes and shops?",
        a: "Yes. The village is a priority North Kingstown stop, and the design stays quiet enough for the street.",
      },
      {
        q: "Can a Quonset business book without a home-style consult?",
        a: "You still get a written quote. The visit is about height, power, and hours, not about choosing between two wreaths.",
      },
    ],
    nearby: ["east-greenwich-ri", "narragansett-ri", "jamestown-ri", "warwick-ri"],
    featuredServices: ["residential-installation", "commercial-holiday-lighting", "roofline-lighting", "custom-displays"],
  },
];
