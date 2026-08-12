import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const handoff = path.join(root, "Chapter-07-Think-Like-a-Historian-Handoff");
const sourcePath = path.join(handoff, "HIST101_Ch7_Think_Like_a_Historian.html");
const sourceHtml = fs.readFileSync(sourcePath, "utf8");
const match = sourceHtml.match(/<script id="question-bank" type="application\/json">([\s\S]*?)<\/script>/);
if (!match) throw new Error("Chapter 7 handoff question bank was not found.");
const draft = JSON.parse(match[1]);

const retainedIds = [
  "ch07-explain-001", "ch07-explain-002", "ch07-explain-003", "ch07-explain-004", "ch07-explain-005",
  "ch07-explain-006", "ch07-explain-007", "ch07-explain-008", "ch07-explain-009", "ch07-explain-010",
  "ch07-use-001", "ch07-use-002", "ch07-use-003", "ch07-use-004", "ch07-use-006", "ch07-use-008",
  "ch07-use-009", "ch07-use-010",
  "ch07-connect-001", "ch07-connect-003", "ch07-connect-005", "ch07-connect-006", "ch07-connect-007",
  "ch07-connect-009", "ch07-connect-010"
];

const reviewScaffolds = {
  "ch07-explain-001": {
    partialValidity: "Washington's reputation helps explain legitimacy, while Hamilton's program explains fiscal capacity. Each is useful but too narrow by itself.",
    qualification: "Precedent and capacity made the government workable, but public legitimacy also shaped whether people accepted its new routines and powers."
  },
  "ch07-explain-002": {
    partialValidity: "The tax burden and western farmers' local economy help explain why resistance began, even though they do not explain the episode's full constitutional importance.",
    qualification: "The rebellion demonstrated federal capacity, but the lack of a major battle and the pardons qualify a simple story of unchecked coercion."
  },
  "ch07-explain-003": {
    partialValidity: "Banking policy and competing economic interests mattered, but they do not fully explain why the dispute became a lasting constitutional argument.",
    qualification: "The debate centered on implied power while also carrying real disagreements about finance, interests, and the risks of concentrated authority."
  },
  "ch07-explain-004": {
    partialValidity: "Foreign danger was real, so security concerns were not invented. That still does not make every domestic critic disloyal.",
    qualification: "Foreign crisis intensified an older fear of faction; it made repression plausible without proving that repression was justified."
  },
  "ch07-explain-005": {
    partialValidity: "Federal prosecution shows the reach of repression, while Lyon's victory shows the continuing force of electoral legitimacy.",
    qualification: "Lyon's reelection demonstrates resistance within his constituency, not unanimous public opposition to the Sedition Act."
  },
  "ch07-explain-006": {
    partialValidity: "Jefferson's victory mattered, but the stronger explanation centers on the losing party yielding power while remaining a legal opposition.",
    qualification: "The transfer normalized partisan succession without ending party conflict or removing the constitutional system's inequalities."
  },
  "ch07-explain-007": {
    partialValidity: "Jefferson's limited-government principles were genuine, and the strategic opportunity was unusually valuable. The decision grew from the collision between them.",
    qualification: "Contingency explains why Jefferson acted broadly, but it does not erase the constitutional tension he recognized."
  },
  "ch07-explain-008": {
    partialValidity: "The map accurately records a transferred imperial claim; it becomes misleading only when claim is mistaken for control or consent.",
    qualification: "The Purchase expanded U.S. claims quickly, while effective sovereignty still depended on diplomacy, knowledge, and power on the ground."
  },
  "ch07-explain-009": {
    partialValidity: "Impressment, War Hawk advocacy, Canada, and western conflict each explain part of the road to war, but no single factor explains the timing as well.",
    qualification: "War became thinkable through converging crises and failed alternatives, yet Congress's divided vote shows it never became an uncontested choice."
  },
  "ch07-explain-010": {
    partialValidity: "British violations help explain support for war, but they do not explain why many representatives rejected war as the remedy.",
    qualification: "A divided republic chose war: national policy followed constitutional voting, not public unanimity."
  },
  "ch07-use-001": {
    partialValidity: "The constitutional text created the office and some powers, so it remains part of the explanation even though it did not specify the working routine.",
    qualification: "The presidency developed from constitutional structure plus experiments that turned ambiguous instructions into precedent."
  },
  "ch07-use-002": {
    partialValidity: "The tyranny interpretation notices the scale of federal force, but it leaves out the limited fighting, legal process, and pardons.",
    qualification: "The episode combined overwhelming enforcement capacity with restraint in punishment, so neither simple triumph nor simple tyranny explains all the evidence."
  },
  "ch07-use-003": {
    partialValidity: "A foreign emergency can create genuine security risks, which is why the disloyalty interpretation may initially look plausible.",
    qualification: "A stronger claim would distinguish evidence of hostile action from criticism, organization, or disagreement."
  },
  "ch07-use-004": {
    partialValidity: "The letter would show one partisan accepting the transfer while planning continued opposition; it would not by itself prove that everyone accepted the new norm.",
    qualification: "Treat the letter as evidence that loser's consent and organized opposition could coexist, not as proof that partisan fear disappeared."
  },
  "ch07-use-006": {
    partialValidity: "The expedition did extend state knowledge and announce U.S. claims, so it was more than passive travel.",
    qualification: "It strengthened knowledge and claims while its dependence on Native communities revealed incomplete control."
  },
  "ch07-use-008": {
    partialValidity: "The policy genuinely aimed to avoid war, but that peaceful foreign purpose does not describe how it operated inside the United States.",
    qualification: "Peaceable coercion avoided formal war abroad while expanding surveillance and enforcement at home."
  },
  "ch07-use-009": {
    partialValidity: "The alternatives failed to secure U.S. goals, so listing them does not prove that war was the only remaining policy.",
    qualification: "The evidence weakens the claim that war came first; it supports a narrower argument that leaders chose war after several incomplete or unsuccessful alternatives."
  },
  "ch07-use-010": {
    partialValidity: "British connections mattered to the western crisis, but they do not explain the movement's religious, political, and anti-cession goals.",
    qualification: "A stronger interpretation includes British support while preserving Indigenous agency and disagreement among Native communities."
  },
  "ch07-connect-001": {
    partialValidity: "Ideology, personalities, and foreign affairs also helped create parties; federal capacity explains why control of the government carried higher stakes.",
    qualification: "New state power helped organize opposition, but it worked alongside older fears of corruption and immediate foreign crises."
  },
  "ch07-connect-003": {
    partialValidity: "Hamilton and Jefferson defended different constitutional visions, even though both confronted a Constitution without a complete operating manual.",
    qualification: "Both used practical or implied power to govern, but they justified that power differently and faced different policy problems."
  },
  "ch07-connect-005": {
    partialValidity: "British influence helps explain the international dimension of western conflict, while Native resistance had its own goals and sources.",
    qualification: "Expansion widened U.S. claims; continuing Native sovereignty and British connections made those claims part of a larger continental crisis."
  },
  "ch07-connect-006": {
    partialValidity: "Both episodes expanded possibilities within the republic, but they did not distribute liberty or consent in the same way.",
    qualification: "The republic broadened legitimate partisan competition while territorial expansion intensified unequal struggles over sovereignty and consent."
  },
  "ch07-connect-007": {
    partialValidity: "Both cases involved federal coercive power, but armed resistance and political criticism were not the same form of opposition.",
    qualification: "The comparison should evaluate both the form of opposition and whether the government's response was proportionate."
  },
  "ch07-connect-009": {
    partialValidity: "Constitutional institutions contained disagreement in both cases, though that does not mean the system was fully equal or the decisions were consensual.",
    qualification: "Durability came from managing contest through institutions, not from eliminating partisan or sectional conflict."
  },
  "ch07-connect-010": {
    partialValidity: "Each lecture has a distinct immediate problem, so the throughline should not flatten every conflict into the same cause.",
    qualification: "The republic survived through greater power, partisanship, expansion, and war, while each development reopened questions about liberty and legitimacy."
  }
};

