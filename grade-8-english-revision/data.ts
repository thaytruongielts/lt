import { AppData, QuestionType } from './types';

export const examData: AppData = {
  title: "REVISION FOR THE FIRST TERM FINAL EXAM – GRADE 8",
  studentName: "Lãnh Thị Trà My",
  className: "8A6",
  sections: [
    {
      id: "I",
      title: "I. MULTIPLE CHOICE",
      description: "Choose the correct answer.",
      questions: [
        // Phonetics - Pronunciation
        { id: "1a", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["comic", "money", "online", "product"], correctAnswer: "money" },
        { id: "1b", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["cycled", "listened", "happened", "decided"], correctAnswer: "decided" },
        { id: "1c", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["sight", "mind", "birth", "slide"], correctAnswer: "birth" },
        { id: "1d", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["senses", "feelings", "fingers", "colours"], correctAnswer: "senses" },
        { id: "1e", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["ocean", "canyon", "country", "cave"], correctAnswer: "ocean" }, // Ocean is /ʃ/, others /k/
        { id: "1f", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["walked", "stopped", "learned", "surfed"], correctAnswer: "learned" }, // learned /d/ or /t/ but usually /d/, others /t/
        { id: "1g", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["problem", "insect", "second", "desert"], correctAnswer: "desert" },
        { id: "1h", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["trees", "stars", "sweets", "eggs"], correctAnswer: "sweets" }, // sweets /s/, others /z/
        { id: "1i", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["adventure", "lasagne", "carry", "yoga"], correctAnswer: "carry" },
        { id: "1j", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different pronunciation:", options: ["pay", "cave", "valley", "sensation"], correctAnswer: "valley" },

        // Phonetics - Stress
        { id: "2a", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["marine", "plastic", "resource", "concern"], correctAnswer: "plastic" },
        { id: "2b", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["persuade", "provide", "convince", "worry"], correctAnswer: "worry" },
        { id: "2c", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["offer", "contact", "finish", "inspire"], correctAnswer: "inspire" },
        { id: "2d", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["journey", "advance", "challenge", "island"], correctAnswer: "advance" },
        { id: "2e", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["wonderful", "different", "usual", "fantastic"], correctAnswer: "fantastic" },
        { id: "2f", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["bicycle", "alpaca", "video", "memory"], correctAnswer: "alpaca" },
        { id: "2g", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["apparent", "favorite", "popular", "media"], correctAnswer: "apparent" },
        { id: "2h", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["playground", "smartphone", "bamboo", "handbag"], correctAnswer: "bamboo" },
        { id: "2i", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["surprise", "amaze", "inspire", "desert"], correctAnswer: "desert" }, // Noun desert (1st), others 2nd
        { id: "2j", type: QuestionType.MULTIPLE_CHOICE, question: "Choose word with different stress pattern:", options: ["kayaking", "rainforest", "opponent", "skydiving"], correctAnswer: "opponent" },

        // Grammar & Vocab
        { id: "3", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Oh, you have got new shoes. They look nice. How much are they? Speaker B: They are ________ cheap, just $15.", question: "Choose the best answer:", options: ["obviously", "amazingly", "especially", "immediately"], correctAnswer: "amazingly" },
        { id: "4", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Do you know the famous boyband One Direction? Speaker B: Yes, my daughter was crazy ________ them. What a pity, they have split!", question: "Choose the best answer:", options: ["for", "with", "about", "to"], correctAnswer: "about" },
        { id: "5", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: J.K. Rowling is my favorite author. Speaker B: She is one of the ________ authors whose names are known worldwide.", question: "Choose the best answer:", options: ["best-sellings", "best-sellers", "best-seller", "best-selling"], correctAnswer: "best-selling" },
        { id: "6", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Look at the picture. This used to be a craze for teenagers in previous decades. Speaker B: Oh, it’s ________.", question: "Choose the best answer:", options: ["rock, paper, scissors", "bamboo jacks", "blind man’s buff", "tug of war"], correctAnswer: "bamboo jacks" },
        { id: "7", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: You saw Peter? Was he in the room? Speaker B: No, I ________ into the room and ________ out he ________ there.", question: "Choose the best answer:", options: ["went / found / was not", "went / founded / was not", "went / found / was", "went / founded / was"], correctAnswer: "went / found / was not" },
        { id: "8", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Hello mom, is everything OK? What were the kids doing when I called? Speaker B: Emma ________ the piano while Harry ________ a soccer match on TV.", question: "Choose the best answer:", options: ["was playing / is watching", "was playing / was watching", "was playing / were watching", "were playing / is watching"], correctAnswer: "was playing / was watching" },
        { id: "9", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: What happened to you? Speaker B: I ________ down when I ________ down the stairs.", question: "Choose the best answer:", options: ["fell / was walking", "fell / walked", "was falling / was walking", "was falling / walked"], correctAnswer: "fell / was walking" },
        { id: "10", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Do you know where John lives now? India? Speaker B: Well, he ________ in India, but now he lives in Germany.", question: "Choose the best answer:", options: ["didn’t use to live", "didn’t live", "used to living", "used to live"], correctAnswer: "used to live" },
        { id: "11", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Your new hairstyle looks terrific. Speaker B: ________", question: "Choose the best answer:", options: ["I’m glad you like it.", "I can’t believe you said that.", "It’s none of your business.", "It’s not my style either."], correctAnswer: "I’m glad you like it." },
        { id: "12", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: ________ Speaker B: The Minions.", question: "Choose the best answer:", options: ["What is your favorite type of film?", "Have you watched “The Minions”?", "How was the movie you watched last night?", "What cartoons do you like to watch?"], correctAnswer: "What cartoons do you like to watch?" },
        { id: "13", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Brother, I miss our childhood. Speaker B: The smell of the guavas always reminds me ________ our grandparents’ garden.", question: "Choose the best answer:", options: ["of", "with", "to", "at"], correctAnswer: "of" },
        { id: "14", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: What should I have? Speaker B: Sirloins, which have a moderate level of tenderness, give a slightly chewy ________.", question: "Choose the best answer:", options: ["flavor", "texture", "odor", "sensation"], correctAnswer: "texture" },
        { id: "15", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Look at the streets. Rubbish is everywhere. Speaker B: It is ________.", question: "Choose the best answer:", options: ["interesting", "disgusting", "fascinating", "exhausting"], correctAnswer: "disgusting" },
        { id: "16", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Tell me something about this problem. Speaker B: ________, which is a hearing problem, makes people hard to distinguish between musical pitches.", question: "Choose the best answer:", options: ["Color-blindness", "Tone-deafness", "Sensation loss", "Anosmia"], correctAnswer: "Tone-deafness" },
        { id: "17", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: I ________ this movie 3 times. Speaker B: The last time I ________ it was a month ago.", question: "Choose the best answer:", options: ["have watched / watched", "watched / have watched", "watched / watched", "have watched / have watched"], correctAnswer: "have watched / watched" },
        { id: "18", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: ________ you ever ________ The Great Wall of China? Speaker B: Yes. I visited the Great Wall on my last trip to China.", question: "Choose the best answer:", options: ["Did / visit", "Will / visit", "Have / visited", "Are / visiting"], correctAnswer: "Have / visited" },
        { id: "19", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Who did you talk to? Was it James? Speaker B: No, I haven’t talked to James since he ________ working at the company.", question: "Choose the best answer:", options: ["stops", "stopped", "has stopped", "has been stopping"], correctAnswer: "stopped" },
        { id: "20", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: How long have you been living in London? Speaker B: ________", question: "Choose the best answer:", options: ["since 6 months", "since 6 months ago", "for 6 months", "for 6 months ago"], correctAnswer: "for 6 months" },
        { id: "21", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: We are having a big gathering this weekend. Speaker B: ________", question: "Choose the best answer:", options: ["Nice to meet you.", "You will be great.", "It’s fantastic.", "Take your time."], correctAnswer: "It’s fantastic." }, // Ambiguous but most positive/relevant
        { id: "22", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: I finally got my driving license. Speaker B: ________", question: "Choose the best answer:", options: ["Certainly.", "Sorry.", "Hello.", "Congratulations."], correctAnswer: "Congratulations." },
        { id: "23", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: When will you leave? Speaker B: I will ________ earlier tomorrow to avoid traffic.", question: "Choose the best answer:", options: ["set off", "leave behind", "carry on", "dream of"], correctAnswer: "set off" },
        { id: "24", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: ________ off this 27-meter-high cliff into a lake is dangerous. Speaker B: Yeah, but I love the thrill it brings.", question: "Choose the best answer:", options: ["Sailing", "Climbing", "Diving", "Surfing"], correctAnswer: "Diving" },
        { id: "25", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Are you going to travel alone on the trip to Europe? Speaker B: Maybe, but I’m still looking for some ________.", question: "Choose the best answer:", options: ["family", "friend", "company", "partner"], correctAnswer: "company" },
        { id: "26", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: What do you want to be when you grow up? Speaker B: I want to ________ my dream to become a doctor.", question: "Choose the best answer:", options: ["live", "lean", "leave", "let"], correctAnswer: "live" },
        { id: "27", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Have you finished your homework? Speaker B: Not ________.", question: "Choose the best answer:", options: ["just", "still", "yet", "already"], correctAnswer: "yet" },
        { id: "28", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: You look tired. Speaker B: I ________ the report for 2 hours.", question: "Choose the best answer:", options: ["typed", "am typing", "have typed", "have been typing"], correctAnswer: "have been typing" },
        { id: "29", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: In the future, doctors might destroy cancer cells completely. Speaker B: Hopefully, several studies have ________ that the new treatment can reduce the number of deaths.", question: "Choose the best answer:", options: ["showed", "shown", "been showed", "been shown"], correctAnswer: "shown" },
        { id: "30", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Would you rather ________ with your family or friends? Speaker B: Definitely my family. I love my family.", question: "Choose the best answer:", options: ["be", "to be", "being", "been"], correctAnswer: "be" },
        { id: "31", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: ________ Speaker B: I have just got back from a summer camp in Canada.", question: "Choose the best answer:", options: ["Was the summer camp good?", "What have you been up to?", "Did you take a lot of pictures?", "What about you?"], correctAnswer: "What have you been up to?" },
        { id: "32", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: I have got exams all week. Speaker B: ________", question: "Choose the best answer:", options: ["That sounds great.", "Good to see you again.", "It was amazing.", "Good luck with that."], correctAnswer: "Good luck with that." },
        
        { id: "33", type: QuestionType.MULTIPLE_CHOICE, question: "Have you ever been on an adventure?", options: ["My favourite colour is green.", "It’s a rainy day today.", "Yes, I have been on a few adventurous trips...", "I have a pet cat. She is very adventurous."], correctAnswer: "Yes, I have been on a few adventurous trips..." },
        { id: "34", type: QuestionType.MULTIPLE_CHOICE, question: "I ________ my keys. Can you help me look for them?", options: ["have lost", "lost", "was losing", "had lost"], correctAnswer: "have lost" },
        { id: "35", type: QuestionType.MULTIPLE_CHOICE, question: "We ________ our project yet.", options: ["haven’t finished", "hadn’t finished", "didn’t finish", "weren’t finishing"], correctAnswer: "haven’t finished" },
        { id: "36", type: QuestionType.MULTIPLE_CHOICE, question: "We explored a ________ on our hike and it was amazing!", options: ["opponent", "adventure", "cave", "desert"], correctAnswer: "cave" },
        { id: "37", type: QuestionType.MULTIPLE_CHOICE, question: "I went ________ in the river for the first time and it was so much fun!", options: ["inspiration", "sail", "skydiving", "Kayaking"], correctAnswer: "Kayaking" },
        { id: "38", type: QuestionType.MULTIPLE_CHOICE, question: "We’re going to ________ at a convenience store to grab some food.", options: ["leave behind", "stop off", "carry on", "inspire"], correctAnswer: "stop off" },
        { id: "39", type: QuestionType.MULTIPLE_CHOICE, question: "She ________ to Paris three times.", options: ["was", "has been", "were", "had been"], correctAnswer: "has been" },
        { id: "40", type: QuestionType.MULTIPLE_CHOICE, question: "I love going on ________ with my friends.", options: ["adventure", "valley", "dune", "yacht"], correctAnswer: "adventure" },
        { id: "41", type: QuestionType.MULTIPLE_CHOICE, question: "Even though it’s tough, I’m going to ________ with my studies.", options: ["inspire", "stop off", "leave behind", "carry on"], correctAnswer: "carry on" },
        { id: "42", type: QuestionType.MULTIPLE_CHOICE, question: "They ________ each other for 10 years.", options: ["knew", "have known", "were knowing", "had known"], correctAnswer: "have known" },

        { id: "43", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Don’t ________ your old clothes. It is a waste. Speaker B: That’s right.", question: "Choose the best answer:", options: ["throw away", "deal with", "run out of", "worried about"], correctAnswer: "throw away" },
        { id: "44", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: What did you buy for your brother? AirPods? Speaker B: I decided to buy Sony headphones ________ Apple AirPods.", question: "Choose the best answer:", options: ["because of", "instead of", "in spite of", "in charge of"], correctAnswer: "instead of" },
        { id: "45", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: How much is the new iPhone? Speaker B: Like most advanced and ________ products, it costs me a lot of money.", question: "Choose the best answer:", options: ["hi-tech", "second-hand", "home-made", "wind-up"], correctAnswer: "hi-tech" },
        { id: "46", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: It was raining heavily. Speaker B: Luckily, my backpack is ________, so my books didn’t get wet.", question: "Choose the best answer:", options: ["automatic", "waterproof", "solar", "ecological"], correctAnswer: "waterproof" },
        { id: "47", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: You can hardly keep your eyes open, ________? Speaker B: I was sleepless last night.", question: "Choose the best answer:", options: ["do you", "don’t you", "can’t you", "can you"], correctAnswer: "can you" },
        { id: "48", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Why don’t you join the party? Speaker B: There are ________ people in the party. The loud music makes me feel dizzy.", question: "Choose the best answer:", options: ["too few", "too little", "too many", "too much"], correctAnswer: "too many" },
        { id: "49", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: My son keeps complaining about not being able to vote. Speaker B: Oh yeah, he is ________ to vote.", question: "Choose the best answer:", options: ["not old enough", "old enough", "not enough old", "enough old"], correctAnswer: "not old enough" },
        { id: "50", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Teacher, I need to submit my report today, ________? Speaker B: Submit your report today, just as soon as you can.", question: "Choose the best answer:", options: ["do I", "don’t I", "needn’t I", "need I"], correctAnswer: "don’t I" }, // Usually "Need I" is for permission/obligation, "Do I" is factual. Context seems to be checking obligation. "I need to... don't I?" is valid tag.
        { id: "51", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: What do you think of these earrings? Speaker B: ________. These are not too shiny.", question: "Choose the best answer:", options: ["I much prefer those ones", "They are real gold", "They cost $70", "I’m looking for some jewelry"], correctAnswer: "I much prefer those ones" },
        { id: "52", type: QuestionType.MULTIPLE_CHOICE, context: "Speaker A: Which one is more suitable for mom? Speaker B: ________. I think the crimson red lipstick will suit her.", question: "Choose the best answer:", options: ["Oh, it’s nice", "OK. Let’s see", "It is cheaper", "Well, you are right"], correctAnswer: "OK. Let’s see" },
      ]
    },
    {
      id: "II",
      title: "II. SIGN/NOTICE",
      questions: [
        {
          id: "sign1",
          type: QuestionType.MULTIPLE_CHOICE,
          context: "[Image: Ban bare feet & Hold handrail]",
          question: "What does this sign mean?",
          options: [
            "Bare feet are only allowed for children.",
            "Passengers should hold the handrail for safety.",
            "Wheeled vehicles can be put in 2 sides of the escalator.",
            "Children are able to use the escalator by themselves."
          ],
          correctAnswer: "Passengers should hold the handrail for safety."
        },
        {
          id: "sign2",
          type: QuestionType.MULTIPLE_CHOICE,
          context: "[Sign: PEST CONTROL IN PROGRESS]",
          question: "What does this sign mean?",
          options: [
            "Only bugs and mice are in under control and cannot escape.",
            "Insects and animals are being kept for researching by scientists.",
            "Insects and mice are being caught by humans.",
            "The killing of harmful insects or animals is being performed."
          ],
          correctAnswer: "The killing of harmful insects or animals is being performed."
        }
      ]
    },
    {
      id: "III",
      title: "III. WORD FORMATION",
      description: "Type the correct form of the word in the brackets.",
      questions: [
        { id: "wf1", type: QuestionType.TEXT_INPUT, question: "My life is as ________ busy as it always is. (CRAZE)", correctAnswer: "crazily" },
        { id: "wf2", type: QuestionType.TEXT_INPUT, question: "Hair stylists predict that wavy blonde hair will become ________ this summer. (TREND)", correctAnswer: "trendy" },
        { id: "wf3", type: QuestionType.TEXT_INPUT, question: "She was dressed in colorful ________ and a sweatshirt. (LEG)", correctAnswer: "leggings" },
        { id: "wf4", type: QuestionType.TEXT_INPUT, question: "My mom forgot to add salt to the soup, so it was ________. (TASTE)", correctAnswer: "tasteless" },
        { id: "wf5", type: QuestionType.TEXT_INPUT, question: "Animal rights ________ believe that animals should be treated with respect. (ACT)", correctAnswer: "activists" },
        { id: "wf6", type: QuestionType.TEXT_INPUT, question: "Established in 2013, this is the first online ________ School... (PERFUME)", correctAnswer: "perfumery" },
        { id: "wf7", type: QuestionType.TEXT_INPUT, question: "As an ________, he loves exploring untouched places on Earth. (ADVENTURE)", correctAnswer: "adventurer" },
        { id: "wf8", type: QuestionType.TEXT_INPUT, question: "From here, you can look out to the ________ hills and mountains. (DISTANCE)", correctAnswer: "distant" },
        { id: "wf9", type: QuestionType.TEXT_INPUT, question: "The book is worth reading. It is the most ________ book I've ever read. (FASCINATE)", correctAnswer: "fascinating" },
        { id: "wf10", type: QuestionType.TEXT_INPUT, question: "Natural disasters are ________ difficult to predict. (EXTREME)", correctAnswer: "extremely" },
        { id: "wf11", type: QuestionType.TEXT_INPUT, question: "Their parents used to take them to the park to ________ every weekend. (CYCLING)", correctAnswer: "cycle" },
        { id: "wf12", type: QuestionType.TEXT_INPUT, question: "Because of ________, the area of land covered with trees has declined considerably. (FOREST)", correctAnswer: "deforestation" },
        { id: "wf13", type: QuestionType.TEXT_INPUT, question: "Please review and make any ________ to your essay before submitting it. (CORRECT)", correctAnswer: "corrections" },
        { id: "wf14", type: QuestionType.TEXT_INPUT, question: "The motivational speaker's speech has ________ the audience to chase their dreams. (INSPIRATION)", correctAnswer: "inspired" },
        { id: "wf15", type: QuestionType.TEXT_INPUT, question: "Tom is ________ and loves to try new things. (ADVENTURE)", correctAnswer: "adventurous" },
        { id: "wf16", type: QuestionType.TEXT_INPUT, question: "Many students ________ in extracurricular activities like sports and music. (PARTICIPANT)", correctAnswer: "participate" },
        { id: "wf17", type: QuestionType.TEXT_INPUT, question: "This job requires someone who is ________ in the field of finance. (EXPERIENCE)", correctAnswer: "experienced" }
      ]
    },
    {
      id: "IV",
      title: "IV. READING - CLOZE",
      description: "Choose the correct word to fill in the blanks.",
      questions: [
        { id: "cloze1", type: QuestionType.MULTIPLE_CHOICE, question: "(1) One of the ________ that cannot be overlooked in extreme sports...", options: ["bigger benefit", "bigger benefits", "biggest benefit", "biggest benefits"], correctAnswer: "biggest benefits" },
        { id: "cloze2", type: QuestionType.MULTIPLE_CHOICE, question: "(2) ...opportunities for self-exploration ________ participants get to test...", options: ["as", "like", "for", "to"], correctAnswer: "where" }, // Note: original options in prompt had "where", code logic fix below
        { id: "cloze3", type: QuestionType.MULTIPLE_CHOICE, question: "(3) ...activates partakers' minds in a unique way ________ enables their realization...", options: ["who", "when", "where", "that"], correctAnswer: "that" },
        { id: "cloze4", type: QuestionType.MULTIPLE_CHOICE, question: "(4) ...thereby enhancing participants' ________ of touch, sight, and hearing.", options: ["scenes", "senses", "scents", "sets"], correctAnswer: "senses" },
        { id: "cloze5", type: QuestionType.MULTIPLE_CHOICE, question: "(5) ...feelings of pleasure and euphoria that participants ________ before...", options: ["are never experienced", "will never experience", "have never experienced", "are never going to experience"], correctAnswer: "have never experienced" },
        { id: "cloze6", type: QuestionType.MULTIPLE_CHOICE, question: "(6) ...help extreme sports participants ________ more confident.", options: ["become", "becomes", "became", "becoming"], correctAnswer: "become" },
        
        { id: "cloze7", type: QuestionType.MULTIPLE_CHOICE, question: "(7) Badminton is a racket sport that is ________ around the world.", options: ["played", "watched", "ignored", "disliked"], correctAnswer: "played" },
        { id: "cloze8", type: QuestionType.MULTIPLE_CHOICE, question: "(8) Badminton has ________ for centuries...", options: ["been watched", "been disliked", "been ignored", "been played"], correctAnswer: "been played" },
        { id: "cloze9", type: QuestionType.MULTIPLE_CHOICE, question: "(9) Do I need to be in good ________ to play badminton?", options: ["clothes", "shape", "location", "mood"], correctAnswer: "shape" },
        { id: "cloze10", type: QuestionType.MULTIPLE_CHOICE, question: "(10) ...looking to ________ their fitness and agility.", options: ["increase", "ignore", "reduce", "decrease"], correctAnswer: "increase" },
        { id: "cloze11", type: QuestionType.MULTIPLE_CHOICE, question: "(11) ...you will need a ________ and shuttlecocks.", options: ["bat", "stick", "racket", "ball"], correctAnswer: "racket" },
        { id: "cloze12", type: QuestionType.MULTIPLE_CHOICE, question: "(12) ...dedicated badminton ________ and leagues in many areas.", options: ["courts", "rinks", "fields", "pools"], correctAnswer: "courts" },
      ]
    },
    {
      id: "V",
      title: "V. READING COMPREHENSION",
      description: "Read the passages and answer the questions.",
      questions: [
        // Passage 1
        { id: "rc1_1", type: QuestionType.TRUE_FALSE, context: "Passage 1: The Gobi Desert...", question: "The Gobi Desert is the world's largest desert.", correctAnswer: "False" },
        { id: "rc1_2", type: QuestionType.TRUE_FALSE, context: "Passage 1: The Gobi Desert...", question: "There are more sand dunes in the Sahara than in the Gobi.", correctAnswer: "True" },
        { id: "rc1_3", type: QuestionType.TRUE_FALSE, context: "Passage 1: The Gobi Desert...", question: "Some areas in the Gobi Desert have rainfall once every two or three years.", correctAnswer: "True" },
        { id: "rc1_4", type: QuestionType.TRUE_FALSE, context: "Passage 1: The Gobi Desert...", question: "Thanks to the strong winds, it is safe to travel to the Gobi Desert in spring and fall.", correctAnswer: "False" },
        { id: "rc1_5", type: QuestionType.MULTIPLE_CHOICE, context: "Passage 1: The Gobi Desert...", question: "What does the passage mainly discuss?", options: ["The Gobi Desert's natural features.", "The Gobi Desert's locals.", "The Gobi Desert's precipitation.", "The Gobi Desert's temperature."], correctAnswer: "The Gobi Desert's natural features." },
        { id: "rc1_6", type: QuestionType.MULTIPLE_CHOICE, context: "Passage 1: The Gobi Desert...", question: "What can they find in the Gobi's desert thanks to its low rainfall?", options: ["desert people", "glacier", "dinosaur's fossil", "salt lakes"], correctAnswer: "dinosaur's fossil" },

        // Passage 2
        { id: "rc2_1", type: QuestionType.TRUE_FALSE, context: "Passage 2: Ha Giang...", question: "Ha Giang is a province in central Vietnam.", correctAnswer: "False" },
        { id: "rc2_2", type: QuestionType.TRUE_FALSE, context: "Passage 2: Ha Giang...", question: "The Dong Van Karst Plateau in Ha Giang is a UNESCO World Heritage Site.", correctAnswer: "True" },
        { id: "rc2_3", type: QuestionType.TRUE_FALSE, context: "Passage 2: Ha Giang...", question: "Ha Giang is home to only one ethnic minority group.", correctAnswer: "False" },
        { id: "rc2_4", type: QuestionType.TRUE_FALSE, context: "Passage 2: Ha Giang...", question: "Ha Giang is an unpopular destination for travellers.", correctAnswer: "False" },
        { id: "rc2_5", type: QuestionType.MULTIPLE_CHOICE, context: "Passage 2: Ha Giang...", question: "What is the Dong Van Karst Plateau in Ha Giang?", options: ["A popular beach destination", "A historic temple complex", "A wildlife sanctuary", "A UNESCO World Heritage Site"], correctAnswer: "A UNESCO World Heritage Site" },
        { id: "rc2_6", type: QuestionType.MULTIPLE_CHOICE, context: "Passage 2: Ha Giang...", question: "What is one popular activity to do in Ha Giang?", options: ["Trekking", "Scuba diving", "Shopping", "Skiing"], correctAnswer: "Trekking" },
      ]
    },
    {
      id: "VII",
      title: "VII. TRANSFORMATION",
      description: "Rewrite the sentence so that it means the same as the first one.",
      questions: [
        { id: "trans1", type: QuestionType.TEXT_INPUT, question: "The last time I visited my grandparents was two months ago. => I ...", correctAnswer: "haven't visited my grandparents for two months" },
        { id: "trans2", type: QuestionType.TEXT_INPUT, question: "She hasn't eaten pizza for three days. => The last time ...", correctAnswer: "she ate pizza was three days ago" },
        { id: "trans3", type: QuestionType.TEXT_INPUT, question: "The last time we played tennis was in 2021. => We ...", correctAnswer: "haven't played tennis since 2021" },
        { id: "trans4", type: QuestionType.TEXT_INPUT, question: "There aren't any trees in front of my house anymore. => There ...", correctAnswer: "used to be some trees in front of my house" },
        { id: "trans5", type: QuestionType.TEXT_INPUT, question: "There is no longer a playground behind our school. => There ...", correctAnswer: "used to be a playground behind our school" },
        { id: "trans6", type: QuestionType.TEXT_INPUT, question: "There aren't any small shops on this street any longer. => There ...", correctAnswer: "used to be some small shops on this street" },
        { id: "trans7", type: QuestionType.TEXT_INPUT, question: "I am excited about visiting Ha Long Bay next month. => I ...", correctAnswer: "am looking forward to visiting Ha Long Bay next month" },
        { id: "trans8", type: QuestionType.TEXT_INPUT, question: "She is looking forward to meeting her cousins this weekend. => She ...", correctAnswer: "is excited about meeting her cousins this weekend" },
        { id: "trans9", type: QuestionType.TEXT_INPUT, question: "They are excited about starting their new school year. => They ...", correctAnswer: "are looking forward to starting their new school year" },
        { id: "trans10", type: QuestionType.TEXT_INPUT, question: "Many students join in the school festival every year. => Many students ...", correctAnswer: "take part in the school festival every year" },
        { id: "trans11", type: QuestionType.TEXT_INPUT, question: "My brother takes part in the football match. => My brother ...", correctAnswer: "participates in the football match" },
        { id: "trans12", type: QuestionType.TEXT_INPUT, question: "We joined in the environmental project last month. => We ...", correctAnswer: "took part in the environmental project last month" },
      ]
    }
  ]
};

// Fix for Cloze question 2 options which were tricky in source
const cloze2 = examData.sections.find(s => s.id === "IV")?.questions.find(q => q.id === "cloze2");
if(cloze2) {
    cloze2.options = ["as", "like", "where", "to"]; // Adjusted to include 'where' based on context logic
    cloze2.correctAnswer = "where";
}
