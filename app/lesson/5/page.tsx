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

// From Minna no Nihongo Lesson 5
const words = [
    {
        "pr": "IkiMasu",
        "jp": "いきます",
        "en": "Go",
        "bn": "যাই"
    },
    {
        "pr": "KiMasu",
        "jp": "きます",
        "en": "Come",
        "bn": "আসি"
    },
    {
        "pr": "KaeriMasu",
        "jp": "かえります",
        "en": "Return, go home",
        "bn": "ফিরি, বাড়ি ফিরি"
    },
    {
        "pr": "Gakko",
        "jp": "がっこう",
        "en": "School",
        "bn": "স্কুল"
    },
    {
        "pr": "Su-pa-",
        "jp": "スーパー",
        "en": "Supermarket",
        "bn": "সুপারমার্কেট"
    },
    {
        "pr": "Eki",
        "jp": "えき",
        "en": "Station",
        "bn": "স্টেশন"
    },
    {
        "pr": "Hikoki",
        "jp": "ひこうき",
        "en": "Airplane",
        "bn": "বিমান"
    },
    {
        "pr": "Fune",
        "jp": "ふね",
        "en": "Ship, boat",
        "bn": "জাহাজ, নৌকা"
    },
    {
        "pr": "Densha",
        "jp": "でんしゃ",
        "en": "Electric train",
        "bn": "ট্রেন"
    },
    {
        "pr": "Chikatetsu",
        "jp": "ちかてつ",
        "en": "Subway",
        "bn": "মেট্রো, সাবওয়ে"
    },
    {
        "pr": "Shinkansen",
        "jp": "しんかんせん",
        "en": "Bullet train",
        "bn": "বুলেট ট্রেন"
    },
    {
        "pr": "Basu",
        "jp": "バス",
        "en": "Bus",
        "bn": "বাস"
    },
    {
        "pr": "Takushi",
        "jp": "タクシー",
        "en": "Taxi",
        "bn": "ট্যাক্সি"
    },
    {
        "pr": "Jitensha",
        "jp": "じてんしゃ",
        "en": "Bicycle",
        "bn": "সাইকেল"
    },
    {
        "pr": "Aruite",
        "jp": "あるいて",
        "en": "On foot",
        "bn": "পায়ে হেঁটে"
    },
    {
        "pr": "Hito",
        "jp": "ひと",
        "en": "Person, people",
        "bn": "ব্যক্তি, মানুষ"
    },
    {
        "pr": "Tomodachi",
        "jp": "ともだち",
        "en": "Friend",
        "bn": "বন্ধু"
    },
    {
        "pr": "Kare",
        "jp": "かれ",
        "en": "He, boyfriend",
        "bn": "সে (ছেলে), প্রেমিক"
    },
    {
        "pr": "Kanojo",
        "jp": "かのじょ",
        "en": "She, girlfriend",
        "bn": "সে (মেয়ে), প্রেমিকা"
    },
    {
        "pr": "Kazoku",
        "jp": "かぞく",
        "en": "Family",
        "bn": "পরিবার"
    },
    {
        "pr": "Hitoride",
        "jp": "ひとりで",
        "en": "Alone, by oneself",
        "bn": "একা"
    },
    {
        "pr": "SenShu",
        "jp": "せんしゅう",
        "en": "Last week",
        "bn": "গত সপ্তাহ"
    },
    {
        "pr": "KonShu",
        "jp": "こんしゅう",
        "en": "This week",
        "bn": "এই সপ্তাহ"
    },
    {
        "pr": "RaiShu",
        "jp": "らいしゅう",
        "en": "Next week",
        "bn": "আগামী সপ্তাহ"
    },
    {
        "pr": "SenGetsu",
        "jp": "せんげつ",
        "en": "Last month",
        "bn": "গত মাস"
    },
    {
        "pr": "KonGetsu",
        "jp": "こんげつ",
        "en": "This month",
        "bn": "এই মাস"
    },
    {
        "pr": "RaiGetsu",
        "jp": "らいげつ",
        "en": "Next month",
        "bn": "আগামী মাস"
    },
    {
        "pr": "KyoNen",
        "jp": "きょねん",
        "en": "Last year",
        "bn": "গত বছর"
    },
    {
        "pr": "KonNen",
        "jp": "ことし",
        "en": "This year",
        "bn": "এই বছর"
    },
    {
        "pr": "RaiNen",
        "jp": "らいねん",
        "en": "Next year",
        "bn": "আগামী বছর"
    },
    {
        "pr": "NanGatsu",
        "jp": "なんがつ",
        "en": "What month",
        "bn": "কোন মাস"
    },
    {
        "pr": "IchiGatsu",
        "jp": "いちがつ",
        "en": "January",
        "bn": "জানুয়ারি"
    },
    {
        "pr": "NiGatsu",
        "jp": "にがつ",
        "en": "February",
        "bn": "ফেব্রুয়ারি"
    },
    {
        "pr": "SanGatsu",
        "jp": "さんがつ",
        "en": "March",
        "bn": "মার্চ"
    },
    {
        "pr": "ShiGatsu",
        "jp": "しがつ",
        "en": "April",
        "bn": "এপ্রিল"
    },
    {
        "pr": "GoGatsu",
        "jp": "ごがつ",
        "en": "May",
        "bn": "মে"
    },
    {
        "pr": "RokuGatsu",
        "jp": "ろくがつ",
        "en": "June",
        "bn": "জুন"
    },
    {
        "pr": "ShichiGatsu",
        "jp": "しちがつ",
        "en": "July",
        "bn": "জুলাই"
    },
    {
        "pr": "HachiGatsu",
        "jp": "はちがつ",
        "en": "August",
        "bn": "আগস্ট"
    },
    {
        "pr": "KuGatsu",
        "jp": "くがつ",
        "en": "September",
        "bn": "সেপ্টেম্বর"
    },
    {
        "pr": "JuGatsu",
        "jp": "じゅうがつ",
        "en": "October",
        "bn": "অক্টোবর"
    },
    {
        "pr": "JuichiGatsu",
        "jp": "じゅういちがつ",
        "en": "November",
        "bn": "নভেম্বর"
    },
    {
        "pr": "JuniGatsu",
        "jp": "じゅうにがつ",
        "en": "December",
        "bn": "ডিসেম্বর"
    },
    {
        "pr": "NanNichi",
        "jp": "なんにち",
        "en": "What day of the month, how many days",
        "bn": "কোন তারিখ, কতদিন"
    },
    {
        "pr": "Tanjoubi",
        "jp": "たんじょうび",
        "en": "Birthday",
        "bn": "জন্মদিন"
    },
    {
        "pr": "Futsu",
        "jp": "ふつう",
        "en": "Local train",
        "bn": "সাধারণ ট্রেন"
    },
    {
        "pr": "Kyuuko",
        "jp": "きゅうこう",
        "en": "Express train",
        "bn": "দ্রুতগামী ট্রেন"
    },
    {
        "pr": "Tokkyu",
        "jp": "とっきゅう",
        "en": "Limited express train",
        "bn": "বিশেষ দ্রুতগামী ট্রেন"
    }
]