const newExplain = [
  {
    id: "ch07-explain-011", chapter: 7, lectureIds: ["ch07-lec01"], category: "explain", thinkingMove: "cause",
    difficulty: "developing", status: "approved", practiceOnly: true,
    stem: "Which interpretation best explains why Hamilton treated public credit as a problem of national power?",
    choices: [
      { id: "a", text: "Paying creditors would make every dispute over federal policy disappear.", feedback: "Credit could strengthen capacity, but it could not eliminate political conflict." },
      { id: "b", text: "Reliable repayment would let the government borrow, survive crises, and make national commitments credible.", feedback: "This connects debt repayment to the government's practical ability to act." },
      { id: "c", text: "Assumption mattered only because states had no remaining debts of their own.", feedback: "States differed, and assumption shifted obligations and political gravity toward the federal government." },
      { id: "d", text: "Public credit was mainly a symbolic effort to make Hamilton personally popular.", feedback: "The lecture emphasizes institutional credibility and capacity, not Hamilton's popularity." }
    ],
    correctChoiceId: "b",
    conciseCorrectFeedback: "Exactly. Hamilton linked repayment to the capacity to borrow, respond to crisis, and make federal promises credible.",
    conciseIncorrectFeedback: "Not quite. Ask what a government gains when lenders believe it will honor its obligations.",
    walkthrough: [
      "Identify Hamilton's immediate problem: the government had debts and uncertain credit.",
      "Ask what reliable repayment would make possible later, especially during crisis or war.",
      "The strongest interpretation connects credibility to borrowing and state capacity rather than to popularity alone.",
      "That explanation can still be qualified by asking who benefited and who carried the costs."
    ],
    transferStrategy: "For institutional causes, trace how a policy changes what a government can do, not only who supports it.",
    hint: "What becomes possible when creditors trust a government?",
    relatedQuestionFamily: "public credit and state capacity",
    sourceAlignment: { primarySource: "Chapter 7 Lecture 1 and Chapter 7 Historian's Notebook", lectureClaim: "Hamilton treated public credit as the foundation of borrowing capacity and national credibility.", notes: "Formal instructional stream only; optional enrichment excluded. Practice-only wording." },
    accessibilityNotes: "Text-only item; no image or outside source is required.",
    reasoningReview: { partialValidity: "The program affected interests and political loyalties, but those effects do not replace Hamilton's central capacity argument.", qualification: "Public credit strengthened national capacity while also creating distributive and political conflicts that the capacity explanation should not erase." }
  },
  {
    id: "ch07-explain-012", chapter: 7, lectureIds: ["ch07-lec02"], category: "explain", thinkingMove: "context",
    difficulty: "developing", status: "approved", practiceOnly: true,
    stem: "Which explanation best accounts for newspapers becoming central to organized opposition in the 1790s?",
    choices: [
      { id: "a", text: "Newspapers created every disagreement before leaders had any policy conflicts.", feedback: "Newspapers organized conflict, but they did not invent all of its political causes." },
      { id: "b", text: "Printers replaced elections, making voting unnecessary for political organization.", feedback: "Partisan print worked with elections, meetings, and petitions rather than replacing them." },
      { id: "c", text: "Newspapers helped turn criticism into a shared public campaign that could organize meetings, petitions, and electoral opposition.", feedback: "This explains how print became political infrastructure, not just a source of information." },
      { id: "d", text: "The Constitution required each emerging party to publish an official newspaper.", feedback: "No constitutional rule created party newspapers; they developed through political practice." }
    ],
    correctChoiceId: "c",
    conciseCorrectFeedback: "Exactly. Partisan newspapers helped transform disagreement into organized, public, and sustained opposition.",
    conciseIncorrectFeedback: "Not quite. Focus on how print connected individual criticism to collective political action.",
    walkthrough: [
      "Separate the existence of disagreement from the means used to organize it.",
      "Newspapers circulated arguments, identified allies, and linked readers to meetings, petitions, and elections.",
      "The infrastructure explanation accounts for political coordination without claiming that print invented every conflict.",
      "Foreign crisis later made this organized opposition appear more threatening."
    ],
    transferStrategy: "When explaining political organization, identify the institutions that turn private views into coordinated public action.",
    hint: "What could a newspaper do beyond reporting that a disagreement existed?",
    relatedQuestionFamily: "partisan press as infrastructure",
    sourceAlignment: { primarySource: "Chapter 7 Lecture 2 and Chapter 7 Historian's Notebook", lectureClaim: "Partisan newspapers helped create and organize political opposition through public communication.", notes: "Formal instructional stream only; optional enrichment excluded. Practice-only wording." },
    accessibilityNotes: "Text-only item; no image or outside source is required.",
    reasoningReview: { partialValidity: "Policy disputes and personal rivalries existed before the press organized them, so newspapers were an enabling cause rather than the sole origin of partisanship.", qualification: "Print helped build party organization while elections, meetings, petitions, and foreign crisis also shaped the emerging opposition." }
  },
  {
    id: "ch07-explain-013", chapter: 7, lectureIds: ["ch07-lec03"], category: "explain", thinkingMove: "cause",
    difficulty: "developing", status: "approved", practiceOnly: true,
    stem: "Which explanation gives events in Saint-Domingue the right weight in the Louisiana Purchase?",
    choices: [
      { id: "a", text: "The collapse of Napoleon's Caribbean project reduced Louisiana's value, helping make a sale possible alongside other strategic pressures.", feedback: "This treats Saint-Domingue as a major contingent cause without turning it into the only cause." },
      { id: "b", text: "Events in Saint-Domingue had no connection to France's decision about Louisiana.", feedback: "The failure of the Caribbean project changed Louisiana's strategic usefulness to France." },
      { id: "c", text: "The Haitian Revolution alone completed the Purchase without French or American decisions.", feedback: "It changed the opportunity, but Napoleon, the envoys, and Jefferson still made consequential choices." },
      { id: "d", text: "France offered Louisiana because it had already established secure control across North America.", feedback: "Louisiana had become harder to use and defend, not securely controlled as a continental empire." }
    ],
    correctChoiceId: "a",
    conciseCorrectFeedback: "Exactly. Resistance and disease helped wreck Napoleon's Caribbean plan, changing Louisiana's value without mechanically causing the sale by themselves.",
    conciseIncorrectFeedback: "Not quite. Give Saint-Domingue real causal weight without treating it as the only decision in the story.",
    walkthrough: [
      "Identify France's larger plan: rebuild a Caribbean slave empire supported by Louisiana.",
      "Resistance and epidemic disease devastated that project and made Louisiana less useful and harder to defend.",
      "The strongest explanation then adds Napoleon's strategy, the New Orleans crisis, and the envoys' decision.",
      "This is contingency: an outcome in one region changed the choices available in another."
    ],
    transferStrategy: "For multicausal explanation, give a major turning point real weight while still naming the decisions and conditions that connected it to the outcome.",
    hint: "Did Saint-Domingue make the sale automatic, or did it change the strategic opportunity?",
    relatedQuestionFamily: "Haiti and Louisiana contingency",
    sourceAlignment: { primarySource: "Chapter 7 Lecture 3 and Chapter 7 Historian's Notebook", lectureClaim: "The collapse of Napoleon's Caribbean project helped make Louisiana available but did not alone cause the Purchase.", notes: "Formal instructional stream only; optional enrichment excluded. Practice-only wording." },
    accessibilityNotes: "Text-only item; no image or outside source is required.",
    reasoningReview: { partialValidity: "Napoleon's choices and the U.S. need for New Orleans remain essential, but neither explains why France's strategic calculation changed when it did.", qualification: "Saint-Domingue helped make the sale possible; French strategy, American urgency, and diplomatic choice turned that possibility into the Purchase." }
  },
  {
    id: "ch07-explain-014", chapter: 7, lectureIds: ["ch07-lec03"], category: "explain", thinkingMove: "evidence",
    difficulty: "developing", status: "approved", practiceOnly: true,
    stem: "Which interpretation best explains why the Lewis and Clark expedition both expanded U.S. power and revealed its limits?",
    choices: [
      { id: "a", text: "It proved the United States already governed every community within the purchased claim.", feedback: "Repeated dependence on Native diplomacy and knowledge contradicts complete control." },
      { id: "b", text: "It gathered knowledge and announced U.S. claims, while dependence on Native communities exposed incomplete sovereignty.", feedback: "This interpretation accounts for both the expedition's state-building purpose and its practical limits." },
      { id: "c", text: "It had no political purpose because it also collected scientific information.", feedback: "Scientific, commercial, diplomatic, and political goals operated together." },
      { id: "d", text: "It failed whenever expedition members accepted help from Native communities.", feedback: "Native assistance made the expedition possible; dependence reveals limits without turning the journey into simple failure." }
    ],
    correctChoiceId: "b",
    conciseCorrectFeedback: "Exactly. The expedition converted knowledge into state capacity, yet its dependence showed that U.S. claims were not the same as effective sovereignty.",
    conciseIncorrectFeedback: "Not quite. Choose the interpretation that can explain both what the expedition added and what its dependence revealed.",
    walkthrough: [
      "List what the expedition produced: maps, observations, diplomatic information, and a public U.S. claim.",
      "Then list what it needed: Native trade, interpreters, horses, routes, and permission to move.",
      "An interpretation of complete mastery explains the first list but fails the second.",
      "The stronger interpretation holds expansion and limitation together."
    ],
    transferStrategy: "When evidence points in two directions, build an interpretation that explains both instead of discarding the inconvenient half.",
    hint: "What interpretation can account for both state knowledge and Native assistance?",
    relatedQuestionFamily: "expedition knowledge and sovereignty",
    sourceAlignment: { primarySource: "Chapter 7 Lecture 3 and Chapter 7 Historian's Notebook", lectureClaim: "Lewis and Clark extended U.S. knowledge and claims while depending on Native diplomatic and commercial worlds.", notes: "Formal instructional stream only; optional enrichment excluded. Practice-only wording." },
    accessibilityNotes: "Text-only item; no image or outside source is required.",
    reasoningReview: { partialValidity: "The expedition did strengthen U.S. knowledge and diplomatic claims, so an expansion interpretation explains part of the evidence.", qualification: "It expanded state knowledge and claims without proving complete control; dependency is evidence of contested sovereignty, not of a purposeless expedition." }
  },
  {
    id: "ch07-explain-015", chapter: 7, lectureIds: ["ch07-lec04"], category: "explain", thinkingMove: "cause",
    difficulty: "developing", status: "approved", practiceOnly: true,
    stem: "Which interpretation gives the War Hawks the strongest but properly qualified role in the decision for war?",
    choices: [
      { id: "a", text: "They invented every grievance and forced a united country into war for Canada alone.", feedback: "Maritime and western grievances predated their influence, and the vote was sharply divided." },
      { id: "b", text: "They mattered only after war began and therefore did not affect the congressional choice.", feedback: "Militant Republicans helped raise the political temperature before the declaration." },
      { id: "c", text: "They made war politically possible by pressing existing grievances after alternatives failed, without single-handedly causing the crisis.", feedback: "This gives political advocacy real weight while preserving the broader causal setting." },
      { id: "d", text: "They opposed every attempt to connect maritime pressure with western conflict.", feedback: "War advocates helped present those problems as parts of a larger sovereignty crisis." }
    ],
    correctChoiceId: "c",
    conciseCorrectFeedback: "Exactly. War Hawks helped convert an existing, converging crisis into congressional action; they did not create every cause or a national consensus.",
    conciseIncorrectFeedback: "Not quite. Give political advocates real influence without treating them as the only source of the crisis.",
    walkthrough: [
      "Separate the grievances from the people who organized support for a policy response.",
      "Impressment, failed alternatives, and western conflict already existed.",
      "War Hawks gained institutional influence and helped frame war as the necessary answer.",
      "The divided vote shows their success was consequential but incomplete."
    ],
    transferStrategy: "Distinguish people who make an outcome politically possible from the deeper conditions that created the problem they mobilized around.",
    hint: "Did the War Hawks create the crisis, or did they help turn it into a policy choice?",
    relatedQuestionFamily: "War Hawks and political causation",
    sourceAlignment: { primarySource: "Chapter 7 Lecture 4 and Chapter 7 Historian's Notebook", lectureClaim: "War Hawks helped make war politically possible without inventing or single-handedly causing the crisis.", notes: "Formal instructional stream only; optional enrichment excluded. Practice-only wording." },
    accessibilityNotes: "Text-only item; no image or outside source is required.",
    reasoningReview: { partialValidity: "War Hawk leadership and interest in Canada mattered, but neither explains the long maritime crisis, failed alternatives, or Indigenous agency in the West.", qualification: "War Hawks helped turn converging grievances into a congressional option, while a divided vote limits any claim that they created a national consensus." }
  }
];

