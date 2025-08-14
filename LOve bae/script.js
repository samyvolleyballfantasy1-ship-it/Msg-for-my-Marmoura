const quotes = [
    // English quotes
    "I love you more than words can express.",
    "Every moment with you is a treasure.",
    "You are my sunshine on the darkest days.",

    // Arabic quotes (old + your new ones)
    "أحبك أكثر مما تتصور.",
    "أنت نبض قلبي وروحي.",
    "كل لحظة معك جنة.",
    "سألتني ما هي أمنيتك؟ فظللت أفكر كيف يسأل المرء سؤالًا و هو إجابته",
    "انت يا من ارجعت قلبي الصوان للنبض",
    "أتي و كأنه روحًا لروحي",
    "لو كنت أعلم أن الحلم يجمعنا لأغمضت طول الدهر أجفاني",
    "كنتي و زلتي بجمال الله اغرقني جمال يضاهي جمال افروديت او فينوس",
    "إيظلم لي ليل و انت قمري",
    "ورميت سهم الحب اقصد قلبها فاصاب سهمي عيني فعورت",
    "تعاهدنا على أن نتقاتل بلا سلاح، فخانت العهد و أنت بعينها",
    "عشقتك منذ البداية و سأبقي أحبك حتي النهاية",
    "الخمر يسكر من يعاقر كاسه وعيناك خمر بلا كؤوس تسكر",
    "عيناك سحر مترف كاد يقتلني فمن عن جمال عيناك يصبر",

    // French quotes
    "Je t'aime plus que tout.",
    "Tu es mon rêve devenu réalité.",
    "Avec toi, la vie est plus belle."
];

// Fisher–Yates shuffle for better randomness
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getRandomQuote() {
    shuffleArray(quotes);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    displayQuote(quotes[randomIndex]);
}

function displayQuote(text) {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = "";
    let i = 0;
    let typingSpeed = 40; // faster

    function typeLetter() {
        if (i < text.length) {
            quoteElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeLetter, typingSpeed);
        }
    }
    typeLetter();
}

window.onload = getRandomQuote;
