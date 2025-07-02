document.addEventListener('DOMContentLoaded', () => {
    // --- STORY DATA ---
    const stories = [
        {
            id: 'morning_routine',
            title: '朝の準備',
            image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f305.svg',
            scenes: [
                {
                    template: 'わたしは まいにち ７じに {0}。',
                    blanks: [{ jisho: 'おきる', form: 'ます' }]
                },
                {
                    template: 'シャワーを {0}、かおを {1}。',
                    blanks: [{ jisho: 'あびる', form: 'て' }, { jisho: 'あらう', form: 'ます' }]
                },
                {
                    template: 'ごはんを {0}、コーヒーを {1}。',
                    blanks: [{ jisho: 'たべる', form: 'て' }, { jisho: 'のむ', form: 'ます' }]
                },
                {
                    template: '８じに うちを {0}、かいしゃへ {1}。',
                    blanks: [{ jisho: 'でる', form: 'て' }, { jisho: 'いく', form: 'ます' }]
                }
            ]
        },
        {
            id: 'yesterday',
            title: '昨日のこと',
            image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c5.svg',
            scenes: [
                {
                    template: 'きのうは ともだちに {0}。',
                    blanks: [{ jisho: 'あう', form: 'ました' }]
                },
                {
                    template: 'わたしたちは えいがを {0}。',
                    blanks: [{ jisho: 'みる', form: 'ました' }]
                },
                {
                    template: 'でも、しゅくだいを {0}。',
                    blanks: [{ jisho: 'する', form: 'ませんでした' }]
                },
                {
                    template: 'とても たのしい いちにち {0}。',
                    blanks: [{ jisho: 'です', form: 'でした' }] // Special case for です
                }
            ]
        },
        // Add more stories here
    ];

    // --- CONJUGATION ENGINE ---
    const conjugate = (verb, form) => {
        if (!verb.jisho || !verb.te) return ''; // Skip if base forms are missing

        const te_base = verb.te.slice(0, -1);
        const jisho_base = verb.jisho.slice(0, -1);
        const last_jisho_char = verb.jisho.slice(-1);

        switch (form) {
            case 'ます':
                if (verb.group === 3) return verb.jisho === 'する' ? 'します' : 'きます';
                if (verb.group === 2) return jisho_base + 'ます';
                const i_line = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
                return jisho_base + i_line[last_jisho_char] + 'ます';
            case 'て': return verb.te;
            case 'た': return te_base + (verb.te.slice(-1) === 'て' ? 'た' : 'だ');
            case 'ない':
                if (verb.jisho === 'ある') return 'ない';
                if (verb.group === 3) return verb.jisho === 'する' ? 'しない' : 'こない';
                if (verb.group === 2) return jisho_base + 'ない';
                const a_line = { 'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' };
                return jisho_base + a_line[last_jisho_char] + 'ない';
            case 'ました': return conjugate(verb, 'ます').slice(0, -2) + 'ました';
            case 'ませんでした': return conjugate(verb, 'ます').slice(0, -2) + 'ませんでした';
            case 'でした': return 'でした'; // Special case
            default: return verb.jisho;
        }
    };

    // --- DATA PREPARATION ---
    const rawVerbData = [{ te: "てつだって", jisho: "てつだう" }, { te: "みて", jisho: "みる" }, { te: "よやくして", jisho: "よやくする" }, { te: "むかえて", jisho: "むかえる" }, { te: "よんで", jisho: "よぶ" }, { te: "つれていって", jisho: "つれていく" }, { te: "つれてきて", jisho: "つれてくる" }, { te: "かして", jisho: "かす" }, { te: "かりて", jisho: "かりる" }, { te: "まがって", jisho: "まがる" }, { te: "はなして", jisho: "はなす" }, { te: "はじめて", jisho: "はじめる" }, { te: "かんがえて", jisho: "かんがえる" }, { te: "あつめて", jisho: "あつめる" }, { te: "まって", jisho: "まつ" }, { te: "たべて", jisho: "たべる" }, { te: "あらって", jisho: "あらう" }, { te: "すって", jisho: "すう" }, { te: "ついて", jisho: "つく" }, { te: "かぶって", jisho: "かぶる" }, { te: "かいものして", jisho: "かいものする" }, { te: "とって", jisho: "とる" }, { te: "のぼって", jisho: "のぼる" }, { te: "かけて", jisho: "かける" }, { te: "とめて", jisho: "とめる" }, { te: "ひいて", jisho: "ひく" }, { te: "とまって", jisho: "とまる" }, { te: "あって", jisho: "あう" }, { te: "しょくじして", jisho: "しょくじする" }, { te: "おいて", jisho: "おく" }, { te: "でて", jisho: "でる" }, { te: "すわって", jisho: "すわる" }, { te: "おもって", jisho: "おもう" }, { te: "おしえて", jisho: "おしえる" }, { te: "ならって", jisho: "ならう" }, { te: "そうじして", jisho: "そうじする" }, { te: "きをつけて", jisho: "きをつける" }, { te: "いって", jisho: "いく" }, { te: "のんで", jisho: "のむ" }, { te: "しって", jisho: "しる" }, { te: "うたって", jisho: "うたう" }, { te: "いれて", jisho: "いれる" }, { te: "けんきゅうして", jisho: "けんきゅうする" }, { te: "つかれて", jisho: "つかれる" }, { te: "おくって", jisho: "おくる" }, { te: "もって", jisho: "もつ" }, { te: "だして", jisho: "だす" }, { te: "あげて", jisho: "あげる" }, { te: "くれて", jisho: "くれる" }, { te: "はらって", jisho: "はらう" }, { te: "おわって", jisho: "おわる" }, { te: "かえって", jisho: "かえる" }, { te: "かえして", jisho: "かえす" }, { te: "のりかえて", jisho: "のりかえる" }, { te: "して", jisho: "する" }, { te: "つくって", jisho: "つくる" }, { te: "しゅうりして", jisho: "しゅうりする" }, { te: "いって", jisho: "いう" }, { te: "きって", jisho: "きる" }, { te: "わたって", jisho: "わたる" }, { te: "なって", jisho: "なる" }, { te: "よんで", jisho: "よむ" }, { te: "わすれて", jisho: "わすれる" }, { te: "たって", jisho: "たつ" }, { te: "うんてんして", jisho: "うんてんする" }, { te: "けして", jisho: "けす" }, { te: "つけて", jisho: "つける" }, { te: "しょうかいして", jisho: "しょうかいする" }, { te: "こぴーして", jisho: "こぴーする" }, { te: "うまれて", jisho: "うまれる" }, { te: "おぼえて", jisho: "おぼえる" }, { te: "もっていって", jisho: "もっていく" }, { te: "もってきて", jisho: "もってくる" }, { te: "およいで", jisho: "およぐ" }, { te: "あびて", jisho: "あびる" }, { te: "かいて", jisho: "かく" }, { te: "うって", jisho: "うる" }, { te: "のって", jisho: "のる" }, { te: "おりて", jisho: "おりる" }, { te: "ふって", jisho: "ふる" }, { te: "しらべて", jisho: "しらべる" }, { te: "あって", jisho: "ある" }, { te: "いて", jisho: "いる" }, { te: "まけて", jisho: "まける" }, { te: "あるいて", jisho: "あるく" }, { te: "きて", jisho: "くる" }, { te: "いって", jisho: "いる" }, { te: "あんないして", jisho: "あんないする" }, { te: "かえて", jisho: "かえる" }, { te: "べんきょうして", jisho: "べんきょうする" }, { te: "いそいで", jisho: "いそぐ" }, { te: "すてて", jisho: "すてる" }, { te: "かって", jisho: "かう" }, { te: "はいって", jisho: "はいる" }, { te: "きて", jisho: "きる" }, { te: "はいて", jisho: "はく" }, { te: "やすんで", jisho: "やすむ" }, { te: "ざんぎょうして", jisho: "ざんぎょうする" }, { te: "はたらいて", jisho: "はたらく" }, { te: "つかって", jisho: "つかう" }, { te: "でかけて", jisho: "でかける" }, { te: "せんたくして", jisho: "せんたくする" }, { te: "ねて", jisho: "ねる" }, { te: "おきて", jisho: "おきる" }];
    const verbMap = new Map(rawVerbData.map(v => {
        const group = (jisho, te) => {
            if (jisho.endsWith('する') || jisho === 'くる') return 3;
            if (jisho.endsWith('る') && te.slice(-1) === 'て' && !te.startsWith('って')) return 2;
            return 1;
        };
        v.group = group(v.jisho, v.te);
        return [v.jisho, v];
    }));

    // --- DOM ELEMENTS ---
    const screens = { selection: document.getElementById('selection-screen'), game: document.getElementById('game-screen'), complete: document.getElementById('complete-screen') };
    const storyGrid = document.getElementById('story-grid');
    const storyTitleEl = document.getElementById('story-title');
    const backToSelectionBtn = document.getElementById('back-to-selection-btn');
    const storyImageContainer = document.getElementById('story-image-container');
    const sentenceContainer = document.getElementById('sentence-container');
    const promptVerbEl = document.getElementById('prompt-verb');
    const answerForm = document.getElementById('answer-form');
    const answerInput = document.getElementById('answer-input');
    const completedStoryPanel = document.getElementById('completed-story-panel');
    const playAnotherStoryBtn = document.getElementById('play-another-story-btn');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    // --- GAME STATE ---
    let currentStory = null;
    let currentSceneIndex = 0;
    let currentBlankIndex = 0;
    let filledAnswers = [];

    // --- FUNCTIONS ---
    function init() {
        renderStorySelection();
        addEventListeners();
    }

    function renderStorySelection() {
        storyGrid.innerHTML = '';
        stories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'story-card';
            card.dataset.storyId = story.id;
            card.innerHTML = `<h3>${story.title}</h3>`;
            card.addEventListener('click', () => startStory(story.id));
            storyGrid.appendChild(card);
        });
    }

    function startStory(storyId) {
        currentStory = stories.find(s => s.id === storyId);
        currentSceneIndex = 0;
        currentBlankIndex = 0;
        filledAnswers = [];
        storyTitleEl.textContent = currentStory.title;
        switchScreen('game');
        loadScene();
    }

    function loadScene() {
        const scene = currentStory.scenes[currentSceneIndex];
        storyImageContainer.style.backgroundImage = `url(${currentStory.image})`;

        // Build sentence with blanks
        let html = scene.template;
        scene.blanks.forEach((blank, index) => {
            html = html.replace(`{${index}}`, `<span class="blank" id="blank-${index}"></span>`);
        });
        sentenceContainer.innerHTML = html;

        askQuestion();
    }

    function askQuestion() {
        const scene = currentStory.scenes[currentSceneIndex];
        const blankData = scene.blanks[currentBlankIndex];
        promptVerbEl.textContent = blankData.jisho;
        answerInput.value = '';
        answerInput.focus();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const scene = currentStory.scenes[currentSceneIndex];
        const blankData = scene.blanks[currentBlankIndex];
        const verbInfo = verbMap.get(blankData.jisho) || { jisho: 'です', te: 'で' }; // Handle special cases like です

        const correctAnswer = conjugate(verbInfo, blankData.form);
        const userAnswer = answerInput.value.trim();

        if (userAnswer === correctAnswer) {
            playSound(correctSound);

            // Fill the blank
            const blankEl = document.getElementById(`blank-${currentBlankIndex}`);
            blankEl.textContent = correctAnswer;
            blankEl.className = 'filled-blank';
            filledAnswers.push(correctAnswer);

            currentBlankIndex++;
            if (currentBlankIndex >= scene.blanks.length) {
                // Scene complete, move to next
                currentSceneIndex++;
                currentBlankIndex = 0;
                setTimeout(() => {
                    if (currentSceneIndex >= currentStory.scenes.length) {
                        finishStory();
                    } else {
                        loadScene();
                    }
                }, 1000);
            } else {
                askQuestion();
            }
        } else {
            playSound(incorrectSound);
            answerInput.classList.add('incorrect');
            setTimeout(() => answerInput.classList.remove('incorrect'), 500);
        }
    }

    function finishStory() {
        let fullStoryText = '';
        currentStory.scenes.forEach(scene => {
            let sentence = scene.template;
            scene.blanks.forEach((blank, index) => {
                const verbInfo = verbMap.get(blank.jisho) || { jisho: 'です', te: 'で' };
                const conjugated = conjugate(verbInfo, blank.form);
                sentence = sentence.replace(`{${index}}`, `<strong class="filled-blank">${conjugated}</strong>`);
            });
            fullStoryText += `<p>${sentence}</p>`;
        });
        completedStoryPanel.innerHTML = fullStoryText;
        switchScreen('complete');
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function playSound(sound) {
        sound.currentTime = 0;
        sound.play();
    }

    function addEventListeners() {
        answerForm.addEventListener('submit', handleSubmit);
        backToSelectionBtn.addEventListener('click', () => switchScreen('selection'));
        playAnotherStoryBtn.addEventListener('click', () => switchScreen('selection'));
    }

    init();
});