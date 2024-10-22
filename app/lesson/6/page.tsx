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

// From Minna no Nihongo Lesson 6
const words = [
    {
        "pr": "Tabemasu",
        "jp": "たべます",
        "en": "Eat",
        "bn": "খাই"
    },
    {
        "pr": "Nomimasu",
        "jp": "のみます",
        "en": "Drink",
        "bn": "খাই, পান করি"
    },
    {
        "pr": "SuiMasu",
        "jp": "すいます",
        "en": "Smoke (a cigarette)",
        "bn": "ধূমপান করি"
    },
    {
        "pr": "Mimasu",
        "jp": "みます",
        "en": "See, watch",
        "bn": "দেখি"
    },
    {
        "pr": "Kikimasu",
        "jp": "ききます",
        "en": "Hear, listen",
        "bn": "শুনি, শুনি"
    },
    {
        "pr": "YomiMasu",
        "jp": "よみます",
        "en": "Read",
        "bn": "পড়ি"
    },
    {
        "pr": "KakiMasu",
        "jp": "かきます",
        "en": "Write, draw, paint",
        "bn": "লিখি, আঁকি"
    },
    {
        "pr": "KaiMasu",
        "jp": "かいます",
        "en": "Buy",
        "bn": "কিনে নেই"
    },
    {
        "pr": "ToriMasu",
        "jp": "とります",
        "en": "Take (a photo)",
        "bn": "তুলি (ছবি)"
    },
    {
        "pr": "Shimasu",
        "jp": "します",
        "en": "Do",
        "bn": "করি"
    },
    {
        "pr": "AiMasu",
        "jp": "あいます",
        "en": "Meet (a friend)",
        "bn": "দেখা করি (বন্ধুর সঙ্গে)"
    },
    {
        "pr": "Gohan",
        "jp": "ごはん",
        "en": "Meal, cooked rice",
        "bn": "খাবার, ভাত"
    },
    {
        "pr": "Asagohan",
        "jp": "あさごはん",
        "en": "Breakfast",
        "bn": "সকালের খাবার"
    },
    {
        "pr": "Hirugohan",
        "jp": "ひるごはん",
        "en": "Lunch",
        "bn": "দুপুরের খাবার"
    },
    {
        "pr": "Bangohan",
        "jp": "ばんごはん",
        "en": "Dinner",
        "bn": "রাতের খাবার"
    },
    {
        "pr": "Niku",
        "jp": "にく",
        "en": "Meat",
        "bn": "মাংস"
    },
    {
        "pr": "Sakana",
        "jp": "さかな",
        "en": "Fish",
        "bn": "মাছ"
    },
    {
        "pr": "Yasai",
        "jp": "やさい",
        "en": "Vegetable",
        "bn": "সবজি"
    },
    {
        "pr": "Kudamono",
        "jp": "くだもの",
        "en": "Fruit",
        "bn": "ফল"
    },
    {
        "pr": "Mizu",
        "jp": "みず",
        "en": "Water",
        "bn": "পানি"
    },
    {
        "pr": "Ocha",
        "jp": "おちゃ",
        "en": "Tea (green tea)",
        "bn": "চা (সবুজ চা)"
    },
    {
        "pr": "Kōcha",
        "jp": "こうちゃ",
        "en": "Tea (black tea)",
        "bn": "চা (কালো চা)"
    },
    {
        "pr": "Gyu-nyu",
        "jp": "ぎゅうにゅう",
        "en": "Milk",
        "bn": "দুধ"
    },
    {
        "pr": "Ju-su",
        "jp": "ジュース",
        "en": "Juice",
        "bn": "জুস"
    },
    {
        "pr": "Bi-ru",
        "jp": "ビール",
        "en": "Beer",
        "bn": "বিয়ার"
    },
    {
        "pr": "Osake",
        "jp": "おさけ",
        "en": "Alcohol, Japanese sake",
        "bn": "মদ, জাপানি সেকে"
    },
    {
        "pr": "Mise",
        "jp": "みせ",
        "en": "Shop, store",
        "bn": "দোকান"
    },
    {
        "pr": "Resutoran",
        "jp": "レストラン",
        "en": "Restaurant",
        "bn": "রেস্টুরেন্ট"
    },
    {
        "pr": "Shukudai",
        "jp": "しゅくだい",
        "en": "Homework",
        "bn": "বাসার কাজ"
    },
    {
        "pr": "Tenisu",
        "jp": "テニス",
        "en": "Tennis",
        "bn": "টেনিস"
    },
    {
        "pr": "Sakka-",
        "jp": "サッカー",
        "en": "Soccer, football",
        "bn": "ফুটবল"
    },
    {
        "pr": "Ohanami",
        "jp": "おはなみ",
        "en": "Cherry-blossom viewing",
        "bn": "চেরি ফুল দেখার অনুষ্ঠান"
    },
    {
        "pr": "Issho ni",
        "jp": "いっしょに",
        "en": "Together",
        "bn": "একসঙ্গে"
    },
    {
        "pr": "Chotto",
        "jp": "ちょっと",
        "en": "A little, a moment",
        "bn": "অল্প, এক মুহূর্ত"
    },
    {
        "pr": "Itsumo",
        "jp": "いつも",
        "en": "Always",
        "bn": "সব সময়"
    },
    {
        "pr": "Tokidoki",
        "jp": "ときどき",
        "en": "Sometimes",
        "bn": "মাঝে মাঝে"
    },
    {
        "pr": "Sorekara",
        "jp": "それから",
        "en": "After that, and then",
        "bn": "তারপরে"
    },
    {
        "pr": "Ee",
        "jp": "ええ",
        "en": "Yes (informal)",
        "bn": "হ্যাঁ (অফিশিয়াল)"
    },
    {
        "pr": "Ii desu ne",
        "jp": "いいですね",
        "en": "That's good, sounds good",
        "bn": "ভাল, শুনতে ভাল"
    },
    {
        "pr": "Wakarimashita",
        "jp": "わかりました",
        "en": "I understand",
        "bn": "বুঝেছি"
    },
    {
        "pr": "Nandesuka",
        "jp": "なんですか",
        "en": "What is it?",
        "bn": "এটা কী?"
    },
    {
        "pr": "Ja mata",
        "jp": "じゃまた",
        "en": "See you (informal)",
        "bn": "আবার দেখা হবে"
    }
]