const choiceTextRevisions = {
  "ch07-explain-004": { c: "Because the Constitution explicitly prohibited political parties and treated organized opposition as illegal." },
  "ch07-explain-005": { c: "It demonstrated that voters across the entire country unanimously opposed the Sedition Act." },
  "ch07-explain-006": {
    a: "The election ended party conflict because both sides accepted a lasting national consensus.",
    b: "The victorious party rewrote the Constitution before it allowed the transfer of executive power.",
    c: "A bitter contest ended with the losing party yielding office while the winning opposition stayed inside the constitutional system."
  },
  "ch07-explain-009": {
    a: "The desire among some War Hawks to take Canada became the single motive that caused the war.",
    c: "Maritime pressure, failed alternatives, and western conflict increasingly appeared as one sovereignty crisis.",
    d: "The United States entered the war only after Britain invaded and burned Washington, D.C."
  },
  "ch07-explain-010": {
    b: "It proves that almost no Americans considered British maritime policy or impressment a serious national problem.",
    c: "It shows that War Hawks had no influence on Congress or on the final decision to declare war."
  },
  "ch07-explain-013": {
    a: "The collapse of Napoleon's Caribbean project reduced Louisiana's value, helping make a sale possible with other pressures.",
    b: "Events in Saint-Domingue played no part in changing France's strategic calculation about Louisiana."
  },
  "ch07-explain-015": {
    c: "They made war politically possible by pressing existing grievances after alternatives failed, without causing the crisis alone.",
    d: "They opposed attempts to connect British maritime pressure with western conflict and Native resistance."
  },
  "ch07-use-002": {
    a: "The government demonstrated coercive power by mobilizing a militia force of about 13,000.",
    b: "The resistance began around a federal excise tax that burdened western producers.",
    c: "The resistance dispersed without a major battle, and Washington pardoned the two men convicted of treason.",
    d: "Hamilton argued that reliable excise revenue was necessary to sustain public credit."
  },
  "ch07-use-003": {
    a: "Foreign crisis can make opposition appear dangerous, but the 1790s show why a republic must distinguish criticism from treason.",
    b: "Foreign crises never create legitimate security concerns for a constitutional republic.",
    c: "Any group criticizing an administration during a crisis automatically acts as loyal opposition.",
    d: "The best test of loyalty is whether criticism appears in print rather than at a public meeting."
  },
  "ch07-use-006": {
    a: "Strengthen the claim because dependence on local help proves that sovereignty was already complete.",
    d: "Conclude that gathering knowledge means the government had no interest in territorial expansion."
  },
  "ch07-use-009": {
    a: "War Hawks became more influential in Congress and pressed for a military response to Britain.",
    b: "Before declaring war, Jefferson and Madison tried diplomacy, embargo, non-intercourse, and other economic pressure.",
    c: "The congressional votes for war were sharply divided rather than showing national unanimity.",
    d: "Tecumseh and Tenskwatawa pursued a movement that resisted further U.S. land expansion."
  },
  "ch07-use-010": {
    a: "British officials sometimes supplied Native resistance movements with material and diplomatic support.",
    b: "Tecumseh and Tenskwatawa pursued their own religious, political, and anti-cession goals amid Native disagreement.",
    c: "Some U.S. politicians suspected that British influence explained the entire western resistance movement.",
    d: "The United States and Britain later fought a war that also involved conflict in the West."
  },
  "ch07-connect-001": {
    c: "New federal power raised the stakes of controlling government, helping turn disagreement into organized opposition."
  },
  "ch07-connect-003": {
    a: "Both show leaders using implied or practical power when the Constitution offered no simple operating instruction."
  },
  "ch07-connect-005": {
    b: "Expansion widened U.S. claims while Native nations defended sovereignty, making western conflict part of a larger continental problem.",
    c: "The Purchase immediately caused Britain to abandon its posts, diplomacy, and influence in North America."
  },
  "ch07-connect-006": {
    a: "The early republic survived mainly by avoiding constitutional decisions that could produce political conflict.",
    b: "Parties became legitimate while expansion raised new contradictions involving republican consent and Native sovereignty."
  },
  "ch07-connect-007": {
    b: "It distinguishes armed resistance from political criticism and asks whether the federal response fit each form of opposition.",
    c: "It proves that partisan newspapers posed a more violent danger than armed resistance to a federal tax.",
    d: "It shows that the federal government avoided using coercive power against citizens in both episodes."
  },
  "ch07-connect-009": {
    b: "The republic endured partly by keeping major disagreements contested within constitutional institutions.",
    c: "Every major national decision required unanimous consent from voters, representatives, and political parties."
  },
  "ch07-connect-010": {
    c: "The republic survived through more power, opposition, expansion, and war, while each solution reopened questions about liberty and legitimacy.",
    d: "Every conflict after 1789 grew from a single disagreement between Hamilton and Jefferson over policy."
  }
};

