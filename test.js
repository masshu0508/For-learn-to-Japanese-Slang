const questions = [
    {
        question: "A「昨日何してた？」　B「体調悪くて寝てた」　A「○○」",
        options: ["まーね", "あーね", "さーね", "しらね"],
        answer: 1,
        explanation: "A word used when you understand or agree with what the other person is saying. It has a similar meaning to the Japanese 'naruhodo'."
    },
    {
        question: "「最近○○してて、朝早く起きて読書したり散歩したりしてるんだ。」",
        options: ["生活", "腸活", "朝活", "学活"],
        answer: 2,
        explanation: "It refers to activities that make effective use of the morning hours. It mainly refers to using the time before work or school starts to engage in self-improvement, hobbies, exercise, or other activities."
    },
    {
        question: "「私は○○派だから、夜はお風呂入らないの。」",
        options: ["朝シャン", "マージャン", "スカジャン", "ジージャン"],
        answer: 0,
        explanation: "It is a Japanese slang term that refers to shampooing in the morning."
    },
    {
        question: "A「今日のお昼は僕がご馳走するよ」　B「Aの奢りか～。○○！」",
        options: ["あざす", "それな", "なんでやねん", "そだね"],
        answer: 0,
        explanation: "It is an abbreviation of 'ありがとうございます' (thank you). It is commonly used among friends or in casual situations as a way to lightly express gratitude."
    },
    {
        question: "「昨日の野球の試合とっても○○ね」",
        options: ["美味しかった", "冷たかった", "涼しかった", "アツかった"],
        answer: 3,
        explanation: "Passionate: Used when a person or situation is very enthusiastic and passionate. For example, it can be used in phrases like 'アツいプレイ' or 'アツい試合.'  Amazing, cool: It is also used to mean something is very good, interesting, or worthy of attention. For example, 'アツいパフォーマンス'."
    },
    {
        question: "A「ラーメン食べに行かない？」B「私もラーメンの気分だった。○○！」",
        options: ["ありよりのなし", "ありよりのあり", "なしよりのなし", "まいどあり"],
        answer: 1,
        explanation: " It is an expression used to emphasize a positive nuance, meaning 'pretty good.'　'なしよりのあり' → More on the positive side (slightly affirmative).　'ありよりのなし' → More on the negative side (slightly negative).　'なしよりのなし' → Completely negative (absolutely not)."
    },
    {
        question: "「ギャンブルには勝てないさ。○○でもしない限り。」",
        options: ["エビサマ", "イカサマ", "タコサマ", "カニサマ"],
        answer: 1,
        explanation: "A term that refers to cheating to manipulate results unfairly. It is especially used in the context of games or gambling, where a person tries to win through dishonest means."
    },
    {
        question: "「私の旦那は火事も育児も頑張ってくれる。○○です。」",
        options: ["タンメン", "つけメン", "イクメン", "ソーメン"],
        answer: 2,
        explanation: "It is a term combining '育児 (ikuji)' and 'メン (men),' referring to men who actively participate in raising children."
    },
    {
        question: "A「この後、飲みに行かない？」B「○○」",
        options: ["行きました", "一昨日きやがれ", "行けたら行く", "行ってた気がする"],
        answer: 2,
        explanation: "It is a phrase used to mean 'I'll go if I can' when responding to plans or invitations. It is often used when someone is invited or unsure about attending something. This phrase does not confirm attendance but rather expresses a flexible and vague stance. However, in many cases, the person does not actually go."
    },
    {
        question: "「先生に怒られたことを友達に○○」",
        options: ["いじられた", "さわられた", "こわされた", "さけられた"],
        answer: 0,
        explanation: "Teasing or playing around.Jokingly teasing among friends."
    },
    {
        question: "「昔好きだった曲を久しぶりに聴いて○○気持ちになった。」",
        options: ["だるい", "きもい", "うざい", "えもい"],
        answer: 3,
        explanation: "'えもい' is a word that describes a state of mixed emotions, not just simple feelings of being moved. It can convey nostalgia, melancholy, beauty, and other deep emotions. It is widely used in various contexts, such as music, movies, landscapes, photos, and memories."
    },
    {
        question: "「政治家の不正がバレてネットを中心に○○している。」",
        options: ["粉砕", "爆破", "炎上", "浸水"],
        answer: 2,
        explanation: "It refers to a phenomenon, mainly on the internet, where a person, company, statement, or action receives criticism or backlash, leading to a surge of comments and widespread sharing."
    },
    {
        question: "A「明日は12時に公園集合ね」B「○○」",
        options: ["はけ", "おけ", "いけ", "さけ"],
        answer: 1,
        explanation: "It is a shortened slang term for 'OK.' Variations like 'おけまる' and 'おけまる水産' have the same meaning."
    },
    {
        question: "A「明日までの仕事、23時までかかってやっと終わった。」B「○○。大変だったね。」",
        options: ["なつ", "はつ", "くつ", "おつ"],
        answer: 3,
        explanation: "It is a casual abbreviation of 'おつかれさま.' It is mainly used among friends or on the internet."
    },
    {
        question: "「この街も一時の賑わいも見る影なく、○○化してしまった。」",
        options: ["オワコン", "オリコン", "合コン", "サンコン"],
        answer: 0,
        explanation: "It is an internet slang term abbreviated from '終わったコンテンツ' , referring to something that was once popular but has now declined or faded away."
    },
    {
        question: "「うちの兄はアニメ○○で、アニメのことなら何でも知っている。」",
        options: ["サンカク", "オタク", "シカク", "キムタク"],
        answer: 1,
        explanation: "It is a term used to refer to people who have a strong interest or deep passion for a specific hobby or field. Originally, it was often used for fans of anime, manga, and games, but nowadays, it is applied to a wide range of areas."
    },
    {
        question: "「明日の試合は絶対に負けれない。本気で準備して、○○で挑む。」",
        options: ["ムチ", "バチ", "ガチ", "メジ"],
        answer: 2,
        explanation: "It is a slang term meaning 'serious,' 'genuine,' or 'real.' Originally derived from 'ガチンコ' (a term for a serious match or contest), it has become widely used as youth slang and internet slang."
    },
    {
        question: "「一昨日は宝くじが当たって、昨日は競馬で大勝ち。運が○○している。」",
        options: ["エンスト", "カンスト", "モンスト", "アシスト"],
        answer: 1,
        explanation: "It is a shortened term for 'counterstop,' referring to reaching the maximum limit of a game or value. It is primarily used as a gaming term but can also be applied in everyday conversation.「推しへの愛、カンストしてる！」（＝推しが好きすぎる）"
    },
    {
        question: "「生まれたばかりの甥っ子に会って、○○寸前だった。」",
        options: ["キャン死", "キュン死", "キョン死", "ギャン死"],
        answer: 1,
        explanation: "It is a youth slang and internet term meaning 'feeling a tightness in your chest, as if you might die from how precious or heart-fluttering something is.'"
    },
    {
        question: "「かわいい子供たちの笑顔に○○です。」",
        options: ["キャン", "キュン", "キョン", "ジャン"],
        answer: 1,
        explanation: "It is a youth slang used when your heart flutters, often used in contexts like romance, supporting your favorite idols, or seeing something cute.　「この赤ちゃんの笑顔、キュンです」"
    },
    {
        question: "「日差しが眩しいので、○○をかけて出かける。」",
        options: ["グラスラ", "グンサン", "グラタン", "グラサン"],
        answer: 3,
        explanation: "It refers to sunglasses."
    },
    {
        question: "「あの映画には暴力的なシーンが描かれていてかなり○○。」",
        options: ["シロかった", "マラかった", "スカかった", "グロかった"],
        answer: 3,
        explanation: "It is a term mainly used to describe something 'disgusting,' 'unpleasant,' or 'grotesque.' It is particularly used for things that are visually uncomfortable or unsanitary."
    },
    {
        question: "「恋人がほしいので、友達に頼んで○○を開いてもらった。」",
        options: ["合コン", "アイコン", "結婚", "新婚"],
        answer: 0,
        explanation: "It is an abbreviation for '合同コンパ' (goudou konpa), referring to an event where men and women gather to interact. Typically, it is an occasion where multiple men and women come together with the goal of making friends or finding romantic connections, enjoying light meals or drinks while chatting."
    },
    {
        question: "「昨日、○○が部屋に出て大パニックだった。」",
        options: ["C", "D", "G", "T"],
        answer: 2,
        explanation: "Another term for cockroach."
    },
    {
        question: "「寒くて一日こたつから出れずに、○○になっていた。」",
        options: ["なめくじ", "かたつむり", "こたつむり", "ざりがに"],
        answer: 2,
        explanation: "It refers to the state of staying immobile while being cozy inside a kotatsu. This term is used mainly during the cold winter months to describe the situation of getting so comfortable in the kotatsu that you don’t feel like moving."
    },
    {
        question: "「学校では勉強はもちろん、クラスメイトとの交流を通じて○○を養うことも大事だ。」",
        options: ["コミュ力", "コミケ", "トミカ", "体力"],
        answer: 0,
        explanation: "It is an abbreviation for 'コミュニケーション力(communication skills),' referring to the ability to communicate smoothly with others and build good relationships."
    },
    {
        question: "「あの人の選挙演説は○○ばかりだ。」",
        options: ["バラ", "サクラ", "フジ", "コスモス"],
        answer: 1,
        explanation: "It refers to a fake person created to attract others, such as a fake customer or applicant used for manipulation.　Example:「その合コン、サクラばっかりだった。」（＝'It was full of fake participants.'）"
    },
    {
        question: "「私は○○だから、なんでも思ったことを素直に言うよ。」",
        options: ["ガサガサ系", "ゴソゴソ系", "バラバラ系", "サバサバ系"],
        answer: 3,
        explanation: "It refers to a person with a straightforward personality and attitude, who doesn't show their emotions much. Generally, it is used to describe someone who is calm, positive, and has a simple, easygoing character."
    },
    {
        question: "「今月から○○に加入したから映画見放題だ。」",
        options: ["アラジル", "サブスク", "オガクズ", "サブイボ"],
        answer: 1,
        explanation: "It is an abbreviation for 'subscription,' referring to a system where you continue to use a service by paying a fixed fee. Typically, payments are made monthly or annually, and you can continue to use the service during the contract period."
    },
    {
        question: "「あの人の発言は時代錯誤で少し○○。」",
        options: ["ヌルい", "サムい", "キモチイイ", "ムズい"],
        answer: 1,
        explanation: "It is often used when a conversation or atmosphere feels awkward. Specifically, it is used when the mood has cooled down or when things didn’t go well and didn’t pick up.　Example:「今の話、ちょっとサムかったね」"
    },
    {
        question: "A「宿題手伝ってくれない？」B「○○。ジュースおごれよ。」",
        options: ["じょーしき", "しゃーなし", "あーね", "しょーみ"],
        answer: 1,
        explanation: "It is a Japanese slang used to express 'it can't be helped' or 'there's nothing that can be done.' It is often used in situations where one is resigned or has to reluctantly accept something."
    },
    {
        question: "「彼女の○○を踏んで、とても怒らせてしまった。」",
        options: ["地雷", "ロケット", "剣", "雷"],
        answer: 0,
        explanation: "'地雷' originally refers to an explosive device buried underground, which detonates when stepped on. However, in everyday conversation and slang, it is used metaphorically to refer to something that causes dangerous situations or problems. When used in the context of human relationships, it often describes a person or situation that, when touched or interacted with, is likely to lead to trouble or conflict."
    },
    {
        question: "「証拠は全て揃っているのだから○○ても無駄だ」",
        options: ["知ったかぶりし", "しゃしゃり出", "しらばっくれ", "ほかっ"],
        answer: 2,
        explanation: "This Japanese expression refers to the act of pretending not to know about something you are involved in or something you have done, often to avoid responsibility or to lie your way out of a situation. It is commonly used to describe acts of evading accountability or making excuses."
    },
    {
        question: "「久しぶりに○○ラーメンを食べたい気分だ。ニンニクましましアブラましましで。」",
        options: ["一郎系", "二郎系", "三郎系", "四郎系"],
        answer: 1,
        explanation: "二郎系' refers to ramen that is inspired by the ramen restaurant 'ラーメン二郎.' ラーメン二郎 is famous for its large servings, often topped with a lot of pork, bean sprouts, and garlic, making it known for its immense volume. The term '二郎系' is used to describe ramen shops that mimic this style or ramen that features similar characteristics."
    },
    {
        question: "「みんなの前でしたギャグが○○ってしまった。」",
        options: ["スぺ", "スカ", "すだ", "スベ"],
        answer: 3,
        explanation: "'すべる' is a Japanese slang that mainly means failing to get a laugh, not being funny, or making a mistake. It is often used in comedic situations or when a joke doesn't land, meaning that the humor or attempt at making people laugh didn't succeed."
    },
    {
        question: "A「国会議員の多くは国民の生活より自分の生活を一番に考えている。人間とはそういうものだ。」B「○○。」",
        options: ["どれな", "それな", "されな", "ふれな"],
        answer: 1,
        explanation: "A casual Japanese expression often used to mean 'Exactly' or 'I think so too.' It is used when agreeing with or empathizing with what someone else is saying."
    },
    {
        question: "「昨日の動画は本当に面白かった。○○不可避」",
        options: ["大海原", "大草原", "サバンナ", "森林"],
        answer: 1,
        explanation: "In internet slang, it is used to mean 'I laughed a lot' or 'I laughed so hard.' It is a way to express laughter when someone says something funny or when something unexpected happens. For example, it could be used like '大草原不可避'."
    },
    {
        question: "「僕とあの子は家も近所で同い年の○○なんだ。」",
        options: ["オメ", "カメ", "サメ", "タメ"],
        answer: 3,
        explanation: "It refers to speaking casually without using honorifics. It's a more informal way of talking, typically used with friends or close people. Also, 'タメ' can mean 'the same age,' so when you say 'タメの友達,' it means 'a friend of the same age.'"
    },
    {
        question: "A「今日どうやって来たの？」B「○○で来た」",
        options: ["チャリ", "ジャリ", "ソリ", "ムリ"],
        answer: 0,
        explanation: "It refers to a bicycle. It is also sometimes called 'チャリンコ.'"
    },
    {
        question: "「うちの彼女は○○だ。そこがチャームポイントだ。」",
        options: ["トンヅラ", "カンヅメ", "デンデレ", "ツンデレ"],
        answer: 3,
        explanation: "The term 'ツンデレ' refers to a character or personality that initially acts cold or indifferent, but later shows affection or kindness towards someone they actually like. This term is often used for characters in anime or manga, but it can also be seen in real-life relationships.　A 'tsundere' typically behaves coldly (acting 'ツンツン') at first, but later displays sweetness or affection ('デレデレ'). Tsundere characters are often shy or embarrassed, which makes it difficult for them to openly express their feelings."
    },
    {
        question: "「週刊誌で○○が垂れ流され、有望な政治家が潰された。」",
        options: ["ガマ", "デベソ", "デマ", "ダマ"],
        answer: 2,
        explanation: "It refers to false or untrue information. It is often used to describe fake news or rumors that confuse people or cause misunderstandings. The phrase 'デマを流す' is also used, referring to the act of intentionally spreading false information."
    },
    {
        question: "「映画の○○に当たる投稿は、自重されるべきだ。」",
        options: ["ネタ", "ネタバレ", "顔バレ", "ネタミセ"],
        answer: 1,
        explanation: "This refers to revealing key plot points or important information about a movie, drama, manga, or game to someone who has not yet experienced it. This can spoil the enjoyment of the work and take away the element of surprise, so 'spoilers' are generally something to avoid. For example, you might say, '映画のラストシーン、ネタバレしないで！' when asking someone not to reveal crucial details about the story."
    },
    {
        question: "「ゲームが○○って、壊れてしまった。」",
        options: ["ハグ", "バグ", "パク", "パグ"],
        answer: 1,
        explanation: "This is a net slang derived from the English word 'bug,' and it refers to unexpected errors or glitches occurring in games or software. Specifically, when something in a program or game behaves abnormally or malfunctions, it’s referred to as 'バグる' in Japanese.　For example, 'ゲームがバグって進めない！' means 'The game is bugged, and I can't progress!'"
    },
    {
        question: "「SNSに投稿した動画が○○って一躍有名人になった。」",
        options: ["ハス", "パス", "バス", "バズ"],
        answer: 3,
        explanation: "'バズる' (buzuru) refers to something going viral or gaining rapid attention and popularity on social media or the internet. It often describes content like posts, videos, or memes that are shared or retweeted by a large number of people.　For example, if someone says, 'この動画、めっちゃバズってる！' , it means 'This video is going viral!' or 'This video is really popular and getting a lot of attention.'"
    },
    {
        question: "「最近はずっと麻雀ゲームに○○っている。」",
        options: ["ハマ", "カマ", "トマ", "ラマ"],
        answer: 0,
        explanation: "The term 'ハマる' (hamaru) refers to becoming deeply absorbed or obsessed with something, often in a positive sense. It describes a situation where someone becomes so engrossed or captivated by a hobby, activity, game, movie, music, or other interests that they lose track of time.　For example, if someone says they 'ハマる' on a particular game or anime, it means they are totally engrossed in it, enjoying it to the point where it becomes a major focus of their attention. It often conveys a sense of enthusiasm and passion for the subject."
    },
    {
        question: "「あの人は○○なので、特にいいサービスを提供するようにしている。」",
        options: ["観客", "刺客", "太客", "一見"],
        answer: 2,
        explanation: "'太客' (futokyaku) refers to customers who frequently spend large amounts of money, typically in businesses or service industries. This term is commonly used in restaurants, host clubs, or similar establishments to describe clients who make regular, high-value purchases, making them important to the business.　These 太客' customers are often given special treatment due to their significant contribution to the store's revenue."
    },
    {
        question: "A「宝くじ１億円に当選したの」B「○○」",
        options: ["か？", "も？", "の？", "ま？"],
        answer: 3,
        explanation: "The word 'ま?' (ma?) is a casual expression used primarily among young people to express surprise or doubt. It is used when something unbelievable happens, and it conveys the meaning of 'Really?' or 'No way?'　　For example, if a friend tells you something unbelievable, saying 'ま?' shows that you're expressing surprise or doubt, asking 'Is it true?' or 'Are you serious?'"
    },
    {
        question: "A「本当にこのプレゼントは僕にくれるの」B「○○」",
        options: ["いも", "大福", "もち", "まる"],
        answer: 2,
        explanation: "The abbreviation for 'もちろん' (of course) in Japanese, used in a positive context, is 'もち'."
    },
    {
        question: "A「明日の集合時間を１５時に変更でいい？」B「○○」",
        options: ["お", "り", "そ", "み"],
        answer: 1,
        explanation: "'り' is a slang abbreviation for '了解' (ryoukai), which means 'understood' or 'got it' in Japanese. It is commonly used in casual conversations and on social media."
    },
    {
        question: "「強いキャラが引けなくて○○を繰り返している。」",
        options: ["フルマラ", "マラカス", "マスカラ", "リセマラ"],
        answer: 3,
        explanation: "'リセマラ' is short for 'リセットマラソン' (Reset Marathon), which refers to a practice in mobile games or online games where a player resets their account multiple times to try and get a better result, typically from a gacha (a random draw or capsule-toy machine). The player keeps restarting the game and repeating the gacha pulls until they get ideal or rare characters, items, or rewards.　　For example, if you don’t get strong characters or items from the free gacha at the start of the game, you reset the account and try again."
    },
    {
        question: "「デートでのお店選びに○○は重要な条件だ」",
        options: ["映え", "堪え", "喩え", "耐え"],
        answer: 0,
        explanation: "The term '映える' (haeru) is used mainly in the context of SNS or photography and means 'visually appealing' or 'looks good.' It refers to something that is aesthetically attractive, especially in photos or videos. The phrase 'インスタ映え' (Insta-baé) refers to a picture or post that is visually striking and likely to gain attention on social media platforms like Instagram."
    },
    {
        question: "「あの店員は、笑顔も愛想もなく、まさに○○だった。」",
        options: ["雨対応", "薄対応", "米対応", "塩対応"],
        answer: 3,
        explanation: "'塩対応' means giving a cold or indifferent response. It describes someone being distant or unenthusiastic in their interaction.　　Example:「あの店員さん、ちょっと塩対応だったね」"
    },
    {
        question: "「昨日、会社のグループラインに間違えて送ってしまい○○した。",
        options: ["誤爆", "爆発", "暴発", "誤診"],
        answer: 0,
        explanation: "This term refers to sending an unintended message or post, especially on social media, chat apps, or forums. It is used when someone accidentally sends a message to the wrong recipient or mistakenly publishes something that should not have been shared publicly.　　For example, sending a private message to a group chat or posting something on the wrong account is referred to as '誤爆' (gobaku)."
    },
    {
        question: "「休日も休みなく働いて、平日も毎日残業が当たり前、順調に○○になってしまった。」",
        options: ["家畜", "社畜", "社屋", "畜産"],
        answer: 1,
        explanation: "A term referring to employees who excessively depend on their company, sacrificing their personal life and health for work. Originally a combination of the words 'society' and 'livestock,' it is used to criticize a lifestyle where one is forced into a work-centric existence, devoting themselves excessively to the company.　　Example:「毎日残業続きで、完全に社畜だわ」"
    },
    {
        question: "「10年前は、常に手首に包帯を巻いていたり、眼帯を付けていたり、○○前回だった。」",
        options: ["サザエさん症候群", "５月病", "厨二病", "花粉症"],
        answer: 2,
        explanation: "This term refers to the exaggerated behavior and self-centered attitude often seen in middle school second-year students (or those around that age). It describes a phase where individuals act as if they are special or different from others, sometimes displaying overly mature speech, dramatic expressions, or indulging in unrealistic fantasies.　　Typical examples include saying overly 'cool' phrases, imagining having unique abilities or a personal worldview, and trying to distinguish themselves from others in an extreme way."
    },
    {
        question: "「今年は私の好きなアイドルが、全国ライブをしてくれて○○活が捗る。」",
        options: ["メシ", "サシ", "消し", "推し"],
        answer:3,
        explanation: "This term refers to a person, character, or artist that someone strongly supports or admires. It is commonly used for idols, actors, anime characters, and game characters. '推し' is more than just liking someone—it implies actively cheering for and supporting them.　　Example:「私の推しはあの俳優です！」"
    },
    {
        question: "「昨日パチンコで勝ちまくって○○が出た。」",
        options: ["味噌汁", "脳汁", "豚汁", "煮汁"],
        answer: 1,
        explanation: "The phrase '脳汁が出る' (noujiru ga deru) refers to the release of neurotransmitters like dopamine and endorphins in the brain when someone experiences excitement or pleasure. It is often used to describe moments of intense enjoyment or exhilaration, such as when listening to favorite music, achieving something significant in a game, or witnessing something entertaining."
    },
    {
        question: "「テレビでグルメ番組をやっていて、○○を喰らった。」",
        options: ["飯テロ", "オセロ", "メシウマ", "メシマズ"],
        answer: 0,
        explanation: "'飯テロ' (meshi tero) refers to the phenomenon on social media where someone posts an enticing photo of food, causing others to react by saying things like ' I'm hungry' or ' I want to eat that.' It’s a playful term used when food images 'attack' people’s appetite.　　Example:「昼ご飯のラーメン、めちゃくちゃ美味しそうで飯テロされた！」"
    },
    {
        question: "「アイツは生徒会長で、野球部のエースで女子からもモテる、生粋の○○だ。」",
        options: ["キャベツ", "陰キャ", "無キャ", "陽キャ"],
        answer: 3,
        explanation: "A word that refers to a sociable, cheerful, and extroverted person. The opposite of '陽キャ' (yōkya) is '陰キャ' (inky), which refers to someone with a reserved, introverted, and quiet personality.　　Example:「彼は陽キャだから、パーティーではいつも盛り上げてる」"
    },
];

