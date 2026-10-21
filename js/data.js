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
    {
      number: 1,
      title: "Opening and labour market impacts",
      dates: "26 – 30 October 2026",
      reading: [
        { when: "Before the course", text: "ILO (2022) Just Transition Policy Brief: Human mobility and labour migration related to climate change in a just transition towards environmentally sustainable economies and societies for all (preparation reading — see the Overview)." },
        { when: "For Session 1", text: "Introduction: general aims and objectives, and structure, design and content of the course (pp. 1–2)." },
        { when: "For Sessions 1 and 2", text: "Introduction: Understanding key concepts — climate change, human mobility, refugees and internally displaced persons (pp. 3–5)." },
        { when: "For Session 2", text: "Module 1, Themes 2–4: the climate change and human mobility nexus, typologies of human mobility, and implications for decent work and labour mobility (e-Campus)." }
      ],
      forum: {
        context: "Climate change affects work and livelihoods in very different ways depending on the context: through slow-onset processes such as drought and sea-level rise, or sudden-onset events such as storms and floods. Most of the people affected stay where they are, some lack the resources to leave, and others move. This first forum is an opportunity to put participants’ own contexts on the table.",
        question: "Please introduce yourself and your institution. Then describe one way in which climate change is already affecting work and livelihoods in your country or region, and whether and how people are moving, or staying put, as a result."
      }
    },
    {
      number: 2,
      title: "The international legal and normative framework",
      dates: "2 – 6 November 2026",
      reading: [
        { when: "For Session 3", text: "Module 2, Theme 2(i): general protection principles on human mobility — international migration and cross-border disaster displacement, including the Global Compact for Migration, the Global Compact on Refugees and the Nansen Initiative Protection Agenda (Box 2) (pp. 6–8); internal mobility, the Guiding Principles on Internal Displacement and Fiji’s Planned Relocation Guidelines (Box 3) (pp. 8–9)." },
        { when: "For Session 3", text: "Module 2, Theme 3: The refugee label and climate mobility (pp. 11–12)." },
        { when: "For Session 3", text: "Module 3, Box 3: The Platform on Disaster Displacement (p. 8)." },
        { when: "For Session 4", text: "Module 2, Theme 2(ii): labour protection principles, including the Fundamental Principles and Rights at Work, migration-specific international labour standards and temporary labour migration (pp. 9–11)." },
        { when: "For Session 4", text: "Module 4, Theme 1(i): Employment strategies to prevent crisis, enable recovery and build resilience — principles of ILO Recommendation No. 205 (pp. 2–3)." },
        { when: "Further reading", text: "Module 2, Theme 1: the five Rs, including moving with dignity, staying in place with dignity and the Kiribati example (Box 1) (pp. 2–5)." }
      ],
      forum: {
        context: "People who move or are displaced in the context of climate change are protected by human rights law, international labour standards and, increasingly, regional free movement protocols and national frameworks. Yet many existing instruments focus more on prevention than on facilitating rights-based mobility, and migration status can still decide whether someone can access housing, healthcare, education or formal employment.",
        question: "In a country or region you know, which instrument or principle — for example the Global Compact for Migration, the Guiding Principles on Internal Displacement, a regional free movement protocol, Recommendation No. 205 or the Fundamental Principles and Rights at Work — would be most useful to protect the labour rights of people affected by climate change? What stops it from working in practice, and which actors, including employers’ and workers’ organizations, would need to be involved?"
      }
    },
    {
      number: 3,
      title: "Just transition, gender and inclusion",
      dates: "9 – 13 November 2026",
      reading: [
        { when: "For Session 5", text: "Module 4, Theme 1(ii): Just Transition and labour mobility, including Box 1 (ILO definition of just transition and green jobs), the principles of the Guidelines applied to human mobility (p. 5), Box 2 on climate mobility strategies in the Pacific Island States and Box 3 on the EU Just Transition Mechanism (pp. 4–7)." },
        { when: "For Session 5", text: "Module 3, Theme 3: the ILO’s mandate and Just Transition framework, including the 2023 International Labour Conference resolution (pp. 9–10)." },
        { when: "For Session 5", text: "ILO (2015) Guidelines for a Just Transition towards Environmentally Sustainable Economies and Societies for All." },
        { when: "For Session 6", text: "Module 5, Theme 2(ii): Social inclusion, gender dimensions and equality policies and practices in the context of climate and labour mobility (pp. 12–15)." },
        { when: "For Session 6", text: "ILO (2022) Gender Equality, Labour and a Just Transition for All, Just Transitions Policy Brief." },
        { when: "Further reading", text: "Module 4, Box 8: promoting skills development and employability of migrant and displaced workers in a just transition (pp. 14–16)." }
      ],
      forum: {
        context: "A just transition means greening the economy in a way that is as fair and inclusive as possible, creating decent work and leaving no one behind. Migrant workers are overrepresented in the sectors most affected by the transition, and climate change tends to compound the inequalities that women, young people, persons with disabilities and indigenous peoples already face. At the same time, women act as agents of adaptation, mobility and innovation.",
        question: "Think of a sector in your country that is likely to be transformed by the green transition. Which workers — local, migrant or displaced, women or men — are most at risk of being left behind, and which policy measure or form of social dialogue would you prioritise to make the transition just for them?"
      }
    },
    {
      number: 4,
      title: "Global debate and regional governance",
      dates: "16 – 20 November 2026",
      reading: [
        { when: "For Session 7", text: "Module 3, Theme 1: the IPCC, the UNFCCC and the Paris Agreement (NDCs and NAPs), the Cancun Adaptation Framework, the Warsaw International Mechanism and the Task Force on Displacement, the Sendai Framework and funding arrangements (pp. 2–6)." },
        { when: "For Session 7", text: "Module 3, Theme 3: UN agencies — ILO, IOM, UNHCR and FAO — and synergies among them (pp. 8–12)." },
        { when: "For Session 8", text: "Module 3, Theme 2: state-led actors, including Box 1 (IGAD), Box 2 (Small Island Developing States) and Box 3 (Platform on Disaster Displacement) (pp. 6–8)." },
        { when: "For Session 8", text: "Module 2, Theme 2(i): bilateral and multilateral free movement agreements in IGAD, ECOWAS, OECS and CARICOM (p. 9)." },
        { when: "For Session 8", text: "Module 4, Box 2: Climate mobility strategies in the Pacific Island States — the Pacific Climate Change, Migration and Human Security Programme and the Pacific Regional Framework on Climate Mobility (pp. 5–6)." },
        { when: "Further reading", text: "UNHCR (2021) Strategic Framework for Climate Action; ILO–IGAD (2022) Policy Brief on climate change, labour markets and migration in the IGAD region; ILO–IOM (2022) Policy Brief on climate change and labour mobility in Pacific Island countries." }
      ],
      forum: {
        context: "Climate mobility cuts across many policy agendas and institutions, and global frameworks have been slow to integrate human mobility and its labour dimension. Regional organizations are often more advanced: free movement protocols, regional strategies and frameworks show how people can be protected and how labour mobility can support adaptation.",
        question: "Which global or regional forum, mechanism or instrument — for example the UNFCCC process, national adaptation plans, a regional free movement protocol or a regional framework on climate mobility — offers the most promising entry point to bring labour mobility into climate action in your region? What concrete change would you ask of it, and which actors, including social partners, would you need on board?"
      }
    },
    {
      number: 5,
      title: "Pathways, fair recruitment and social protection",
      dates: "23 – 27 November 2026",
      reading: [
        { when: "For Session 9", text: "Module 4, Theme 2(iii): Skills development frameworks for labour mobility, including the ILO guiding questions for bilateral labour migration agreements and Box 9 (MOVE_GREEN) (pp. 16–18)." },
        { when: "For Session 9", text: "Module 4, Theme 2(iv): Return and reintegration, including the Colombia–Peru framework agreement (pp. 18–19)." },
        { when: "For Session 9", text: "Module 5, Theme 1(iii): Fair recruitment (pp. 4–5); Module 2, Theme 2(ii): temporary labour migration programmes (p. 10)." },
        { when: "For Session 10", text: "Module 5, Theme 2(i): Social protection — policy recommendations, experience from practice, gaps and conclusions (pp. 5–11)." },
        { when: "For Session 10", text: "ILO (2022) Social Protection for a Just Transition, Just Transitions Policy Brief." },
        { when: "Further reading", text: "ILO General Principles and Operational Guidelines for Fair Recruitment; ILO (2023) Intervention Model for extending social protection to migrant workers in the informal economy; ILO (2022) Intervention Model for migrant seasonal agricultural workers." }
      ],
      forum: {
        context: "Labour mobility can be an adaptation strategy or a form of maladaptation, depending on how it is governed: costly recruitment fees, temporary schemes without equal rights and the absence of social protection can expose workers to exploitation and debt. Bilateral labour migration agreements, regional arrangements and social protection systems are among the instruments that can make mobility safe, fair and a real choice.",
        question: "Imagine a bilateral or regional labour mobility scheme for workers affected by climate change between two countries you know. Which three provisions on fair recruitment, skills recognition or social protection would you insist on, and how would you involve employers’ and workers’ organizations in negotiating and monitoring them?"
      }
    },
    {
      number: 6,
      title: "Climate finance and closing",
      dates: "30 November – 4 December 2026",
      reading: [
        { when: "For Session 11", text: "Module 3, Theme 1: funding arrangements, including the Loss and Damage Fund (p. 5)." },
        { when: "For Session 11", text: "Module 2, Theme 1: Restitution and restorative justice (pp. 4–5)." },
        { when: "For Session 11", text: "Module 4, Theme 2(i): macroeconomic, fiscal, investment and monetary instruments (pp. 8–9); Module 5, Theme 2(i): financing social protection for a just transition (pp. 10–11)." },
        { when: "For Session 12", text: "The three country case studies and guiding questions on the e-Campus: Social Protection and Climate Resilience in Zimbabwe; The Repeal of the Barbuda Land Act; Tuvalu and the Falepili Union Treaty Agreement." },
        { when: "Further reading", text: "Module 4, Theme 2(v): Livelihoods and employment support in planned relocation, including Box 10 (pp. 19–21)." }
      ],
      forum: {
        context: "Over six weeks the course has moved from concepts and the international legal framework, through just transition, governance and regional approaches, to labour mobility pathways, social protection and finance. Rights, gender-responsive and inclusive approaches and social dialogue have been recurring conditions for success, while financing remains the Achilles’ heel: the countries most exposed to climate impacts typically have the least resources to respond.",
        question: "As the course draws to a close, what is one concrete action you will take in your institution or country to advance a rights-based, gender-responsive response to the labour dimensions of climate mobility? Which of the measures discussed would you prioritise, who would you need to work with, and how would it be financed?"
      }
    }
  ],

  /*
   * Sessions. format: "online" | "in-person" | "independent".
   * All twelve sessions are live online sessions on Zoom per the agenda; none is in person.
   * start/end are local CET clock times. speakers[].status: "listed" or "tbc".
   */
  sessions: [
    {
      number: 1, week: 1, format: "online", date: "2026-10-27", start: "10:00", end: "11:30",
      title: "Opening Webinar: Welcome and Course Orientation",
      speakers: [{ name: "ITCILO team", group: true }],
      abstract: "The opening live session welcomes participants and sets the course in motion. The course team presents the aims of the course — to strengthen knowledge and capacity on the labour dimensions of human mobility in the context of climate change — and walks through the five modules, the twelve live sessions, the weekly forum discussions and the group work on three country case studies. Participants introduce themselves, their institutions and the contexts they work in.",
      objectives: [
        "Describe the structure, aims and requirements of the course, including the five modules, the live sessions, the weekly forums and the group work.",
        "Explain the key concepts used throughout the course — climate change, human mobility, climate mobility, labour mobility, refugees and internally displaced persons — and how they relate to one another.",
        "Identify the countries, sectors and groups affected by climate mobility that each participant would like to explore during the course."
      ]
    },
    {
      number: 2, week: 1, format: "online", date: "2026-10-29", start: "10:00", end: "11:30",
      title: "Impact of Climate Change on Labour Markets",
      speakers: [{ name: "Michela Albertazzi", org: "ITCILO" }],
      abstract: "Climate change reshapes labour markets well before anyone moves: slow-onset processes such as drought and sea-level rise erode livelihoods gradually, while sudden-onset events such as storms and floods destroy jobs, assets and infrastructure within days. The session traces how these impacts translate into loss of livelihoods, employment and decent work — particularly in agriculture and the informal economy — and how they interact with migration, displacement, planned relocation and staying in place. It also looks at the opportunities and risks of the greening of economies for jobs and skills.",
      objectives: [
        "Distinguish slow-onset from sudden-onset climate impacts and explain how each affects employment, livelihoods and labour markets.",
        "Identify the sectors and groups most exposed to climate impacts and least able to adapt, including agricultural and rural workers, informal economy workers, women, youth and indigenous peoples.",
        "Describe the main forms of human and labour mobility in the context of climate change — migration, displacement, planned relocation and staying in place — and their implications for decent work."
      ]
    },
    {
      number: 3, week: 2, format: "online", date: "2026-11-03", start: "10:00", end: "11:30",
      title: "The International Legal Framework for the Protection of People on the Move in the Context of Climate Change",
      speakers: [{ name: "Atle Solberg", org: "Platform on Disaster Displacement" }],
      abstract: "The session maps the international and regional frameworks that protect people moving in the context of climate change: the Global Compact for Migration and the Global Compact on Refugees, the Nansen Initiative Protection Agenda and the Platform on Disaster Displacement, the 1998 Guiding Principles on Internal Displacement, and free movement protocols such as the 2020 IGAD Protocol. It also examines why the label “climate refugee” is problematic under the 1951 Refugee Convention and which alternatives — regular pathways, humanitarian stay and temporary protection — are being explored.",
      objectives: [
        "Identify the main international and regional instruments that protect people moving within or across borders in the context of climate change.",
        "Explain the Nansen Initiative Protection Agenda and the role of the Platform on Disaster Displacement in promoting effective protection practices.",
        "Assess why the refugee label does not readily apply to people displaced by climate change, and outline the alternative forms of protection under discussion."
      ]
    },
    {
      number: 4, week: 2, format: "online", date: "2026-11-05", start: "10:00", end: "11:30",
      title: "The International Legal Framework: Fundamental Principles and Rights at Work and other International Labour Standards",
      speakers: [],
      speakersNote: "Speakers to be confirmed — the agenda mentions speakers from the ILO’s Priority Action Programme for Decent Work for crisis response.",
      abstract: "The Fundamental Principles and Rights at Work are the baseline of protection for every worker, whether they stay in place, migrate or are displaced. The session uses heat stress as a worked example, testing the occupational safety and health standards (Conventions Nos. 155 and 187). Speakers from the ILO’s Priority Action Programme for Decent Work for crisis response then present the Employment and Decent Work for Peace and Resilience Recommendation, 2017 (No. 205), including its provisions for displaced persons, migrants, refugees and returnees and for measures that also benefit host communities.",
      objectives: [
        "Describe the main principles and measures of Recommendation No. 205 and explain why it is relevant to people on the move in the context of climate change.",
        "Explain how the five Fundamental Principles and Rights at Work and other international labour standards apply to all workers, including those who stay in place, migrate or are displaced.",
        "Analyse how employment measures can benefit both displaced people and host communities and so foster social cohesion."
      ]
    },
    {
      number: 5, week: 3, format: "online", date: "2026-11-10", start: "10:00", end: "11:30",
      title: "The Significance of the ILO’s 2015 Just Transition Guidelines",
      speakers: [{ name: "Alice Vozza", org: "ILO" }],
      abstract: "The 2015 ILO Guidelines for a Just Transition are the Organization’s main policy framework on climate change. The session explains why they matter for people on the move and how the 2023 International Labour Conference resolution reaffirmed them, then applies their principles to human mobility: policy coherence, inclusion of migrants and displaced people in adaptation planning, international labour standards as the basis for bilateral and regional agreements, social dialogue, and better gender- and age-disaggregated data. Regional examples range from the Pacific to the EU Just Transition Mechanism.",
      objectives: [
        "Explain the ILO definition of just transition and green jobs and the role of the 2015 Guidelines as the central reference for ILO policy.",
        "Apply the principles of the Guidelines to human mobility in the context of climate change, including policy coherence, inclusion in adaptation planning, social dialogue and data.",
        "Compare how regional initiatives, such as the Pacific climate mobility strategies and the EU Just Transition Mechanism, address labour mobility in a just transition."
      ]
    },
    {
      number: 6, week: 3, format: "online", date: "2026-11-12", start: "10:00", end: "11:30",
      title: "Gender and Intersectional Inclusion in Climate-Related Labour Mobility",
      speakers: [{ name: "Emanuela Pozzani", org: "GEDI", status: "tbc" }],
      speakersNote: "Speakers to be confirmed.",
      abstract: "Climate change compounds the inequalities that women, young people, persons with disabilities and indigenous peoples already face, and labour mobility can accentuate or reduce social exclusion. Taking gender inclusion as an illustrative example, the session looks at the evidence on women as agents of adaptation and mobility and the barriers that limit them — exclusion from land, credit, inputs, training, social insurance and decision-making — and discusses what this means for policy, from disaggregated data and inclusive skills development to participation in social dialogue.",
      objectives: [
        "Explain how climate change, labour mobility and pre-existing inequalities interact to affect women, young people, persons with disabilities and indigenous peoples differently.",
        "Analyse the evidence on women as agents of adaptation and mobility, and the barriers — access to land, credit, training, social protection and decision-making — that constrain them.",
        "Identify gender-responsive and inclusive policy measures, including disaggregated data, inclusion in skills development and participation in social dialogue."
      ]
    },
    {
      number: 7, week: 4, format: "online", date: "2026-11-17", start: "10:00", end: "11:30",
      title: "Climate Change and Labour Mobility in the Global Debate",
      speakers: [
        { name: "Paul Tacon", org: "ILO" },
        { name: "Andrew Harper", org: "UNHCR" },
        { name: "Helena De Jong" }
      ],
      abstract: "The session reviews the core scientific, legal and funding architecture of climate action — the IPCC, the UNFCCC and the Paris Agreement with their national plans (NDCs and NAPs), the Cancun Adaptation Framework, the Warsaw International Mechanism and its Task Force on Displacement, the Sendai Framework and the Loss and Damage Fund — and asks how far human mobility and its labour dimension are reflected in them. It also introduces the mandates of the ILO, IOM, UNHCR and FAO, with ILO and UNHCR speakers sharing what greater policy coherence between climate, migration and labour market policy would require.",
      objectives: [
        "Describe the main scientific, legal and funding frameworks for climate action and how far they address human and labour mobility.",
        "Identify the mandates and roles of the ILO, IOM, UNHCR and FAO in addressing climate mobility.",
        "Discuss what policy coherence between climate, migration and labour agendas requires at global level."
      ]
    },
    {
      number: 8, week: 4, format: "online", date: "2026-11-19", start: "10:00", end: "11:30",
      title: "Regional Deep Dives: CARICOM, IGAD and the Pacific Regional Framework",
      speakers: [
        { name: "Wanya Illes", org: "CARICOM", status: "tbc" },
        { name: "Agnes Igoye", org: "IGAD", status: "tbc" },
        { name: "Murielle Meltenoven", org: "Pacific representative", status: "tbc" }
      ],
      speakersNote: "Speakers and moderator to be confirmed.",
      abstract: "Intraregional movement is the most common form of cross-border mobility in the context of climate change and disasters, which makes regional solutions essential. The session looks at the IGAD region and its 2020 Protocol on Free Movement of Persons, the Caribbean free movement arrangements in OECS and CARICOM, and the 2023 Pacific Regional Framework on Climate Mobility. Regional speakers compare approaches and discuss lessons for South-South and Triangular Cooperation among small island developing states, with links to the Tuvalu and Barbuda case studies.",
      objectives: [
        "Compare how IGAD, CARICOM and OECS, and Pacific institutions address climate mobility through free movement, labour mobility and regional frameworks.",
        "Explain the role of regional free movement agreements as pathways for protection and access to labour markets for people moving in the context of disasters and climate change.",
        "Identify lessons for South-South and Triangular Cooperation, particularly among small island developing states."
      ]
    },
    {
      number: 9, week: 5, format: "online", date: "2026-11-24", start: "10:00", end: "11:30",
      title: "Bilateral Labour Migration Agreements (BLMAs) and Fair Recruitment in Climate Mobility",
      speakers: [
        { name: "Paul Tacon", org: "ILO", status: "tbc" },
        { name: "Maria Gallotti", org: "ILO", status: "tbc" }
      ],
      speakersNote: "Speakers to be confirmed.",
      abstract: "Bilateral labour migration agreements (BLMAs) are among the most common tools for creating safe, orderly and regular pathways for people who move in the context of climate change, yet most schemes are temporary and may not give workers the same rights. The session examines how BLMAs and regional arrangements can integrate skills development, recognition and matching, and return and reintegration — with examples such as MOVE_GREEN and the Colombia–Peru framework agreement — and addresses fair recruitment, including the principle that workers should not bear recruitment fees and related costs.",
      objectives: [
        "Explain how BLMAs and temporary labour migration schemes can offer pathways in the context of climate change, and the decent work risks they carry when poorly governed.",
        "Apply the ILO fair recruitment principles to workers affected by climate change, including the prohibition of recruitment fees and related costs.",
        "Identify provisions on skills, recognition, return and reintegration that could be integrated in a BLMA, drawing on examples such as MOVE_GREEN and the Colombia–Peru agreement."
      ]
    },
    {
      number: 10, week: 5, format: "online", date: "2026-11-26", start: "10:00", end: "11:30",
      title: "Universal Social Protection for Climate Action and a Just Transition",
      speakers: [{ name: "Jana Bischler", status: "tbc" }],
      speakersNote: "Speakers to be confirmed.",
      abstract: "Social protection is an essential part of climate adaptation and mitigation and of a just transition. The session sets out four policy recommendations — stress-testing existing systems against climate scenarios, integrated governance, linking social protection to jobs in the green economy, and inclusivity — and reviews country experience, from national adaptation plans and NDCs to cash transfers, employment guarantee schemes and universal approaches. It highlights gaps — urban settings, planned relocation, portability of benefits across borders — and the question of financing, with the principle that migrant workers should benefit from the same social protection measures as all workers.",
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
      speakers: [],
      speakersNote: "Speaker to be confirmed.",
      abstract: "The countries most exposed to climate change typically have the fewest resources to respond and bear the least responsibility for it — the basis of common but differentiated responsibilities and of the case for restitution and restorative justice. The session reviews the funding landscape — the Global Environment Facility, the Adaptation Fund, the Least Developed Countries Fund, the Green Climate Fund and the Loss and Damage Fund established at COP27 — and why these remain insufficient. It then turns to national levers: macroeconomic and fiscal instruments, NAPs and NDCs, and options for financing social protection.",
      objectives: [
        "Describe the main climate funding channels and Loss and Damage arrangements relevant to human mobility, and why they remain insufficient for the needs involved.",
        "Explain the principles of common but differentiated responsibilities and restorative justice as a rationale for financing resilience, adaptation, relocation and social protection in the most affected countries.",
        "Identify ways to link climate finance, national budgets and instruments such as NAPs and NDCs to decent work, social protection and labour mobility outcomes."
      ]
    },
    {
      number: 12, week: 6, format: "online", date: "2026-12-03", start: "10:00", end: "11:30",
      title: "Presentation of Group Work and Closing Ceremony",
      speakers: [{ name: "ITCILO course team and faculty", group: true }],
      abstract: "Groups present the group work carried out alongside the course, each focusing on one country case study: social protection and climate resilience in Zimbabwe; the repeal of the Barbuda Land Act after Hurricane Irma; and Tuvalu and the Falepili Union Treaty with Australia. Each group has up to 15 minutes to present, followed by 10 minutes of discussion and feedback. The session closes with the closing ceremony, reflecting on key takeaways and next steps.",
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