const stemRevisions = {
  "ch07-use-001": "A historian claims the Constitution's text fully designed the early presidency. New evidence shows Washington abandoned unworkable Senate consultation and began relying on department heads. How should the claim change?",
  "ch07-use-003": "During an international crisis, a movement publishes harsh criticism of the government. A historian treats the criticism as disloyal by definition. Which Chapter 7 lesson best tests that claim?",
  "ch07-use-004": "A new 1801 letter says, 'We lost the election, but we will organize to defeat the new administration rather than resist the transfer of office.' Which interpretation would it most strongly support?",
  "ch07-use-006": "A historian says an expedition through newly acquired territory proves government control. The expedition needed local interpreters, food, horses, permission, and knowledge. What should the historian do?",
  "ch07-use-008": "A government bans much foreign trade to avoid war, then expands customs surveillance and punishes smuggling. Which interpretation best applies Chapter 7's model of 'peaceable coercion'?"
};

const retained = draft.questions.filter(question => retainedIds.includes(question.id)).map(question => ({
  ...question,
  reasoningReview: reviewScaffolds[question.id]
}));
if (retained.length !== retainedIds.length) throw new Error(`Expected ${retainedIds.length} retained items, found ${retained.length}.`);

const categoryOrder = { explain: 0, use: 1, connect: 2 };
const questions = [...retained, ...newExplain].sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category] || a.id.localeCompare(b.id));
const targetPositions = ["c", "b", "a", "d", "b", "c", "a", "d", "c", "b", "d", "a", "c", "b", "d", "a", "c", "d", "b", "a", "d", "b", "c", "b", "a", "d", "c", "b", "a", "a"];
questions.forEach((question, index) => {
  if (stemRevisions[question.id]) question.stem = stemRevisions[question.id];
  const revisions = choiceTextRevisions[question.id] || {};
  question.choices.forEach(choice => { if (revisions[choice.id]) choice.text = revisions[choice.id]; });
  const strongest = question.choices.find(choice => choice.id === question.correctChoiceId);
  const others = question.choices.filter(choice => choice.id !== question.correctChoiceId);
  const targetIndex = ["a", "b", "c", "d"].indexOf(targetPositions[index]);
  const reordered = others.slice();
  reordered.splice(targetIndex, 0, strongest);
  question.choices = reordered.map((choice, choiceIndex) => ({ ...choice, id: ["a", "b", "c", "d"][choiceIndex] }));
  question.correctChoiceId = targetPositions[index];
});

