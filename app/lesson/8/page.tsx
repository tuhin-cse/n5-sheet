const Page = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {words.map((word, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg m-2">
                        <div className="text-2xl font-medium">{word.jp}</div>
                        <div className="text-sm text-gray-500">{word.pr}</div>
                        <div className="text-sm text-gray-500">{word.en}</div>
                        <div className="text-sm text-gray-500">{word.bn}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page;

// From Minna no Nihongo Lesson 8
const words = [
    {
        "pr": "Hansamu",
        "jp": "ハンサム",
        "en": "Handsome",
        "bn": "সুদর্শন"
    },
    {
        "pr": "Kirei",
        "jp": "きれい",
        "en": "Beautiful, clean",
        "bn": "সুন্দর, পরিষ্কার"
    },
    {
        "pr": "Shizuka",
        "jp": "しずか",
        "en": "Quiet",
        "bn": "নিঃশব্দ"
    },
    {
        "pr": "Nigiyaka",
        "jp": "にぎやか",
        "en": "Lively",
        "bn": "জীবন্ত, প্রাণবন্ত"
    },
    {
        "pr": "Yūmei",
        "jp": "ゆうめい",
        "en": "Famous",
        "bn": "বিখ্যাত"
    },
    {
        "pr": "Shinsetsu",
        "jp": "しんせつ",
        "en": "Kind",
        "bn": "দয়ালু"
    },
    {
        "pr": "Genki",
        "jp": "げんき",
        "en": "Healthy, energetic",
        "bn": "স্বাস্থ্যবান, উদ্যমী"
    },
    {
        "pr": "Hima",
        "jp": "ひま",
        "en": "Free (time)",
        "bn": "ফাঁকা সময়"
    },
    {
        "pr": "Benri",
        "jp": "べんり",
        "en": "Convenient",
        "bn": "সুবিধাজনক"
    },
    {
        "pr": "Suteki",
        "jp": "すてき",
        "en": "Nice, wonderful",
        "bn": "দারুণ, চমৎকার"
    },
    {
        "pr": "Ōkii",
        "jp": "おおきい",
        "en": "Big, large",
        "bn": "বড়"
    },
    {
        "pr": "Chiisai",
        "jp": "ちいさい",
        "en": "Small",
        "bn": "ছোট"
    },
    {
        "pr": "Atarashii",
        "jp": "あたらしい",
        "en": "New",
        "bn": "নতুন"
    },
    {
        "pr": "Furui",
        "jp": "ふるい",
        "en": "Old (not for people)",
        "bn": "পুরানো (মানুষের জন্য নয়)"
    },
    {
        "pr": "Ii",
        "jp": "いい",
        "en": "Good",
        "bn": "ভাল"
    },
    {
        "pr": "Warui",
        "jp": "わるい",
        "en": "Bad",
        "bn": "খারাপ"
    },
    {
        "pr": "Atsui",
        "jp": "あつい",
        "en": "Hot",
        "bn": "গরম"
    },
    {
        "pr": "Samui",
        "jp": "さむい",
        "en": "Cold (weather)",
        "bn": "ঠান্ডা (আবহাওয়া)"
    },
    {
        "pr": "Tsumetai",
        "jp": "つめたい",
        "en": "Cold (to the touch)",
        "bn": "ঠান্ডা (স্পর্শে)"
    },
    {
        "pr": "Muzukashii",
        "jp": "むずかしい",
        "en": "Difficult",
        "bn": "কঠিন"
    },
    {
        "pr": "Yasashii",
        "jp": "やさしい",
        "en": "Easy, kind",
        "bn": "সহজ, সদয়"
    },
    {
        "pr": "Takai",
        "jp": "たかい",
        "en": "Expensive, tall",
        "bn": "দামি, লম্বা"
    },
    {
        "pr": "Yasui",
        "jp": "やすい",
        "en": "Cheap",
        "bn": "সস্তা"
    },
    {
        "pr": "Hikui",
        "jp": "ひくい",
        "en": "Low",
        "bn": "নিম্ন"
    },
    {
        "pr": "Omoshiroi",
        "jp": "おもしろい",
        "en": "Interesting, fun",
        "bn": "মজার, আকর্ষণীয়"
    },
    {
        "pr": "Oishii",
        "jp": "おいしい",
        "en": "Delicious",
        "bn": "মজাদার"
    },
    {
        "pr": "Isogashii",
        "jp": "いそがしい",
        "en": "Busy",
        "bn": "ব্যস্ত"
    },
    {
        "pr": "Tanoshii",
        "jp": "たのしい",
        "en": "Enjoyable",
        "bn": "আনন্দদায়ক"
    },
    {
        "pr": "Shiroi",
        "jp": "しろい",
        "en": "White",
        "bn": "সাদা"
    },
    {
        "pr": "Kuroi",
        "jp": "くろい",
        "en": "Black",
        "bn": "কালো"
    },
    {
        "pr": "Aoi",
        "jp": "あおい",
        "en": "Blue",
        "bn": "নীল"
    },
    {
        "pr": "Akai",
        "jp": "あかい",
        "en": "Red",
        "bn": "লাল"
    },
    {
        "pr": "Sakura",
        "jp": "さくら",
        "en": "Cherry blossom",
        "bn": "চেরি ফুল"
    },
    {
        "pr": "Yama",
        "jp": "やま",
        "en": "Mountain",
        "bn": "পর্বত"
    },
    {
        "pr": "Machi",
        "jp": "まち",
        "en": "Town, city",
        "bn": "শহর"
    },
    {
        "pr": "Tabemono",
        "jp": "たべもの",
        "en": "Food",
        "bn": "খাবার"
    },
    {
        "pr": "Kuruma",
        "jp": "くるま",
        "en": "Car, vehicle",
        "bn": "গাড়ি"
    },
    {
        "pr": "Tokoro",
        "jp": "ところ",
        "en": "Place",
        "bn": "স্থান"
    },
    {
        "pr": "Ryō",
        "jp": "りょう",
        "en": "Dormitory",
        "bn": "ছাত্রাবাস"
    },
    {
        "pr": "Benkyō",
        "jp": "べんきょう",
        "en": "Study",
        "bn": "অধ্যয়ন"
    },
    {
        "pr": "Seikatsu",
        "jp": "せいかつ",
        "en": "Life, living",
        "bn": "জীবন"
    },
    {
        "pr": "Shigoto",
        "jp": "しごと",
        "en": "Work, job",
        "bn": "কাজ"
    },
    {
        "pr": "Dō",
        "jp": "どう",
        "en": "How",
        "bn": "কেমন"
    },
    {
        "pr": "Donna",
        "jp": "どんな",
        "en": "What kind of",
        "bn": "কেমন ধরনের"
    },
    {
        "pr": "Totemo",
        "jp": "とても",
        "en": "Very",
        "bn": "অনেক"
    },
    {
        "pr": "Amari",
        "jp": "あまり",
        "en": "Not so (used with negative)",
        "bn": "খুব বেশি না (নেতিবাচক সঙ্গে)"
    },
    {
        "pr": "Sō desu ne",
        "jp": "そうですね",
        "en": "Let me see, well",
        "bn": "আচ্ছা, দেখি"
    },
    {
        "pr": "Nihon no seikatsu ni naremashita ka",
        "jp": "にほんのせいかつになれましたか",
        "en": "Have you got used to life in Japan?",
        "bn": "জাপানে জীবনযাত্রার সঙ্গে অভ্যস্ত হয়ে গেছেন কি?"
    },
    {
        "pr": "Mō ippai ikaga desu ka",
        "jp": "もういっぱいいかがですか",
        "en": "How about another cup?",
        "bn": "আরেক কাপ নেবেন?"
    },
    {
        "pr": "Iie, kekkō desu",
        "jp": "いいえ、けっこうです",
        "en": "No, thank you",
        "bn": "না, ধন্যবাদ"
    },
    {
        "pr": "Sorosoro shitsurei shimasu",
        "jp": "そろそろしつれいします",
        "en": "It’s time to go",
        "bn": "এখন বিদায় নেওয়ার সময়"
    },
    {
        "pr": "Mata irasshatte kudasai",
        "jp": "またいらっしゃってください",
        "en": "Please come again",
        "bn": "আবার আসবেন"
    }
]

