/*
 * COURSE DATA — edit this file to update the hub.
 * Everything below is taken from the supplied course materials (annotated agenda,
 * course requirements screenshots, course introduction). Anything that was missing
 * or unconfirmed there is left empty or marked "tbc" — see CONTENT_NOTES.md.
 *
 * No participant data, feedback data or activity state is stored anywhere in this site.
 */
window.COURSE = {
  config: {
    /* One Zoom link for all live sessions, as stated in the agenda.
       Provided by the course team. Leave it empty ("") to bring back the disabled
       "Zoom link coming soon" buttons. To use a different link for one session,
       set zoomUrl on that session below. */
    zoomUrl: "https://itcilo-org.zoom.us/j/61421822106",

    /* Feedback form link. Leave empty to show the "Feedback link coming soon" placeholder. */
    feedbackUrl: "",

    /* Show the amber "To be confirmed" notices (conflicts / gaps in the source material).
       Set to false once the course team has resolved them. */
    showDraftNotices: true,

    /* Time zone used in the agenda. CET = UTC+1 for all sessions (27 Oct – 3 Dec 2026). */
    timezoneLabel: "CET",
    utcOffsetHours: 1
  },

  /* ---------- Weeks and sessions ---------- */
  weeks: [
    { number: 1, title: "Opening and labour market impacts", dates: "26 – 30 October 2026" },
    { number: 2, title: "The international legal and normative framework", dates: "2 – 6 November 2026" },
    { number: 3, title: "Just transition, gender and inclusion", dates: "9 – 13 November 2026" },
    { number: 4, title: "Global debate and regional governance", dates: "16 – 20 November 2026" },
    { number: 5, title: "Pathways, fair recruitment and social protection", dates: "23 – 27 November 2026" },
    { number: 6, title: "Climate finance and closing", dates: "30 November – 4 December 2026" }
  ],

  /*
   * Sessions. format: "online" | "in-person" | "independent".
   * All twelve sessions are live online sessions on Zoom per the agenda; none is in person.
   * start/end are local CET clock times. Speaker names are deliberately not shown in the timetable (see the Resource Persons tab).
   */
  sessions: [
    {
      number: 1, week: 1, format: "online", date: "2026-10-27", start: "10:00", end: "11:30",
      title: "Opening Webinar: Welcome and Course Orientation",
      abstract: "Welcome and orientation: the course aims, the five modules, the twelve live sessions, the weekly forums and the group work, and a chance for participants to introduce themselves.",
      fullAbstract: "This opening live session welcomes participants and sets the course in motion. The course team presents the aims of the course — to strengthen knowledge and capacity on the labour dimensions of human mobility in the context of climate change, treating labour mobility as one tool among others in the climate adaptation toolbox — and walks through the five modules, the twelve live sessions, the weekly forum discussions and the group work on three country case studies. Participants introduce themselves, their institutions and the contexts they work in, and the session previews how the following weeks build from concepts and the international legal framework, through just transition, governance and labour mobility pathways, to social protection and climate finance.",
      objectives: [
        "Describe the structure, aims and requirements of the course, including the five modules, the live sessions, the weekly forums and the group work.",
        "Explain the key concepts used throughout the course — climate change, human mobility, climate mobility, labour mobility, refugees and internally displaced persons — and how they relate to one another.",
        "Identify the countries, sectors and groups affected by climate mobility that each participant would like to explore during the course."
      ]
    },
    {
      number: 2, week: 1, format: "online", date: "2026-10-29", start: "10:00", end: "11:30",
      title: "Impact of Climate Change on Labour Markets",
      abstract: "How slow-onset and sudden-onset climate impacts erode livelihoods, jobs and decent work — especially in agriculture and the informal economy — and how they interact with migration, displacement, relocation and staying in place.",
      fullAbstract: "Climate change reshapes labour markets well before anyone moves. Slow-onset processes such as drought, desertification and sea-level rise erode livelihoods gradually, while sudden-onset events such as storms and floods destroy jobs, assets and infrastructure within days; low- and middle-income countries, and groups already facing structural inequality — women and youth, persons with disabilities, indigenous peoples and people living in poverty — are affected most. This session sets the scene for the course by tracing how these impacts translate into loss of livelihoods, employment and decent work, particularly in agriculture and the informal economy, and how they interact with human mobility: migration, displacement, planned relocation and staying in place. It also looks at the opportunities and risks of the greening of economies for jobs and skills, and introduces the pathways for climate mobility explored in the following weeks.",
      objectives: [
        "Distinguish slow-onset from sudden-onset climate impacts and explain how each affects employment, livelihoods and labour markets.",
        "Identify the sectors and groups most exposed to climate impacts and least able to adapt, including agricultural and rural workers, informal economy workers, women, youth and indigenous peoples.",
        "Describe the main forms of human and labour mobility in the context of climate change — migration, displacement, planned relocation and staying in place — and their implications for decent work."
      ]
    },
    {
      number: 3, week: 2, format: "online", date: "2026-11-03", start: "10:00", end: "11:30",
      title: "The International Legal Framework for the Protection of People on the Move in the Context of Climate Change",
      abstract: "The international and regional frameworks that protect people moving in the context of climate change, and why the label “climate refugee” is problematic under the 1951 Refugee Convention.",
      fullAbstract: "Human rights belong to all people, including migrants and displaced persons, regardless of their status; in practice, however, migration status can determine access to housing, education, healthcare and formal employment. This session maps the international and regional frameworks that protect people moving in the context of climate change. It reviews the Global Compact for Safe, Orderly and Regular Migration — notably its objectives on regular pathways and fair recruitment — and the Global Compact on Refugees, the Nansen Initiative Protection Agenda and the Platform on Disaster Displacement that continues its work, the 1998 Guiding Principles on Internal Displacement, and free movement protocols such as the 2020 IGAD Protocol. It also examines why the label “climate refugee” is problematic under the 1951 Refugee Convention, and which alternatives — regular pathways, humanitarian stay and temporary protection — are being explored.",
      objectives: [
        "Identify the main international and regional instruments that protect people moving within or across borders in the context of climate change.",
        "Explain the Nansen Initiative Protection Agenda and the role of the Platform on Disaster Displacement in promoting effective protection practices.",
        "Assess why the refugee label does not readily apply to people displaced by climate change, and outline the alternative forms of protection under discussion."
      ]
    },
    {
      number: 4, week: 2, format: "online", date: "2026-11-05", start: "10:00", end: "11:30",
      title: "The International Legal Framework: Fundamental Principles and Rights at Work and other International Labour Standards",
      abstract: "The Fundamental Principles and Rights at Work as the baseline of protection for every worker, with heat stress as a worked example, and Recommendation No. 205 on decent work for peace and resilience.",
      fullAbstract: "The Fundamental Principles and Rights at Work are the baseline of protection for every worker, whether they stay in place, migrate or are displaced. They cover freedom of association and collective bargaining, and the elimination of forced labour, child labour and discrimination. Since 2022 they also cover a safe and healthy working environment. This session uses heat stress as a worked example. Rising temperatures expose outdoor, informal and migrant workers, for instance in agriculture and construction, to serious health risks, and they test the occupational safety and health standards (Conventions Nos. 155 and 187). Speakers from the ILO’s Priority Action Programme for Decent Work for crisis response then present the Employment and Decent Work for Peace and Resilience Recommendation, 2017 (No. 205). It places decent employment at the centre of preventing and recovering from conflict and disaster crises and of building resilience. It also has specific provisions for internally displaced persons, migrants, refugees and returnees, and it calls for measures that also benefit host communities in order to foster social cohesion.",
      objectives: [
        "Describe the main principles and measures of Recommendation No. 205 and explain why it is relevant to people on the move in the context of climate change.",
        "Explain how the five Fundamental Principles and Rights at Work and other international labour standards apply to all workers, including those who stay in place, migrate or are displaced.",
        "Analyse how employment measures can benefit both displaced people and host communities and so foster social cohesion."
      ]
    },
    {
      number: 5, week: 3, format: "online", date: "2026-11-10", start: "10:00", end: "11:30",
      title: "The Significance of the ILO’s 2015 Just Transition Guidelines",
      abstract: "Why the ILO’s 2015 Just Transition Guidelines matter for people on the move and how their principles apply to human mobility, with regional examples from the Pacific to the EU.",
      fullAbstract: "The 2015 ILO Guidelines for a Just Transition towards Environmentally Sustainable Economies and Societies for All, adopted by the ILO’s tripartite constituents, are the Organization’s main policy framework on climate change: a practical tool for greening the economy in a way that is as fair and inclusive as possible, creates decent work and leaves no one behind. This session explains why the Guidelines matter for people on the move — they recognise the need to adapt in order to avoid loss of livelihoods and involuntary migration — and how the 2023 International Labour Conference resolution reaffirmed them as the central reference for ILO policy leadership, with priorities on labour mobility. It applies their principles to human mobility: policy coherence between climate, disaster risk, migration and labour planning; the inclusion of migrants and displaced people in adaptation planning; international labour standards as the basis for bilateral and regional agreements; social dialogue; and better gender- and age-disaggregated data. Regional examples, from the Pacific to the EU Just Transition Mechanism, show how the Guidelines translate into practice.",
      objectives: [
        "Explain the ILO definition of just transition and green jobs and the role of the 2015 Guidelines as the central reference for ILO policy.",
        "Apply the principles of the Guidelines to human mobility in the context of climate change, including policy coherence, inclusion in adaptation planning, social dialogue and data.",
        "Compare how regional initiatives, such as the Pacific climate mobility strategies and the EU Just Transition Mechanism, address labour mobility in a just transition."
      ]
    },
    {
      number: 6, week: 3, format: "online", date: "2026-11-12", start: "10:00", end: "11:30",
      title: "Gender and Intersectional Inclusion in Climate-Related Labour Mobility",
      abstract: "How climate change compounds existing inequalities for women, young people, persons with disabilities and indigenous peoples, with gender inclusion as an illustrative example and its policy implications.",
      fullAbstract: "Climate inequality is not only a matter of differences between countries: within countries, climate change compounds the inequalities that women, young people, persons with disabilities and indigenous peoples already face, and labour mobility can accentuate or reduce social exclusion. This session takes gender inclusion as an illustrative example. The evidence is ambiguous: women are often among the most willing and capable agents of adaptation and mobility — in Bangladesh, women’s informal income was as important to households as male remittances — yet exclusion from land, credit, inputs, training, social insurance and decision-making limits what they can do. The session discusses what this means for policy, from gender- and age-disaggregated data and inclusive skills development to the participation of women and youth in social dialogue, and highlights evidence gaps, notably in urban settings and for people crossing borders.",
      objectives: [
        "Explain how climate change, labour mobility and pre-existing inequalities interact to affect women, young people, persons with disabilities and indigenous peoples differently.",
        "Analyse the evidence on women as agents of adaptation and mobility, and the barriers — access to land, credit, training, social protection and decision-making — that constrain them.",
        "Identify gender-responsive and inclusive policy measures, including disaggregated data, inclusion in skills development and participation in social dialogue."
      ]
    },
    {
      number: 7, week: 4, format: "online", date: "2026-11-17", start: "10:00", end: "11:30",
      title: "Climate Change and Labour Mobility in the Global Debate",
      abstract: "The scientific, legal and funding architecture of climate action, how far it reflects human mobility and its labour dimension, and the mandates of the ILO, IOM, UNHCR and FAO.",
      fullAbstract: "The international governance of climate mobility has been slow to recognise the link between climate change and human mobility, because the issue sits at the intersection of two processes — climate change and migration — that still lack effective coherence. This session reviews the core scientific, legal and funding architecture: the IPCC, the UNFCCC and the Paris Agreement with their national plans (NDCs and NAPs), the Cancun Adaptation Framework, the Warsaw International Mechanism and its Task Force on Displacement, the Sendai Framework and the Loss and Damage Fund. It asks how far human mobility, and its labour dimension, is reflected in them. The session also introduces the mandates of the main UN actors — ILO, IOM, UNHCR and FAO — with ILO and UNHCR speakers sharing their perspectives on what greater policy coherence between climate action, migration governance and labour market policy would require.",
      objectives: [
        "Describe the main scientific, legal and funding frameworks for climate action and how far they address human and labour mobility.",
        "Identify the mandates and roles of the ILO, IOM, UNHCR and FAO in addressing climate mobility.",
        "Discuss what policy coherence between climate, migration and labour agendas requires at global level."
      ]
    },
    {
      number: 8, week: 4, format: "online", date: "2026-11-19", start: "10:00", end: "11:30",
      title: "Regional Deep Dives: CARICOM, IGAD and the Pacific Regional Framework",
      abstract: "Regional approaches to climate mobility in the IGAD region, the Caribbean (OECS and CARICOM) and the Pacific, and lessons for South-South and Triangular Cooperation.",
      fullAbstract: "Intraregional movement is the most common form of cross-border mobility in the context of climate change and disasters, which makes regional solutions essential. This session looks at three regions. In the IGAD region, where over 80 per cent of the labour force works in agriculture, the 2020 Protocol on Free Movement of Persons — not yet fully enacted — provides a legal framework for cross-border movement due to climate-related disasters. In the Caribbean, free movement arrangements in OECS and CARICOM have been used during the hurricane season to grant short-term stay, document waivers and access to labour markets. In the Pacific, the 2023 Pacific Regional Framework on Climate Mobility, endorsed by Pacific Islands Forum members, seeks to align established labour mobility schemes with resilience and adaptation policies and covers all types of movement, including staying in place. Regional speakers compare approaches and discuss lessons for South-South and Triangular Cooperation among small island developing states, with links to the Tuvalu and Barbuda case studies.",
      objectives: [
        "Compare how IGAD, CARICOM and OECS, and Pacific institutions address climate mobility through free movement, labour mobility and regional frameworks.",
        "Explain the role of regional free movement agreements as pathways for protection and access to labour markets for people moving in the context of disasters and climate change.",
        "Identify lessons for South-South and Triangular Cooperation, particularly among small island developing states."
      ]
    },
    {
      number: 9, week: 5, format: "online", date: "2026-11-24", start: "10:00", end: "11:30",
      title: "Bilateral Labour Migration Agreements (BLMAs) and Fair Recruitment in Climate Mobility",
      abstract: "How bilateral labour migration agreements and fair recruitment can create safe, orderly and regular pathways for people affected by climate change, including skills, return and reintegration.",
      fullAbstract: "Safe, orderly and regular pathways are an effective starting point for protecting people who move in the context of climate change, and bilateral labour migration agreements (BLMAs) are among the most common tools to create them. Yet most existing climate-related labour mobility schemes are temporary and, in law or practice, may not give workers the same rights — for example the freedom to change employer or equal remuneration. This session examines how BLMAs and regional arrangements can integrate skills development, recognition and matching, and return and reintegration, drawing on the ILO’s guiding questions for countries of origin and destination and on examples such as MOVE_GREEN between Andalusia and Morocco and the Colombia--Peru framework agreement. It also addresses fair recruitment: because recruitment fees and related costs significantly increase the risk of forced labour, debt bondage and trafficking, the ILO General Principles and Operational Guidelines for Fair Recruitment — including the principle that workers should not bear such costs — are critical for people already affected by climate change.",
      objectives: [
        "Explain how BLMAs and temporary labour migration schemes can offer pathways in the context of climate change, and the decent work risks they carry when poorly governed.",
        "Apply the ILO fair recruitment principles to workers affected by climate change, including the prohibition of recruitment fees and related costs.",
        "Identify provisions on skills, recognition, return and reintegration that could be integrated in a BLMA, drawing on examples such as MOVE_GREEN and the Colombia–Peru agreement."
      ]
    },
    {
      number: 10, week: 5, format: "online", date: "2026-11-26", start: "10:00", end: "11:30",
      title: "Universal Social Protection for Climate Action and a Just Transition",
      abstract: "Why social protection is essential for climate adaptation and a just transition: four policy recommendations, country experiences, gaps and financing.",
      fullAbstract: "Social protection is an essential part of climate change adaptation and mitigation and of a just transition: it protects people against poverty and livelihood shocks, supports risk taking and reskilling, and can reach very large numbers of people exposed to climate risks. This session sets out four policy recommendations — stress-testing existing social protection systems against climate scenarios, integrated governance, linking social protection to jobs in the green economy, and inclusivity — and reviews country experience, from social protection measures in national adaptation plans and NDCs (Kenya, Burkina Faso, Grenada, Antigua and Barbuda) to cash transfers in Brazil, India’s employment guarantee scheme, and universal approaches in Indonesia and Mongolia. It highlights the gaps in current practice — urban settings, planned relocation and the portability of benefits across borders — and the question of financing. The guiding principle is that, in the context of climate labour mobility, migrant workers should benefit from the same social protection measures as all workers.",
      objectives: [
        "Explain why social protection is an essential element of climate adaptation and just transition strategies, and why migrants and displaced workers are particularly exposed.",
        "Analyse country experiences — cash transfers, employment guarantee schemes and universal approaches — and what they show about linking social protection, climate resilience and labour mobility.",
        "Discuss options for financing and for including migrant workers in social protection, and the evidence gaps that remain."
      ]
    },
    {
      number: 11, week: 6, format: "online", date: "2026-12-01", start: "10:00", end: "11:30",
      title: "Making Climate Finance Work for Workers on the Move",
      titleTbc: true,
      abstract: "How climate finance, including the Loss and Damage Fund, can reach workers on the move, and the national levers for financing resilience, adaptation and social protection.",
      fullAbstract: "The countries most exposed to the impacts of climate change typically have the fewest resources to respond and bear the least responsibility for its causes — the basis of the principle of common but differentiated responsibilities and of the case for restitution and restorative justice. This session asks how climate finance can reach workers on the move. It reviews the existing funding landscape — the Global Environment Facility, the Adaptation Fund, the Least Developed Countries Fund, the Green Climate Fund and the Loss and Damage Fund established at COP27, whose scope covers forced displacement and human mobility — and why these instruments remain small-scale and insufficient for the resilience, adaptation, relocation and social protection needs involved. It then turns to national levers: macroeconomic and fiscal instruments, the use of NAPs and NDCs to signal needs and costs to financiers, and options for financing social protection, so that migrant workers benefit from the same measures as all workers.",
      objectives: [
        "Describe the main climate funding channels and Loss and Damage arrangements relevant to human mobility, and why they remain insufficient for the needs involved.",
        "Explain the principles of common but differentiated responsibilities and restorative justice as a rationale for financing resilience, adaptation, relocation and social protection in the most affected countries.",
        "Identify ways to link climate finance, national budgets and instruments such as NAPs and NDCs to decent work, social protection and labour mobility outcomes."
      ]
    },
    {
      number: 12, week: 6, format: "online", date: "2026-12-03", start: "10:00", end: "11:30",
      title: "Presentation of Group Work and Closing Ceremony",
      abstract: "Groups present their analyses of the Zimbabwe, Barbuda and Tuvalu case studies (15 minutes each plus 10 minutes of discussion), followed by the closing ceremony.",
      fullAbstract: "In the closing session, the groups present the group work carried out alongside the course, each focusing on one country case study: social protection and climate resilience in Zimbabwe, where planned relocations too often lack a policy on livelihoods and decent work; the repeal of the Barbuda Land Act after Hurricane Irma, a cautionary tale on land rights, “staying with dignity” and the voice of ILO constituents; and Tuvalu and the Falepili Union Treaty with Australia, a bilateral “mobility with dignity” pathway. Using the guiding questions provided, groups apply what they have learned across the course — rights-based protection, the Just Transition Guidelines, labour mobility pathways, social protection and finance — to analyse the challenges, the roles of governments and social partners, and the scope for South-South and Triangular Cooperation. Each group has up to 15 minutes to present, followed by 10 minutes of discussion and feedback. The session closes with the closing ceremony, reflecting on key takeaways and next steps.",
      objectives: [
        "Present and justify a group analysis of the labour dimensions of climate mobility in a specific country case, applying the concepts, frameworks and instruments covered in the course.",
        "Compare the challenges and policy responses across the three case studies, distinguishing what is context-specific from what is common.",
        "Give constructive peer feedback, and identify next steps for applying the course learning in one’s own institution or country."
      ]
    }
  ],

  /*
   * Resource persons — each person appears once. Names are those listed in the agenda.
   * photo: path to an image, e.g. "assets/people/atle-solberg.jpg" (leave "" for the placeholder).
   * status: "listed" (named in the agenda) or "tbc" (agenda marks the speaker to be confirmed).
   * Sorted alphabetically by surname.
   */
  people: [
    { name: "Michela Albertazzi", org: "ITCILO", status: "listed", photo: "" },
    { name: "Jana Bischler", org: "", status: "tbc", photo: "" },
    { name: "Helena De Jong", org: "", status: "listed", photo: "" },
    { name: "Maria Gallotti", org: "ILO", status: "tbc", photo: "" },
    { name: "Andrew Harper", org: "UNHCR", status: "listed", photo: "" },
    { name: "Agnes Igoye", org: "IGAD", status: "tbc", photo: "" },
    { name: "Wanya Illes", org: "CARICOM", status: "tbc", photo: "" },
    { name: "Murielle Meltenoven", org: "Pacific representative", status: "tbc", photo: "" },
    { name: "Emanuela Pozzani", org: "GEDI", status: "tbc", photo: "" },
    { name: "Atle Solberg", org: "Platform on Disaster Displacement", status: "listed", photo: "" },
    { name: "Paul Tacon", org: "ILO", status: "listed", photo: "" },
    { name: "Alice Vozza", org: "ILO", status: "listed", photo: "" }
  ],

  /* Participants of the new cohort. Empty until verified information is available.
     Each entry: { name: "", org: "", country: "", photo: "" } */
  participants: []
};