const bank = {
  schemaVersion: "2.0",
  chapter: 7,
  chapterTitle: "Completing the Revolution, 1789–1815",
  studentTitle: "Think Like a Historian: Chapter 7",
  defaultScaffold: "early",
  moduleReturnUrl: "",
  practiceOnly: true,
  reasoningStage: "exam2-early",
  developmentalQuestion: "How do historians decide which explanation is stronger?",
  endOfSessionReview: true,
  reasoningReviewMode: "full",
  studentReasoningIntro: "More than one interpretation can contain part of the truth. Historians compare what each explanation claims, what evidence it accounts for, what evidence creates trouble, and whether a qualification would make it stronger.",
  reasoningReviewPrompts: [
    "What is each interpretation actually claiming?",
    "What evidence does each explanation account for?",
    "What evidence complicates or weakens it?",
    "Which interpretation has greater explanatory power?",
    "Could the weaker interpretation still explain part of the story?",
    "What qualification would improve the argument?"
  ],
  sourceFiles: [
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Lec1_The_Constitution_Had_No_Instruction_Manual.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Lec2_When_Does_Opposition_Become_Treason.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Lec3_Can_a_Republic_Have_an_Empire.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Lec4_Why_Did_a_Republic_That_Feared_War_Choose_War.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Historians_Notebook.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Think_Like_a_Historian.html",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Ch7_Think_Like_a_Historian_Question_Review.md",
    "Chapter-07-Think-Like-a-Historian-Handoff/HIST101_Think_Like_a_Historian_Developmental_Reasoning_and_Scaffold_Progression_v1.0.md"
  ],
  lectureTitles: [
    { id: "ch07-lec01", title: "The Constitution Had No Instruction Manual", core: "Precedent, capacity, and legitimacy" },
    { id: "ch07-lec02", title: "When Does Opposition Become Treason?", core: "Faction, repression, loyal opposition, and transfer of power" },
    { id: "ch07-lec03", title: "Can a Republic Have an Empire?", core: "Expansion, constitutional power, claim, and sovereignty" },
    { id: "ch07-lec04", title: "Why Did a Republic That Feared War Choose War?", core: "Maritime sovereignty, failed alternatives, Indigenous agency, converging crises, and a divided decision" }
  ],
  questions
};

