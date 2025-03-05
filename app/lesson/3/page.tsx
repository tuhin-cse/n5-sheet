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

// From Minna no Nihongo Lesson 3
const words = [
    {
        "pr": "KoKo",
        "jp": "ここ",
        "en": "Here",
        "bn": "এখানে"
    },
    {
        "pr": "SoKo",
        "jp": "そこ",
        "en": "There",
        "bn": "সেখানে"
    },
    {
        "pr": "AKo",
        "jp": "あそこ",
        "en": "Over there",
        "bn": "ওইখানে"
    },
    {
        "pr": "DoKo",
        "jp": "どこ",
        "en": "Where",
        "bn": "কোথায়"
    },
    {
        "pr": "KoChiRa",
        "jp": "こちら",
        "en": "This way, this place (polite)",
        "bn": "এইদিকে, এই স্থান (শ্রদ্ধাশীল)"
    },
    {
        "pr": "SoChiRa",
        "jp": "そちら",
        "en": "That way, that place near you (polite)",
        "bn": "ঐদিকে, সেই স্থান (আপনার নিকট)"
    },
    {
        "pr": "AKaChiRa",
        "jp": "あちら",
        "en": "That way, that place over there (polite)",
        "bn": "ঐদিকে, সেই স্থান দূরে (শ্রদ্ধাশীল)"
    },
    {
        "pr": "DoChiRa",
        "jp": "どちら",
        "en": "Which way, where (polite)",
        "bn": "কোন দিকে, কোথায় (শ্রদ্ধাশীল)"
    },
    {
        "pr": "KyoShitsu",
        "jp": "きょうしつ",
        "en": "Classroom",
        "bn": "শ্রেণীকক্ষ"
    },
    {
        "pr": "ShokuDo",
        "jp": "しょくどう",
        "en": "Cafeteria",
        "bn": "ক্যান্টিন"
    },
    {
        "pr": "Jimusho",
        "jp": "じむしょ",
        "en": "Office",
        "bn": "অফিস"
    },
    {
        "pr": "Kaigishitsu",
        "jp": "かいぎしつ",
        "en": "Meeting room",
        "bn": "মিটিং রুম"
    },
    {
        "pr": "Uketsuke",
        "jp": "うけつけ",
        "en": "Reception desk",
        "bn": "রিসেপশন ডেস্ক"
    },
    {
        "pr": "Heya",
        "jp": "へや",
        "en": "Room",
        "bn": "কক্ষ"
    },
    {
        "pr": "Toire (Otearai)",
        "jp": "トイレ（おてあらい）",
        "en": "Toilet (restroom)",
        "bn": "টয়লেট (প্রসাধন কক্ষ)"
    },
    {
        "pr": "Kaidan",
        "jp": "かいだん",
        "en": "Stairs",
        "bn": "সিঁড়ি"
    },
    {
        "pr": "Erebe-ta-",
        "jp": "エレベーター",
        "en": "Elevator",
        "bn": "লিফট"
    },
    {
        "pr": "Esukare-ta-",
        "jp": "エスカレーター",
        "en": "Escalator",
        "bn": "এস্কেলেটর"
    },
    {
        "en": "Vending machine",
        "jp": "じどうはんばいき",
        "pr": "Jidouhanbaiki",
        "bn": "ভেন্ডিং মেশিন"
    },
    {
        "pr": "Kuni",
        "jp": "くに",
        "en": "Country",
        "bn": "দেশ"
    },
    {
        "pr": "Kaisha",
        "jp": "かいしゃ",
        "en": "Company",
        "bn": "কোম্পানি"
    },
    {
        "pr": "Uchi",
        "jp": "うち",
        "en": "Home, house",
        "bn": "বাড়ি"
    },
    {
        "pr": "Denwa",
        "jp": "でんわ",
        "en": "Telephone",
        "bn": "টেলিফোন"
    },
    {
        "pr": "Kutsu",
        "jp": "くつ",
        "en": "Shoes",
        "bn": "জুতো"
    },
    {
        "pr": "Uriba",
        "jp": "うりば",
        "en": "Department, counter (in a department store)",
        "bn": "বিভাগ, কাউন্টার (বিভাগীয় দোকানে)"
    },
    {
        "pr": "Chika",
        "jp": "ちか",
        "en": "Basement",
        "bn": "তলা"
    },
    {
        "pr": "Kai",
        "jp": "かい",
        "en": "Floor (counter for floors)",
        "bn": "তলা (ফ্লোর)"
    },
    {
        "pr": "NanKai",
        "jp": "なんかい",
        "en": "Which floor",
        "bn": "কোন তলা"
    },
    {
        "pr": "En",
        "jp": "えん",
        "en": "Yen",
        "bn": "ইয়েন"
    },
    {
        "pr": "Ikura",
        "jp": "いくら",
        "en": "How much",
        "bn": "কত দাম"
    },
    {
        "pr": "Sen",
        "jp": "せん",
        "en": "Thousand",
        "bn": "হাজার"
    },
    {
        "pr": "Man",
        "jp": "まん",
        "en": "Ten thousand",
        "bn": "দশ হাজার"
    }
]
