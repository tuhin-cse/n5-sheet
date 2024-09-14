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
    },
    {
        pr: 'Ka-Do',
        jp: 'かど',
        en: 'Card',
        bn: 'কার্ড'
    },
    {
        en: 'Telephone Card',
        bn: 'টেলিফোন কার্ড',
        jp: 'テレホンカード',
        pr: 'Terehonka-do',
    },
    {
        en: 'Pencil',
        bn: 'পেন্সিল',
        jp: 'えんぴつ',
        pr: 'Enpitsu'
    },
    {
        name: 'Ball Pen',
        bn: 'বল পেন',
        jp: 'ボールペン',
        pr: 'Bo-rupen',
    },
    {
        name: 'Sharp Pencil',
        bn: 'শার্প পেন্সিল',
        jp: 'シャープペンシル',
        pr: 'Sha-pupenshiru',
    },
    {
        name: 'Key',
        bn: 'চাবি',
        jp: 'かぎ',
        pr: 'Kagi',
    },
    {
        name: "Bag",
        bn: 'ব্যাগ',
        jp: 'かばん',
        pr: 'Kaban',
    },
    {
        name: 'Cassette / Tape',
        bn: 'ক্যাসেট / টেপ',
        pr: 'Kyaseto / Tepe',
        jp: 'カセット / テープ',
    },
    {
        name: 'Tape Recorder',
        bn: 'টেপ রেকর্ডার',
        jp: 'テープレコーダー',
        pr: 'Tepe Rekoda-',
    },
    {
        pr: 'TeLeBi',
        jp: 'テレビ',
        en: 'Television',
        bn: 'টেলিভিশন'
    },
    {
        pr: 'RaJiO',
        jp: 'ラジオ',
        en: 'Radio',
        bn: 'রেডিও'
    },
    {
        en: 'Camera',
        bn: 'ক্যামেরা',
        jp: 'カメラ',
        pr: 'Kamera'
    },
    {
        en: 'Computer',
        bn: 'কম্পিউটার',
        jp: 'コンピュータ-',
        pr: 'Konpyu-ta-'
    },
    {
        jp: 'じどうしゃ',
        pr: 'Jidousha',
        en: 'Car / Automobile',
        bn: 'গাড়ি / অটোমোবাইল'
    },
    {
        en: 'Table',
        bn: 'টেবিল',
        jp: 'つくえ',
        pr: 'Tsukue'
    },
    {
        en: 'Chair',
        bn: 'চেয়ার',
        jp: 'いす',
        pr: 'Isu'
    },
    {
        en: "Chocolate",
        bn: 'চকলেট',
        jp: 'チョコレート',
        pr: 'Chokore-to'
    },
    {
        en: 'Coffee',
        bn: 'কফি',
        jp: 'コーヒ-',
        pr: 'Ko-hi-'
    },
    {
        en: 'English',
        bn: 'ইংরেজি',
        jp: 'えいご',
        pr: 'Eigo'
    },
    {
        en: 'Japanese',
        bn: 'জাপানি',
        jp: 'にほんご',
        pr: 'Nihongo'
    },
    {
        en: 'What',
        bn: 'কি',
        jp: 'なに',
        pr: 'Nani'
    },
    {
        jp: 'そう',
        pr: 'Sou',
        bn: 'তাই',
        en: 'Yes'
    },
    {
        bn: 'ভুল / আপনি ভুল ভাবছেন',
        jp: 'ちがいます',
        pr: 'Chigaimasu',
        en: 'No / You are mistaken'
    },
    {
        jp: 'そうですか',
        pr: 'Sou des ka',
        en: 'Is that so?',
        bn: "তাই নাকি",
    },
    {
        pr: 'AnoU',
        jp: 'あのう',
        en: 'Excuse me',
        bn: 'মাফ করবেন',
    },
    {
        jp: 'ほんのきもちです',
        pr: 'Hon no kimochi des',
        en: 'It is just a feeling',
        bn: 'এটা কেবল একটা অনুভূতি'
    },
    {
        jp: 'どうぞ',
        pr: 'Douzo',
        en: 'Please / Here you are',
        bn: 'দয়া করে / এই নেন'
    },
    {
        jp: 'どうも',
        pr: 'Doumo',
        en: 'Thank you',
        bn: 'ধন্যবাদ'
    },
    {
        pr: 'Arigatou Gozaimasu',
        jp: 'ありがとうございます',
        en: 'Thank you very much',
        bn: 'আপনাকে অনেক ধন্যবাদ'
    },
    {
        jp: 'これからおせわになります',
        pr: 'Korekara osewa ni narimas',
        bn: 'এখন থেকে আপনার সহায্য কামনা করছি',
        en: 'I am counting on your help from now on'
    },
    {
        jp: 'こちらこそよろしく',
        pr: 'Kochira koso yoroshiku',
        en: 'Nice to meet you',
        bn: 'আপনার সাথে পরিচিত হতে খুব খুশি'
    }
]