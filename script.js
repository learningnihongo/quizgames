document.addEventListener('DOMContentLoaded', () => {

    const verbs = [
        { masuForm: "てつだいます", dictForm: "てつだう", teForm: "てつだって", burmese: "ကူညီသည်" },
        { masuForm: "みます", dictForm: "みる", teForm: "みて", burmese: "ကြည့်သည်။မြင်သည်။" },
        { masuForm: "よやくします", dictForm: "よやくする", teForm: "よやくして", burmese: "ကြိုတင်မှာသည်" },
        { masuForm: "むかえます", dictForm: "むかえる", teForm: "むかえて", burmese: "ကြိုဆိုသည်" },
        { masuForm: "よびます", dictForm: "よぶ", teForm: "よんで", burmese: "ခေါ်သည်" },
        { masuForm: "つれていきます", dictForm: "つれていく", teForm: "つれていって", burmese: "ခေါ်သွားသည်" },
        { masuForm: "つれてきます", dictForm: "つれてくる", teForm: "つれてきて", burmese: "ခေါ်လာသည်" },
        { masuForm: "かします", dictForm: "かす", teForm: "かして", burmese: "ချေးဌားသည်" },
        { masuForm: "かります", dictForm: "かりる", teForm: "かりて", burmese: "ချေးယူသည်" },
        { masuForm: "まがります", dictForm: "まがる", teForm: "まがって", burmese: "ချိုးကွေ့သည်" },
        { masuForm: "はなします", dictForm: "はなす", teForm: "はなして", burmese: "စကားပြောသည်" },
        { masuForm: "はじめます", dictForm: "はじめる", teForm: "はじめて", burmese: "စတင်သည်" },
        { masuForm: "かんがえます", dictForm: "かんがえる", teForm: "かんがえて", burmese: "စဉ်းစားသည်" },
        { masuForm: "あつめます", dictForm: "あつめる", teForm: "あつめて", burmese: "စုဆောင်းသည်" },
        { masuForm: "まちます", dictForm: "まつ", teForm: "まって", burmese: "စောင့်သည်" },
        { masuForm: "たべます", dictForm: "たべる", teForm: "たべて", burmese: "စားသည်" },
        { masuForm: "あらいます", dictForm: "あらう", teForm: "あらって", burmese: "ဆေးကြောသည်" },
        { masuForm: "すいます", dictForm: "すう", teForm: "すって", burmese: "ဆေးလိပ်သောက်သည်" },
        { masuForm: "つきます", dictForm: "つく", teForm: "ついて", burmese: "ဆိုက်ရောက်သည်" },
        { masuForm: "かぶります", dictForm: "かぶる", teForm: "かぶって", burmese: "ဆောင်းသည်။(ဦးထုပ်ကို)" },
        { masuForm: "かいものします", dictForm: "かいものする", teForm: "かいものして", burmese: "ဈေးဝယ်သည်" },
        { masuForm: "とります", dictForm: "とる", teForm: "とって", burmese: "ဓာတ်ပုံရိုက်သည်" },
        { masuForm: "のぼります", dictForm: "のぼる", teForm: "のぼって", burmese: "တက်သည်" },
        { masuForm: "かけます", dictForm: "かける", teForm: "かけて", burmese: "တပ်သည်၊ချိတ်သည်(မျက်မှန်ကို)" },
        { masuForm: "とめます", dictForm: "とめる", teForm: "とめて", burmese: "တားသည်။ရပ်သည်။" },
        { masuForm: "ひきます", dictForm: "ひく", teForm: "ひいて", burmese: "တီးခတ်သည်" },
        { masuForm: "とまります", dictForm: "とまる", teForm: "とまって", burmese: "တည်းခိုသည်" },
        { masuForm: "あいます", dictForm: "あう", teForm: "あって", burmese: "တွေ့သည်" },
        { masuForm: "しょくじします", dictForm: "しょくじする", teForm: "しょくじして", burmese: "ထမင်းစားသည်" },
        { masuForm: "おきます", dictForm: "おく", teForm: "おいて", burmese: "ထားသည်" },
        { masuForm: "でます", dictForm: "でる", teForm: "でて", burmese: "ထွက်သည်" },
        { masuForm: "すわります", dictForm: "すわる", teForm: "すわって", burmese: "ထိုင်သည်" },
        { masuForm: "おもいます", dictForm: "おもう", teForm: "おもって", burmese: "ထင်မြင်သည်။ယူဆသည်။တွေးတောသည်" },
        { masuForm: "おしえます", dictForm: "おしえる", teForm: "おしえて", burmese: "သင်ပေးသည်" },
        { masuForm: "ならいます", dictForm: "ならう", teForm: "ならって", burmese: "သင်ယူသည်" },
        { masuForm: "そうじします", dictForm: "そうじする", teForm: "そうじして", burmese: "သန့်ရှင့်ရေးလုပ်သည်" },
        { masuForm: "きをつけます", dictForm: "きをつける", teForm: "きをつけて", burmese: "သတိထားသည်" },
        { masuForm: "いきます", dictForm: "いく", teForm: "いって", burmese: "သွားသည်" },
        { masuForm: "のみます", dictForm: "のむ", teForm: "のんで", burmese: "သောက်သည်" },
        { masuForm: "しります", dictForm: "しる", teForm: "しって", burmese: "သိသည်" },
        { masuForm: "うたいます", dictForm: "うたう", teForm: "うたって", burmese: "သီချင်းဆိုသည်" },
        { masuForm: "いれます", dictForm: "いれる", teForm: "いれて", burmese: "သွင်းသည်" },
        { masuForm: "けんきゅうします", dictForm: "けんきゅうする", teForm: "けんきゅうして", burmese: "သုတေသနပြုလုပ်သည်" },
        { masuForm: "つかれます", dictForm: "つかれる", teForm: "つかれて", burmese: "ပင်ပန်းသည်" },
        { masuForm: "おくります", dictForm: "おくる", teForm: "おくって", burmese: "ပို့သည်" },
        { masuForm: "もちます", dictForm: "もつ", teForm: "もって", burmese: "ပိုင်ဆိုင်သည်။သယ်သည်။ကိုင်ထားသည်" },
        { masuForm: "だします", dictForm: "だす", teForm: "だして", burmese: "ပစ္စည်းထုတ်သည်။အစီရင်ခံစာတင်သည်။" },
        { masuForm: "あげます", dictForm: "あげる", teForm: "あげて", burmese: "ပေးသည်" },
        { masuForm: "くれます", dictForm: "くれる", teForm: "くれて", burmese: "ပေးသည် (မိမိအားပေးသည်)" },
        { masuForm: "はらいます", dictForm: "はらう", teForm: "はらって", burmese: "ပေးချေသည်" },
        { masuForm: "おわります", dictForm: "おわる", teForm: "おわって", burmese: "ပြီးဆုံးသည်" },
        { masuForm: "かえります", dictForm: "かえる", teForm: "かえって", burmese: "ပြန်သည်" },
        { masuForm: "かえします", dictForm: "かえす", teForm: "かえして", burmese: "ပြန်ပေးသည်" },
        { masuForm: "のりかえます", dictForm: "のりかえる", teForm: "のりかえて", burmese: "ပြောင်းစီးသည်" },
        { masuForm: "します", dictForm: "する", teForm: "して", burmese: "ပြုလုပ်သည်" },
        { masuForm: "つくります", dictForm: "つくる", teForm: "つくって", burmese: "ပြုလုပ်သည်။တည်ဆောက်သည်။" },
        { masuForm: "しゅうりします", dictForm: "しゅうりする", teForm: "しゅうりして", burmese: "ပြုပြင်သည်။ပြင်ဆင်သည်" },
        { masuForm: "いいます", dictForm: "いう", teForm: "いって", burmese: "ပြောသည်" },
        { masuForm: "きります", dictForm: "きる", teForm: "きって", burmese: "ဖြတ်သည်။ညှပ်သည်" },
        { masuForm: "わたります", dictForm: "わたる", teForm: "わたって", burmese: "ဖြတ်ကူးသည်" },
        { masuForm: "なります", dictForm: "なる", teForm: "なって", burmese: "ဖြစ်သည်။ဖြစ်လာသည်။ကျရောက်သည်" },
        { masuForm: "よみます", dictForm: "よむ", teForm: "よんで", burmese: "ဖတ်သည်။" },
        { masuForm: "わすれます", dictForm: "わすれる", teForm: "わすれて", burmese: "မေ့သည်" },
        { masuForm: "たちます", dictForm: "たつ", teForm: "たって", burmese: "မတ်တပ်ရပ်သည်" },
        { masuForm: "うんてんします", dictForm: "うんてんする", teForm: "うんてんして", burmese: "မောင်းနှင်သည်။" },
        { masuForm: "けします", dictForm: "けす", teForm: "けして", burmese: "မီးပိတ်သည်" },
        { masuForm: "つけます", dictForm: "つける", teForm: "つけて", burmese: "မီးဖွင့်သည်" },
        { masuForm: "しょうかいします", dictForm: "しょうかいする", teForm: "しょうかいして", burmese: "မိတ်ဆက်သည်" },
        { masuForm: "コピーします", dictForm: "こぴーする", teForm: "こぴーして", burmese: "မိတ္တူကူးသည်" },
        { masuForm: "うまれます", dictForm: "うまれる", teForm: "うまれて", burmese: "မွေးဖွားလာသည်" },
        { masuForm: "おぼえます", dictForm: "おぼえる", teForm: "おぼえて", burmese: "မှတ်မိသည်။မှတ်သည်" },
        { masuForm: "とります", dictForm: "とる", teForm: "とって", burmese: "ယူသည်" },
        { masuForm: "もっていきます", dictForm: "もっていく", teForm: "もっていって", burmese: "ယူသွားသည်(သက်မဲ့ပစ္စည်းတွင်သုံးသည်)" },
        { masuForm: "もってきます", dictForm: "もってくる", teForm: "もってきて", burmese: "ယူလာသည်(သက်မဲ့ပစ္စည်းတွင်သုံးသည်)" },
        { masuForm: "とります", dictForm: "とる", teForm: "とって", burmese: "ရသည်။ယူသည်" },
        { masuForm: "およぎます", dictForm: "およぐ", teForm: "およいで", burmese: "ရေကူးသည်" },
        { masuForm: "あびます", dictForm: "あびる", teForm: "あびて", burmese: "ရေချိုးသည်" },
        { masuForm: "かきます", dictForm: "かく", teForm: "かいて", burmese: "ရေးသည်။" },
        { masuForm: "うります", dictForm: "うる", teForm: "うって", burmese: "ရောင်းသည်" },
        { masuForm: "のります", dictForm: "のる", teForm: "のって", burmese: "ရထားကို စီးသည်" },
        { masuForm: "おります", dictForm: "おりる", teForm: "おりて", burmese: "ရထားပေါ်မှဆင်းသည်" },
        { masuForm: "ふります", dictForm: "ふる", teForm: "ふって", burmese: "ရွာသည်" },
        { masuForm: "しらべます", dictForm: "しらべる", teForm: "しらべて", burmese: "ရှာဖွေသည်။စစ်ဆေးသည်" },
        { masuForm: "あります", dictForm: "ある", teForm: "あって", burmese: "ရှိသည် (သက်မဲ့)" },
        { masuForm: "います", dictForm: "いる", teForm: "いて", burmese: "ရှိသည် (သက်ရှိ)" },
        { masuForm: "まけます", dictForm: "まける", teForm: "まけて", burmese: "ရှုံးနိမ့်သည်" },
        { masuForm: "あるきます", dictForm: "あるく", teForm: "あるいて", burmese: "လမ်းလျှောက်သည်။" },
        { masuForm: "きます", dictForm: "くる", teForm: "きて", burmese: "လာသည်" },
        { masuForm: "いります", dictForm: "いる", teForm: "いって", burmese: "လိုအပ်သည်" },
        { masuForm: "あんないします", dictForm: "あんないする", teForm: "あんないして", burmese: "လိုက်လံရှင်းပြသည်" },
        { masuForm: "かえます", dictForm: "かえる", teForm: "かえて", burmese: "လဲလှယ်သည်။ဖလှယ်သည်" },
        { masuForm: "べんきょうします", dictForm: "べんきょうする", teForm: "べんきょうして", burmese: "လေ့လာသည်" },
        { masuForm: "いそぎます", dictForm: "いそぐ", teForm: "いそいで", burmese: "လောသည်။အလျင်စလိုလုပ်သည်" },
        { masuForm: "すてます", dictForm: "すてる", teForm: "すてて", burmese: "လွှင့်ပစ်သည်" },
        { masuForm: "かいます", dictForm: "かう", teForm: "かって", burmese: "ဝယ်သည်" },
        { masuForm: "はいります", dictForm: "はいる", teForm: "はいって", burmese: "ဝင်သည်" },
        { masuForm: "きます", dictForm: "きる", teForm: "きて", burmese: "ဝတ်ဆင်သည်(ခါးအထက်ပိုင်း)" },
        { masuForm: "はきます", dictForm: "はく", teForm: "はいて", burmese: "ဝတ်ဆင်သည်။(ခါးအောက်ပိုင်း)" },
        { masuForm: "やすみます", dictForm: "やすむ", teForm: "やすんで", burmese: "အနားယူသည်" },
        { masuForm: "ざんぎょうします", dictForm: "ざんぎょうする", teForm: "ざんぎょうして", burmese: "အလုပ်အချိန်ပိုဆင်းသည်" },
        { masuForm: "はたらきます", dictForm: "はたらく", teForm: "はたらいて", burmese: "အလုပ်လုပ်သည်" },
        { masuForm: "つかいます", dictForm: "つかう", teForm: "つかって", burmese: "အသုံးပြုသည်" },
        { masuForm: "でかけます", dictForm: "でかける", teForm: "でかけて", burmese: "အပြင်ထွက်သည်" },
        { masuForm: "せんたくします", dictForm: "せんたくする", teForm: "せんたくして", burmese: "အဝတ်လျှော်သည်" },
        { masuForm: "ねます", dictForm: "ねる", teForm: "ねて", burmese: "အိပ်သည်" },
        { masuForm: "おきます", dictForm: "おきる", teForm: "おきて", burmese: "အိပ်ရာထသည်" }
    ];

    // DOM Elements
    const masuFormDisplay = document.getElementById('masu-form-display');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const feedbackText = document.getElementById('feedback-text');
    const correctCountEl = document.getElementById('correct-count');
    const totalCountEl = document.getElementById('total-count');

    // Game State
    let availableVerbs = [...verbs];
    let currentVerb = null;
    let correctCount = 0;
    let totalCount = 0;

    // Shuffle array function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayNewQuestion() {
        // Reset UI
        optionsContainer.innerHTML = '';
        feedbackText.textContent = '';
        feedbackText.className = '';
        nextBtn.classList.add('hidden');

        if (availableVerbs.length === 0) {
            // Game over
            masuFormDisplay.textContent = "ပြီးပါပြီ!";
            optionsContainer.innerHTML = `<p>သင် ${verbs.length} ခုမှာ ${correctCount} ခု မှန်ပါတယ်။</p>`;
            return;
        }

        totalCount++;
        updateScore();

        // Get a new verb question
        const questionIndex = Math.floor(Math.random() * availableVerbs.length);
        currentVerb = availableVerbs.splice(questionIndex, 1)[0]; // Remove from available list

        masuFormDisplay.textContent = currentVerb.masuForm;

        // --- Create Answer Options ---
        const options = [currentVerb];
        const wrongAnswersPool = verbs.filter(v => v.dictForm !== currentVerb.dictForm);

        // Get 3 unique wrong answers
        shuffle(wrongAnswersPool);
        for (let i = 0; i < 3; i++) {
            options.push(wrongAnswersPool[i]);
        }

        shuffle(options); // Shuffle the final 4 options

        // Display options
        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.innerHTML = `
                <span class="dict-form">${option.dictForm}</span>
                <span class="te-form">${option.teForm}</span>
            `;
            button.dataset.correct = (option.dictForm === currentVerb.dictForm);
            button.addEventListener('click', selectAnswer);
            optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedBtn = e.currentTarget;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        // Disable all buttons
        const allButtons = optionsContainer.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            correctCount++;
            selectedBtn.classList.add('correct');
            feedbackText.textContent = 'မှန်ပါတယ်! Excellent!';
            feedbackText.className = 'correct-feedback';
        } else {
            selectedBtn.classList.add('incorrect');
            feedbackText.textContent = `မှားပါတယ်၊ အဖြေမှန်ကတော့:`;
            feedbackText.className = 'incorrect-feedback';
            // Highlight the correct answer
            const correctBtn = optionsContainer.querySelector('[data-correct="true"]');
            correctBtn.classList.add('correct');
        }

        updateScore();
        nextBtn.classList.remove('hidden');
    }

    function updateScore() {
        correctCountEl.textContent = correctCount;
        totalCountEl.textContent = `${totalCount} / ${verbs.length}`;
    }

    // Event Listeners
    nextBtn.addEventListener('click', displayNewQuestion);

    // Start the game
    displayNewQuestion();
});