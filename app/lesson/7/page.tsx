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

// From Minna no Nihongo Lesson 7
const words = [
    {
        "pr": "Agemasu",
        "jp": "あげます",
        "en": "Give",
        "bn": "দেই"
    },
    {
        "pr": "Moraimasu",
        "jp": "もらいます",
        "en": "Receive",
        "bn": "নেই"
    },
    {
        "pr": "Kashimasu",
        "jp": "かします",
        "en": "Lend",
        "bn": "ধার দেই"
    },
    {
        "pr": "Karimasu",
        "jp": "かります",
        "en": "Borrow",
        "bn": "ধার করি"
    },
    {
        "pr": "Oshiemasu",
        "jp": "おしえます",
        "en": "Teach",
        "bn": "শেখাই"
    },
    {
        "pr": "Naraimasu",
        "jp": "ならいます",
        "en": "Learn",
        "bn": "শিখি"
    },
    {
        "pr": "Kakemasu",
        "jp": "かけます",
        "en": "Make (a phone call)",
        "bn": "ফোন করি"
    },
    {
        "pr": "Te",
        "jp": "て",
        "en": "Hand",
        "bn": "হাত"
    },
    {
        "pr": "Hashi",
        "jp": "はし",
        "en": "Chopsticks",
        "bn": "চপস্টিক"
    },
    {
        "pr": "Supun",
        "jp": "スプーン",
        "en": "Spoon",
        "bn": "চামচ"
    },
    {
        "pr": "Naifu",
        "jp": "ナイフ",
        "en": "Knife",
        "bn": "ছুরি"
    },
    {
        "pr": "Fōku",
        "jp": "フォーク",
        "en": "Fork",
        "bn": "কাঁটা চামচ"
    },
    {
        "pr": "Hasami",
        "jp": "はさみ",
        "en": "Scissors",
        "bn": "কাঁচি"
    },
    {
        "pr": "Fakusu",
        "jp": "ファクス",
        "en": "Fax",
        "bn": "ফ্যাক্স"
    },
    {
        "pr": "Panchi",
        "jp": "パンチ",
        "en": "Hole punch",
        "bn": "হোল পাঞ্চ"
    },
    {
        "pr": "Hocchikisu",
        "jp": "ホッチキス",
        "en": "Stapler",
        "bn": "স্ট্যাপলার"
    },
    {
        "pr": "Serotēpu",
        "jp": "セロテープ",
        "en": "Cellophane tape",
        "bn": "সেলোফেন টেপ"
    },
    {
        "pr": "Keshigomu",
        "jp": "けしゴム",
        "en": "Eraser",
        "bn": "রাবার"
    },
    {
        "pr": "Kami",
        "jp": "かみ",
        "en": "Paper",
        "bn": "কাগজ"
    },
    {
        "pr": "Hana",
        "jp": "はな",
        "en": "Flower",
        "bn": "ফুল"
    },
    {
        "pr": "Shatsu",
        "jp": "シャツ",
        "en": "Shirt",
        "bn": "শার্ট"
    },
    {
        "pr": "Purezento",
        "jp": "プレゼント",
        "en": "Present, gift",
        "bn": "উপহার"
    },
    {
        "pr": "Kippu",
        "jp": "きっぷ",
        "en": "Ticket",
        "bn": "টিকেট"
    },
    {
        "pr": "Kurismasu",
        "jp": "クリスマス",
        "en": "Christmas",
        "bn": "বড়দিন"
    },
    {
        "pr": "Chichi",
        "jp": "ちち",
        "en": "Father (speaker's)",
        "bn": "বাবা"
    },
    {
        "pr": "Haha",
        "jp": "はは",
        "en": "Mother (speaker's)",
        "bn": "মা"
    },
    {
        "pr": "Otousan",
        "jp": "おとうさん",
        "en": "Father (someone else's)",
        "bn": "বাবা (অন্যের)"
    },
    {
        "pr": "Okaasan",
        "jp": "おかあさん",
        "en": "Mother (someone else's)",
        "bn": "মা (অন্যের)"
    },
    {
        "pr": "Mou",
        "jp": "もう",
        "en": "Already",
        "bn": "ইতোমধ্যেই"
    },
    {
        "pr": "Mada",
        "jp": "まだ",
        "en": "Not yet",
        "bn": "এখনও না"
    },
    {
        "pr": "Kore kara",
        "jp": "これから",
        "en": "From now on, soon",
        "bn": "এখন থেকে, শীঘ্রই"
    },
    {
        "pr": "Omiyage",
        "jp": "おみやげ",
        "en": "Souvenir, gift",
        "bn": "স্মারক, উপহার"
    }
]

