import { Article } from '../types';

export const ARTICLES: Article[] = [
  // --- LEAD STORY (COL 1 TOP) ---
  {
    id: 'saudi-yemeni-airports-strikes',
    title: 'Saudi and Yemeni Airports Are Hit in New Round of Strikes',
    deck: 'At least one person was killed in the Saudi capital, Riyadh, kingdom authorities said. The Houthis said Saudi aircraft struck the Yemeni capital’s airport complex in rapid escalation.',
    kicker: 'DEVELOPING',
    kickerHighlight: true,
    readTime: '3 MIN READ',
    byline: 'Vivian Nereim and Ben Hubbard',
    category: 'World',
    subCategory: 'Middle East',
    publishDate: 'October 12, 2026',
    commentsCount: 38,
    isLive: true,
    relatedLinks: [
      { title: 'Graphic Analysis: How drone salvos slipped through air defenses' },
      { title: 'Flight disruptions mount across Persian Gulf transit hubs' }
    ],
    paragraphs: [
      'RIYADH, Saudi Arabia — A fresh round of strikes struck commercial aviation hubs in both Saudi Arabia and Yemen early Monday morning, marking a sudden and dangerous escalation in the long-simmering regional conflict.',
      'According to the Saudi Civil Aviation Authority, an incoming unmanned aerial system exploded near the domestic passenger apron of King Khalid International Airport in Riyadh. Shrapnel caused structural damage to terminal maintenance facilities and claimed the life of an airport logistics contractor, authorities confirmed.',
      'Hours later, fighter jets from the Saudi-led coalition conducted retaliatory sorties targeting the radar installations and military hangars adjoining Sanaa International Airport in northern Yemen. Houthi officials in Sanaa condemned the strikes as a "grave breach of humanitarian norms" and vowed reciprocal operations against energy infrastructure in the Arabian Peninsula.',
      'International airlines immediately rerouted commercial flights away from Yemeni and central Saudi airspace, causing delays across major Middle Eastern transit corridors including Dubai, Doha, and Abu Dhabi.',
      'Diplomats from the United Nations and regional mediators urged both sides to halt the cycle of counterattacks before fragile back-channel peace negotiations collapse entirely.'
    ],
    pullQuote: 'The proximity of these strikes to civilian aviation terminals marks a qualitative shift that neither capital can easily absorb without severe economic shockwaves.',
    pullQuoteAuthor: 'Nasser Al-Husseini, Senior Gulf Security Analyst'
  },

  // --- STORY 2 (COL 1 MIDDLE) ---
  {
    id: 'saudi-arabia-few-options',
    title: 'Saudi Arabia Has Few Options as Houthis Aim at Heart of Its Ambitions',
    deck: 'The kingdom has sought to de-escalate regional wars to focus on multi-billion dollar economic mega-projects. The latest strikes expose vulnerabilities in that posture.',
    kicker: 'ANALYSIS',
    readTime: '6 min read',
    byline: 'David D. Kirkpatrick',
    category: 'World',
    subCategory: 'Geopolitics',
    publishDate: 'October 12, 2026',
    commentsCount: 84,
    paragraphs: [
      'RIYADH — For Crown Prince Mohammed bin Salman, the core strategic priority of the past five years has been straightforward: project stability, attract foreign direct investment, and realize the monumental transformation outlined in Vision 2030.',
      'Yet every missile and drone that penetrates Saudi air defense batteries chips away at the psychological security underpinning those grand ambitions. Foreign sovereign wealth funds and technology giants hesitant about capital allocation in the Gulf are once again recalibrating risk models.',
      'The dilemma for Riyadh is acute. A full-scale military campaign into northern Yemen risks reopening an expensive quagmire that the kingdom spent years extricating itself from. Conversely, passive reliance on defensive interceptors leaves critical national infrastructure perpetually vulnerable to low-cost asymmetric drone swarms.',
      '"Riyadh is trapped between its economic destiny and the geographic reality of its immediate neighborhood," said a Western diplomat stationed in the Gulf. "You cannot build the city of the future if your skies remain contested."'
    ]
  },

  // --- STORY 3 (COL 1 LOWER) ---
  {
    id: 'israeli-election-like-no-other',
    title: 'An Israeli Election Like No Other',
    deck: 'Facing fractured coalitions and voter exhaustion, party leaders confront an electorate deeply transformed by prolonged regional conflict.',
    kicker: 'THE WORLD',
    readTime: '5 min read',
    byline: 'Cynthia Silva and Zach Wasser',
    category: 'World',
    subCategory: 'Elections',
    publishDate: 'October 12, 2026',
    commentsCount: 54,
    paragraphs: [
      'JERUSALEM — As Israeli citizens prepare to cast their ballots, standard political alignments that defined decades of electoral contests have largely dissolved.',
      'The prolonged conflicts of recent years have redrawn the electoral map. Traditional left-right divides over fiscal management and judicial overhaul have been superseded by urgent existential debates: military conscription equity, the reconstruction of northern border communities, and the nation’s enduring diplomatic footing with Western allies.',
      'Pollsters report unprecedented numbers of undecided voters across both suburban Tel Aviv and rural northern settlements, suggesting a volatile turnout that could produce either a razor-thin coalition or yet another parliamentary deadlock.'
    ]
  },

  // --- STORY 4 (COL 1 BOTTOM) ---
  {
    id: 'taliban-using-europe-fear-migrants',
    title: 'The Taliban Are Using Europe’s Fear of Migrants to Their Advantage',
    deck: 'European nations that condemn the Taliban government for severe human rights crackdowns are quietly seeking its cooperation to expedite deportations.',
    kicker: 'IMMIGRATION',
    readTime: '6 min read',
    byline: 'Tomas Munita',
    category: 'World',
    subCategory: 'Diplomacy',
    publishDate: 'October 12, 2026',
    commentsCount: 112,
    paragraphs: [
      'BERLIN — European ministries have found themselves forced into an awkward diplomatic bargain with Kabul.',
      'Eager to assuage domestic political outrage regarding unauthorized migration, several Western European capitals have opened quiet bilateral channels with the Taliban administration to facilitate the return of rejected asylum seekers.',
      'In exchange, the de facto rulers in Kabul are pressing for consular recognition, technical aid packages, and the unfreezing of state assets. Human rights advocates argue that these transactions confer tacit legitimacy on an authoritarian regime that systematically excludes women from public life.'
    ]
  },

  // --- CENTER COLUMN: THE GREAT READ (DOMINANT FEATURE) ---
  {
    id: 'epic-wilderness-adventure-dogs',
    title: 'He Went Out on an Epic Wilderness Adventure. Only His Dogs Came Back.',
    deck: 'For three years and 750 miles across northern Canada, Steffen Skjottelvik lived an extraordinary life of isolated polar exploration, charting routes untouched for generations. Until the adventure took his life.',
    kicker: 'THE GREAT READ',
    kickerHighlight: false,
    readTime: '14 min read',
    byline: 'Dan Levin',
    category: 'Lifestyle',
    subCategory: 'Feature Dispatch',
    publishDate: 'October 12, 2026',
    commentsCount: 342,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCmb0tkj3TfnvnF5A-UzF6xgpCLJFdEdY7mHdnD5dN6yPY69eKdT6FifXgYogx2exAQ3wZoAPG7CYTbGd6H2nKL2qa7PFSwKwaoG0SXc6UXDtoPGGqeouAB0LFrZoTA-YlOv6NH5mppqu32DSeRg30KAlE3fO6p_zkZnfMKUN6SOfidNUu49jk_S8mO8jsPjNsJDlN__1z9YrnAFjd9Nvkmq84ZvDDO4Ti-t_2KCHQPXvwT4oyNHm',
    imageAlt: 'A rugged Canadian northern subarctic wilderness landscape with jagged pine trees and rocky terrain under an overcast Nordic gray sky.',
    imageCredit: 'Photograph via Steffen Skjottelvik Archive',
    paragraphs: [
      'YELLOWKNIFE, Northwest Territories — When Steffen Skjottelvik stepped onto the frozen tundra in late autumn of 2023 with four Siberian huskies and a handcrafted ash-wood sled, he carried no satellite beacon, no cellular telephone, and no intention of turning back before reaching the Arctic Ocean.',
      'Skjottelvik, 34, a former cartographer from Tromsø, Norway, belonged to a vanishing lineage of purist expeditioners. He believed modern GPS transceivers and emergency extraction helicopters had stripped human exploration of its essential moral gravity. To know the wilderness, he wrote in his weathered leather journal, one must stake one’s survival entirely on personal skill and canine camaraderie.',
      'For more than a thousand days, through winter tempests where temperatures plunged below minus 50 degrees Fahrenheit, Skjottelvik survived on pemmican, netted lake trout, and sheer instinct. Indigenous hunters in remote communities occasionally spotted his lone silhouette against the horizon, waving politely before vanishing back into the taiga.',
      'Then, in mid-September, three emaciated huskies wandered into an outpost near Great Bear Lake. Tied to one harness was a canvas satchel containing 400 pages of notes, geological field sketches, and photographic film canisters.',
      'The search and rescue effort that followed uncovered Skjottelvik’s final campsite nestled between two limestone ridges. An unexpected thaw had cracked a river crossing, separating the explorer from his cache. His final journal entry, scrawled with numb fingers under northern lights, was neither despairing nor apologetic: "The cold is not cruel. It is merely honest. The dogs know the way home."'
    ],
    pullQuote: 'The cold is not cruel. It is merely honest. The dogs know the way home.',
    pullQuoteAuthor: 'Final journal entry of Steffen Skjottelvik'
  },

  // --- CENTER LEFT: ARCTIC CULTURE ---
  {
    id: 'what-does-it-mean-to-be-inuit-now',
    title: 'What Does It Mean to Be Inuit Now?',
    deck: 'In Iqaluit, young writers and printmakers redefine community ties across a fast-changing frozen territory.',
    kicker: 'ARCTIC CULTURE',
    readTime: '6 min read',
    byline: 'Renaud Philippe',
    category: 'Arts',
    subCategory: 'Indigenous Voices',
    publishDate: 'October 12, 2026',
    commentsCount: 67,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnh4WwLkk507bGtgyGdG2c7TvLHzi4MjTKO0mE3HxAaR6i25Nb7iNsKfQiXO_u1cWBqF6ok1L0j-ofFwA34XvX4Rho_9kSCry6Ig0HwJImfisvU6C_ljA3UOZ4inrJ-6u4OeAuyBOAQvC1ijVnytupxLHHxgoV4kyO2it_y6qO1QrAm0HR3LtIok1M6ZEpPDe5_d7p2y6YLekRXaAxv6AOAnx8lLzqNR98MpdunLaOk8Dgt3fHmJt2',
    imageAlt: 'A portrait of an Inuit elder and young indigenous artist standing against the stark landscape of Iqaluit Nunavut Canada.',
    imageCredit: 'Renaud Philippe for The New York Times',
    paragraphs: [
      'IQALUIT, Nunavut — In a modest studio smelling of linoleum ink and fresh cedar shavings, 26-year-old printmaker Siku Qaunaq is blending ancient ancestral folklore with modern graphic street art.',
      '"For decades, southern galleries wanted to see only sealskin boots and soapstone polar bears," Qaunaq said, inspecting a dynamic print showing satellite dishes resting on an igloo contour. "We are internet natives who also hunt caribou. Both realities are authentic."'
    ]
  },

  // --- CENTER RIGHT: CLIMATE & ENVIRONMENT ---
  {
    id: 'powerful-storm-surge-southern-california',
    title: 'Powerful Storm Surge Pounds Beach Homes in Southern California',
    deck: 'Twin ocean fronts brought unexpected flooding to shoreline neighborhoods from Long Beach south into Baja.',
    kicker: 'CLIMATE & ENVIRONMENT',
    readTime: '2 min read',
    byline: 'Zack Wittman',
    category: 'U.S.',
    subCategory: 'California',
    publishDate: 'October 12, 2026',
    commentsCount: 95,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtaKuexv3_p0dnFHvxxAjs2bxIr34l0T-QqbL4MxoaRarmXsEwwgIaRMng2aXyL5XmH2o3iPIgm_m0LQhKBMeKQAMzkIeN4Ol4JM4a84Ky3sX-m1rvApshU5LD8KWLMUtDYc1mGOZaTYzEML-l7EUZ2975x98a3BgpAe8HTmGEbhh2eFJ4lc45M0A9OpoyFxIWT6fPA6JQUHrNybEVFGdVegvNsPMLnTSxKOreQlsKOUrdOTssQF7h',
    imageAlt: 'A dramatic view of coastal storm surges pounding residential sea walls and wooden boardwalks along a Southern California shore.',
    imageCredit: 'Zack Wittman for The New York Times',
    paragraphs: [
      'NEWPORT BEACH, Calif. — Giant swells whipped up by a deep Pacific low-pressure trough crashed over concrete seawalls along Orange County beaches on Sunday night, inundating basements and submerging waterfront boardwalks.',
      'Emergency crews dispatched earthmovers to construct emergency sand berms as astronomical king tides converged with the swell, threatening multimillion-dollar properties perched along the shoreline.'
    ]
  },

  // --- CENTER LOWER: NEW YORK REGION ---
  {
    id: 'mamdani-skip-columbus-day-parade',
    title: 'Mamdani Will Skip Columbus Day Parade. Some Italian Americans Are Glad.',
    deck: 'City Hall confirmed that Mayor Zohran Mamdani would not join Monday’s procession up Fifth Avenue, opting instead for a heritage reception next week.',
    kicker: 'NEW YORK REGION',
    readTime: '4 MIN READ',
    byline: 'Dave Sanders',
    category: 'U.S.',
    subCategory: 'New York',
    publishDate: 'October 12, 2026',
    commentsCount: 49,
    paragraphs: [
      'NEW YORK — Continuing a break with municipal precedent, Mayor Zohran Mamdani’s administration confirmed he would not march in the annual Columbus Day Parade along Fifth Avenue.',
      'While progressive allies praised the decision to center Indigenous Peoples’ Day celebrations, community leaders in Staten Island and Brooklyn expressed relief rather than disappointment, noting that recent mayoral appearances had turned commemorative events into partisan flashpoints.',
      '"The parade is about honoring generational immigrant perseverance, not political theater," said Anthony Frattini, president of an Italian American civic coalition in Queens.'
    ]
  },

  // --- RIGHT COLUMN: OPINION 1 ---
  {
    id: 'opinion-europe-rising-far-right',
    title: '‘It’s the Identity, Stupid!’: 3 Writers on Europe’s Rising Far Right',
    deck: 'Economic discontent alone cannot explain the sudden realignment of voters across the Rhine and beyond.',
    kicker: 'GUEST ESSAY',
    readTime: '9 min read',
    byline: 'David Broder & Caroline de Gruyter',
    authorRole: 'Contributing Opinion Writers',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHHb9Y3C_1Tis7bHSUAelnpGYSxwyoSW6RqMRYc2N6zUQBVAjffJUJjt8SmEBd8O3dkNgnZoLy1ug88K2dm3GkxqcQVO7dBPwqr_n2-8jveLsqGLCxwVYCwT5aNaG72AyGDezk4OV_tOlD-R1a35qj3riI0FcZkImtS8kbfGNyQvJUDkJVkNZID_FOk5-RiWz-dgDlnUaol4kjXCxZkUYQMWVO3gYCZuQmhh4px8653B1AL-GGbiIO',
    category: 'Opinion',
    publishDate: 'October 12, 2026',
    commentsCount: 156,
    paragraphs: [
      'BRUSSELS — For over a decade, technocratic Brussels treated the populist revolt as a temporary symptom of austerity and wage stagnation. Fix the GDP figures, the conventional wisdom held, and the centrist consensus will reassert itself.',
      'That diagnosis has proved catastrophically incomplete. The voters swelling nationalist ranks in the Netherlands, France, Germany, and Scandinavia are often homeowners with secure pensions. Their rebellion is cultural, psychological, and existential.'
    ]
  },

  // --- RIGHT COLUMN: OPINION 2 ---
  {
    id: 'opinion-why-grocery-bill-will-get-worse',
    title: 'Why Your Grocery Bill Will Get Worse',
    deck: 'Structural commodity shocks and shipping consolidations mean standard food price baskets will resist cooling.',
    kicker: 'OPINION',
    readTime: '5 min read',
    byline: 'Kathleen Kingsbury and Peter R. Orszag',
    category: 'Opinion',
    publishDate: 'October 12, 2026',
    commentsCount: 201,
    paragraphs: [
      'WASHINGTON — When headline inflation measures dipped back toward central bank targets, millions of American consumers expected their weekly trips to the supermarket to reflect that relief.',
      'They were disappointed. The stubborn stickiness of grocery bills is not a failure of monetary policy; it is the direct outcome of ocean freight oligopolies, fertilizer cartelization, and climate-induced crop disruptions across the American breadbasket.'
    ]
  },

  // --- RIGHT COLUMN: OPINION 3 ---
  {
    id: 'opinion-neuroscience-of-decluttering',
    title: 'The Neuroscience of Decluttering',
    deck: 'Economic discontent alone cannot explain the sudden realignment of voters across the Rhine and beyond.',
    kicker: 'OPINION',
    readTime: '5 min read • Neurobiology of attention',
    byline: 'Emily Falk',
    category: 'Opinion',
    publishDate: 'October 12, 2026',
    commentsCount: 78,
    paragraphs: [
      'PHILADELPHIA — The human prefrontal cortex is constantly engaged in inhibitory control: filtering out sensory noise to preserve executive function.',
      'When your physical desk or digital desktop is crowded with stimuli, your brain must burn metabolic glucose merely to suppress those peripheral distractions. Tidying up is not just an aesthetic chore; it is an act of neural energy conservation.'
    ]
  },

  // --- AUDIO JOURNALISM: HARD FORK ---
  {
    id: 'hard-fork-anthropic-ai-morals',
    title: 'Anthropic’s Quest to Give A.I. Morals',
    deck: 'Our tech reporters explore the theological, mathematical belief systems guiding the next generation of LLMs.',
    kicker: 'HARD FORK',
    readTime: '48 min listen',
    byline: 'Kevin Roose and Casey Newton',
    category: 'Shows',
    subCategory: 'Audio Journalism',
    publishDate: 'October 12, 2026',
    audioDuration: '48 MIN',
    paragraphs: [
      'In this week’s episode of Hard Fork, Kevin and Casey dive deep into the philosophical constitutions and mathematical loss functions that engineers at Anthropic are using to inculcate moral reasoning into frontier models.',
      'Plus: Has search traffic permanently peaked? And the bizarre world of automated courtroom stenography.'
    ]
  },

  // --- AUDIO JOURNALISM: THE DAILY ---
  {
    id: 'the-daily-wringing-hope-rubble-gaza',
    title: 'Wringing Hope From the Rubble of Gaza',
    deck: 'Hosted by Michael Barbaro • 26 min',
    kicker: 'THE DAILY',
    readTime: '26 min listen',
    byline: 'Hosted by Michael Barbaro',
    category: 'Shows',
    subCategory: 'Audio Journalism',
    publishDate: 'October 12, 2026',
    audioDuration: '26 MIN',
    paragraphs: [
      'Behind the diplomatic negotiations and regional military strikes lies the devastating reality of displaced families seeking shelter for a second winter.',
      'Today on The Daily, we speak with humanitarian coordinators on the ground trying to restore sanitation and modular classrooms amid ongoing instability.'
    ]
  },

  // --- NYT COOKING ---
  {
    id: 'pumpkin-date-tiramisu',
    title: 'Pumpkin Date Tiramisù',
    deck: 'By Melissa Clark • 45 minutes',
    kicker: 'NYT COOKING',
    readTime: '45 minutes',
    byline: 'Melissa Clark',
    category: 'Cooking',
    rating: '★ 4.9',
    ratingCount: '(1,240)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqeXOmcX6lSHjHnb06bnnMjHFwDbdTzh2DhGC5DkbZ44O7LKL8PcHSu5MruElBjWUV9Ctjcf2VCtsZEa2sUlxr30oMvjLSlaSVGap3gMPDUqM1UViCSgqfzV3MvbDR3Pt4_ij-Wt-hZy2vjrBdybEoO_xcLQAp9yC4WXkxxn1S8lUcGFmw0oxIIw_ml1apj03MLnx5pLo23jBXP1KA6q7GIaWJ6ac-dy1bLjpjGdFB2b65PVcUGMN-',
    imageAlt: 'A beautifully styled autumnal slice of pumpkin date tiramisu dusted with fine cocoa powder served on a clean ceramic broadsheet style white plate.',
    imageCredit: 'Linda Xiao for The New York Times. Food Stylist: Monica Pieratt.',
    publishDate: 'October 12, 2026',
    paragraphs: [
      'This autumnal spin on classic Italian tiramisù folds velvety spiced pumpkin purée and Medjool date reduction directly into rich mascarpone cream.',
      'The savoiardi ladyfingers are dipped briefly in espresso spiked with dark rum, creating a dessert that tastes both nostalgic and surprisingly nuanced.'
    ]
  },

  // --- WIRECUTTER ---
  {
    id: 'best-air-purifier-wildfire-smoke',
    title: 'The Best Air Purifier for Allergies and Wildfire Smoke (2026 Review)',
    deck: 'After 250 hours of chamber lab testing, here are the top picks.',
    kicker: 'WIRECUTTER',
    readTime: '8 min read',
    byline: 'Tim Heffernan',
    category: 'Wirecutter',
    publishDate: 'October 12, 2026',
    paragraphs: [
      'After running smoke chamber tests on 42 purifiers over eight months, our top pick remains the Coway Airmega AP-1512HH Mighty for medium bedrooms, while the Smart Air Blast Mini proved unmatched at scrubbing dense particulate matter during wildfire events.'
    ]
  },

  // --- THE ATHLETIC 1 ---
  {
    id: 'athletic-nick-sirianni-running-out-of-time',
    title: 'Is Nick Sirianni Running Out of Time in Philly? Week 5 Expert Takeaways.',
    deck: 'The pressure ratchets higher after consecutive offensive stagnation in crucial red-zone situations.',
    kicker: 'NFL WEEK 5 REVIEW',
    readTime: '6 min read',
    byline: 'By Emilee Chinn • The Athletic',
    category: 'The Athletic',
    subCategory: 'NFL',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoaro6nZjOJ10cRJgqNSejZ6g0buiXQ3GJ3Gt00FBgQSHm2wy9RuzQTWOSMqRHvxGzkjwZLhsFbUyi960aun3npO-4OXTldhks6hDLksnHYT3HlQapcJ2ay9jzV6O-hYUYMiVajP0cK_o3N5-HGr4x51pD96jzPEsJxSTLonNBK5DXxMamQ-RBmxCTZswZ9dafWgMrOevZF7qrL4vBZZhgNmDwHKB2seCGVgE174jKWkUrZLajTi91',
    imageAlt: 'A crisp, high-action football stadium scene during an NFL game at night, showing players in uniform under bright stadium floodlights.',
    imageCredit: 'Emilee Chinn / The Athletic',
    publishDate: 'October 12, 2026',
    paragraphs: [
      'PHILADELPHIA — It was not merely the loss to an underdog divisional rival; it was the lifeless cadence of the play calling.',
      'For Philadelphia head coach Nick Sirianni, the honeymoon of previous Super Bowl runs has definitively evaporated. Fans and front-office analysts alike are asking why an offense featuring premier perimeter talent looks perpetually bewildered against cover-2 zone schemes.'
    ]
  },

  // --- THE ATHLETIC 2 ---
  {
    id: 'athletic-brewers-shut-down-dodgers-nlcs-game-1',
    title: 'Brewers Shut Down Dodgers to Capture Championship Series Game 1',
    deck: 'Milwaukee eked out a 2-1 victory behind an immaculate four-inning shutdown performance from its bullpen.',
    kicker: 'MLB POSTSEASON',
    readTime: '5 min read',
    byline: 'By Patrick McDermott • The Athletic',
    category: 'The Athletic',
    subCategory: 'MLB',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvvkv9pMLtcf8b13pKyWoEYjeg6TMkJjCA6yQDl_30j1Baht0oCqKZg2dUIPJneAE-4Og224lV9_aiimdlqfGad8rim7r8jgGbULmLknOSeHt8H1cV4pA05plP8wovwz5iShP56DGy5fgc9Plh3AMNu_F9LenDHTMkouQKndOnPJkeQqV0qjspSWIs7xrBjqAbcuJSPg5ztqsvYejvTA1aZIlyMZH3spG99tNulXLYFRf-pL-dgq0y',
    imageAlt: 'A baseball player celebrating on home plate under the stadium lights of a postseason playoff match in Milwaukee with bullpen teammates rushing the field.',
    imageCredit: 'Patrick McDermott / The Athletic',
    publishDate: 'October 12, 2026',
    paragraphs: [
      'MILWAUKEE — Facing the most potent lineup in baseball, the Milwaukee Brewers bullpen delivered a clinic in high-leverage pitching execution, holding Los Angeles hitless with runners in scoring position.'
    ]
  },

  // --- THE ATHLETIC 3 ---
  {
    id: 'athletic-arteta-arsenal-premier-league-title',
    title: 'How Arsenal’s Mikel Arteta Ended a 21-Year Premier League Title Wait',
    deck: 'Inside the tactical shift and structural defensive recalibration that rewrote modern North London football history.',
    kicker: 'PREMIER LEAGUE',
    readTime: '8 min read',
    byline: 'By James McNicholas • 8 min read',
    category: 'The Athletic',
    subCategory: 'Premier League',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhpG6NxnBOT8QsVDPD1scZILIYKrXLtrt7WpVYeL1lxLjn8ABvZxjQ3Ob6xm_J3B57YxiSHUczIaxzdXvXDPuyA8vi6LzMfmTgQp6OuhbHsPzmZsMbKt-DcsGZ7CG0m4U3MXwm74nUhGsEJuOS7rB5bTr2QGnQlnD3I0HWmmDkjX6epEvyzKs-uxJgEEF5RkbltyJxB-xSdcNLDegeywF9e6BdHTJ5fylq1DVdQJhptwoju56ZJRHk',
    imageAlt: 'A focused European soccer manager on the sidelines in a tailored overcoat gesturing tactically during an intense rainy Premier League match in London.',
    imageCredit: 'James McNicholas / The Athletic',
    publishDate: 'October 12, 2026',
    paragraphs: [
      'LONDON — The transformation did not happen in the transfer market alone; it took root in the obsessive geometry of rest-defense.',
      'Mikel Arteta’s Arsenal side built their historic championship not merely on flamboyant attacking play, but on the most asphyxiating counter-press Europe had witnessed since peak Arrigo Sacchi Milan.'
    ]
  }
];