let currentQuestionIndex = 0;
let randomQuestions = [];

// ランダムな問題をシャッフル
function shuffleQuestions() {
    randomQuestions = [...questions]; // 配列のコピーを作成
    for (let i = randomQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomQuestions[i], randomQuestions[j]] = [randomQuestions[j], randomQuestions[i]]; // シャッフル
    }
    currentQuestionIndex = 0; // 最初の問題を表示
    newQuestion();
}

function newQuestion() {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= randomQuestions.length) return; // 範囲外のインデックスを防ぐ
    const currentQuestion = randomQuestions[currentQuestionIndex];
    document.querySelector('.question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    currentQuestion.options.forEach((option, idx) => {
        options[idx].textContent = option;
    });
    document.querySelector('.result').textContent = '';
    document.querySelector('.explanation').textContent = ''; // 解説は最初は非表示
}

function checkAnswer(selected) {
    const currentQuestion = randomQuestions[currentQuestionIndex];
    const resultElement = document.querySelector('.result');
    const explanationElement = document.querySelector('.explanation');

    if (selected === currentQuestion.answer) {
        resultElement.textContent = "正解！";
        resultElement.style.color = "green";
        explanationElement.textContent = currentQuestion.explanation;
    } else {
        resultElement.textContent = "不正解。";
        resultElement.style.color = "red";
        explanationElement.textContent = currentQuestion.explanation;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        newQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        newQuestion();
    }
}

// 初期化
shuffleQuestions();
