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

// Hiragana
const words = [
    {
        pr: 'KoRe',
        jp: 'これ',
        en: 'This',
        bn: 'এটা'
    },
    {
        pr: 'SoRe',
        jp: 'それ',
        en: 'That',
        bn: 'ওটা'
    },
    {
        pr: 'ARe',
        jp: 'あれ',
        en: 'That over there',
        bn:  'ওইটা'
    },
    {
        pr: 'KoNo',
        jp: 'この',
        en: 'This',
        bn: 'এই'
    },
    {
        pr: 'SoNo',
        jp: 'その',
        en: 'That',
        bn: 'ওই'
    },
    {
        pr: 'ANo',
        jp: 'あの',
        en: 'That over there',
        bn: 'ওইটা'
    },
    {
        pr: 'HoN',
        jp: 'ほん',
        en: 'Book',
        bn: 'বই'
    },
    {
        pr: 'JiSho',
        jp: 'じしょ',
        en: 'Dictionary',
        bn: 'অভিধান'
    },
    {
        pr: 'ZaSShi',
        jp: 'ざっし',
        en: 'Magazine',
        bn: 'ম্যাগাজিন'
    },
    {
        pr: 'ShiNbuN',
        jp: 'しんぶん',
        en: 'Newspaper',
        bn: 'সংবাদপত্র'
    },
    {
        pr: 'NoTo',
        jp: 'ノート',
        en: 'Notebook',
        bn: 'নোটবুক'
    },
    {
        pr: 'TeChoU',
        jp: 'てちょう',
        en: 'Handbook / Pocket notebook',
        bn: 'হ্যান্ডবুক / পকেট নোটবুক'
    },
    {
        pr: 'MeiShi',
        jp: 'めいし',
        en: 'Business card',
        bn: 'বিজনেস কার্ড'
    }
]