fs.writeFileSync(path.join(root, "banks", "chapter-07.json"), `${JSON.stringify(bank, null, 2)}\n`);

const review = [
  "# HIST 101 — Think Like a Historian: Chapter 7", "",
  "## Question Review Copy", "",
  "**Developmental stage:** Exam 2 — Early",
  `**Developmental question:** ${bank.developmentalQuestion}`,
  "**Bank balance:** 15 Explain / 8 Use / 7 Connect / 30 total",
  "**Boundary:** Practice-only; formal instructional stream only. Optional enrichment and secure exam material are excluded.", "",
  "The integrated bank retains 25 handoff questions, removes two repetitive Use items and three lower-value Connect items, and adds five Explain items grounded in the formal lecture stream.", ""
];

for (const question of bank.questions) {
  review.push(`## ${question.id} — ${question.category[0].toUpperCase()}${question.category.slice(1)}`, "",
    `**Thinking move:** ${question.thinkingMove}`,
    `**Lecture(s):** ${question.lectureIds.join(", ")}`,
    `**Stem:** ${question.stem}`, "", "**Choices and response-specific feedback**", "");
  for (const choice of question.choices) {
    const strongest = choice.id === question.correctChoiceId ? " — strongest interpretation" : "";
    review.push(`- **${choice.id.toUpperCase()}${strongest}:** ${choice.text}`, `  - ${choice.feedback}`);
  }
  review.push("", `**Concise correct feedback:** ${question.conciseCorrectFeedback}`,
    `**Concise incorrect feedback:** ${question.conciseIncorrectFeedback}`, "", "**Walkthrough**", "",
    ...question.walkthrough.map((step, index) => `${index + 1}. ${step}`), "",
    `**Transfer strategy:** ${question.transferStrategy}`, "",
    `**Partial explanation to preserve:** ${question.reasoningReview.partialValidity}`, "",
    `**Qualification:** ${question.reasoningReview.qualification}`, "",
    `**Source-aligned claim:** ${question.sourceAlignment.lectureClaim}`, "", "---", "");
}

fs.writeFileSync(path.join(root, "review", "chapter-07-question-review.md"), `${review.join("\n").trimEnd()}\n`);
console.log(`Built Chapter 7 bank and review: ${bank.questions.length} items.`);
