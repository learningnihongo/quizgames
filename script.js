document.addEventListener('DOMContentLoaded', () => {
    // --- RAW VERB DATA ---
    const rawVerbData = [{ te: "てつだって", jisho: "てつだう" }, { te: "みて", jisho: "みる" }, { te: "よやくして", jisho: "よやくする" }, { te: "むかえて", jisho: "むかえる" }, { te: "よんで", jisho: "よぶ" }, { te: "つれていって", jisho: "つれていく" }, { te: "つれてきて", jisho: "つれてくる" }, { te: "かして", jisho: "かす" }, { te: "かりて", jisho: "かりる" }, { te: "まがって", jisho: "まがる" }, { te: "はなして", jisho: "はなす" }, { te: "はじめて", jisho: "はじめる" }, { te: "かんがえて", jisho: "かんがえる" }, { te: "あつめて", jisho: "あつめる" }, { te: "まって", jisho: "まつ" }, { te: "たべて", jisho: "たべる" }, { te: "あらって", jisho: "あらう" }, { te: "すって", jisho: "すう" }, { te: "ついて", jisho: "つく" }, { te: "かぶって", jisho: "かぶる" }, { te: "かいものして", jisho: "かいものする" }, { te: "とって", jisho: "とる" }, { te: "のぼって", jisho: "のぼる" }, { te: "かけて", jisho: "かける" }, { te: "とめて", jisho: "とめる" }, { te: "ひいて", jisho: "ひく" }, { te: "とまって", jisho: "とまる" }, { te: "あって", jisho: "あう" }, { te: "しょくじして", jisho: "しょくじする" }, { te: "おいて", jisho: "おく" }, { te: "でて", jisho: "でる" }, { te: "すわって", jisho: "すわる" }, { te: "おもって", jisho: "おもう" }, { te: "おしえて", jisho: "おしえる" }, { te: "ならって", jisho: "ならう" }, { te: "そうじして", jisho: "そうじする" }, { te: "きをつけて", jisho: "きをつける" }, { te: "いって", jisho: "いく" }, { te: "のんで", jisho: "のむ" }, { te: "しって", jisho: "しる" }, { te: "うたって", jisho: "うたう" }, { te: "いれて", jisho: "いれる" }, { te: "けんきゅうして", jisho: "けんきゅうする" }, { te: "つかれて", jisho: "つかれる" }, { te: "おくって", jisho: "おくる" }, { te: "もって", jisho: "もつ" }, { te: "だして", jisho: "だす" }, { te: "あげて", jisho: "あげる" }, { te: "くれて", jisho: "くれる" }, { te: "はらって", jisho: "はらう" }, { te: "おわって", jisho: "おわる" }, { te: "かえって", jisho: "かえる" }, { te: "かえして", jisho: "かえす" }, { te: "のりかえて", jisho: "のりかえる" }, { te: "して", jisho: "する" }, { te: "つくって", jisho: "つくる" }, { te: "しゅうりして", jisho: "しゅうりする" }, { te: "いって", jisho: "いう" }, { te: "きって", jisho: "きる" }, { te: "わたって", jisho: "わたる" }, { te: "なって", jisho: "なる" }, { te: "よんで", jisho: "よむ" }, { te: "わすれて", jisho: "わすれる" }, { te: "たって", jisho: "たつ" }, { te: "うんてんして", jisho: "うんてんする" }, { te: "けして", jisho: "けす" }, { te: "つけて", jisho: "つける" }, { te: "しょうかいして", jisho: "しょうかいする" }, { te: "こぴーして", jisho: "こぴーする" }, { te: "うまれて", jisho: "うまれる" }, { te: "おぼえて", jisho: "おぼえる" }, { te: "もっていって", jisho: "もっていく" }, { te: "もってきて", jisho: "もってくる" }, { te: "およいで", jisho: "およぐ" }, { te: "あびて", jisho: "あびる" }, { te: "かいて", jisho: "かく" }, { te: "うって", jisho: "うる" }, { te: "のって", jisho: "のる" }, { te: "おりて", jisho: "おりる" }, { te: "ふって", jisho: "ふる" }, { te: "しらべて", jisho: "しらべる" }, { te: "あって", jisho: "ある" }, { te: "いて", jisho: "いる" }, { te: "まけて", jisho: "まける" }, { te: "あるいて", jisho: "あるく" }, { te: "きて", jisho: "くる" }, { te: "いって", jisho: "いる" }, { te: "あんないして", jisho: "あんないする" }, { te: "かえて", jisho: "かえる" }, { te: "べんきょうして", jisho: "べんきょうする" }, { te: "いそいで", jisho: "いそぐ" }, { te: "すてて", jisho: "すてる" }, { te: "かって", jisho: "かう" }, { te: "はいって", jisho: "はいる" }, { te: "きて", jisho: "きる" }, { te: "はいて", jisho: "はく" }, { te: "やすんで", jisho: "やすむ" }, { te: "ざんぎょうして", jisho: "ざんぎょうする" }, { te: "はたらいて", jisho: "はたらく" }, { te: "つかって", jisho: "つかう" }, { te: "でかけて", jisho: "でかける" }, { te: "せんたくして", jisho: "せんたくする" }, { te: "ねて", jisho: "ねる" }, { te: "おきて", jisho: "おきる" }];

    // --- CONJUGATION ENGINE & DATA PREP ---
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
    const fullVerbData = rawVerbData.map(conjugate);

    // --- GAME STRUCTURE ---
    const questData = {
        regions: [
            { id: 'region1', name: "始まりの平野", unlockRequirement: 0, icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 18.997V13h-2v5.997H5.998V11H1v7.997h4.998v-3.999H11v3.999h4.998V11H13v2H8.002v1.999H13zM15 9.002H9V5h6v4.002z"/></svg>` },
            { id: 'region2', name: "学びの森", unlockRequirement: 0.25, icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>` },
            { id: "region3", name: "挑戦の山", unlockRequirement: 0.5, icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-2.2 4.8L4 7.2l3.6 3.8L6.4 16 12 13.2 17.6 16l-1.2-5L20 7.2l-5.8-.4L12 2z"/></svg>` },
            { id: 'region4', name: "達人の頂", unlockRequirement: 0.75, icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>` },
        ],
        verbsPerRegion: Math.ceil(fullVerbData.length / 4)
    };

    // --- DOM ELEMENTS ---
    const screens = { map: document.getElementById('world-map-screen'), region: document.getElementById('region-screen'), duel: document.getElementById('duel-screen') };
    const worldMapGrid = document.getElementById('world-map-grid');
    const regionTitle = document.getElementById('region-title');
    const verbStageGrid = document.getElementById('verb-stage-grid');
    const targetCardArea = document.getElementById('target-card-area');
    const playerHandArea = document.getElementById('player-hand-area');
    const backToMapBtn = document.getElementById('back-to-map-btn');
    const stageClearOverlay = document.getElementById('stage-clear-overlay');
    const nextStageBtn = document.getElementById('next-stage-btn');
    const sounds = { correct: document.getElementById('correct-sound'), incorrect: document.getElementById('card-play-sound'), stageClear: document.getElementById('stage-clear-sound') };

    // --- GAME STATE ---
    let gameState, currentDuel;

    function init() {
        loadGameState();
        renderWorldMap();
        addEventListeners();
    }

    function loadGameState() {
        const savedState = localStorage.getItem('verbDuelState');
        gameState = savedState ? JSON.parse(savedState) : { completedVerbs: [], unlockedRegions: [questData.regions[0].id] };
    }

    function saveGameState() { localStorage.setItem('verbDuelState', JSON.stringify(gameState)); }

    function renderWorldMap() {
        worldMapGrid.innerHTML = '';
        const totalCompleted = gameState.completedVerbs.length;
        questData.regions.forEach(region => {
            const isUnlocked = gameState.unlockedRegions.includes(region.id) || totalCompleted >= fullVerbData.length * region.unlockRequirement;
            if (isUnlocked && !gameState.unlockedRegions.includes(region.id)) {
                gameState.unlockedRegions.push(region.id);
            }
            const card = document.createElement('div');
            card.className = isUnlocked ? 'region-card' : 'region-card locked';
            card.innerHTML = `${region.icon}<h3>${region.name}</h3>`;
            if (isUnlocked) card.addEventListener('click', () => showRegion(region.id));
            worldMapGrid.appendChild(card);
        });
        saveGameState();
    }

    function showRegion(regionId) {
        switchScreen('region');
        const regionIndex = questData.regions.findIndex(r => r.id === regionId);
        const region = questData.regions[regionIndex];
        const startIndex = regionIndex * questData.verbsPerRegion;
        const endIndex = startIndex + questData.verbsPerRegion;
        const regionVerbs = fullVerbData.slice(startIndex, endIndex);

        regionTitle.textContent = region.name;
        verbStageGrid.innerHTML = '';

        regionVerbs.forEach(verb => {
            const isCompleted = gameState.completedVerbs.includes(verb.jisho);
            const stage = document.createElement('div');
            stage.className = isCompleted ? 'verb-stage-card completed' : 'verb-stage-card';
            stage.innerHTML = `<h3>${verb.jisho}</h3>`;
            stage.addEventListener('click', () => startDuel(verb, regionId));
            verbStageGrid.appendChild(stage);
        });
    }

    function startDuel(verb, regionId) {
        switchScreen('duel');
        currentDuel = {
            verb: verb,
            formsToTest: ['te', 'ta', 'nai', 'masu'].sort(() => 0.5 - Math.random()),
            currentFormIndex: 0,
            regionId: regionId
        };
        setupNextRound();
    }

    function setupNextRound() {
        if (currentDuel.currentFormIndex >= currentDuel.formsToTest.length) {
            finishDuel();
            return;
        }

        targetCardArea.innerHTML = '';
        playerHandArea.innerHTML = '';

        const formToTest = currentDuel.formsToTest[currentDuel.currentFormIndex];
        const targetCard = document.createElement('div');
        targetCard.className = 'card target-card';
        targetCard.innerHTML = `<span class="prompt-verb">「${currentDuel.verb.jisho}」</span><span class="prompt-form">${formToTest}形</span>`;
        targetCardArea.appendChild(targetCard);

        const correctAnswer = currentDuel.verb[formToTest];
        const answerOptions = [correctAnswer];

        // Generate distractors
        while (answerOptions.length < 3) {
            const randomVerb = fullVerbData[Math.floor(Math.random() * fullVerbData.length)];
            const randomForm = ['te', 'ta', 'nai', 'masu'][Math.floor(Math.random() * 4)];
            const distractor = randomVerb[randomForm];
            if (!answerOptions.includes(distractor)) {
                answerOptions.push(distractor);
            }
        }

        answerOptions.sort(() => 0.5 - Math.random());
        answerOptions.forEach(option => {
            const card = document.createElement('div');
            card.className = 'card player-card';
            card.textContent = option;
            card.addEventListener('click', () => handleCardPlay(card, option === correctAnswer));
            playerHandArea.appendChild(card);
        });
    }

    function handleCardPlay(cardElement, isCorrect) {
        playerHandArea.childNodes.forEach(c => c.style.pointerEvents = 'none');
        playSound(isCorrect ? sounds.correct : sounds.incorrect);
        cardElement.classList.add('played', isCorrect ? 'correct-hit' : 'incorrect-hit');

        setTimeout(() => {
            if (isCorrect) {
                currentDuel.currentFormIndex++;
            }
            setupNextRound();
        }, 1000);
    }

    function finishDuel() {
        playSound(sounds.stageClear);
        if (!gameState.completedVerbs.includes(currentDuel.verb.jisho)) {
            gameState.completedVerbs.push(currentDuel.verb.jisho);
        }
        saveGameState();
        stageClearOverlay.classList.remove('hidden');
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function playSound(sound) {
        sound.currentTime = 0;
        sound.play().catch(e => { });
    }

    function addEventListeners() {
        backToMapBtn.addEventListener('click', () => {
            renderWorldMap();
            switchScreen('map');
        });
        nextStageBtn.addEventListener('click', () => {
            stageClearOverlay.classList.add('hidden');
            showRegion(currentDuel.regionId);
        });
    }

    init();
});