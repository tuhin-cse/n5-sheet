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

// From Minna no Nihongo Lesson 12
const words = [
    {
        pr: 'Kantan',
        jp: 'かんたん',
        en: 'Simple',
        bn: 'সহজ'
    },
    {
        en: 'Near',
        jp: 'ちかい',
        pr: 'Chikai',
        bn: 'কাছাকাছি'
    },
    {
        en: 'Far',
        jp: 'とおい',
        pr: 'Tooi',
        bn: 'দূর'
    },
    {
        en: "Fast",
        jp: "はやい",
        pr: "Hayai",
        bn: "দ্রুত"
    },
    {
        en: "Slow",
        jp: "おそい",
        pr: "Osoi",
        bn: "ধীর"
    },
    {
        bn: "অনেক",
        en: "Many",
        jp: "おおい",
        pr: "Ooi",
    },
    {
        en: "Few",
        jp: "すくない",
        pr: "Sukunai",
        bn: "কিছু"
    },
    {
        en: "Warm",
        jp: "あたたかい",
        pr: "Atatakai",
        bn: "গরম"
    },
    {
        en: "Cool",
        jp: "すずしい",
        pr: "Suzushii",
        bn: "ঠান্ডা"
    },
    {
        en: "Sweet",
        jp: "あまい",
        pr: "Amai",
        bn: "মিষ্টি"
    },
    {
        en: "Hot (spicy)",
        jp: "からい",
        pr: "Karai",
        bn: "গরম"
    },
    {
        en: "Heavy",
        jp: "おもい",
        pr: "Omoi",
        bn: "ভারী"
    },
    {
        en: "Light",
        jp: "かるい",
        pr: "Karui",
        bn: "হালকা"
    },

    {
        en: "Season",
        jp: "きせつ",
        pr: "Kisetsu",
        bn: "ঋতু"
    },
    {
        en: "Spring",
        jp: "はる",
        pr: "Haru",
        bn: "বসন্ত"
    },
    {
        en: "Summer",
        jp: "なつ",
        pr: "Natsu",
        bn: "গ্রীষ্ম"
    },
    {
        en: "Autumn / Fall",
        jp: "あき",
        pr: "Aki",
        bn: "শরৎ"
    },
    {
        en: "Winter",
        jp: "ふゆ",
        pr: "Fuyu",
        bn: "শীত"
    },
]
