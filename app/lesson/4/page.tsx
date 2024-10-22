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

// From Minna no Nihongo Lesson 4
const words = [
    {
        "pr": "OkiMasu",
        "jp": "おきます",
        "en": "Get up, wake up",
        "bn": "উঠি, জাগি"
    },
    {
        "pr": "NeMasu",
        "jp": "ねます",
        "en": "Go to bed, sleep",
        "bn": "ঘুমাই, শুই"
    },
    {
        "pr": "HataRakiMasu",
        "jp": "はたらきます",
        "en": "Work",
        "bn": "কাজ করি"
    },
    {
        "pr": "YasuMiMasu",
        "jp": "やすみます",
        "en": "Take a rest, take a holiday",
        "bn": "বিশ্রাম নেই, ছুটি নেই"
    },
    {
        "pr": "BenKyoShimasu",
        "jp": "べんきょうします",
        "en": "Study",
        "bn": "পড়াশোনা করি"
    },
    {
        "pr": "OwariMasu",
        "jp": "おわります",
        "en": "Finish",
        "bn": "শেষ করি"
    },
    {
        "pr": "Depa-to",
        "jp": "デパート",
        "en": "Department store",
        "bn": "ডিপার্টমেন্ট স্টোর"
    },
    {
        "pr": "Ginko",
        "jp": "ぎんこう",
        "en": "Bank",
        "bn": "ব্যাংক"
    },
    {
        "pr": "Yubinkyoku",
        "jp": "ゆうびんきょく",
        "en": "Post office",
        "bn": "ডাকঘর"
    },
    {
        "pr": "Toshokan",
        "jp": "としょかん",
        "en": "Library",
        "bn": "লাইব্রেরি"
    },
    {
        "pr": "Bijutsukan",
        "jp": "びじゅつかん",
        "en": "Art museum",
        "bn": "শিল্প জাদুঘর"
    },
    {
        "pr": "Ima",
        "jp": "いま",
        "en": "Now",
        "bn": "এখন"
    },
    {
        "pr": "Ji",
        "jp": "じ",
        "en": "O'clock",
        "bn": "ঘন্টা"
    },
    {
        "pr": "Fun/Pun",
        "jp": "ふん／ぷん",
        "en": "Minute",
        "bn": "মিনিট"
    },
    {
        "pr": "Han",
        "jp": "はん",
        "en": "Half past",
        "bn": "সাড়ে"
    },
    {
        "pr": "NanJi",
        "jp": "なんじ",
        "en": "What time",
        "bn": "কয়টা বাজে"
    },
    {
        "pr": "NanPun",
        "jp": "なんぷん",
        "en": "What minute",
        "bn": "কত মিনিট"
    },
    {
        "pr": "Gozen",
        "jp": "ごぜん",
        "en": "AM (morning)",
        "bn": "সকাল"
    },
    {
        "pr": "Gogo",
        "jp": "ごご",
        "en": "PM (afternoon)",
        "bn": "বিকাল"
    },
    {
        "pr": "Asa",
        "jp": "あさ",
        "en": "Morning",
        "bn": "সকাল"
    },
    {
        "pr": "Hiru",
        "jp": "ひる",
        "en": "Daytime, noon",
        "bn": "দুপুর, দিন"
    },
    {
        "pr": "Ban/Yoru",
        "jp": "ばん／よる",
        "en": "Evening, night",
        "bn": "সন্ধ্যা, রাত"
    },
    {
        "pr": "Ototoi",
        "jp": "おととい",
        "en": "The day before yesterday",
        "bn": "পরশু"
    },
    {
        "pr": "Kino",
        "jp": "きのう",
        "en": "Yesterday",
        "bn": "গতকাল"
    },
    {
        "pr": "Kyo",
        "jp": "きょう",
        "en": "Today",
        "bn": "আজ"
    },
    {
        "pr": "Ashita",
        "jp": "あした",
        "en": "Tomorrow",
        "bn": "আগামীকাল"
    },
    {
        "pr": "Asatte",
        "jp": "あさって",
        "en": "The day after tomorrow",
        "bn": "পরশু"
    },
    {
        "pr": "Kesa",
        "jp": "けさ",
        "en": "This morning",
        "bn": "আজ সকাল"
    },
    {
        "pr": "Konban",
        "jp": "こんばん",
        "en": "Tonight",
        "bn": "আজ রাত"
    },
    {
        "pr": "Yasumi",
        "jp": "やすみ",
        "en": "Rest, holiday, day off",
        "bn": "ছুটি, বিশ্রাম"
    },
    {
        "pr": "HiruYasumi",
        "jp": "ひるやすみ",
        "en": "Lunchtime",
        "bn": "মধ্যাহ্ন বিরতি"
    },
    {
        "pr": "Maiasa",
        "jp": "まいあさ",
        "en": "Every morning",
        "bn": "প্রতিদিন সকালে"
    },
    {
        "pr": "Maiban",
        "jp": "まいばん",
        "en": "Every night",
        "bn": "প্রতিদিন রাতে"
    },
    {
        "pr": "Mainichi",
        "jp": "まいにち",
        "en": "Every day",
        "bn": "প্রতিদিন"
    },
    {
        "pr": "Getsuyobi",
        "jp": "げつようび",
        "en": "Monday",
        "bn": "সোমবার"
    },
    {
        "pr": "Kayobi",
        "jp": "かようび",
        "en": "Tuesday",
        "bn": "মঙ্গলবার"
    },
    {
        "pr": "Suiyobi",
        "jp": "すいようび",
        "en": "Wednesday",
        "bn": "বুধবার"
    },
    {
        "pr": "Mokuyobi",
        "jp": "もくようび",
        "en": "Thursday",
        "bn": "বৃহস্পতিবার"
    },
    {
        "pr": "Kinyobi",
        "jp": "きんようび",
        "en": "Friday",
        "bn": "শুক্রবার"
    },
    {
        "pr": "Doyobi",
        "jp": "どようび",
        "en": "Saturday",
        "bn": "শনিবার"
    },
    {
        "pr": "Nichiyobi",
        "jp": "にちようび",
        "en": "Sunday",
        "bn": "রবিবার"
    },
    {
        "pr": "Bangō",
        "jp": "ばんごう",
        "en": "Number",
        "bn": "নম্বর"
    },
    {
        "pr": "Nanban",
        "jp": "なんばん",
        "en": "What number",
        "bn": "কত নম্বর"
    }
]

