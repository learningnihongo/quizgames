document.addEventListener('DOMContentLoaded', () => {
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
        { te: "とって", jisho: "とる", burmese: "ယူသည်" },
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

    // --- UTILITY: Generate masu-form ---
    function getMasuForm(jisho, te) {
        if (jisho === 'する' || (jisho.endsWith('する') && jisho.length > 2)) return jisho.slice(0, -2) + 'します';
        if (jisho === 'くる' || (jisho.endsWith('くる') && jisho.length > 2)) return jisho.slice(0, -2) + 'きます';
        if (jisho === 'いく') return 'いきます';

        const lastChar = jisho.slice(-1);
        if (lastChar === 'る' && te.slice(-1) === 'て' && te.slice(-2, -1) !== 'っ') {
            return jisho.slice(0, -1) + 'ます';
        }
        const i_line = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
        if (i_line[lastChar]) {
            return jisho.slice(0, -1) + i_line[lastChar] + 'ます';
        }
        return jisho; // fallback
    }

    // --- DATA PREPARATION ---
    const verbs = verbData.map(v => ({
        ...v,
        masu: getMasuForm(v.jisho, v.te)
    }));

    // --- DOM ELEMENTS ---
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

    const questionMasu = document.getElementById('question-masu');
    const questionBurmese = document.getElementById('question-burmese');
    const answerForm = document.getElementById('answer-form');
    const answerInput = document.getElementById('answer-input');
    const idkButton = document.getElementById('idk-button');

    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    // --- GAME STATE ---
    let score = 0;
    let timer;
    let timeLeft = 90;
    let shuffledVerbs;
    let currentQuestionIndex = 0;
    let isAnswering = false;

    // --- FUNCTIONS ---
    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    // ** Fixed Sound Playback **
    function playSound(sound) {
        sound.currentTime = 0; // Rewind to start to allow for rapid plays
        sound.play();
    }

    function startGame() {
        score = 0;
        timeLeft = 90;
        currentQuestionIndex = 0;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = timeLeft;

        shuffledVerbs = [...verbs].sort(() => Math.random() - 0.5);

        switchScreen('quiz');
        showNextQuestion();

        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function showNextQuestion() {
        if (currentQuestionIndex >= shuffledVerbs.length) {
            endGame();
            return;
        }

        isAnswering = false;
        const currentVerb = shuffledVerbs[currentQuestionIndex];

        questionMasu.textContent = currentVerb.masu;
        questionBurmese.textContent = currentVerb.burmese;

        answerInput.value = '';
        answerInput.classList.remove('correct', 'incorrect');
        answerInput.focus();
    }

    function handleSubmit(event) {
        event.preventDefault(); // Stop form from reloading page
        if (isAnswering) return;

        const userAnswer = answerInput.value.trim();
        const correctAnswer = shuffledVerbs[currentQuestionIndex].te;

        if (userAnswer === correctAnswer) {
            isAnswering = true;
            score++;
            scoreDisplay.textContent = score;

            playSound(correctSound);
            answerInput.classList.add('correct');

            setTimeout(() => {
                currentQuestionIndex++;
                showNextQuestion();
            }, 800); // Wait a bit before next question

        } else {
            playSound(incorrectSound);
            answerInput.classList.add('incorrect');
            // Remove the shake animation class after it finishes
            setTimeout(() => {
                answerInput.classList.remove('incorrect');
            }, 500);
        }
    }

    function showAnswer() {
        if (isAnswering) return;
        isAnswering = true;

        const correctAnswer = shuffledVerbs[currentQuestionIndex].te;
        answerInput.value = correctAnswer;
        answerInput.classList.add('correct');

        setTimeout(() => {
            currentQuestionIndex++;
            showNextQuestion();
        }, 1200); // Wait a bit longer since user is reading the answer
    }

    function endGame() {
        clearInterval(timer);
        finalScoreDisplay.textContent = score;
        switchScreen('result');
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', startGame);
    playAgainButton.addEventListener('click', startGame);
    answerForm.addEventListener('submit', handleSubmit);
    idkButton.addEventListener('click', showAnswer);
});