document.addEventListener('DOMContentLoaded', () => {
    // Complete data from the original list
    const verbData = [
        { te: "てつだって", jisho: "てつだう", burmese: "ကူညီသည်" },
        { te: "みて", jisho: "みる", burmese: "ကြည့်သည်။မြင်သည်။" },
        { te: "よやくして", jisho: "よやくする", burmese: "ကြိုတင်မှာသည်" },
        { te: "むかえて", jisho: "むかえる", burmese: "ကြိုဆိုသည်" },
        { te: "よんで", jisho: "よぶ", burmese: "ခေါ်သည်" },
        { te: "つれていって", jisho: "つれていく", burmese: "ခေါ်သွားသည်" },
        { te: "つれてきて", jisho: "つれてくる", burmese: "ခေါ်လာသည်" },
        { te: "かして", jisho: "かす", burmese: "ချေးဌားသည်" },
        { te: "かりて", jisho: "かりる", burmese: "ချေးယူသည်" },
        { te: "まがって", jisho: "まがる", burmese: "ချိုးကွေ့သည်" },
        { te: "はなして", jisho: "はなす", burmese: "စကားပြောသည်" },
        { te: "はじめて", jisho: "はじめる", burmese: "စတင်သည်" },
        { te: "かんがえて", jisho: "かんがえる", burmese: "စဉ်းစားသည်" },
        { te: "あつめて", jisho: "あつめる", burmese: "စုဆောင်းသည်" },
        { te: "まって", jisho: "まつ", burmese: "စောင့်သည်" },
        { te: "たべて", jisho: "たべる", burmese: "စားသည်" },
        { te: "あらって", jisho: "あらう", burmese: "ဆေးကြောသည်" },
        { te: "すって", jisho: "すう", burmese: "ဆေးလိပ်သောက်သည်" },
        { te: "ついて", jisho: "つく", burmese: "ဆိုက်ရောက်သည်" },
        { te: "かぶって", jisho: "かぶる", burmese: "ဆောင်းသည်။(ဦးထုပ်ကို)" },
        { te: "かいものして", jisho: "かいものする", burmese: "ဈေးဝယ်သည်" },
        { te: "とって", jisho: "とる", burmese: "ဓာတ်ပုံရိုက်သည်" },
        { te: "のぼって", jisho: "のぼる", burmese: "တက်သည်" },
        { te: "かけて", jisho: "かける", burmese: "တပ်သည်၊ချိတ်သည်(မျက်မှန်ကို)" },
        { te: "とめて", jisho: "とめる", burmese: "တားသည်။ရပ်သည်။" },
        { te: "ひいて", jisho: "ひく", burmese: "တီးခတ်သည်" },
        { te: "とまって", jisho: "とまる", burmese: "တည်းခိုသည်" },
        { te: "あって", jisho: "あう", burmese: "တွေ့သည်" },
        { te: "しょくじして", jisho: "しょくじする", burmese: "ထမင်းစားသည်" },
        { te: "おいて", jisho: "おく", burmese: "ထားသည်" },
        { te: "でて", jisho: "でる", burmese: "ထွက်သည်" },
        { te: "すわって", jisho: "すわる", burmese: "ထိုင်သည်" },
        { te: "おもって", jisho: "おもう", burmese: "ထင်မြင်သည်။ယူဆသည်။တွေးတောသည်" },
        { te: "おしえて", jisho: "おしえる", burmese: "သင်ပေးသည်" },
        { te: "ならって", jisho: "ならう", burmese: "သင်ယူသည်" },
        { te: "そうじして", jisho: "そうじする", burmese: "သန့်ရှင့်ရေးလုပ်သည်" },
        { te: "きをつけて", jisho: "きをつける", burmese: "သတိထားသည်" },
        { te: "いって", jisho: "いく", burmese: "သွားသည်" },
        { te: "のんで", jisho: "のむ", burmese: "သောက်သည်" },
        { te: "しって", jisho: "しる", burmese: "သိသည်" },
        { te: "うたって", jisho: "うたう", burmese: "သီချင်းဆိုသည်" },
        { te: "いれて", jisho: "いれる", burmese: "သွင်းသည်" },
        { te: "けんきゅうして", jisho: "けんきゅうする", burmese: "သုတေသနပြုလုပ်သည်" },
        { te: "つかれて", jisho: "つかれる", burmese: "ပင်ပန်းသည်" },
        { te: "おくって", jisho: "おくる", burmese: "ပို့သည်" },
        { te: "もって", jisho: "もつ", burmese: "ပိုင်ဆိုင်သည်။သယ်သည်။ကိုင်ထားသည်" },
        { te: "だして", jisho: "だす", burmese: "ပစ္စည်းထုတ်သည်။အစီရင်ခံစာတင်သည်။" },
        { te: "あげて", jisho: "あげる", burmese: "ပေးသည်" },
        { te: "くれて", jisho: "くれる", burmese: "ပေးသည် (မိမိအားပေးသည်)" },
        { te: "はらって", jisho: "はらう", burmese: "ပေးချေသည်" },
        { te: "おわって", jisho: "おわる", burmese: "ပြီးဆုံးသည်" },
        { te: "かえって", jisho: "かえる", burmese: "ပြန်သည်" },
        { te: "かえして", jisho: "かえす", burmese: "ပြန်ပေးသည်" },
        { te: "のりかえて", jisho: "のりかえる", burmese: "ပြောင်းစီးသည်" },
        { te: "して", jisho: "する", burmese: "ပြုလုပ်သည်" },
        { te: "つくって", jisho: "つくる", burmese: "ပြုလုပ်သည်။တည်ဆောက်သည်။" },
        { te: "しゅうりして", jisho: "しゅうりする", burmese: "ပြုပြင်သည်။ပြင်ဆင်သည်" },
        { te: "いって", jisho: "いう", burmese: "ပြောသည်" },
        { te: "きって", jisho: "きる", burmese: "ဖြတ်သည်။ညှပ်သည်" },
        { te: "わたって", jisho: "わたる", burmese: "ဖြတ်ကူးသည်" },
        { te: "なって", jisho: "なる", burmese: "ဖြစ်သည်။ဖြစ်လာသည်။ကျရောက်သည်" },
        { te: "よんで", jisho: "よむ", burmese: "ဖတ်သည်။" },
        { te: "わすれて", jisho: "わすれる", burmese: "မေ့သည်" },
        { te: "たって", jisho: "たつ", burmese: "မတ်တပ်ရပ်သည်" },
        { te: "うんてんして", jisho: "うんてんする", burmese: "မောင်းနှင်သည်။" },
        { te: "けして", jisho: "けす", burmese: "မီးပိတ်သည်" },
        { te: "つけて", jisho: "つける", burmese: "မီးဖွင့်သည်" },
        { te: "しょうかいして", jisho: "しょうかいする", burmese: "မိတ်ဆက်သည်" },
        { te: "こぴーして", jisho: "こぴーする", burmese: "မိတ္တူကူးသည်" },
        { te: "うまれて", jisho: "うまれる", burmese: "မွေးဖွားလာသည်" },
        { te: "おぼえて", jisho: "おぼえる", burmese: "မှတ်မိသည်။မှတ်သည်" },
        { te: "とって", jisho: "とる", burmese: "ယူသည်" }, // Note: とる has multiple meanings
        { te: "もっていって", jisho: "もっていく", burmese: "ယူသွားသည်(သက်မဲ့ပစ္စည်းတွင်သုံးသည်)" },
        { te: "もってきて", jisho: "もってくる", burmese: "ယူလာသည်(သက်မဲ့ပစ္စည်းတွင်သုံးသည်)" },
        { te: "およいで", jisho: "およぐ", burmese: "ရေကူးသည်" },
        { te: "あびて", jisho: "あびる", burmese: "ရေချိုးသည်" },
        { te: "かいて", jisho: "かく", burmese: "ရေးသည်။" },
        { te: "うって", jisho: "うる", burmese: "ရောင်းသည်" },
        { te: "のって", jisho: "のる", burmese: "ရထားကို စီးသည်" },
        { te: "おりて", jisho: "おりる", burmese: "ရထားပေါ်မှဆင်းသည်" },
        { te: "ふって", jisho: "ふる", burmese: "ရွာသည်" },
        { te: "しらべて", jisho: "しらべる", burmese: "ရှာဖွေသည်။စစ်ဆေးသည်" },
        { te: "あって", jisho: "ある", burmese: "ရှိသည် (သက်မဲ့)" },
        { te: "いて", jisho: "いる", burmese: "ရှိသည် (သက်ရှိ)" },
        { te: "まけて", jisho: "まける", burmese: "ရှုံးနိမ့်သည်" },
        { te: "あるいて", jisho: "あるく", burmese: "လမ်းလျှောက်သည်။" },
        { te: "きて", jisho: "くる", burmese: "လာသည်" },
        { te: "いって", jisho: "いる", burmese: "လိုအပ်သည်" },
        { te: "あんないして", jisho: "あんないする", burmese: "လိုက်လံရှင်းပြသည်" },
        { te: "かえて", jisho: "かえる", burmese: "လဲလှယ်သည်။ဖလှယ်သည်" },
        { te: "べんきょうして", jisho: "べんきょうする", burmese: "လေ့လာသည်" },
        { te: "いそいで", jisho: "いそぐ", burmese: "လောသည်။အလျင်စလိုလုပ်သည်" },
        { te: "すてて", jisho: "すてる", burmese: "လွှင့်ပစ်သည်" },
        { te: "かって", jisho: "かう", burmese: "ဝယ်သည်" },
        { te: "はいって", jisho: "はいる", burmese: "ဝင်သည်" },
        { te: "きて", jisho: "きる", burmese: "ဝတ်ဆင်သည်(ခါးအထက်ပိုင်း)" },
        { te: "はいて", jisho: "はく", burmese: "ဝတ်ဆင်သည်။(ခါးအောက်ပိုင်း)" },
        { te: "やすんで", jisho: "やすむ", burmese: "အနားယူသည်" },
        { te: "ざんぎょうして", jisho: "ざんぎょうする", burmese: "အလုပ်အချိန်ပိုဆင်းသည်" },
        { te: "はたらいて", jisho: "はたらく", burmese: "အလုပ်လုပ်သည်" },
        { te: "つかって", jisho: "つかう", burmese: "အသုံးပြုသည်" },
        { te: "でかけて", jisho: "でかける", burmese: "အပြင်ထွက်သည်" },
        { te: "せんたくして", jisho: "せんたくする", burmese: "အဝတ်လျှော်သည်" },
        { te: "ねて", jisho: "ねる", burmese: "အိပ်သည်" },
        { te: "おきて", jisho: "おきる", burmese: "အိပ်ရာထသည်" }
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
    const burmeseMeaningDisplay = document.getElementById('burmese-meaning'); // New element
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

        if (Math.random() > 0.5) {
            // Correct pair
            isCurrentPairCorrect = true;
            const verb = verbData[Math.floor(Math.random() * verbData.length)];
            jishoFormDisplay.textContent = verb.jisho;
            teFormDisplay.textContent = verb.te;
            burmeseMeaningDisplay.textContent = verb.burmese; // Show meaning
        } else {
            // Incorrect pair
            isCurrentPairCorrect = false;
            const verb1 = verbData[Math.floor(Math.random() * verbData.length)];
            let verb2 = verbData[Math.floor(Math.random() * verbData.length)];
            while (verb1.jisho === verb2.jisho) {
                verb2 = verbData[Math.floor(Math.random() * verbData.length)];
            }
            jishoFormDisplay.textContent = verb1.jisho;
            teFormDisplay.textContent = verb2.te; // Mismatched te-form
            burmeseMeaningDisplay.textContent = verb1.burmese; // Show meaning of the jisho form
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
            card.classList.add(userChoice ? 'exit-right' : 'exit-left');
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
        }, 600);
    }

    // Event Listeners
    startButton.addEventListener('click', startGame);
    playAgainButton.addEventListener('click', startGame);
    trueButton.addEventListener('click', () => handleChoice(true));
    falseButton.addEventListener('click', () => handleChoice(false));

    // Swipe functionality
    let startX = 0;
    card.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    card.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if (Math.abs(diff) > 50) {
            handleChoice(diff > 0); // Right swipe is true, Left is false
        }
    });

});