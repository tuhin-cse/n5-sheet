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


const words = [
    {
        en: 'I',
        bn: 'আমি',
        jp: 'わたし',
        pr: 'Watashi'
    },
    {
        en: 'We',
        bn: 'আমরা',
        jp: 'わたしたち',
        pr: 'Watashitachi'
    },
    {
        en: 'You',
        bn: 'তুমি',
        jp: 'あなた',
        pr: 'Anata'
    },
    {
        en: 'That person',
        bn: 'সেই ব্যক্তি',
        jp: 'あのひと',
        pr: 'Ano hito'
    },
    {
        en: 'That person (polite)',
        bn: 'সেই ব্যক্তি',
        jp: 'あのかた',
        pr: 'Ano kata'
    },
    {
        en: 'Everyone',
        bn: 'সবাই',
        jp: 'みなさん',
        pr: 'Minasan'
    },
    {
        en: 'Mr. Miss.',
        bn: 'মিস্টার মিস',
        jp: 'さん',
        pr: 'San'
    },
    {
        en: "For Little Children",
        bn: 'ছোট শিশুদের জন্য',
        jp: 'ちゃん',
        pr: 'Chan'
    },
    {
        en: 'For Young Boys',
        bn: 'ছোট ছেলেদের জন্য',
        jp: 'くん',
        pr: 'Kun'
    },
    {
        en: "For Nationality",
        bn: 'জাতীয়তা জন্য',
        jp: 'じん',
        pr: 'Jin'
    },
    {
        en: 'Teacher',
        bn: 'শিক্ষক',
        jp: 'せんせい',
        pr: 'Sensei'
    },
    {
        en: 'Teacher',
        bn: 'শিক্ষক',
        jp: 'きょうし',
        pr: 'Kyoushi'
    },
    {
        en: 'Student',
        bn: 'ছাত্র',
        jp: 'がくせい',
        pr: 'Gakusei'
    },
    {
        en: 'Company employee',
        bn: 'কোম্পানির কর্মচারী',
        jp: 'かいしゃいん',
        pr: 'Kaishain'
    },
    {
        en: "Employee",
        bn: 'কর্মচারী',
        jp: 'しゃいん',
        pr: 'Shain'
    },
    {
        en: 'Bank employee',
        bn: 'ব্যাংক কর্মচারী',
        jp: 'ぎんこういん',
        pr: 'Ginkouin'
    },
    {
        en: 'Doctor',
        bn: 'ডাক্তার',
        jp: 'いしゃ',
        pr: 'Isha'
    },
    {
        en: "Researcher",
        bn: 'গবেষক',
        jp: 'けんきゅうしゃ',
        pr: 'Kenkyuusha'
    },
    {
        en: 'Engineer',
        bn: 'প্রকৌশলী',
        jp: 'エンジニア',
        pr: 'Enjinia'
    },
    {
        en: 'Hospital',
        bn: 'হাসপাতাল',
        jp: 'びょういん',
        pr: 'Byouin'
    },
    {
        en: 'Electricity',
        bn: 'বিদ্যুৎ',
        jp: 'でんき',
        pr: 'Denki'
    },
    {
        en: 'Who',
        bn: 'কে',
        jp: 'だれ',
        pr: 'Dare'
    },
    {
        en: 'Who (polite)',
        bn: 'কে',
        jp: 'どなた',
        pr: 'Donata'
    },
    {
        en: 'Age',
        bn: 'বয়স',
        jp: 'さい',
        pr: 'Sai'
    },
    {
        en: 'How old?',
        bn: 'কত বয়স?',
        jp: 'なんさい',
        pr: 'Nan Sai',
    },
    {
        en: 'How old? (polite)',
        bn: 'কত বয়স?',
        jp: 'おいくつ',
        pr: 'Oikutsu'
    },
    {
        en: 'Yes',
        bn: 'হ্যাঁ',
        jp: 'はい',
        pr: 'Hai'
    },
    {
        en: 'No',
        bn: 'না',
        jp: 'いいえ',
        pr: 'Iie'
    }
]