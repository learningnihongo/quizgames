document.addEventListener('DOMContentLoaded', () => {
    // --- RAW VERB DATA ---
    const rawVerbData = [{ te: "てつだって", jisho: "てつだう" }, { te: "みて", jisho: "みる" }, { te: "よやくして", jisho: "よやくする" }, { te: "むかえて", jisho: "むかえる" }, { te: "よんで", jisho: "よぶ" }, { te: "つれていって", jisho: "つれていく" }, { te: "つれてきて", jisho: "つれてくる" }, { te: "かして", jisho: "かす" }, { te: "かりて", jisho: "かりる" }, { te: "まがって", jisho: "まがる" }, { te: "はなして", jisho: "はなす" }, { te: "はじめて", jisho: "はじめる" }, { te: "かんがえて", jisho: "かんがえる" }, { te: "あつめて", jisho: "あつめる" }, { te: "まって", jisho: "まつ" }, { te: "たべて", jisho: "たべる" }, { te: "あらって", jisho: "あらう" }, { te: "すって", jisho: "すう" }, { te: "ついて", jisho: "つく" }, { te: "かぶって", jisho: "かぶる" }, { te: "かいものして", jisho: "かいものする" }, { te: "とって", jisho: "とる" }, { te: "のぼって", jisho: "のぼる" }, { te: "かけて", jisho: "かける" }, { te: "とめて", jisho: "とめる" }, { te: "ひいて", jisho: "ひく" }, { te: "とまって", jisho: "とまる" }, { te: "あって", jisho: "あう" }, { te: "しょくじして", jisho: "しょくじする" }, { te: "おいて", jisho: "おく" }, { te: "でて", jisho: "でる" }, { te: "すわって", jisho: "すわる" }, { te: "おもって", jisho: "おもう" }, { te: "おしえて", jisho: "おしえる" }, { te: "ならって", jisho: "ならう" }, { te: "そうじして", jisho: "そうじする" }, { te: "きをつけて", jisho: "きをつける" }, { te: "いって", jisho: "いく" }, { te: "のんで", jisho: "のむ" }, { te: "しって", jisho: "しる" }, { te: "うたって", jisho: "うたう" }, { te: "いれて", jisho: "いれる" }, { te: "けんきゅうして", jisho: "けんきゅうする" }, { te: "つかれて", jisho: "つかれる" }, { te: "おくって", jisho: "おくる" }, { te: "もって", jisho: "もつ" }, { te: "だして", jisho: "だす" }, { te: "あげて", jisho: "あげる" }, { te: "くれて", jisho: "くれる" }, { te: "はらって", jisho: "はらう" }, { te: "おわって", jisho: "おわる" }, { te: "かえって", jisho: "かえる" }, { te: "かえして", jisho: "かえす" }, { te: "のりかえて", jisho: "のりかえる" }, { te: "して", jisho: "する" }, { te: "つくって", jisho: "つくる" }, { te: "しゅうりして", jisho: "しゅうりする" }, { te: "いって", jisho: "いう" }, { te: "きって", jisho: "きる" }, { te: "わたって", jisho: "わたる" }, { te: "なって", jisho: "なる" }, { te: "よんで", jisho: "よむ" }, { te: "わすれて", jisho: "わすれる" }, { te: "たって", jisho: "たつ" }, { te: "うんてんして", jisho: "うんてんする" }, { te: "けして", jisho: "けす" }, { te: "つけて", jisho: "つける" }, { te: "しょうかいして", jisho: "しょうかいする" }, { te: "こぴーして", jisho: "こぴーする" }, { te: "うまれて", jisho: "うまれる" }, { te: "おぼえて", jisho: "おぼえる" }, { te: "もっていって", jisho: "もっていく" }, { te: "もってきて", jisho: "もってくる" }, { te: "およいで", jisho: "およぐ" }, { te: "あびて", jisho: "あびる" }, { te: "かいて", jisho: "かく" }, { te: "うって", jisho: "うる" }, { te: "のって", jisho: "のる" }, { te: "おりて", jisho: "おりる" }, { te: "ふって", jisho: "ふる" }, { te: "しらべて", jisho: "しらべる" }, { te: "あって", jisho: "ある" }, { te: "いて", jisho: "いる" }, { te: "まけて", jisho: "まける" }, { te: "あるいて", jisho: "あるく" }, { te: "きて", jisho: "くる" }, { te: "いって", jisho: "いる" }, { te: "あんないして", jisho: "あんないする" }, { te: "かえて", jisho: "かえる" }, { te: "べんきょうして", jisho: "べんきょうする" }, { te: "いそいで", jisho: "いそぐ" }, { te: "すてて", jisho: "すてる" }, { te: "かって", jisho: "かう" }, { te: "はいって", jisho: "はいる" }, { te: "きて", jisho: "きる" }, { te: "はいて", jisho: "はく" }, { te: "やすんで", jisho: "やすむ" }, { te: "ざんぎょうして", jisho: "ざんぎょうする" }, { te: "はたらいて", jisho: "はたらく" }, { te: "つかって", jisho: "つかう" }, { te: "でかけて", jisho: "でかける" }, { te: "せんたくして", jisho: "せんたくする" }, { te: "ねて", jisho: "ねる" }, { te: "おきて", jisho: "おきる" }];

    // --- CONJUGATION ENGINE ---
    const getVerbGroup = (jisho, te) => {
        if (jisho.endsWith('する') || jisho === 'くる') return 3;
        if (jisho.endsWith('る') && te.slice(-1) === 'て' && !te.startsWith('って')) return 2;
        return 1;
    };
    const conjugate = (verb) => {
        if (!verb.group) verb.group = getVerbGroup(verb.jisho, verb.te);
        const jisho_base = verb.jisho.slice(0, -1);
        const last_jisho_char = verb.jisho.slice(-1);
        verb.masu = (() => {
            if (verb.group === 3) return verb.jisho === 'する' ? 'します' : 'きます';
            if (verb.group === 2) return jisho_base + 'ます';
            const i_line = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
            if (verb.jisho === 'いく') return 'いきます';
            return jisho_base + i_line[last_jisho_char] + 'ます';
        })();
        verb.ta = verb.te.endsWith('て') ? verb.te.slice(0, -1) + 'た' : verb.te.slice(0, -1) + 'だ';
        verb.nai = (() => {
            if (verb.jisho === 'ある') return 'ない';
            if (verb.group === 3) return verb.jisho === 'する' ? 'しない' : 'こない';
            if (verb.group === 2) return jisho_base + 'ない';
            const a_line = { 'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' };
            return jisho_base + a_line[last_jisho_char] + 'ない';
        })();
        return verb;
    };
    let fullVerbData = rawVerbData.map(conjugate);

    // --- GAME STRUCTURE ---
    const questData = {
        regions: [
            { name: "始まりの平野", unlockRequirement: 0, icon: `<svg viewBox="0 0 24 24"><path d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.48 0L2.16 16.25A2 2 0 0 0 4 19h1m11-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>` },
            { name: "学びの森", unlockRequirement: 0.6, icon: `<svg viewBox="0 0 24 24"><path d="M16 12.37a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM12 21a9 9 0 0 0 6.84-14.74 9 9 0 0 0-13.68 0A9 9 0 0 0 12 21z"/></svg>` },
            { name: "挑戦の山", unlockRequirement: 0.8, icon: `<svg viewBox="0 0 24 24"><path d="M15 6l-4 4h3v8h2v-8h3l-4-4zM5 18h3v-8H5v8zm8-1.5l-4-4-4 4v-2l4-4 4 4v2z"/></svg>` },
            { name: "達人の頂", unlockRequirement: 0.9, icon: `<svg viewBox="0 0 24 24"><path d="M12 2l-2.2 4.8L4 7.2l3.6 3.8L6.4 16 12 13.2 17.6 16l-1.2-5L20 7.2l-5.8-.4L12 2z"/></svg>` },
        ],
        verbsPerRegion: Math.ceil(fullVerbData.length / 4)
    };

    // --- DOM ELEMENTS ---
    const screens = { map: document.getElementById('world-map-screen'), region: document.getElementById('region-screen'), quiz: document.getElementById('quiz-screen') };
    const worldMapGrid = document.getElementById('world-map-grid');
    const regionTitle = document.getElementById('region-title');
    const regionProgressBar = document.getElementById('region-progress-bar');
    const verbStageGrid = document.getElementById('verb-stage-grid');
    const quizVerbTitle = document.getElementById('quiz-verb-title');
    const quizProgressContainer = document.getElementById('quiz-progress-container');
    const quizPrompt = document.getElementById('quiz-prompt');
    const answerForm = document.getElementById('answer-form');
    const answerInput = document.getElementById('answer-input');
    const backToMapBtn = document.getElementById('back-to-map-btn');
    const unlockNotification = document.getElementById('unlock-notification');
    const unlockedRegionName = document.getElementById('unlocked-region-name');
    const sounds = {
        correct: document.getElementById('correct-sound'),
        incorrect: document.getElementById('incorrect-sound'),
        stageClear: document.getElementById('stage-clear-sound'),
        regionUnlock: document.getElementById('region-unlock-sound'),
    };

    // --- GAME STATE ---
    let gameState;
    let currentQuiz = { verb: null, forms: [], currentFormIndex: 0 };

    function init() {
        loadGameState();
        renderWorldMap();
        addEventListeners();
    }

    function loadGameState() {
        const savedState = localStorage.getItem('verbQuestState');
        if (savedState) {
            gameState = JSON.parse(savedState);
        } else {
            gameState = {
                completedVerbs: [],
                unlockedRegions: [questData.regions[0].name]
            };
        }
    }

    function saveGameState() {
        localStorage.setItem('verbQuestState', JSON.stringify(gameState));
    }

    function renderWorldMap() {
        worldMapGrid.innerHTML = '';
        const totalCompleted = gameState.completedVerbs.length;

        questData.regions.forEach((region, index) => {
            const isUnlocked = gameState.unlockedRegions.includes(region.name);
            const card = document.createElement('div');
            card.className = 'region-card';
            card.innerHTML = `
                ${region.icon}
                <h3>${region.name}</h3>
                ${isUnlocked ? `<p>${questData.verbsPerRegion * index}〜</p>` : `<div class="lock-icon"><svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"></path></svg></div>`}
            `;
            if (!isUnlocked) {
                card.classList.add('locked');
            } else {
                card.addEventListener('click', () => showRegion(index));
            }
            worldMapGrid.appendChild(card);
        });
    }

    function showRegion(regionIndex) {
        switchScreen('region');
        const region = questData.regions[regionIndex];
        const startIndex = regionIndex * questData.verbsPerRegion;
        const endIndex = startIndex + questData.verbsPerRegion;
        const regionVerbs = fullVerbData.slice(startIndex, endIndex);

        regionTitle.textContent = region.name;
        verbStageGrid.innerHTML = '';

        let completedInRegion = 0;
        regionVerbs.forEach(verb => {
            const isCompleted = gameState.completedVerbs.includes(verb.jisho);
            if (isCompleted) completedInRegion++;

            const stage = document.createElement('div');
            stage.className = 'verb-stage';
            stage.innerHTML = `
                <div class="verb-stage-icon">${isCompleted ? `<svg viewBox="0 0 24 24"><path d="m2.75 12.5 3.5 3.5 1-1-2-2 1-1-1.5-1.5zm18.5-1.5-9 9-4.5-4.5 1-1 3.5 3.5 8-8 1 1z"/></svg>` : `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`}</div>
                <p>${verb.jisho}</p>
            `;
            if (isCompleted) stage.classList.add('completed');
            stage.addEventListener('click', () => startQuiz(verb));
            verbStageGrid.appendChild(stage);
        });

        const progress = regionVerbs.length > 0 ? (completedInRegion / regionVerbs.length) * 100 : 0;
        regionProgressBar.style.width = `${progress}%`;
    }

    function startQuiz(verb) {
        switchScreen('quiz');
        currentQuiz.verb = verb;
        currentQuiz.forms = ['te', 'ta', 'nai', 'masu'].sort(() => 0.5 - Math.random());
        currentQuiz.currentFormIndex = 0;
        askNextQuizQuestion();
    }

    function askNextQuizQuestion() {
        if (currentQuiz.currentFormIndex >= currentQuiz.forms.length) {
            finishQuiz();
            return;
        }

        quizVerbTitle.textContent = `「${currentQuiz.verb.jisho}」`;
        quizProgressContainer.innerHTML = currentQuiz.forms.map((_, index) =>
            `<div class="quiz-progress-dot ${index < currentQuiz.currentFormIndex ? 'correct' : ''}"></div>`
        ).join('');

        const form = currentQuiz.forms[currentQuiz.currentFormIndex];
        let baseForm = (form === 'ta' || form === 'nai') ? '辞書形' : 'ます形';
        quizPrompt.textContent = `「${baseForm}」を「${form}形」にしてください`;
        answerInput.value = '';
        answerInput.focus();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = currentQuiz.forms[currentQuiz.currentFormIndex];
        const correctAnswer = currentQuiz.verb[form];

        if (answerInput.value.trim() === correctAnswer) {
            playSound(sounds.correct);
            currentQuiz.currentFormIndex++;
            setTimeout(askNextQuizQuestion, 300);
        } else {
            playSound(sounds.incorrect);
            answerInput.classList.add('incorrect');
            setTimeout(() => answerInput.classList.remove('incorrect'), 400);
        }
    }

    function finishQuiz() {
        playSound(sounds.stageClear);
        if (!gameState.completedVerbs.includes(currentQuiz.verb.jisho)) {
            gameState.completedVerbs.push(currentQuiz.verb.jisho);
        }

        checkUnlocks();
        saveGameState();
        showRegion(Math.floor(fullVerbData.findIndex(v => v.jisho === currentQuiz.verb.jisho) / questData.verbsPerRegion));
    }

    function checkUnlocks() {
        const totalCompleted = gameState.completedVerbs.length;
        questData.regions.forEach(region => {
            if (!gameState.unlockedRegions.includes(region.name)) {
                if (totalCompleted >= fullVerbData.length * region.unlockRequirement) {
                    gameState.unlockedRegions.push(region.name);
                    playSound(sounds.regionUnlock);
                    unlockedRegionName.textContent = region.name;
                    unlockNotification.classList.add('show');
                    setTimeout(() => unlockNotification.classList.remove('show'), 4000);
                }
            }
        });
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function playSound(sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.error("Audio play failed:", e));
    }

    function addEventListeners() {
        backToMapBtn.addEventListener('click', () => {
            renderWorldMap();
            switchScreen('map');
        });
        answerForm.addEventListener('submit', handleSubmit);
    }

    init();
});