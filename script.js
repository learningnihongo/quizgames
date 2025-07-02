document.addEventListener('DOMContentLoaded', () => {
    // Original data from the user
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
        { te: "とって", jisho: "とる", burmese: "ရသည်။ယူသည်" },
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

    // Function to generate masu-form from dictionary-form and te-form
    function getMasuForm(jisho, te) {
        // Irregular verbs
        if (jisho === 'する' || (jisho.endsWith('する') && jisho.length > 2)) return jisho.slice(0, -2) + 'します';
        if (jisho === 'くる' || (jisho.endsWith('くる') && jisho.length > 2)) return jisho.slice(0, -2) + 'きます';
        if (jisho === 'いく') return 'いきます'; // Special case

        const lastChar = jisho.slice(-1);

        // Group 2 (ichidan) verbs: end in る, te-form is just ~て
        // e.g., たべる -> たべて -> たべます
        if (lastChar === 'る' && te.slice(-1) === 'て' && te.slice(-2, -1) !== 'っ') {
            return jisho.slice(0, -1) + 'ます';
        }

        // Group 1 (godan) verbs
        const i_line = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
        if (i_line[lastChar]) {
            return jisho.slice(0, -1) + i_line[lastChar] + 'ます';
        }

        return jisho; // fallback
    }

    // Process data to add masu-form
    const verbs = verbData.map(v => ({
        ...v,
        masu: getMasuForm(v.jisho, v.te)
    }));

    // Game state
    let shuffledVerbs, currentQuestionIndex, score;
    let answeredTe = false, answeredJisho = false;
    const TOTAL_QUESTIONS = 10;

    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const playAgainButton = document.getElementById('play-again-button');

    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');

    const questionMasu = document.getElementById('question-masu');
    const questionBurmese = document.getElementById('question-burmese');

    const teFormOptions = document.getElementById('te-form-options');
    const jishoFormOptions = document.getElementById('jisho-form-options');

    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    // Event Listeners
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', showNextQuestion);
    playAgainButton.addEventListener('click', startGame);

    function startGame() {
        startScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');
        nextButton.classList.add('hidden');

        shuffledVerbs = [...verbs].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;

        showQuestion();
    }

    function showQuestion() {
        resetState();
        const currentQuestion = shuffledVerbs[currentQuestionIndex];

        // Update Progress
        progressText.innerText = `Question ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%`;

        // Display Question
        questionMasu.innerText = currentQuestion.masu;
        questionBurmese.innerText = currentQuestion.burmese;

        // Generate and Display Options
        displayOptions('te', currentQuestion.te, teFormOptions);
        displayOptions('jisho', currentQuestion.jisho, jishoFormOptions);
    }

    function resetState() {
        answeredTe = false;
        answeredJisho = false;
        nextButton.classList.add('hidden');
        teFormOptions.innerHTML = '';
        jishoFormOptions.innerHTML = '';
    }

    function displayOptions(type, correctAnswer, container) {
        const options = [correctAnswer];
        const field = type === 'te' ? 'te' : 'jisho';

        // Get 3 unique incorrect options
        while (options.length < 4) {
            const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
            const randomOption = randomVerb[field];
            if (!options.includes(randomOption)) {
                options.push(randomOption);
            }
        }

        // Shuffle options
        options.sort(() => Math.random() - 0.5);

        // Create buttons
        options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(button, type, correctAnswer));
            container.appendChild(button);
        });
    }

    function selectAnswer(selectedButton, type, correctAnswer) {
        // Prevent re-answering
        if ((type === 'te' && answeredTe) || (type === 'jisho' && answeredJisho)) {
            return;
        }

        if (type === 'te') answeredTe = true;
        if (type === 'jisho') answeredJisho = true;

        const isCorrect = selectedButton.innerText === correctAnswer;

        if (isCorrect) {
            selectedButton.classList.add('correct');
            correctSound.play();
        } else {
            selectedButton.classList.add('incorrect');
            incorrectSound.play();
        }

        // Disable all buttons in the same group and show correct answer
        const container = type === 'te' ? teFormOptions : jishoFormOptions;
        Array.from(container.children).forEach(btn => {
            btn.classList.add('disabled');
            if (btn.innerText === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        // Check if both answers are given
        if (answeredTe && answeredJisho) {
            // Check overall correctness for score
            const teCorrect = teFormOptions.querySelector('.correct').classList.contains('incorrect') === false;
            const jishoCorrect = jishoFormOptions.querySelector('.correct').classList.contains('incorrect') === false;
            if (teCorrect && jishoCorrect) {
                score++;
            }
            nextButton.classList.remove('hidden');
        }
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');

        const scorePercent = Math.round((score / TOTAL_QUESTIONS) * 100);
        document.getElementById('final-score').innerText = `${scorePercent}%`;

        let message = '';
        if (scorePercent === 100) {
            message = '素晴らしい！完璧です！ (Excellent! Perfect Score!)';
        } else if (scorePercent >= 80) {
            message = 'よくできました！(Well Done!)';
        } else if (scorePercent >= 50) {
            message = 'もう少し！頑張って！ (A little more! Keep it up!)';
        } else {
            message = 'もっと練習しましょう。(Let\'s practice more.)';
        }
        document.getElementById('result-message').innerText = message;
    }
});