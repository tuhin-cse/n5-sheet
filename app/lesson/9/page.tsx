
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

// From Minna no Nihongo Lesson 9
const words = [
    {
        "pr": "Wakarimasu",
        "jp": "わかります",
        "en": "Understand",
        "bn": "বোঝা"
    },
    {
        "pr": "Arimasu",
        "jp": "あります",
        "en": "Have (for inanimate objects)",
        "bn": "আছে (অজীবের জন্য)"
    },
    {
        "pr": "Suki",
        "jp": "すき",
        "en": "Like",
        "bn": "পছন্দ"
    },
    {
        "pr": "Kirai",
        "jp": "きらい",
        "en": "Dislike",
        "bn": "অপছন্দ"
    },
    {
        "pr": "Jōzu",
        "jp": "じょうず",
        "en": "Good at",
        "bn": "কোনো কাজে দক্ষ"
    },
    {
        "pr": "Heta",
        "jp": "へた",
        "en": "Poor at",
        "bn": "কোনো কাজে অদক্ষ"
    },
    {
        "pr": "Ryōri",
        "jp": "りょうり",
        "en": "Cooking, dish",
        "bn": "রান্না, পদ"
    },
    {
        "pr": "Nomimono",
        "jp": "のみもの",
        "en": "Drink",
        "bn": "পানীয়"
    },
    {
        "pr": "Supōtsu",
        "jp": "スポーツ",
        "en": "Sports",
        "bn": "খেলা"
    },
    {
        "pr": "Yakyū",
        "jp": "やきゅう",
        "en": "Baseball",
        "bn": "বেসবল"
    },
    {
        "pr": "Dansu",
        "jp": "ダンス",
        "en": "Dance",
        "bn": "নাচ"
    },
    {
        "pr": "Ongaku",
        "jp": "おんがく",
        "en": "Music",
        "bn": "সংগীত"
    },
    {
        "pr": "Uta",
        "jp": "うた",
        "en": "Song",
        "bn": "গান"
    },
    {
        "pr": "Kurashikku",
        "jp": "クラシック",
        "en": "Classical music",
        "bn": "শাস্ত্রীয় সংগীত"
    },
    {
        "pr": "Jazu",
        "jp": "ジャズ",
        "en": "Jazz",
        "bn": "জ্যাজ"
    },
    {
        "pr": "Konsāto",
        "jp": "コンサート",
        "en": "Concert",
        "bn": "কনসার্ট"
    },
    {
        "pr": "Karaoke",
        "jp": "カラオケ",
        "en": "Karaoke",
        "bn": "কারাওকে"
    },
    {
        "pr": "Kabuki",
        "jp": "かぶき",
        "en": "Kabuki (traditional Japanese musical drama)",
        "bn": "কাবুকি (জাপানি ঐতিহ্যবাহী সঙ্গীত নাটক)"
    },
    {
        "pr": "E",
        "jp": "え",
        "en": "Painting, drawing",
        "bn": "চিত্রকলা"
    },
    {
        "pr": "Ji",
        "jp": "じ",
        "en": "Letter, character",
        "bn": "অক্ষর"
    },
    {
        "pr": "Kanji",
        "jp": "かんじ",
        "en": "Kanji (Chinese characters)",
        "bn": "কাঞ্জি (চীনা অক্ষর)"
    },
    {
        "pr": "Hiragana",
        "jp": "ひらがな",
        "en": "Hiragana",
        "bn": "হিরাগানা"
    },
    {
        "pr": "Katakana",
        "jp": "カタカナ",
        "en": "Katakana",
        "bn": "কাতাকানা"
    },
    {
        "pr": "Rōmaji",
        "jp": "ローマじ",
        "en": "Roman alphabet",
        "bn": "রোমান বর্ণমালা"
    },
    {
        "pr": "Komakai okane",
        "jp": "こまかいおかね",
        "en": "Small change",
        "bn": "খুচরা টাকা"
    },
    {
        "pr": "Jikan",
        "jp": "じかん",
        "en": "Time",
        "bn": "সময়"
    },
    {
        "pr": "Yōji",
        "jp": "ようじ",
        "en": "Something to do, errand",
        "bn": "কাজ"
    },
    {
        "pr": "Yakusoku",
        "jp": "やくそく",
        "en": "Promise, appointment",
        "bn": "প্রতিশ্রুতি, অ্যাপয়েন্টমেন্ট"
    },
    {
        "pr": "Arubaito",
        "jp": "アルバイト",
        "en": "Part-time job",
        "bn": "খণ্ডকালীন কাজ"
    },
    {
        "pr": "Goshujin",
        "jp": "ごしゅじん",
        "en": "Husband (someone else's)",
        "bn": "স্বামী (অন্যের)"
    },
    {
        "pr": "Otto / Shujin",
        "jp": "おっと / しゅじん",
        "en": "My husband",
        "bn": "আমার স্বামী"
    },
    {
        "pr": "Okusan",
        "jp": "おくさん",
        "en": "Wife (someone else's)",
        "bn": "স্ত্রী (অন্যের)"
    },
    {
        "pr": "Tsuma / Kanai",
        "jp": "つま / かない",
        "en": "My wife",
        "bn": "আমার স্ত্রী"
    },
    {
        "pr": "Kodomo",
        "jp": "こども",
        "en": "Child, children",
        "bn": "শিশু"
    },
    {
        "pr": "Yoku",
        "jp": "よく",
        "en": "Well, much",
        "bn": "ভালভাবে, অনেক"
    },
    {
        "pr": "Daitai",
        "jp": "だいたい",
        "en": "Mostly, roughly",
        "bn": "মূলত, আনুমানিক"
    },
    {
        "pr": "Takusan",
        "jp": "たくさん",
        "en": "Many, much",
        "bn": "অনেক"
    },
    {
        "pr": "Sukoshi",
        "jp": "すこし",
        "en": "A little",
        "bn": "অল্প"
    },
    {
        "pr": "Zenzen",
        "jp": "ぜんぜん",
        "en": "Not at all (used with negative)",
        "bn": "একেবারেই না (নেতিবাচক সঙ্গে)"
    },
    {
        "pr": "Hayaku",
        "jp": "はやく",
        "en": "Early, quickly",
        "bn": "আগে, তাড়াতাড়ি"
    },
    {
        "pr": "Kara",
        "jp": "から",
        "en": "Because",
        "bn": "কারণ"
    },
    {
        "pr": "Dōshite",
        "jp": "どうして",
        "en": "Why",
        "bn": "কেন"
    },
    {
        "pr": "Zannen desu ne",
        "jp": "ざんねんですね",
        "en": "That's a pity",
        "bn": "দুঃখের বিষয়"
    },
    {
        "pr": "Sumimasen",
        "jp": "すみません",
        "en": "I'm sorry, excuse me",
        "bn": "দুঃখিত, আমাকে ক্ষমা করবেন"
    },
    {
        "pr": "Moshi moshi",
        "jp": "もしもし",
        "en": "Hello (on the phone)",
        "bn": "হ্যালো (ফোনে)"
    },
    {
        "pr": "Aa",
        "jp": "ああ",
        "en": "Oh (when recognizing something)",
        "bn": "ওহ (কিছু চিনতে)"
    },
    {
        "pr": "Issho ni ikaga desu ka",
        "jp": "いっしょにいかがですか",
        "en": "Won't you join me (us)?",
        "bn": "আমার (আমাদের) সঙ্গে যোগ দেবেন না?"
    },
    {
        "pr": "Chotto",
        "jp": "ちょっと",
        "en": "A little bit (used to decline an invitation)",
        "bn": "একটু (অজুহাত বা না বলতে ব্যবহৃত হয়)"
    },
    {
        "pr": "Dame desu ka",
        "jp": "だめですか",
        "en": "So you can't (come)?",
        "bn": "তাহলে আপনি (আসতে) পারবেন না?"
    },
    {
        "pr": "Mata kondo onegai shimasu",
        "jp": "またこんどおねがいします",
        "en": "Please ask me again some other time",
        "bn": "অনুগ্রহ করে অন্য সময় আমায় জিজ্ঞেস করবেন"
    }
]

