document.addEventListener('DOMContentLoaded', () => {
    // Data (unchanged)
    const verbData = [
        { te: "てつだって", jisho: "てつだう" }, { te: "みて", jisho: "みる" },
        { te: "よやくして", jisho: "よやくする" }, { te: "むかえて", jisho: "むかえる" },
        { te: "よんで", jisho: "よぶ" }, { te: "つれていって", jisho: "つれていく" },
        { te: "つれてきて", jisho: "つれてくる" }, { te: "かして", jisho: "かす" },
        { te: "かりて", jisho: "かりる" }, { te: "まがって", jisho: "まがる" },
        { te: "はなして", jisho: "はなす" }, { te: "はじめて", jisho: "はじめる" },
        { te: "かんがえて", jisho: "かんがえる" }, { te: "あつめて", jisho: "あつめる" },
        { te: "まって", jisho: "まつ" }, { te: "たべて", jisho: "たべる" },
        { te: "あらって", jisho: "あらう" }, { te: "すって", jisho: "すう" },
        { te: "ついて", jisho: "つく" }, { te: "かぶって", jisho: "かぶる" },
        { te: "かいものして", jisho: "かいものする" }, { te: "とって", jisho: "とる" },
        { te: "のぼって", jisho: "のぼる" }, { te: "かけて", jisho: "かける" },
        { te: "とめて", jisho: "とめる" }, { te: "ひいて", jisho: "ひく" },
        { te: "とまって", jisho: "とまる" }, { te: "あって", jisho: "あう" },
        { te: "しょくじして", jisho: "しょくじする" }, { te: "おいて", jisho: "おく" },
        { te: "でて", jisho: "でる" }, { te: "すわって", jisho: "すわる" },
        { te: "おもって", jisho: "おもう" }, { te: "おしえて", jisho: "おしえる" },
        { te: "ならって", jisho: "ならう" }, { te: "そうじして", jisho: "そうじする" },
        { te: "きをつけて", jisho: "きをつける" }, { te: "いって", jisho: "いく" },
        { te: "のんで", jisho: "のむ" }, { te: "しって", jisho: "しる" },
        { te: "うたって", jisho: "うたう" }, { te: "いれて", jisho: "いれる" },
        { te: "けんきゅうして", jisho: "けんきゅうする" }, { te: "つかれて", jisho: "つかれる" },
        { te: "おくって", jisho: "おくる" }, { te: "もって", jisho: "もつ" },
        { te: "だして", jisho: "だす" }, { te: "あげて", jisho: "あげる" },
        { te: "くれて", jisho: "くれる" }, { te: "はらって", jisho: "はらう" },
        { te: "おわって", jisho: "おわる" }, { te: "かえって", jisho: "かえる" },
        { te: "かえして", jisho: "かえす" }, { te: "のりかえて", jisho: "のりかえる" },
        { te: "して", jisho: "する" }, { te: "つくって", jisho: "つくる" },
        { te: "しゅうりして", jisho: "しゅうりする" }, { te: "いって", jisho: "いう" },
        { te: "きって", jisho: "きる" }, { te: "わたって", jisho: "わたる" },
        { te: "なって", jisho: "なる" }, { te: "よんで", jisho: "よむ" },
        { te: "わすれて", jisho: "わすれる" }, { te: "たって", jisho: "たつ" },
        { te: "うんてんして", jisho: "うんてんする" }, { te: "けして", jisho: "けす" },
        { te: "つけて", jisho: "つける" }, { te: "しょうかいして", jisho: "しょうかいする" },
        { te: "こぴーして", jisho: "こぴーする" }, { te: "うまれて", jisho: "うまれる" },
        { te: "おぼえて", jisho: "おぼえる" }, { te: "もっていって", jisho: "もっていく" },
        { te: "もってきて", jisho: "もってくる" }, { te: "およいで", jisho: "およぐ" },
        { te: "あびて", jisho: "あびる" }, { te: "かいて", jisho: "かく" },
        { te: "うって", jisho: "うる" }, { te: "のって", jisho: "のる" },
        { te: "おりて", jisho: "おりる" }, { te: "ふって", jisho: "ふる" },
        { te: "しらべて", jisho: "しらべる" }, { te: "あって", jisho: "ある" },
        { te: "いて", jisho: "いる" }, { te: "まけて", jisho: "まける" },
        { te: "あるいて", jisho: "あるく" }, { te: "きて", jisho: "くる" },
        { te: "いって", jisho: "いる" }, { te: "あんないして", jisho: "あんないする" },
        { te: "かえて", jisho: "かえる" }, { te: "べんきょうして", jisho: "べんきょうする" },
        { te: "いそいで", jisho: "いそぐ" }, { te: "すてて", jisho: "すてる" },
        { te: "かって", jisho: "かう" }, { te: "はいって", jisho: "はいる" },
        { te: "きて", jisho: "きる" }, { te: "はいて", jisho: "はく" },
        { te: "やすんで", jisho: "やすむ" }, { te: "ざんぎょうして", jisho: "ざんぎょうする" },
        { te: "はたらいて", jisho: "はたらく" }, { te: "つかって", jisho: "つかう" },
        { te: "でかけて", jisho: "でかける" }, { te: "せんたくして", jisho: "せんたくする" },
        { te: "ねて", jisho: "ねる" }, { te: "おきて", jisho: "おきる" }
    ];

    // DOM Elements
    const screens = {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen'),
    };
    const startButton = document.getElementById('start-button');
    const playAgainButton = document.getElementById('play-again-button');
    const timerDisplay = document.querySelector('#timer span');
    const scoreDisplay = document.querySelector('#score span');
    const finalScoreDisplay = document.getElementById('final-score');
    const card = document.getElementById('verb-card');
    const jishoFormDisplay = document.getElementById('jisho-form');
    const teFormDisplay = document.getElementById('te-form');
    const resultOverlay = document.getElementById('result-overlay');
    const trueButton = document.getElementById('choice-true');
    const falseButton = document.getElementById('choice-false');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    // Game State
    let score = 0;
    let timer;
    let timeLeft = 60;
    let isCurrentPairCorrect = false;
    let isAnswering = false;

    // Functions
    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function startGame() {
        score = 0;
        timeLeft = 60;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = timeLeft;
        isAnswering = false;

        switchScreen('quiz');

        nextCard();

        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        clearInterval(timer);
        finalScoreDisplay.textContent = score;
        switchScreen('result');
    }

    function nextCard() {
        isAnswering = true;
        card.classList.remove('exit-left', 'exit-right');
        resultOverlay.classList.remove('visible', 'correct', 'incorrect');

        // Decide if the pair will be correct or incorrect (50% chance)
        if (Math.random() > 0.5) {
            // Correct pair
            isCurrentPairCorrect = true;
            const verb = verbData[Math.floor(Math.random() * verbData.length)];
            jishoFormDisplay.textContent = verb.jisho;
            teFormDisplay.textContent = verb.te;
        } else {
            // Incorrect pair
            isCurrentPairCorrect = false;
            const verb1 = verbData[Math.floor(Math.random() * verbData.length)];
            let verb2 = verbData[Math.floor(Math.random() * verbData.length)];
            // Ensure we have a truly incorrect pair
            while (verb1.jisho === verb2.jisho) {
                verb2 = verbData[Math.floor(Math.random() * verbData.length)];
            }
            jishoFormDisplay.textContent = verb1.jisho;
            teFormDisplay.textContent = verb2.te; // Mismatched te-form
        }
        isAnswering = false;
    }

    function handleChoice(userChoice) {
        if (isAnswering) return;
        isAnswering = true;

        const correct = userChoice === isCurrentPairCorrect;

        if (correct) {
            score++;
            scoreDisplay.textContent = score;
            resultOverlay.textContent = '正';
            resultOverlay.classList.add('correct');
            correctSound.play();
            card.classList.add(userChoice ? 'exit-right' : 'exit-left'); // Animate based on button pos
        } else {
            resultOverlay.textContent = '誤';
            resultOverlay.classList.add('incorrect');
            incorrectSound.play();
            card.classList.add(userChoice ? 'exit-right' : 'exit-left');
        }

        resultOverlay.classList.add('visible');

        setTimeout(() => {
            if (timeLeft > 0) {
                nextCard();
            }
        }, 600); // Wait for animation
    }

    // Event Listeners
    startButton.addEventListener('click', startGame);
    playAgainButton.addEventListener('click', startGame);
    trueButton.addEventListener('click', () => handleChoice(true));
    falseButton.addEventListener('click', () => handleChoice(false));

    // Swipe functionality (Bonus)
    let startX = 0;
    let endX = 0;

    card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    card.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if (Math.abs(diff) > 50) { // Threshold for swipe
            if (diff > 0) { // Swipe Right
                handleChoice(true);
            } else { // Swipe Left
                handleChoice(false);
            }
        }
    });

});