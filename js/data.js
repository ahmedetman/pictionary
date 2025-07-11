// js/data.js

let gameData = {}; // Will hold categories, words, settings, uiStrings
// --- Mapping for Colors ---
const COLOR_TYPES = {
    YELLOW: 'yellow', // Person/Job
    BLUE: 'blue',     // Place
    ORANGE: 'orange', // Object
    RED: 'red',       // Animal/Plant/Food
    GREEN: 'green'    // Different/Action/Misc
};

const defaultCategories = [
    // --- YELLOW Category (People/Jobs/Famous) ---
    {
        id: 'cat_yellow',
        name: { en: 'People/Jobs/Famous', ar: 'أشخاص/مهن/مشاهير' },
        colorType: 'yellow',
        words: [
            { id: '1', text: { en: 'Doctor', ar: 'دكتور' }, allPlay: true, difficulty: 1 },
            { id: '2', text: { en: 'Nurse', ar: 'ممرض/ممرضة' }, allPlay: false, difficulty: 0 },
            { id: '3', text: { en: 'Teacher', ar: 'مدرس/مدرسة' }, allPlay: false, difficulty: 0 },
            { id: '4', text: { en: 'Artist', ar: 'فنان/فنانة' }, allPlay: false, difficulty: 0 },
            { id: '5', text: { en: 'Painter', ar: 'رسام/نقاش' }, allPlay: true, difficulty: 1 },
            { id: '6', text: { en: 'Dancer', ar: 'راقص/راقصة' }, allPlay: false, difficulty: 0 },
            { id: '7', text: { en: 'Chef', ar: 'شيف/طباخ' }, allPlay: false, difficulty: 0 },
            { id: '8', text: { en: 'Waiter', ar: 'جرسون' }, allPlay: false, difficulty: 0 },
            { id: '9', text: { en: 'Waitress', ar: 'جرسونة' }, allPlay: false, difficulty: 0 },
            { id: '10', text: { en: 'Firefighter', ar: 'رجل إطفاء' }, allPlay: true, difficulty: 1 },
            { id: '11', text: { en: 'Policeman', ar: 'ضابط شرطة' }, allPlay: true, difficulty: 1 },
            { id: '12', text: { en: 'Detective', ar: 'متحري/مخبر' }, allPlay: false, difficulty: 0 },
            { id: '13', text: { en: 'Engineer', ar: 'مهندس' }, allPlay: true, difficulty: 1 },
            { id: '14', text: { en: 'Scientist', ar: 'عالم' }, allPlay: false, difficulty: 0 },
            { id: '15', text: { en: 'Astronaut', ar: 'رائد فضاء' }, allPlay: true, difficulty: 1 },
            { id: '16', text: { en: 'Athlete', ar: 'رياضي' }, allPlay: false, difficulty: 0 },
            { id: '17', text: { en: 'Actor', ar: 'ممثل' }, allPlay: false, difficulty: 0 },
            { id: '18', text: { en: 'Actress', ar: 'ممثلة' }, allPlay: false, difficulty: 0 },
            { id: '19', text: { en: 'Model', ar: 'موديل/عارض أزياء' }, allPlay: false, difficulty: 0 },
            { id: '20', text: { en: 'Director', ar: 'مخرج' }, allPlay: false, difficulty: 0 },
            { id: '21', text: { en: 'Musician', ar: 'موسيقار/عازف' }, allPlay: true, difficulty: 1 },
            { id: '22', text: { en: 'Singer', ar: 'مغني/مطرب' }, allPlay: true, difficulty: 1 },
            { id: '23', text: { en: 'Designer', ar: 'مصمم' }, allPlay: true, difficulty: 1 },
            { id: '24', text: { en: 'Tailor', ar: 'خياط/ترزي' }, allPlay: true, difficulty: 1 },
            { id: '25', text: { en: 'Farmer', ar: 'فلاح/مزارع' }, allPlay: true, difficulty: 1 },
            { id: '26', text: { en: 'Fisherman', ar: 'صياد سمك' }, allPlay: false, difficulty: 0 },
            { id: '27', text: { en: 'Soldier', ar: 'جندي/عسكري' }, allPlay: true, difficulty: 1 },
            { id: '28', text: { en: 'Pilot', ar: 'طيار' }, allPlay: false, difficulty: 0 },
            { id: '29', text: { en: 'Sailor', ar: 'بحار' }, allPlay: true, difficulty: 1 },
            { id: '30', text: { en: 'Carpenter', ar: 'نجار' }, allPlay: false, difficulty: 0 },
            { id: '31', text: { en: 'Plumber', ar: 'سباك' }, allPlay: true, difficulty: 1 },
            { id: '32', text: { en: 'Electrician', ar: 'كهربائي' }, allPlay: false, difficulty: 0 },
            { id: '33', text: { en: 'Mechanic', ar: 'ميكانيكي' }, allPlay: true, difficulty: 1 },
            { id: '34', text: { en: 'Vet', ar: 'طبيب بيطري' }, allPlay: false, difficulty: 0 },
            { id: '35', text: { en: 'Photographer', ar: 'مصور فوتوغرافي' }, allPlay: false, difficulty: 0 },
            { id: '36', text: { en: 'Miner', ar: 'عامل منجم' }, allPlay: false, difficulty: 0 },
            { id: '37', text: { en: 'Builder', ar: 'بنا/عامل بناء' }, allPlay: false, difficulty: 0 },
            { id: '38', text: { en: 'Architect', ar: 'مهندس معماري' }, allPlay: true, difficulty: 1 },
            { id: '39', text: { en: 'Driver', ar: 'سائق' }, allPlay: false, difficulty: 0 },
            { id: '40', text: { en: 'Surgeon', ar: 'جراح' }, allPlay: true, difficulty: 1 },
            { id: '41', text: { en: 'Reporter', ar: 'مراسل صحفي' }, allPlay: true, difficulty: 1 },
            { id: '42', text: { en: 'Janitor', ar: 'بواب/عامل نظافة' }, allPlay: true, difficulty: 1 },
            { id: '43', text: { en: 'Baker', ar: 'خباز' }, allPlay: false, difficulty: 0 },
            { id: '44', text: { en: 'Butcher', ar: 'جزار' }, allPlay: true, difficulty: 1 },
            { id: '45', text: { en: 'Receptionist', ar: 'موظف استقبال' }, allPlay: false, difficulty: 0 },
            { id: '46', text: { en: 'Wizard', ar: 'ساحر' }, allPlay: false, difficulty: 0 },
            { id: '47', text: { en: 'Hairdresser', ar: 'كوافير/مصفف شعر' }, allPlay: false, difficulty: 0 },
            { id: '48', text: { en: 'Blacksmith', ar: 'حداد' }, allPlay: false, difficulty: 0 },
            { id: '49', text: { en: 'Bricklayer', ar: 'عامل طوب/بنا' }, allPlay: false, difficulty: 0 },
            { id: '50', text: { en: 'Professor', ar: 'أستاذ جامعي' }, allPlay: true, difficulty: 1 },
            { id: '51', text: { en: 'Accountant', ar: 'محاسب' }, allPlay: true, difficulty: 1 },
            { id: '52', text: { en: 'Banker', ar: 'موظف بنك/صراف' }, allPlay: false, difficulty: 0 },
            { id: '53', text: { en: 'Bartender', ar: 'ساقي (بار)' }, allPlay: true, difficulty: 1 },
            { id: '54', text: { en: 'Barista', ar: 'باريستا (صانع قهوة)' }, allPlay: true, difficulty: 1 },
            { id: '55', text: { en: 'Stewardess', ar: 'مضيفة جوية' }, allPlay: true, difficulty: 1 },
            { id: '56', text: { en: 'Referee', ar: 'حكم (مباراة)' }, allPlay: false, difficulty: 0 },
            { id: '57', text: { en: 'Salesman', ar: 'بائع' }, allPlay: false, difficulty: 0 },
            { id: '58', text: { en: 'Gardener', ar: 'جنايني' }, allPlay: true, difficulty: 1 },
            { id: '59', text: { en: 'Jeweler', ar: 'صائغ/جواهرجي' }, allPlay: false, difficulty: 0 },
            { id: '60', text: { en: 'Priest', ar: 'قسيس/كاهن' }, allPlay: false, difficulty: 0 },
            { id: '61', text: { en: 'Michael Jackson', ar: 'مايكل جاكسون' }, allPlay: false, difficulty: 0 },
            { id: '62', text: { en: 'Madonna', ar: 'مادونا' }, allPlay: true, difficulty: 1 },
            { id: '63', text: { en: 'Elvis Presley', ar: 'إلفيس بريسلي' }, allPlay: true, difficulty: 1 },
            { id: '64', text: { en: 'Marilyn Monroe', ar: 'مارلين مونرو' }, allPlay: false, difficulty: 0 },
            { id: '65', text: { en: 'Albert Einstein', ar: 'ألبرت أينشتاين' }, allPlay: true, difficulty: 1 },
            { id: '66', text: { en: 'Vincent van Gogh', ar: 'فينسنت فان جوخ' }, allPlay: false, difficulty: 0 },
            { id: '67', text: { en: 'William Shakespeare', ar: 'ويليام شكسبير' }, allPlay: false, difficulty: 0 },
            { id: '68', text: { en: 'Leonardo Da Vinci', ar: 'ليوناردو دا فينشي' }, allPlay: false, difficulty: 0 },
            { id: '69', text: { en: 'Beethoven', ar: 'بيتهوفن' }, allPlay: false, difficulty: 0 },
            { id: '70', text: { en: 'Mozart', ar: 'موزارت' }, allPlay: true, difficulty: 1 },
            { id: '71', text: { en: 'Mahatma Gandhi', ar: 'مهاتما غاندي' }, allPlay: true, difficulty: 1 },
            { id: '72', text: { en: 'Abraham Lincoln', ar: 'أبراهام لينكولن' }, allPlay: false, difficulty: 0 },
            { id: '73', text: { en: 'Thomas Edison', ar: 'توماس إديسون' }, allPlay: false, difficulty: 0 },
            { id: '74', text: { en: 'Nikola Tesla', ar: 'نيكولا تسلا' }, allPlay: true, difficulty: 1 },
            { id: '75', text: { en: 'Freddie Mercury', ar: 'فريدي ميركوري' }, allPlay: false, difficulty: 0 },
            { id: '76', text: { en: 'Pablo Picasso', ar: 'بابلو بيكاسو' }, allPlay: false, difficulty: 0 },
            { id: '77', text: { en: 'Cleopatra', ar: 'كليوباترا' }, allPlay: true, difficulty: 1 },
            { id: '78', text: { en: 'Lady Gaga', ar: 'ليدي جاجا' }, allPlay: true, difficulty: 1 },
            { id: '79', text: { en: 'Elvis Costello', ar: 'إلفيس كوستيلو' }, allPlay: true, difficulty: 1 }, // Name remains
            { id: '80', text: { en: 'Justin Bieber', ar: 'جاستن بيبر' }, allPlay: true, difficulty: 1 },
            { id: '81', text: { en: 'The Beatles', ar: 'البيتلز' }, allPlay: false, difficulty: 0 },
            { id: '82', text: { en: 'Bob Dylan', ar: 'بوب ديلان' }, allPlay: false, difficulty: 0 },
            { id: '83', text: { en: 'Barack Obama', ar: 'باراك أوباما' }, allPlay: false, difficulty: 0 },
            { id: '84', text: { en: 'Brad Pitt', ar: 'براد بيت' }, allPlay: false, difficulty: 0 },
            { id: '85', text: { en: 'Johnny Depp', ar: 'جوني ديب' }, allPlay: true, difficulty: 1 },
            { id: '86', text: { en: 'Christopher Columbus', ar: 'كريستوفر كولومبوس' }, allPlay: false, difficulty: 0 },
            { id: '87', text: { en: 'Winston Churchill', ar: 'ونستون تشرشل' }, allPlay: false, difficulty: 0 },
            { id: '88', text: { en: 'George Washington', ar: 'جورج واشنطن' }, allPlay: true, difficulty: 1 },
            { id: '89', text: { en: 'Martin Luther King Jr.', ar: 'مارتن لوثر كينج جونيور' }, allPlay: false, difficulty: 0 },
            { id: '90', text: { en: 'Neil Armstrong', ar: 'نيل أرمسترونج' }, allPlay: true, difficulty: 1 },
            { id: '91', text: { en: 'Audrey Hepburn', ar: 'أودري هيبورن' }, allPlay: false, difficulty: 0 },
            { id: '92', text: { en: 'Queen Elizabeth II', ar: 'الملكة إليزابيث الثانية' }, allPlay: true, difficulty: 1 },
            { id: '93', text: { en: 'Albert Camus', ar: 'ألبير كامو' }, allPlay: false, difficulty: 0 },
            { id: '94', text: { en: 'Mother Teresa', ar: 'الأم تريزا' }, allPlay: false, difficulty: 0 },
            { id: '95', text: { en: 'Marilyn Manson', ar: 'مارلين مانسون' }, allPlay: true, difficulty: 1 },
            { id: '96', text: { en: 'Adele', ar: 'أديل' }, allPlay: true, difficulty: 1 },
            { id: '97', text: { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو' }, allPlay: false, difficulty: 0 },
            { id: '98', text: { en: 'Lionel Messi', ar: 'ليونيل ميسي' }, allPlay: false, difficulty: 0 },
            { id: '99', text: { en: 'Pele', ar: 'بيليه' }, allPlay: false, difficulty: 0 },
            { id: '100', text: { en: 'Usain Bolt', ar: 'يوسين بولت' }, allPlay: true, difficulty: 1 },
            { id: '101', text: { en: 'Serena Williams', ar: 'سيرينا ويليامز' }, allPlay: true, difficulty: 1 },
            { id: '102', text: { en: 'Michael Phelps', ar: 'مايكل فيلبس' }, allPlay: false, difficulty: 0 },
            { id: '103', text: { en: 'Roger Federer', ar: 'روجر فيدرر' }, allPlay: true, difficulty: 1 },
            { id: '104', text: { en: 'Charlie Chaplin', ar: 'تشارلي تشابلن' }, allPlay: true, difficulty: 1 },
            { id: '105', text: { en: 'Charlie Sheen', ar: 'تشارلي شين' }, allPlay: false, difficulty: 0 },
            { id: '106', text: { en: 'Bruce Lee', ar: 'بروس لي' }, allPlay: false, difficulty: 0 },
            { id: '107', text: { en: 'Superman', ar: 'سوبرمان' }, allPlay: false, difficulty: 0 },
            { id: '108', text: { en: 'Batman', ar: 'باتمان' }, allPlay: false, difficulty: 0 },
            { id: '109', text: { en: 'Spiderman', ar: 'سبايدرمان' }, allPlay: false, difficulty: 0 },
            { id: '110', text: { en: 'Mickey Mouse', ar: 'ميكي ماوس' }, allPlay: true, difficulty: 1 },
            { id: '111', text: { en: 'James Bond', ar: 'جيمس بوند' }, allPlay: false, difficulty: 0 },
            { id: '112', text: { en: 'Harry Potter', ar: 'هاري بوتر' }, allPlay: true, difficulty: 1 },
            { id: '113', text: { en: 'Wonder Woman', ar: 'وندر وومان' }, allPlay: true, difficulty: 1 },
            { id: '114', text: { en: 'Thor', ar: 'ثور' }, allPlay: true, difficulty: 1 },
            { id: '115', text: { en: 'Iron Man', ar: 'أيرون مان' }, allPlay: false, difficulty: 0 },
            { id: '116', text: { en: 'The Flash', ar: 'ذا فلاش' }, allPlay: true, difficulty: 1 },
            { id: '117', text: { en: 'Captain America', ar: 'كابتن أمريكا' }, allPlay: false, difficulty: 0 },
            { id: '118', text: { en: 'Hulk', ar: 'هالك' }, allPlay: true, difficulty: 1 },
            { id: '119', text: { en: 'Black Widow', ar: 'بلاك ويدو' }, allPlay: true, difficulty: 1 },
            { id: '120', text: { en: 'Tom Cruise', ar: 'توم كروز' }, allPlay: false, difficulty: 0 },
            { id: '121', text: { en: 'Oprah Winfrey', ar: 'أوبرا وينفري' }, allPlay: true, difficulty: 1 },
            { id: '122', text: { en: 'Leonardo DiCaprio', ar: 'ليوناردو دي كابريو' }, allPlay: false, difficulty: 0 },
            { id: '123', text: { en: 'Michael Jordan', ar: 'مايكل جوردان' }, allPlay: false, difficulty: 0 },
            { id: '124', text: { en: 'Muhammad Ali', ar: 'محمد علي' }, allPlay: false, difficulty: 0 },
            { id: '125', text: { en: 'Mike Tyson', ar: 'مايك تايسون' }, allPlay: true, difficulty: 1 },
            { id: '126', text: { en: 'Arnold Schwarzenegger', ar: 'أرنولد شوارزنيجر' }, allPlay: false, difficulty: 0 },
            { id: '127', text: { en: 'Sylvester Stallone', ar: 'سيلفستر ستالون' }, allPlay: true, difficulty: 1 },
            { id: '128', text: { en: 'Clint Eastwood', ar: 'كلينت إيستوود' }, allPlay: true, difficulty: 1 },
            { id: '129', text: { en: 'Elon Musk', ar: 'إيلون ماسك' }, allPlay: true, difficulty: 1 },
            { id: '130', text: { en: 'Bill Gates', ar: 'بيل جيتس' }, allPlay: true, difficulty: 1 },
            { id: '131', text: { en: 'Steve Jobs', ar: 'ستيف جوبز' }, allPlay: true, difficulty: 1 },
            { id: '132', text: { en: 'Mark Zuckerberg', ar: 'مارك زوكربيرج' }, allPlay: true, difficulty: 1 },
            { id: '133', text: { en: 'Stephen Hawking', ar: 'ستيفن هوكينج' }, allPlay: true, difficulty: 1 },
            { id: '134', text: { en: 'Lewis Hamilton', ar: 'لويس هاميلتون' }, allPlay: true, difficulty: 1 },
            { id: '135', text: { en: 'Tiger Woods', ar: 'تايجر وودز' }, allPlay: true, difficulty: 1 },
            { id: '136', text: { en: 'Venus Williams', ar: 'فينوس ويليامز' }, allPlay: true, difficulty: 1 },
            { id: '137', text: { en: 'Roger Moore', ar: 'روجر مور' }, allPlay: false, difficulty: 0 },
            { id: '138', text: { en: 'Sean Connery', ar: 'شون كونري' }, allPlay: true, difficulty: 1 },
            { id: '139', text: { en: 'Daniel Craig', ar: 'دانيال كريج' }, allPlay: true, difficulty: 1 },
            { id: '140', text: { en: 'Pierce Brosnan', ar: 'بيرس بروسنان' }, allPlay: true, difficulty: 1 },
            { id: '141', text: { en: 'George Clooney', ar: 'جورج كلوني' }, allPlay: false, difficulty: 0 },
            { id: '142', text: { en: 'Robin Williams', ar: 'روبن ويليامز' }, allPlay: true, difficulty: 1 },
            { id: '143', text: { en: 'Meryl Streep', ar: 'ميريل ستريب' }, allPlay: false, difficulty: 0 },
            { id: '144', text: { en: 'Julia Roberts', ar: 'جوليا روبرتس' }, allPlay: false, difficulty: 0 },
            { id: '145', text: { en: 'kylie Jenner', ar: 'كايلي جينر' }, allPlay: false, difficulty: 0 },
            { id: '146', text: { en: 'Kim Kardashian', ar: 'كيم كارداشيان' }, allPlay: false, difficulty: 0 },
            { id: '147', text: { en: 'Paris Hilton', ar: 'باريس هيلتون' }, allPlay: true, difficulty: 1 },
            { id: '148', text: { en: 'Lindsay Lohan', ar: 'ليندسي لوهان' }, allPlay: false, difficulty: 0 },
            { id: '149', text: { en: 'Britney Spears', ar: 'بريتني سبيرز' }, allPlay: true, difficulty: 1 },
            { id: '150', text: { en: 'Christina Aguilera', ar: 'كريستينا أغيليرا' }, allPlay: false, difficulty: 0 },
            { id: '151', text: { en: 'Pink', ar: 'بينك' }, allPlay: false, difficulty: 0 },
            { id: '152', text: { en: 'Dwayne Johnson', ar: 'دواين جونسون' }, allPlay: false, difficulty: 0 },
            { id: '153', text: { en: 'Justin Timberlake', ar: 'جاستن تيمبرليك' }, allPlay: false, difficulty: 0 },
            { id: '154', text: { en: 'Robert Downey Jr.', ar: 'روبرت داوني جونيور' }, allPlay: false, difficulty: 0 },
            { id: '155', text: { en: 'Scarlett Johansson', ar: 'سكارليت جوهانسون' }, allPlay: false, difficulty: 0 },
            { id: '156', text: { en: 'Angelina Jolie', ar: 'أنجلينا جولي' }, allPlay: false, difficulty: 0 },
            { id: '157', text: { en: 'Bill Clinton', ar: 'بيل كلينتون' }, allPlay: false, difficulty: 0 },
            { id: '158', text: { en: 'George W. Bush', ar: 'جورج دبليو بوش' }, allPlay: true, difficulty: 1 },
            { id: '159', text: { en: 'John F. Kennedy', ar: 'جون إف كينيدي' }, allPlay: false, difficulty: 0 },
            { id: '160', text: { en: 'Jim Carrey', ar: 'جيم كاري' }, allPlay: true, difficulty: 1 },
            { id: '161', text: { en: 'Adam Sandler', ar: 'آدم ساندلر' }, allPlay: false, difficulty: 0 },
            { id: '162', text: { en: 'Will Smith', ar: 'ويل سميث' }, allPlay: false, difficulty: 0 },
            { id: '163', text: { en: 'Jackie Chan', ar: 'جاكي شان' }, allPlay: true, difficulty: 1 },
            { id: '164', text: { en: 'Charles Darwin', ar: 'تشارلز داروين' }, allPlay: true, difficulty: 1 },
            { id: '165', text: { en: 'Vladimir Putin', ar: 'فلاديمير بوتين' }, allPlay: false, difficulty: 0 },
            { id: '166', text: { en: 'Donald Trump', ar: 'دونالد ترامب' }, allPlay: false, difficulty: 0 },
            { id: '167', text: { en: 'Nelson Mandela', ar: 'نيلسون مانديلا' }, allPlay: true, difficulty: 1 },
        ]
    },

    // --- BLUE Category (Places/Locations) ---
    {
        id: 'cat_blue',
        name: { en: 'Places/Locations', ar: 'أماكن/مواقع' },
        colorType: 'blue',
        words: [
            { id: '172', text: { en: 'Airport', ar: 'مطار' }, allPlay: false, difficulty: 0 },
            { id: '173', text: { en: 'Aquarium', ar: 'أكواريوم/حوض سمك' }, allPlay: false, difficulty: 0 },
            { id: '174', text: { en: 'Bakery', ar: 'مخبز/فرن' }, allPlay: false, difficulty: 0 },
            { id: '175', text: { en: 'Bank', ar: 'بنك' }, allPlay: false, difficulty: 0 },
            { id: '176', text: { en: 'Barber Shop', ar: 'صالون حلاقة' }, allPlay: false, difficulty: 0 },
            { id: '177', text: { en: 'Beach', ar: 'شاطئ/بلاچ' }, allPlay: false, difficulty: 0 },
            { id: '178', text: { en: 'Bookstore', ar: 'مكتبة (بيع كتب)' }, allPlay: true, difficulty: 1 },
            { id: '179', text: { en: 'Bridge', ar: 'كوبري' }, allPlay: true, difficulty: 1 },
            { id: '180', text: { en: 'Cafe', ar: 'كافيه/قهوة' }, allPlay: true, difficulty: 1 },
            { id: '181', text: { en: 'Campsite', ar: 'مخيم/معسكر' }, allPlay: true, difficulty: 1 },
            { id: '182', text: { en: 'Candy Store', ar: 'محل حلويات/بونبون' }, allPlay: true, difficulty: 1 },
            { id: '183', text: { en: 'Castle', ar: 'قلعة' }, allPlay: false, difficulty: 0 },
            { id: '184', text: { en: 'Circus', ar: 'سيرك' }, allPlay: true, difficulty: 1 },
            { id: '185', text: { en: 'City Hall', ar: 'مجلس المدينة/المحافظة' }, allPlay: true, difficulty: 1 },
            { id: '186', text: { en: 'Coal Mine', ar: 'منجم فحم' }, allPlay: true, difficulty: 1 },
            { id: '187', text: { en: 'College', ar: 'كلية' }, allPlay: false, difficulty: 0 },
            { id: '188', text: { en: 'Construction Site', ar: 'موقع بناء' }, allPlay: false, difficulty: 0 },
            { id: '189', text: { en: 'Countryside', ar: 'ريف' }, allPlay: false, difficulty: 0 },
            { id: '190', text: { en: 'Courthouse', ar: 'محكمة' }, allPlay: false, difficulty: 0 },
            { id: '191', text: { en: 'Dam', ar: 'سد' }, allPlay: false, difficulty: 0 },
            { id: '192', text: { en: 'Dance Studio', ar: 'استوديو رقص' }, allPlay: true, difficulty: 1 },
            { id: '193', text: { en: 'Daycare', ar: 'حضانة أطفال' }, allPlay: true, difficulty: 1 },
            { id: '194', text: { en: 'Department Store', ar: 'متجر متعدد الأقسام' }, allPlay: false, difficulty: 0 },
            { id: '195', text: { en: 'Desert', ar: 'صحراء' }, allPlay: false, difficulty: 0 },
            { id: '196', text: { en: 'Diner', ar: 'مطعم صغير (أمريكي)' }, allPlay: true, difficulty: 1 },
            { id: '197', text: { en: 'Disco', ar: 'ديسكو' }, allPlay: true, difficulty: 1 },
            { id: '198', text: { en: 'Dog Park', ar: 'حديقة كلاب' }, allPlay: false, difficulty: 0 },
            { id: '199', text: { en: 'Drugstore', ar: 'صيدلية' }, allPlay: false, difficulty: 0 },
            { id: '200', text: { en: 'Electric Station', ar: 'محطة كهرباء' }, allPlay: true, difficulty: 1 },
            { id: '201', text: { en: 'Elementary School', ar: 'مدرسة ابتدائي' }, allPlay: false, difficulty: 0 },
            { id: '202', text: { en: 'Farm', ar: 'مزرعة' }, allPlay: false, difficulty: 0 },
            { id: '203', text: { en: 'Fire Station', ar: 'محطة إطفاء' }, allPlay: false, difficulty: 0 },
            { id: '204', text: { en: 'Florist', ar: 'محل ورد' }, allPlay: false, difficulty: 0 },
            { id: '205', text: { en: 'Forest', ar: 'غابة' }, allPlay: true, difficulty: 1 },
            { id: '206', text: { en: 'Fossil Site', ar: 'موقع حفريات' }, allPlay: true, difficulty: 1 },
            { id: '207', text: { en: 'Garage', ar: 'جراج/ورشة تصليح' }, allPlay: true, difficulty: 1 },
            { id: '208', text: { en: 'Gas Station', ar: 'محطة بنزين' }, allPlay: false, difficulty: 0 },
            { id: '209', text: { en: 'Glasshouse', ar: 'صوبة زجاجية' }, allPlay: true, difficulty: 1 },
            { id: '210', text: { en: 'Golf Course', ar: 'ملعب جولف' }, allPlay: false, difficulty: 0 },
            { id: '211', text: { en: 'Grocery Store', ar: 'بقالة/سوبر ماركت' }, allPlay: true, difficulty: 1 },
            { id: '212', text: { en: 'Gym', ar: 'چيم/صالة ألعاب رياضية' }, allPlay: true, difficulty: 1 },
            { id: '213', text: { en: 'Hair Salon', ar: 'كوافير/صالون تجميل' }, allPlay: true, difficulty: 1 },
            { id: '214', text: { en: 'Hardware Store', ar: 'محل حدايد وبويات' }, allPlay: false, difficulty: 0 },
            { id: '215', text: { en: 'High School', ar: 'مدرسة ثانوي' }, allPlay: true, difficulty: 1 },
            { id: '216', text: { en: 'Hospital', ar: 'مستشفى' }, allPlay: true, difficulty: 1 },
            { id: '217', text: { en: 'Hotel', ar: 'فندق/أوتيل' }, allPlay: false, difficulty: 0 },
            { id: '218', text: { en: 'Ice Cream Shop', ar: 'محل أيس كريم' }, allPlay: true, difficulty: 1 },
            { id: '219', text: { en: 'Ice Rink', ar: 'صالة تزلج على الجليد' }, allPlay: false, difficulty: 0 },
            { id: '220', text: { en: 'Island', ar: 'جزيرة' }, allPlay: false, difficulty: 0 },
            { id: '221', text: { en: 'Jail', ar: 'سجن/حبس' }, allPlay: false, difficulty: 0 },
            { id: '222', text: { en: 'Jewelry Store', ar: 'محل مجوهرات' }, allPlay: false, difficulty: 0 },
            { id: '223', text: { en: 'Junkyard', ar: 'خردة/مخزن خردة' }, allPlay: true, difficulty: 1 },
            { id: '224', text: { en: 'Kindergarten', ar: 'روضة أطفال/KG' }, allPlay: true, difficulty: 1 },
            { id: '225', text: { en: 'Kitchen', ar: 'مطبخ' }, allPlay: true, difficulty: 1 },
            { id: '226', text: { en: 'Labyrinth', ar: 'متاهة' }, allPlay: true, difficulty: 1 },
            { id: '227', text: { en: 'Lake', ar: 'بحيرة' }, allPlay: true, difficulty: 1 },
            { id: '228', text: { en: 'Laundromat', ar: 'مغسلة (بالعملة)' }, allPlay: false, difficulty: 0 },
            { id: '229', text: { en: 'Library', ar: 'مكتبة (للقراءة)' }, allPlay: true, difficulty: 1 },
            { id: '230', text: { en: 'Lighthouse', ar: 'منارة' }, allPlay: true, difficulty: 1 },
            { id: '231', text: { en: 'Mall', ar: 'مول/مركز تجاري' }, allPlay: false, difficulty: 0 },
            { id: '232', text: { en: 'Marina', ar: 'مارينا/مرسى يخوت' }, allPlay: true, difficulty: 1 },
            { id: '233', text: { en: 'Marketplace', ar: 'سوق' }, allPlay: true, difficulty: 1 },
            { id: '234', text: { en: 'Maze', ar: 'متاهة' }, allPlay: false, difficulty: 0 }, // Duplicate of Labyrinth
            { id: '235', text: { en: 'Middle School', ar: 'مدرسة إعدادي' }, allPlay: true, difficulty: 1 },
            { id: '236', text: { en: 'Movie Theater', ar: 'سينما' }, allPlay: false, difficulty: 0 },
            { id: '237', text: { en: 'Museum', ar: 'متحف' }, allPlay: true, difficulty: 1 },
            { id: '238', text: { en: 'Music Store', ar: 'محل آلات موسيقية' }, allPlay: false, difficulty: 0 },
            { id: '239', text: { en: 'Nursery', ar: 'مشتل (نباتات)' }, allPlay: true, difficulty: 1 },
            { id: '240', text: { en: 'Office', ar: 'مكتب' }, allPlay: true, difficulty: 1 },
            { id: '241', text: { en: 'Oil Rig', ar: 'منصة بترول' }, allPlay: true, difficulty: 1 },
            { id: '242', text: { en: 'Orchard', ar: 'بستان فاكهة' }, allPlay: false, difficulty: 0 },
            { id: '243', text: { en: 'Pacific Ocean', ar: 'المحيط الهادي' }, allPlay: true, difficulty: 1 },
            { id: '244', text: { en: 'Paintball Arena', ar: 'ملعب بينتبول' }, allPlay: false, difficulty: 0 },
            { id: '245', text: { en: 'Park', ar: 'حديقة/منتزه' }, allPlay: true, difficulty: 1 },
            { id: '246', text: { en: 'Parking Lot', ar: 'موقف عربيات/باركينج' }, allPlay: false, difficulty: 0 },
            { id: '247', text: { en: 'Pet Shop', ar: 'محل حيوانات أليفة' }, allPlay: false, difficulty: 0 },
            { id: '248', text: { en: 'Pharmacy', ar: 'صيدلية/أجزخانة' }, allPlay: true, difficulty: 1 },
            { id: '249', text: { en: 'Picnic Area', ar: 'مكان للنزهة' }, allPlay: false, difficulty: 0 },
            { id: '250', text: { en: 'Pier', ar: 'رصيف ميناء/لسان بحري' }, allPlay: false, difficulty: 0 },
            { id: '251', text: { en: 'Pizzeria', ar: 'محل بيتزا' }, allPlay: false, difficulty: 0 },
            { id: '252', text: { en: 'Planetarium', ar: 'قبة سماوية' }, allPlay: true, difficulty: 1 },
            { id: '253', text: { en: 'Playground', ar: 'ملعب أطفال/ملاهي' }, allPlay: false, difficulty: 0 },
            { id: '254', text: { en: 'Police Station', ar: 'قسم شرطة' }, allPlay: false, difficulty: 0 },
            { id: '255', text: { en: 'Pond', ar: 'بركة ماء' }, allPlay: false, difficulty: 0 },
            { id: '256', text: { en: 'Pool', ar: 'حمام سباحة/بيسين' }, allPlay: false, difficulty: 0 },
            { id: '257', text: { en: 'Post Office', ar: 'مكتب بريد/بوستة' }, allPlay: true, difficulty: 1 },
            { id: '258', text: { en: 'Power Plant', ar: 'محطة طاقة' }, allPlay: false, difficulty: 0 },
            { id: '259', text: { en: 'Prison', ar: 'سجن' }, allPlay: true, difficulty: 1 },
            { id: '260', text: { en: 'Pub', ar: 'بار/حانة' }, allPlay: false, difficulty: 0 },
            { id: '261', text: { en: 'Race Track', ar: 'مضمار سباق' }, allPlay: false, difficulty: 0 },
            { id: '262', text: { en: 'Radio Station', ar: 'محطة راديو' }, allPlay: false, difficulty: 0 },
            { id: '263', text: { en: 'Railway', ar: 'سكة حديد' }, allPlay: false, difficulty: 0 },
            { id: '264', text: { en: 'Ranch', ar: 'مزرعة (كبيرة/خيول)' }, allPlay: false, difficulty: 0 },
            { id: '265', text: { en: 'Recording Studio', ar: 'استوديو تسجيل' }, allPlay: false, difficulty: 0 },
            { id: '266', text: { en: 'Recycling Center', ar: 'مركز إعادة تدوير' }, allPlay: true, difficulty: 1 },
            { id: '267', text: { en: 'Restaurant', ar: 'مطعم' }, allPlay: false, difficulty: 0 },
            { id: '268', text: { en: 'River', ar: 'نهر' }, allPlay: true, difficulty: 1 },
            { id: '269', text: { en: 'Road', ar: 'طريق' }, allPlay: true, difficulty: 1 },
            { id: '270', text: { en: 'Roller Coaster', ar: 'قطار الملاهي' }, allPlay: true, difficulty: 1 },
            { id: '271', text: { en: 'Rooftop', ar: 'سطح (مبنى)' }, allPlay: false, difficulty: 0 },
            { id: '272', text: { en: 'Sailing Club', ar: 'نادي شراع' }, allPlay: false, difficulty: 0 },
            { id: '273', text: { en: 'School', ar: 'مدرسة' }, allPlay: true, difficulty: 1 },
            { id: '274', text: { en: 'Seashore', ar: 'شاطئ البحر' }, allPlay: true, difficulty: 1 },
            { id: '275', text: { en: 'Shoe Store', ar: 'محل أحذية' }, allPlay: true, difficulty: 1 },
            { id: '276', text: { en: 'Shopping Center', ar: 'مركز تسوق' }, allPlay: true, difficulty: 1 },
            { id: '277', text: { en: 'Skate Park', ar: 'ساحة تزلج' }, allPlay: true, difficulty: 1 },
            { id: '278', text: { en: 'Ski Lodge', ar: 'منتجع تزلج' }, allPlay: true, difficulty: 1 },
            { id: '279', text: { en: 'Skyline', ar: 'أفق المدينة' }, allPlay: false, difficulty: 0 },
            { id: '280', text: { en: 'Skyscraper', ar: 'ناطحة سحاب' }, allPlay: true, difficulty: 1 },
            { id: '281', text: { en: 'Slaughterhouse', ar: 'مدبح/مجزرة' }, allPlay: true, difficulty: 1 },
            { id: '282', text: { en: 'Spa', ar: 'سبا/منتجع صحي' }, allPlay: true, difficulty: 1 },
            { id: '283', text: { en: 'Space Station', ar: 'محطة فضاء' }, allPlay: true, difficulty: 1 },
            { id: '284', text: { en: 'Stadium', ar: 'استاد/ملعب' }, allPlay: false, difficulty: 0 },
            { id: '285', text: { en: 'Supermarket', ar: 'سوبر ماركت' }, allPlay: false, difficulty: 0 },
            { id: '286', text: { en: 'Swamp', ar: 'مستنقع' }, allPlay: true, difficulty: 1 },
            { id: '287', text: { en: 'Swimming Pool', ar: 'حمام سباحة/بيسين' }, allPlay: false, difficulty: 0 }, // Duplicate of Pool
            { id: '288', text: { en: 'Television Station', ar: 'محطة تليفزيون' }, allPlay: false, difficulty: 0 },
            { id: '289', text: { en: 'Tennis Court', ar: 'ملعب تنس' }, allPlay: false, difficulty: 0 },
            { id: '290', text: { en: 'Train Station', ar: 'محطة قطار' }, allPlay: true, difficulty: 1 },
            { id: '291', text: { en: 'Treehouse', ar: 'بيت شجرة' }, allPlay: false, difficulty: 0 },
            { id: '292', text: { en: 'Tunnel', ar: 'نفق' }, allPlay: true, difficulty: 1 },
            { id: '293', text: { en: 'Underground', ar: 'مترو الأنفاق' }, allPlay: false, difficulty: 0 },
            { id: '294', text: { en: 'University', ar: 'جامعة' }, allPlay: true, difficulty: 1 },
            { id: '295', text: { en: 'Valley', ar: 'وادي' }, allPlay: true, difficulty: 1 },
            { id: '296', text: { en: 'Vet Clinic', ar: 'عيادة بيطرية' }, allPlay: true, difficulty: 1 },
            { id: '297', text: { en: 'Video Store', ar: 'محل فيديو (قديم!)' }, allPlay: true, difficulty: 1 },
            { id: '298', text: { en: 'Volcano', ar: 'بركان' }, allPlay: true, difficulty: 1 },
            { id: '299', text: { en: 'Warehouse', ar: 'مخزن' }, allPlay: false, difficulty: 0 },
            { id: '300', text: { en: 'Waterfall', ar: 'شلال' }, allPlay: true, difficulty: 1 },
            { id: '301', text: { en: 'Windmill', ar: 'طاحونة هواء' }, allPlay: true, difficulty: 1 },
            { id: '302', text: { en: 'Winery', ar: 'مصنع نبيذ' }, allPlay: true, difficulty: 1 },
            { id: '303', text: { en: 'Workshop', ar: 'ورشة عمل' }, allPlay: true, difficulty: 1 },
            { id: '304', text: { en: 'Zoo', ar: 'حديقة حيوان' }, allPlay: true, difficulty: 1 },
            { id: '305', text: { en: 'Great Wall of China', ar: 'سور الصين العظيم' }, allPlay: false, difficulty: 0 },
            { id: '306', text: { en: 'Eiffel Tower', ar: 'برج إيفل' }, allPlay: false, difficulty: 0 },
            { id: '307', text: { en: 'Pyramids of Giza', ar: 'أهرامات الجيزة' }, allPlay: true, difficulty: 1 },
            { id: '308', text: { en: 'Taj Mahal', ar: 'تاج محل' }, allPlay: true, difficulty: 1 },
            { id: '309', text: { en: 'Grand Canyon', ar: 'جراند كانيون' }, allPlay: true, difficulty: 1 },
            { id: '310', text: { en: 'Niagara Falls', ar: 'شلالات نياجرا' }, allPlay: false, difficulty: 0 },
            { id: '311', text: { en: 'Sydney Opera House', ar: 'دار أوبرا سيدني' }, allPlay: false, difficulty: 0 },
            { id: '312', text: { en: 'Mount Fuji', ar: 'جبل فوجي' }, allPlay: true, difficulty: 1 },
            { id: '313', text: { en: 'The Colosseum', ar: 'الكولوسيوم' }, allPlay: false, difficulty: 0 },
            { id: '314', text: { en: 'Stonehenge', ar: 'ستونهنج' }, allPlay: true, difficulty: 1 },
            { id: '315', text: { en: 'Machu Picchu', ar: 'ماتشو بيتشو' }, allPlay: true, difficulty: 1 },
            { id: '316', text: { en: 'Statue of Liberty', ar: 'تمثال الحرية' }, allPlay: true, difficulty: 1 },
            { id: '317', text: { en: 'Louvre Museum', ar: 'متحف اللوفر' }, allPlay: true, difficulty: 1 },
            { id: '318', text: { en: 'London Eye', ar: 'عين لندن' }, allPlay: true, difficulty: 1 },
            { id: '319', text: { en: 'Leaning Tower of Pisa', ar: 'برج بيزا المائل' }, allPlay: false, difficulty: 0 },
            { id: '320', text: { en: 'Tower Bridge', ar: 'جسر البرج (لندن)' }, allPlay: false, difficulty: 0 },
            { id: '321', text: { en: 'Red Square', ar: 'الميدان الأحمر (موسكو)' }, allPlay: true, difficulty: 1 },
            { id: '322', text: { en: 'Times Square', ar: 'تايمز سكوير (نيويورك)' }, allPlay: false, difficulty: 0 },
            { id: '323', text: { en: 'Buckingham Palace', ar: 'قصر باكنجهام' }, allPlay: false, difficulty: 0 },
            { id: '324', text: { en: 'Central Park', ar: 'سنترال بارك (نيويورك)' }, allPlay: true, difficulty: 1 },
            { id: '325', text: { en: 'Golden Gate Bridge', ar: 'جسر البوابة الذهبية' }, allPlay: true, difficulty: 1 },
            { id: '326', text: { en: 'Hawaii', ar: 'هاواي' }, allPlay: false, difficulty: 0 },
            { id: '327', text: { en: 'Hollywood Sign', ar: 'علامة هوليوود' }, allPlay: true, difficulty: 1 },
            { id: '328', text: { en: 'Antarctica', ar: 'القارة القطبية الجنوبية' }, allPlay: false, difficulty: 0 },
            { id: '329', text: { en: 'Sahara Desert', ar: 'الصحراء الكبرى' }, allPlay: true, difficulty: 1 },
            { id: '330', text: { en: 'Mount Everest', ar: 'جبل إفرست' }, allPlay: true, difficulty: 1 },
            { id: '331', text: { en: 'Amazon Rainforest', ar: 'غابات الأمازون المطيرة' }, allPlay: true, difficulty: 1 },
            { id: '332', text: { en: 'Brooklyn Bridge', ar: 'جسر بروكلين' }, allPlay: false, difficulty: 0 },
            { id: '333', text: { en: 'Burj Khalifa', ar: 'برج خليفة' }, allPlay: false, difficulty: 0 },
            { id: '334', text: { en: 'Chichen Itza', ar: 'تشيتشن إيتزا' }, allPlay: true, difficulty: 1 },
            { id: '335', text: { en: 'Mount Rushmore', ar: 'جبل راشمور' }, allPlay: true, difficulty: 1 },
            { id: '336', text: { en: 'Ganges River', ar: 'نهر الجانج' }, allPlay: false, difficulty: 0 },
            { id: '337', text: { en: 'Alps', ar: 'جبال الألب' }, allPlay: false, difficulty: 0 },
            { id: '338', text: { en: 'Dead Sea', ar: 'البحر الميت' }, allPlay: true, difficulty: 1 },
            { id: '339', text: { en: 'Dubai Mall', ar: 'دبي مول' }, allPlay: false, difficulty: 0 },
            { id: '340', text: { en: 'Statue of Christ the Redeemer', ar: 'تمثال المسيح الفادي' }, allPlay: true, difficulty: 1 },
            { id: '341', text: { en: 'The White House', ar: 'البيت الأبيض' }, allPlay: false, difficulty: 0 },
        ]
    },

    // --- ORANGE Category (Objects/Items) ---
    {
        id: 'cat_orange',
        name: { en: 'Objects/Items', ar: 'أشياء/أغراض' },
        colorType: 'orange',
        words: [
            { id: '342', text: { en: 'Airplane', ar: 'طيارة' }, allPlay: true, difficulty: 1 },
            { id: '343', text: { en: 'Anchor', ar: 'مرساة/هلب' }, allPlay: false, difficulty: 0 },
            { id: '344', text: { en: 'Anvil', ar: 'سندان' }, allPlay: false, difficulty: 0 },
            { id: '345', text: { en: 'Axe', ar: 'فأس/بلطة' }, allPlay: false, difficulty: 0 },
            { id: '346', text: { en: 'Backpack', ar: 'شنطة ظهر' }, allPlay: true, difficulty: 1 },
            { id: '347', text: { en: 'Bag', ar: 'شنطة/كيس' }, allPlay: false, difficulty: 0 },
            { id: '348', text: { en: 'Balloon', ar: 'بلونة' }, allPlay: false, difficulty: 0 },
            { id: '349', text: { en: 'Bangle', ar: 'غويشة' }, allPlay: false, difficulty: 0 },
            { id: '350', text: { en: 'Banknote', ar: 'ورقة بنكنوت/فلوس ورق' }, allPlay: true, difficulty: 1 },
            { id: '351', text: { en: 'Baseball bat', ar: 'مضرب بيسبول' }, allPlay: true, difficulty: 1 },
            { id: '352', text: { en: 'Bathtub', ar: 'بانيو' }, allPlay: false, difficulty: 0 },
            { id: '353', text: { en: 'Battery', ar: 'بطارية/حجر' }, allPlay: true, difficulty: 1 },
            { id: '354', text: { en: 'Bell', ar: 'جرس' }, allPlay: false, difficulty: 0 },
            { id: '355', text: { en: 'Belt', ar: 'حزام' }, allPlay: true, difficulty: 1 },
            { id: '356', text: { en: 'Binoculars', ar: 'منظار/دربيل' }, allPlay: true, difficulty: 1 },
            { id: '357', text: { en: 'Birdcage', ar: 'قفص عصافير' }, allPlay: true, difficulty: 1 },
            { id: '358', text: { en: 'Bookshelf', ar: 'رف كتب/مكتبة' }, allPlay: false, difficulty: 0 },
            { id: '359', text: { en: 'Broom', ar: 'مقشة' }, allPlay: false, difficulty: 0 },
            { id: '360', text: { en: 'Bucket', ar: 'جردل' }, allPlay: false, difficulty: 0 },
            { id: '361', text: { en: 'Bulldozer', ar: 'بلدوزر' }, allPlay: true, difficulty: 1 },
            { id: '362', text: { en: 'Bullet', ar: 'رصاصة' }, allPlay: true, difficulty: 1 },
            { id: '363', text: { en: 'Bumper car', ar: 'عربية تصادم (ملاهي)' }, allPlay: true, difficulty: 1 },
            { id: '364', text: { en: 'Butterfly net', ar: 'شبكة فراشات' }, allPlay: true, difficulty: 1 },
            { id: '365', text: { en: 'Button', ar: 'زرار' }, allPlay: true, difficulty: 1 },
            { id: '366', text: { en: 'Cane', ar: 'عصاية/عكاز' }, allPlay: false, difficulty: 0 },
            { id: '367', text: { en: 'Cannon', ar: 'مدفع' }, allPlay: false, difficulty: 0 },
            { id: '368', text: { en: 'Canoe', ar: 'زورق/كانو' }, allPlay: false, difficulty: 0 },
            { id: '369', text: { en: 'Cap', ar: 'كاب/طاقية' }, allPlay: false, difficulty: 0 },
            { id: '370', text: { en: 'Carabiner', ar: 'حلقة تسلق/كارابينا' }, allPlay: false, difficulty: 0 },
            { id: '371', text: { en: 'Carousel', ar: 'كاروسيل/لعبة الخيل الدوارة' }, allPlay: false, difficulty: 0 },
            { id: '372', text: { en: 'Cart', ar: 'عربية (سوق/يد)' }, allPlay: false, difficulty: 0 },
            { id: '373', text: { en: 'Cash register', ar: 'ماكينة كاشير' }, allPlay: false, difficulty: 0 },
            { id: '374', text: { en: 'Cassette Tape', ar: 'شريط كاسيت' }, allPlay: true, difficulty: 1 },
            { id: '375', text: { en: 'Catapult', ar: 'منجنيق' }, allPlay: false, difficulty: 0 },
            { id: '376', text: { en: 'Chain', ar: 'سلسلة/جنزير' }, allPlay: false, difficulty: 0 },
            { id: '377', text: { en: 'Chalk', ar: 'طباشير' }, allPlay: false, difficulty: 0 },
            { id: '378', text: { en: 'Chess piece', ar: 'قطعة شطرنج' }, allPlay: false, difficulty: 0 },
            { id: '379', text: { en: 'Chisel', ar: 'أزميل' }, allPlay: false, difficulty: 0 },
            { id: '380', text: { en: 'Cigar', ar: 'سيجار' }, allPlay: true, difficulty: 1 },
            { id: '381', text: { en: 'Clamp', ar: 'مشبك/قمطة' }, allPlay: true, difficulty: 1 },
            { id: '382', text: { en: 'Clip', ar: 'مشبك ورق/شعر' }, allPlay: true, difficulty: 1 },
            { id: '383', text: { en: 'Clipboard', ar: 'لوح كتابة بمشبك' }, allPlay: true, difficulty: 1 },
            { id: '384', text: { en: 'Clown fish', ar: 'سمكة المهرج (نيمو)' }, allPlay: false, difficulty: 0 }, // Technically an animal, fits 'object'? Or move to Red? Let's keep for now.
            { id: '385', text: { en: 'Coaster', ar: 'كوستر (قاعدة كوب)' }, allPlay: false, difficulty: 0 },
            { id: '386', text: { en: 'Coat hanger', ar: 'شماعة هدوم' }, allPlay: true, difficulty: 1 },
            { id: '387', text: { en: 'Compass (tool)', ar: 'برجل' }, allPlay: false, difficulty: 0 },
            { id: '388', text: { en: 'Compass (direction)', ar: 'بوصلة' }, allPlay: true, difficulty: 1 },
            { id: '389', text: { en: 'Cork', ar: 'فِلّينة' }, allPlay: false, difficulty: 0 },
            { id: '390', text: { en: 'Crane (machine)', ar: 'ونش' }, allPlay: false, difficulty: 0 },
            { id: '391', text: { en: 'Crib', ar: 'سرير أطفال' }, allPlay: true, difficulty: 1 },
            { id: '392', text: { en: 'Crutch', ar: 'عكاز (تحت الذراع)' }, allPlay: false, difficulty: 0 },
            { id: '393', text: { en: 'Cube', ar: 'مكعب' }, allPlay: true, difficulty: 1 },
            { id: '394', text: { en: 'Cupboard', ar: 'دولاب (مطبخ/تخزين)' }, allPlay: false, difficulty: 0 },
            { id: '395', text: { en: 'Curling stone', ar: 'حجر الكيرلنج' }, allPlay: true, difficulty: 1 },
            { id: '396', text: { en: 'Darts', ar: 'لعبة السهام/الدارتس' }, allPlay: true, difficulty: 1 },
            { id: '397', text: { en: 'Dice', ar: 'زهر (طاولة)' }, allPlay: false, difficulty: 0 },
            { id: '398', text: { en: 'Doorbell', ar: 'جرس الباب' }, allPlay: false, difficulty: 0 },
            { id: '399', text: { en: 'Dumbbell', ar: 'دمبل (حديد أثقال)' }, allPlay: true, difficulty: 1 },
            { id: '400', text: { en: 'Eagle', ar: 'نسر' }, allPlay: false, difficulty: 0 }, // Animal, move to Red?
            { id: '401', text: { en: 'Earmuffs', ar: 'غطاء أذن (تدفئة)' }, allPlay: false, difficulty: 0 },
            { id: '402', text: { en: 'Earphones', ar: 'سماعات أذن' }, allPlay: false, difficulty: 0 },
            { id: '403', text: { en: 'Earring', ar: 'حلق' }, allPlay: false, difficulty: 0 },
            { id: '404', text: { en: 'Easel', ar: 'حامل لوحة رسم' }, allPlay: false, difficulty: 0 },
            { id: '405', text: { en: 'Elevator', ar: 'أسانسير' }, allPlay: false, difficulty: 0 },
            { id: '406', text: { en: 'Eraser', ar: 'أستيكة/ممحاة' }, allPlay: false, difficulty: 0 },
            { id: '407', text: { en: 'Escalator', ar: 'سلم كهربائي' }, allPlay: true, difficulty: 1 },
            { id: '408', text: { en: 'Excavator', ar: 'حفار' }, allPlay: false, difficulty: 0 },
            { id: '409', text: { en: 'Eye dropper', ar: 'قطارة (عين)' }, allPlay: false, difficulty: 0 },
            { id: '410', text: { en: 'Face mask', ar: 'كمامة/ماسك وجه' }, allPlay: true, difficulty: 1 },
            { id: '411', text: { en: 'Fan', ar: 'مروحة' }, allPlay: false, difficulty: 0 },
            { id: '412', text: { en: 'Feather', ar: 'ريشة' }, allPlay: false, difficulty: 0 },
            { id: '413', text: { en: 'Fence', ar: 'سور/سياج' }, allPlay: false, difficulty: 0 },
            { id: '414', text: { en: 'Fire extinguisher', ar: 'طفاية حريق' }, allPlay: false, difficulty: 0 },
            { id: '415', text: { en: 'Firework', ar: 'ألعاب نارية/صاروخ' }, allPlay: true, difficulty: 1 },
            { id: '416', text: { en: 'Flashlight', ar: 'كشاف (يدوي)' }, allPlay: false, difficulty: 0 },
            { id: '417', text: { en: 'Flip flops', ar: 'شبشب صباع' }, allPlay: false, difficulty: 0 },
            { id: '418', text: { en: 'Glockenspiel', ar: 'جلوكنشبيل (آلة موسيقية)' }, allPlay: false, difficulty: 0 },
            { id: '419', text: { en: 'Globe', ar: 'كرة أرضية' }, allPlay: true, difficulty: 1 },
            { id: '420', text: { en: 'Glue', ar: 'صمغ/غراء' }, allPlay: false, difficulty: 0 },
            { id: '421', text: { en: 'Goggles', ar: 'نظارة واقية (سباحة/معمل)' }, allPlay: true, difficulty: 1 },
            { id: '422', text: { en: 'Gramophone', ar: 'جرامافون/بيكم' }, allPlay: false, difficulty: 0 },
            { id: '423', text: { en: 'Grater', ar: 'مبشرة' }, allPlay: false, difficulty: 0 },
            { id: '424', text: { en: 'Grill', ar: 'شواية' }, allPlay: true, difficulty: 1 },
            { id: '425', text: { en: 'Hairbrush', ar: 'فرشاة شعر' }, allPlay: false, difficulty: 0 },
            { id: '426', text: { en: 'Hairpin', ar: 'بنسة شعر/دبوس شعر' }, allPlay: false, difficulty: 0 },
            { id: '427', text: { en: 'Hammer', ar: 'شاكوش' }, allPlay: false, difficulty: 0 },
            { id: '428', text: { en: 'Harmonica', ar: 'هارمونيكا' }, allPlay: false, difficulty: 0 },
            { id: '429', text: { en: 'Hat rack', ar: 'شماعة قبعات' }, allPlay: true, difficulty: 1 },
            { id: '430', text: { en: 'Headphones', ar: 'سماعات رأس' }, allPlay: true, difficulty: 1 },
            { id: '431', text: { en: 'Helmet', ar: 'خوذة' }, allPlay: false, difficulty: 0 },
            { id: '432', text: { en: 'Hourglass', ar: 'ساعة رملية' }, allPlay: true, difficulty: 1 },
            { id: '433', text: { en: 'Iron', ar: 'مكواة' }, allPlay: true, difficulty: 1 },
            { id: '434', text: { en: 'Jack in the box', ar: 'لعبة جاك في الصندوق' }, allPlay: true, difficulty: 1 },
            { id: '435', text: { en: 'Jeans', ar: 'بنطلون جينز' }, allPlay: false, difficulty: 0 },
            { id: '436', text: { en: 'Jigsaw puzzle', ar: 'بازل صور مقطعة' }, allPlay: false, difficulty: 0 },
            { id: '437', text: { en: 'Jug', ar: 'إبريق/شفشق' }, allPlay: false, difficulty: 0 },
            { id: '438', text: { en: 'Kettle', ar: 'غلاية شاي/كاتل' }, allPlay: false, difficulty: 0 },
            { id: '439', text: { en: 'Key', ar: 'مفتاح' }, allPlay: false, difficulty: 0 },
            { id: '440', text: { en: 'Keyboard', ar: 'كيبورد/لوحة مفاتيح' }, allPlay: false, difficulty: 0 },
            { id: '441', text: { en: 'Lamp', ar: 'لمبة/مصباح/أباجورة' }, allPlay: true, difficulty: 1 },
            { id: '442', text: { en: 'Latch', ar: 'ترباس/مزلاج' }, allPlay: false, difficulty: 0 },
            { id: '443', text: { en: 'Ladder', ar: 'سلم (خشبي/معدني)' }, allPlay: true, difficulty: 1 },
            { id: '444', text: { en: 'Magnifying glass', ar: 'عدسة مكبرة' }, allPlay: true, difficulty: 1 },
            { id: '445', text: { en: 'Microscope', ar: 'ميكروسكوب' }, allPlay: false, difficulty: 0 },
            { id: '446', text: { en: 'Mirror', ar: 'مراية' }, allPlay: false, difficulty: 0 },
            { id: '447', text: { en: 'Mop', ar: 'شرشوبة/ممسحة' }, allPlay: true, difficulty: 1 },
            { id: '448', text: { en: 'Motorcycle', ar: 'موتوسيكل' }, allPlay: true, difficulty: 1 },
            { id: '449', text: { en: 'Nail', ar: 'مسمار' }, allPlay: false, difficulty: 0 },
            { id: '450', text: { en: 'Necktie', ar: 'كرافتة' }, allPlay: false, difficulty: 0 },
            { id: '451', text: { en: 'Notepad', ar: 'نوتة/دفتر ملاحظات' }, allPlay: true, difficulty: 1 },
            { id: '452', text: { en: 'Paint can', ar: 'علبة بوية/دهان' }, allPlay: true, difficulty: 1 },
            { id: '453', text: { en: 'Paint roller', ar: 'رولة دهان' }, allPlay: true, difficulty: 1 },
            { id: '454', text: { en: 'Paperclip', ar: 'مشبك ورق' }, allPlay: false, difficulty: 0 },
            { id: '455', text: { en: 'Password', ar: 'باسورد/كلمة سر' }, allPlay: false, difficulty: 0 },
            { id: '456', text: { en: 'Pendulum', ar: 'بندول' }, allPlay: true, difficulty: 1 },
            { id: '457', text: { en: 'Pen', ar: 'قلم جاف' }, allPlay: true, difficulty: 1 },
            { id: '458', text: { en: 'Photo frame', ar: 'برواز صورة' }, allPlay: true, difficulty: 1 },
            { id: '459', text: { en: 'Pinwheel', ar: 'مروحة ورق/لعبة دوارة' }, allPlay: false, difficulty: 0 },
            { id: '460', text: { en: 'Punching bag', ar: 'كيس ملاكمة' }, allPlay: true, difficulty: 1 },
            { id: '461', text: { en: 'Quilt', ar: 'لحاف' }, allPlay: true, difficulty: 1 },
            { id: '462', text: { en: 'Radio', ar: 'راديو' }, allPlay: false, difficulty: 0 },
            { id: '463', text: { en: 'Raincoat', ar: 'معطف مطر/مشمع' }, allPlay: true, difficulty: 1 },
            { id: '464', text: { en: 'Rake', ar: 'مجرفة (حديقة)' }, allPlay: true, difficulty: 1 },
            { id: '465', text: { en: 'Razor', ar: 'موس حلاقة' }, allPlay: false, difficulty: 0 },
            { id: '466', text: { en: 'Remote control', ar: 'ريموت كنترول' }, allPlay: true, difficulty: 1 },
            { id: '467', text: { en: 'Rocket', ar: 'صاروخ' }, allPlay: true, difficulty: 1 },
            { id: '468', text: { en: 'Rubber duck', ar: 'بطة مطاط (لعبة)' }, allPlay: false, difficulty: 0 },
            { id: '469', text: { en: 'Rug', ar: 'سجادة صغيرة' }, allPlay: false, difficulty: 0 },
            { id: '470', text: { en: 'Safe', ar: 'خزنة' }, allPlay: false, difficulty: 0 },
            { id: '471', text: { en: 'Sailboat', ar: 'مركب شراعي' }, allPlay: false, difficulty: 0 },
            { id: '472', text: { en: 'Sandbox', ar: 'صندوق رمل (للعب)' }, allPlay: false, difficulty: 0 },
            { id: '473', text: { en: 'Scooter', ar: 'سكوتر' }, allPlay: true, difficulty: 1 },
            { id: '474', text: { en: 'Screwdriver', ar: 'مفك' }, allPlay: false, difficulty: 0 },
            { id: '475', text: { en: 'Sewing machine', ar: 'ماكينة خياطة' }, allPlay: false, difficulty: 0 },
            { id: '476', text: { en: 'Shampoo', ar: 'شامبو' }, allPlay: true, difficulty: 1 },
            { id: '477', text: { en: 'Shirt', ar: 'قميص' }, allPlay: true, difficulty: 1 },
            { id: '478', text: { en: 'Shoe', ar: 'حذاء/جزمة' }, allPlay: true, difficulty: 1 },
            { id: '479', text: { en: 'Skateboard', ar: 'لوح تزلج/سكيت بورد' }, allPlay: true, difficulty: 1 },
            { id: '480', text: { en: 'Skis', ar: 'زلاجات (ثلج)' }, allPlay: true, difficulty: 1 },
            { id: '481', text: { en: 'Snorkel', ar: 'أنبوب تنفس (غطس)' }, allPlay: true, difficulty: 1 },
            { id: '482', text: { en: 'Sponge', ar: 'سفنجة' }, allPlay: false, difficulty: 0 },
            { id: '483', text: { en: 'Spoon', ar: 'ملعقة' }, allPlay: false, difficulty: 0 },
            { id: '484', text: { en: 'Stapler', ar: 'دباسة' }, allPlay: false, difficulty: 0 },
            { id: '485', text: { en: 'Stethoscope', ar: 'سماعة طبيب' }, allPlay: true, difficulty: 1 },
            { id: '486', text: { en: 'Stopwatch', ar: 'ساعة إيقاف' }, allPlay: false, difficulty: 0 },
            { id: '487', text: { en: 'Stove', ar: 'بوتاجاز/موقد' }, allPlay: false, difficulty: 0 },
            { id: '488', text: { en: 'Submarine', ar: 'غواصة' }, allPlay: true, difficulty: 1 },
            { id: '489', text: { en: 'Sun hat', ar: 'قبعة شمس' }, allPlay: true, difficulty: 1 },
            { id: '490', text: { en: 'Teapot', ar: 'براد شاي' }, allPlay: false, difficulty: 0 },
            { id: '491', text: { en: 'Telescope', ar: 'تليسكوب' }, allPlay: true, difficulty: 1 },
            { id: '492', text: { en: 'Television', ar: 'تليفزيون' }, allPlay: true, difficulty: 1 },
            { id: '493', text: { en: 'Thermometer', ar: 'ترمومتر' }, allPlay: true, difficulty: 1 },
            { id: '494', text: { en: 'Thimble', ar: 'كُستبان (خياطة)' }, allPlay: true, difficulty: 1 },
            { id: '495', text: { en: 'Thread', ar: 'خيط' }, allPlay: false, difficulty: 0 },
            { id: '496', text: { en: 'Tire', ar: 'كاوتش/إطار سيارة' }, allPlay: true, difficulty: 1 },
            { id: '497', text: { en: 'Toaster', ar: 'توستر/محمصة خبز' }, allPlay: false, difficulty: 0 },
            { id: '498', text: { en: 'Toolbox', ar: 'صندوق عدة' }, allPlay: true, difficulty: 1 },
            { id: '499', text: { en: 'Toothpaste', ar: 'معجون أسنان' }, allPlay: true, difficulty: 1 },
            { id: '500', text: { en: 'Tractor', ar: 'جرار زراعي' }, allPlay: false, difficulty: 0 },
            { id: '501', text: { en: 'Trash can', ar: 'سلة مهملات/زبالة' }, allPlay: false, difficulty: 0 },
            { id: '502', text: { en: 'Typewriter', ar: 'آلة كاتبة' }, allPlay: false, difficulty: 0 },
            { id: '503', text: { en: 'Vase', ar: 'فازة/مزهرية' }, allPlay: false, difficulty: 0 },
            { id: '504', text: { en: 'Volleyball', ar: 'كرة طائرة' }, allPlay: false, difficulty: 0 },
            { id: '505', text: { en: 'Waffle iron', ar: 'ماكينة وافل' }, allPlay: true, difficulty: 1 },
            { id: '506', text: { en: 'Washer', ar: 'غسالة' }, allPlay: false, difficulty: 0 },
            { id: '507', text: { en: 'Watch', ar: 'ساعة يد' }, allPlay: true, difficulty: 1 },
            { id: '508', text: { en: 'Whistle', ar: 'صفارة' }, allPlay: false, difficulty: 0 },
            { id: '509', text: { en: 'Window', ar: 'شباك' }, allPlay: true, difficulty: 1 },
            { id: '510', text: { en: 'Xylophone', ar: 'إكسيليفون' }, allPlay: true, difficulty: 1 },
            { id: '511', text: { en: 'Yo-yo', ar: 'يويو' }, allPlay: true, difficulty: 1 },
            { id: '512', text: { en: 'Zipper', ar: 'سوستة' }, allPlay: true, difficulty: 1 },
        ]
    },

    // --- RED Category (Animals/Food/Plants) ---
    {
        id: 'cat_red',
        name: { en: 'Animals/Food/Plants', ar: 'حيوانات/طعام/نباتات' },
        colorType: 'red',
        words: [
            // Animals
            { id: '515', text: { en: 'Alligator', ar: 'تمساح' }, allPlay: true, difficulty: 1 },
            { id: '516', text: { en: 'Ant', ar: 'نملة' }, allPlay: true, difficulty: 1 },
            { id: '517', text: { en: 'Antelope', ar: 'ظبي/غزال' }, allPlay: true, difficulty: 1 },
            { id: '518', text: { en: 'Bear', ar: 'دب' }, allPlay: true, difficulty: 1 },
            { id: '519', text: { en: 'Beaver', ar: 'قندس' }, allPlay: true, difficulty: 1 },
            { id: '520', text: { en: 'Bee', ar: 'نحلة' }, allPlay: true, difficulty: 1 },
            { id: '521', text: { en: 'Butterfly', ar: 'فراشة' }, allPlay: true, difficulty: 1 },
            { id: '522', text: { en: 'Camel', ar: 'جمل' }, allPlay: true, difficulty: 1 },
            { id: '523', text: { en: 'Cat', ar: 'قطة' }, allPlay: true, difficulty: 1 },
            { id: '524', text: { en: 'Cheetah', ar: 'فهد صياد/شيتا' }, allPlay: true, difficulty: 1 },
            { id: '525', text: { en: 'Chicken', ar: 'فرخة/دجاجة' }, allPlay: true, difficulty: 1 },
            { id: '526', text: { en: 'Chimp', ar: 'شمبانزي' }, allPlay: true, difficulty: 1 },
            { id: '527', text: { en: 'Cow', ar: 'بقرة' }, allPlay: true, difficulty: 1 },
            { id: '528', text: { en: 'Crab', ar: 'كابوريا/سرطان بحر' }, allPlay: true, difficulty: 1 },
            { id: '529', text: { en: 'Crocodile', ar: 'تمساح' }, allPlay: true, difficulty: 1 }, // Duplicate of Alligator?
            { id: '530', text: { en: 'Deer', ar: 'غزالة' }, allPlay: true, difficulty: 1 },
            { id: '531', text: { en: 'Dog', ar: 'كلب' }, allPlay: true, difficulty: 1 },
            { id: '532', text: { en: 'Dolphin', ar: 'دولفين' }, allPlay: true, difficulty: 1 },
            { id: '533', text: { en: 'Donkey', ar: 'حمار' }, allPlay: true, difficulty: 1 },
            { id: '534', text: { en: 'Dove', ar: 'حمامة' }, allPlay: true, difficulty: 1 },
            { id: '535', text: { en: 'Dragonfly', ar: 'يعسوب' }, allPlay: true, difficulty: 1 },
            { id: '536', text: { en: 'Duck', ar: 'بطة' }, allPlay: true, difficulty: 1 },
            { id: '537', text: { en: 'Elephant', ar: 'فيل' }, allPlay: true, difficulty: 1 },
            { id: '538', text: { en: 'Flamingo', ar: 'فلامنجو/بشروش' }, allPlay: true, difficulty: 1 },
            { id: '539', text: { en: 'Fox', ar: 'ثعلب' }, allPlay: true, difficulty: 1 },
            { id: '540', text: { en: 'Frog', ar: 'ضفدعة' }, allPlay: true, difficulty: 1 },
            { id: '541', text: { en: 'Giraffe', ar: 'زرافة' }, allPlay: true, difficulty: 1 },
            { id: '542', text: { en: 'Gorilla', ar: 'غوريلا' }, allPlay: true, difficulty: 1 },
            { id: '543', text: { en: 'Hawk', ar: 'صقر' }, allPlay: true, difficulty: 1 },
            { id: '544', text: { en: 'Hedgehog', ar: 'قنفذ' }, allPlay: true, difficulty: 1 },
            { id: '545', text: { en: 'Horse', ar: 'حصان' }, allPlay: true, difficulty: 1 },
            { id: '546', text: { en: 'Hummingbird', ar: 'طائر طنان' }, allPlay: true, difficulty: 1 },
            { id: '547', text: { en: 'Kangaroo', ar: 'كنغر' }, allPlay: true, difficulty: 1 },
            { id: '548', text: { en: 'Kitten', ar: 'قطة صغيرة' }, allPlay: true, difficulty: 1 },
            { id: '549', text: { en: 'Lion', ar: 'أسد' }, allPlay: true, difficulty: 1 },
            { id: '550', text: { en: 'Lobster', ar: 'استاكوزا' }, allPlay: true, difficulty: 1 },
            { id: '551', text: { en: 'Monkey', ar: 'قرد' }, allPlay: true, difficulty: 1 },
            { id: '552', text: { en: 'Octopus', ar: 'أخطبوط' }, allPlay: true, difficulty: 1 },
            { id: '553', text: { en: 'Owl', ar: 'بومة' }, allPlay: true, difficulty: 1 },
            { id: '554', text: { en: 'Panda', ar: 'باندا' }, allPlay: true, difficulty: 1 },
            { id: '555', text: { en: 'Parrot', ar: 'بغبان' }, allPlay: true, difficulty: 1 },
            { id: '556', text: { en: 'Peacock', ar: 'طاووس' }, allPlay: true, difficulty: 1 },
            { id: '557', text: { en: 'Penguin', ar: 'بطريق' }, allPlay: true, difficulty: 1 },
            { id: '558', text: { en: 'Pig', ar: 'خنزير' }, allPlay: true, difficulty: 1 },
            { id: '559', text: { en: 'Rabbit', ar: 'أرنب' }, allPlay: true, difficulty: 1 },
            { id: '560', text: { en: 'Raccoon', ar: 'راكون' }, allPlay: true, difficulty: 1 },
            { id: '561', text: { en: 'Scorpion', ar: 'عقرب' }, allPlay: true, difficulty: 1 },
            { id: '562', text: { en: 'Seagull', ar: 'نورس' }, allPlay: true, difficulty: 1 },
            { id: '563', text: { en: 'Seal', ar: 'فقمة/كلب البحر' }, allPlay: true, difficulty: 1 },
            { id: '564', text: { en: 'Shark', ar: 'قرش' }, allPlay: true, difficulty: 1 },
            { id: '565', text: { en: 'Sheep', ar: 'خروف' }, allPlay: true, difficulty: 1 },
            { id: '566', text: { en: 'Spider', ar: 'عنكبوت' }, allPlay: true, difficulty: 1 },
            { id: '567', text: { en: 'Squirrel', ar: 'سنجاب' }, allPlay: true, difficulty: 1 },
            { id: '568', text: { en: 'Starfish', ar: 'نجم البحر' }, allPlay: true, difficulty: 1 },
            { id: '569', text: { en: 'Swan', ar: 'بجعة' }, allPlay: true, difficulty: 1 },
            { id: '570', text: { en: 'Tiger', ar: 'نمر' }, allPlay: true, difficulty: 1 },
            { id: '571', text: { en: 'Toad', ar: 'علجوم (ضفدع كبير)' }, allPlay: true, difficulty: 1 },
            { id: '572', text: { en: 'Turtle', ar: 'سلحفاة' }, allPlay: true, difficulty: 1 },
            { id: '573', text: { en: 'Unicorn', ar: 'يونيكورن/حصان وحيد القرن' }, allPlay: true, difficulty: 1 },
            { id: '574', text: { en: 'Whale', ar: 'حوت' }, allPlay: true, difficulty: 1 },
            { id: '575', text: { en: 'Wolf', ar: 'ذئب' }, allPlay: true, difficulty: 1 },
            { id: '576', text: { en: 'Zebra', ar: 'حمار وحشي' }, allPlay: true, difficulty: 1 },
            // Food
            { id: '577', text: { en: 'Bacon', ar: 'لحم مقدد/بيكون' }, allPlay: true, difficulty: 1 },
            { id: '578', text: { en: 'Bagel', ar: 'بيجل (خبز)' }, allPlay: true, difficulty: 1 },
            { id: '579', text: { en: 'Barbecue', ar: 'باربكيو/شواء' }, allPlay: true, difficulty: 1 },
            { id: '580', text: { en: 'Biscuit', ar: 'بسكويت' }, allPlay: true, difficulty: 1 },
            { id: '581', text: { en: 'Bread', ar: 'عيش/خبز' }, allPlay: true, difficulty: 1 },
            { id: '582', text: { en: 'Brownie', ar: 'براوني (كيك)' }, allPlay: true, difficulty: 1 },
            { id: '583', text: { en: 'Burger', ar: 'برجر' }, allPlay: true, difficulty: 1 },
            { id: '584', text: { en: 'Cake', ar: 'كيكة/تورتة' }, allPlay: true, difficulty: 1 },
            { id: '585', text: { en: 'Cereal', ar: 'كورن فليكس/حبوب إفطار' }, allPlay: true, difficulty: 1 },
            { id: '586', text: { en: 'Cheese', ar: 'جبنة' }, allPlay: true, difficulty: 1 },
            { id: '587', text: { en: 'Chocolate', ar: 'شوكولاتة' }, allPlay: true, difficulty: 1 },
            { id: '588', text: { en: 'Cupcake', ar: 'كب كيك' }, allPlay: true, difficulty: 1 },
            { id: '589', text: { en: 'Donut', ar: 'دونات' }, allPlay: true, difficulty: 1 },
            { id: '590', text: { en: 'Egg', ar: 'بيضة' }, allPlay: true, difficulty: 1 },
            { id: '591', text: { en: 'Hamburger', ar: 'هامبرجر' }, allPlay: true, difficulty: 1 },
            { id: '592', text: { en: 'Hotdog', ar: 'هوت دوج' }, allPlay: true, difficulty: 1 },
            { id: '593', text: { en: 'Ice cream', ar: 'أيس كريم/جيلاتي' }, allPlay: true, difficulty: 1 },
            { id: '594', text: { en: 'Meatball', ar: 'كفتة' }, allPlay: true, difficulty: 1 },
            { id: '595', text: { en: 'Muffin', ar: 'مافن (كب كيك)' }, allPlay: true, difficulty: 1 },
            { id: '596', text: { en: 'Noodles', ar: 'نودلز/مكرونة شعرية' }, allPlay: true, difficulty: 1 },
            { id: '597', text: { en: 'Omelette', ar: 'أومليت' }, allPlay: true, difficulty: 1 },
            { id: '598', text: { en: 'Pancake', ar: 'بان كيك' }, allPlay: true, difficulty: 1 },
            { id: '599', text: { en: 'Pasta', ar: 'مكرونة' }, allPlay: true, difficulty: 1 },
            { id: '600', text: { en: 'Pie', ar: 'فطيرة' }, allPlay: true, difficulty: 1 },
            { id: '601', text: { en: 'Pizza', ar: 'بيتزا' }, allPlay: true, difficulty: 1 },
            { id: '602', text: { en: 'Popcorn', ar: 'فشار' }, allPlay: true, difficulty: 1 },
            { id: '603', text: { en: 'Pretzel', ar: 'بريتزل (مقرمشات)' }, allPlay: true, difficulty: 1 },
            { id: '604', text: { en: 'Rice', ar: 'رز' }, allPlay: true, difficulty: 1 },
            { id: '605', text: { en: 'Sausage', ar: 'سجق/سوسيس' }, allPlay: true, difficulty: 1 },
            { id: '606', text: { en: 'Soup', ar: 'شوربة' }, allPlay: true, difficulty: 1 },
            { id: '607', text: { en: 'Steak', ar: 'ستيك/شريحة لحم' }, allPlay: true, difficulty: 1 },
            { id: '608', text: { en: 'Sushi', ar: 'سوشي' }, allPlay: true, difficulty: 1 },
            { id: '609', text: { en: 'Taco', ar: 'تاكو' }, allPlay: true, difficulty: 1 },
            { id: '610', text: { en: 'Toast', ar: 'توست (خبز محمص)' }, allPlay: true, difficulty: 1 },
            { id: '611', text: { en: 'Turkey', ar: 'ديك رومي' }, allPlay: true, difficulty: 1 },
            { id: '612', text: { en: 'Waffles', ar: 'وافل' }, allPlay: true, difficulty: 1 },
            { id: '613', text: { en: 'Yogurt', ar: 'زبادي' }, allPlay: true, difficulty: 1 },
            // Plants
            { id: '614', text: { en: 'Bush', ar: 'شجيرة' }, allPlay: true, difficulty: 1 },
            { id: '615', text: { en: 'Flower', ar: 'وردة/زهرة' }, allPlay: true, difficulty: 1 },
            { id: '616', text: { en: 'Grass', ar: 'نجيلة/حشيش' }, allPlay: true, difficulty: 1 },
            { id: '617', text: { en: 'Ivy', ar: 'لبلاب (نبات متسلق)' }, allPlay: true, difficulty: 1 },
            { id: '618', text: { en: 'Moss', ar: 'طحالب (على الصخر/الشجر)' }, allPlay: true, difficulty: 1 },
            { id: '619', text: { en: 'Pine Tree', ar: 'شجرة صنوبر' }, allPlay: true, difficulty: 1 },
            { id: '620', text: { en: 'Oak Tree', ar: 'شجرة بلوط' }, allPlay: true, difficulty: 1 },
            { id: '621', text: { en: 'Maple Tree', ar: 'شجرة قيقب' }, allPlay: true, difficulty: 1 },
            { id: '622', text: { en: 'Willow Tree', ar: 'شجرة صفصاف' }, allPlay: true, difficulty: 1 },
            { id: '623', text: { en: 'Palm Tree', ar: 'نخلة' }, allPlay: true, difficulty: 1 },
            { id: '624', text: { en: 'Bamboo', ar: 'خيزران/بامبو' }, allPlay: true, difficulty: 1 },
            { id: '625', text: { en: 'Cactus', ar: 'صبار' }, allPlay: true, difficulty: 1 },
            { id: '626', text: { en: 'Vine', ar: 'عنب/كرمة/نبات متسلق' }, allPlay: true, difficulty: 1 },
            { id: '627', text: { en: 'Fern', ar: 'سرخس (نبات)' }, allPlay: true, difficulty: 1 },
            { id: '628', text: { en: 'Apple Tree', ar: 'شجرة تفاح' }, allPlay: true, difficulty: 1 },
            { id: '629', text: { en: 'Mango Tree', ar: 'شجرة مانجو' }, allPlay: true, difficulty: 1 },
            { id: '630', text: { en: 'Pinecone', ar: 'كوز صنوبر' }, allPlay: true, difficulty: 1 },
        ]
    },

    // --- GREEN Category (Misc/Actions/Abstract/Difficult) ---
    {
        id: 'cat_green',
        name: { en: 'Misc/Actions/Abstract', ar: 'متنوع/أفعال/مجرد' },
        colorType: 'green',
        words: [
            { id: '634', text: { en: 'Adam\'s apple', ar: 'تفاحة آدم' }, allPlay: false, difficulty: 0 },
            { id: '635', text: { en: 'slippery road', ar: 'طريق زلق' }, allPlay: false, difficulty: 0 },
            { id: '636', text: { en: 'real', ar: 'حقيقي' }, allPlay: false, difficulty: 0 },
            { id: '637', text: { en: 'middle', ar: 'وسط/منتصف' }, allPlay: false, difficulty: 0 },
            { id: '638', text: { en: 'happy journey', ar: 'رحلة سعيدة' }, allPlay: true, difficulty: 1 },
            { id: '639', text: { en: 'breakable', ar: 'قابل للكسر' }, allPlay: false, difficulty: 0 },
            { id: '640', text: { en: 'yellow', ar: 'أصفر' }, allPlay: true, difficulty: 1 },
            { id: '641', text: { en: 'toilet water', ar: 'ماء تواليت (عطر)' }, allPlay: false, difficulty: 0 },
            { id: '642', text: { en: 'dye', ar: 'صبغة' }, allPlay: true, difficulty: 1 },
            { id: '643', text: { en: 'waste', ar: 'مخلفات/نفايات/إهدار' }, allPlay: true, difficulty: 1 },
            { id: '644', text: { en: 'ear', ar: 'أذن' }, allPlay: false, difficulty: 0 },
            { id: '645', text: { en: 'eyebrow', ar: 'حاجب (العين)' }, allPlay: false, difficulty: 0 },
            { id: '646', text: { en: 'gum', ar: 'لبان/علكة/لثة' }, allPlay: true, difficulty: 1 },
            { id: '647', text: { en: 'old', ar: 'قديم/عجوز' }, allPlay: false, difficulty: 0 },
            { id: '648', text: { en: 'bridgehead', ar: 'رأس جسر/موطئ قدم' }, allPlay: true, difficulty: 1 },
            { id: '649', text: { en: 'teenager', ar: 'مراهق' }, allPlay: false, difficulty: 0 },
            { id: '650', text: { en: 'cement', ar: 'أسمنت' }, allPlay: false, difficulty: 0 },
            { id: '651', text: { en: 'November', ar: 'نوفمبر' }, allPlay: true, difficulty: 1 },
            { id: '652', text: { en: 'information', ar: 'معلومات' }, allPlay: true, difficulty: 1 },
            { id: '653', text: { en: 'lung', ar: 'رئة' }, allPlay: false, difficulty: 0 },
            { id: '654', text: { en: 'six', ar: 'ستة' }, allPlay: false, difficulty: 0 },
            { id: '655', text: { en: 'milk chocolate', ar: 'شوكولاتة بالحليب' }, allPlay: false, difficulty: 0 },
            { id: '656', text: { en: 'sprinkler', ar: 'رشاش مياه' }, allPlay: false, difficulty: 0 },
            { id: '657', text: { en: 'snowstorm', ar: 'عاصفة ثلجية' }, allPlay: true, difficulty: 1 },
            { id: '658', text: { en: 'concrete', ar: 'خرسانة' }, allPlay: true, difficulty: 1 },
            { id: '659', text: { en: 'snowball', ar: 'كرة ثلج' }, allPlay: false, difficulty: 0 },
            { id: '660', text: { en: 'free kick', ar: 'ضربة حرة (كرة قدم)' }, allPlay: true, difficulty: 1 },
            { id: '661', text: { en: 'traffic violation', ar: 'مخالفة مرورية' }, allPlay: true, difficulty: 1 },
            { id: '662', text: { en: 'yes', ar: 'نعم/أيوه' }, allPlay: true, difficulty: 1 },
            { id: '663', text: { en: 'vitamins', ar: 'فيتامينات' }, allPlay: false, difficulty: 0 },
            { id: '664', text: { en: 'evening', ar: 'مساء' }, allPlay: false, difficulty: 0 },
            { id: '665', text: { en: 'crocodile tears', ar: 'دموع التماسيح' }, allPlay: true, difficulty: 1 },
            { id: '666', text: { en: 'Red Crescent', ar: 'الهلال الأحمر' }, allPlay: true, difficulty: 1 },
            { id: '667', text: { en: 'Thursday', ar: 'الخميس' }, allPlay: false, difficulty: 0 },
            { id: '668', text: { en: 'century', ar: 'قرن (100 سنة)' }, allPlay: true, difficulty: 1 },
            { id: '669', text: { en: 'gases', ar: 'غازات' }, allPlay: false, difficulty: 0 },
            { id: '670', text: { en: 'spray', ar: 'بخاخ/سبراي' }, allPlay: false, difficulty: 0 },
            { id: '671', text: { en: 'ray', ar: 'شعاع' }, allPlay: false, difficulty: 0 },
            { id: '672', text: { en: 'binding', ar: 'تجليد (كتاب)' }, allPlay: false, difficulty: 0 },
            { id: '673', text: { en: 'night', ar: 'ليل' }, allPlay: false, difficulty: 0 },
            { id: '674', text: { en: 'radar', ar: 'رادار' }, allPlay: false, difficulty: 0 },
            { id: '675', text: { en: 'headache', ar: 'صداع' }, allPlay: true, difficulty: 1 },
            { id: '676', text: { en: 'eight', ar: 'ثمانية' }, allPlay: false, difficulty: 0 },
            { id: '677', text: { en: 'radius', ar: 'نصف القطر' }, allPlay: false, difficulty: 0 },
            { id: '678', text: { en: 'plant islands', ar: 'جزر نباتية (؟)' }, allPlay: false, difficulty: 0 }, // Meaning unclear, literal translation
            { id: '679', text: { en: 'insecticide', ar: 'مبيد حشري' }, allPlay: false, difficulty: 0 },
            { id: '680', text: { en: 'ambush', ar: 'كمين' }, allPlay: true, difficulty: 1 },
            { id: '681', text: { en: 'straw pile', ar: 'كومة قش' }, allPlay: false, difficulty: 0 },
            { id: '682', text: { en: 'deep', ar: 'عميق' }, allPlay: false, difficulty: 0 },
            { id: '683', text: { en: 'laser', ar: 'ليزر' }, allPlay: false, difficulty: 0 },
            { id: '684', text: { en: 'three-dimensional', ar: 'ثلاثي الأبعاد/3D' }, allPlay: false, difficulty: 0 },
            { id: '685', text: { en: 'one', ar: 'واحد' }, allPlay: true, difficulty: 1 },
            { id: '686', text: { en: 'front page', ar: 'الصفحة الأولى (جريدة)' }, allPlay: false, difficulty: 0 },
            { id: '687', text: { en: 'farewell', ar: 'وداع' }, allPlay: false, difficulty: 0 },
            { id: '688', text: { en: 'nerves', ar: 'أعصاب' }, allPlay: false, difficulty: 0 },
            { id: '689', text: { en: 'darkness', ar: 'ظلام/ضلمة' }, allPlay: false, difficulty: 0 },
            { id: '690', text: { en: 'part', ar: 'جزء' }, allPlay: true, difficulty: 1 },
            { id: '691', text: { en: 'tourism', ar: 'سياحة' }, allPlay: false, difficulty: 0 },
            { id: '692', text: { en: 'sign language', ar: 'لغة الإشارة' }, allPlay: true, difficulty: 1 },
            { id: '693', text: { en: 'tree bark', ar: 'لحاء الشجر' }, allPlay: false, difficulty: 0 },
            { id: '694', text: { en: 'whirlpool', ar: 'دوامة مياه' }, allPlay: true, difficulty: 1 },
            { id: '695', text: { en: 'bad luck', ar: 'حظ سيء/نحس' }, allPlay: true, difficulty: 1 },
            { id: '696', text: { en: 'map', ar: 'خريطة' }, allPlay: true, difficulty: 1 },
            { id: '697', text: { en: 'index', ar: 'فهرس/مؤشر' }, allPlay: false, difficulty: 0 },
            { id: '698', text: { en: 'email', ar: 'إيميل/بريد إلكتروني' }, allPlay: false, difficulty: 0 },
            { id: '699', text: { en: 'drought', ar: 'جفاف' }, allPlay: false, difficulty: 0 },
            { id: '700', text: { en: 'kilo', ar: 'كيلو' }, allPlay: false, difficulty: 0 },
            { id: '701', text: { en: 'ice', ar: 'ثلج/جليد' }, allPlay: true, difficulty: 1 },
            { id: '702', text: { en: 'positive', ar: 'إيجابي' }, allPlay: true, difficulty: 1 },
            { id: '703', text: { en: 'summer', ar: 'صيف' }, allPlay: false, difficulty: 0 },
            { id: '704', text: { en: 'mile', ar: 'ميل' }, allPlay: false, difficulty: 0 },
            { id: '705', text: { en: 'blue', ar: 'أزرق' }, allPlay: true, difficulty: 1 },
            { id: '706', text: { en: 'Australian dollar', ar: 'دولار أسترالي' }, allPlay: true, difficulty: 1 },
            { id: '707', text: { en: 'eleven', ar: 'أحد عشر/حداشر' }, allPlay: false, difficulty: 0 },
            { id: '708', text: { en: 'cheap', ar: 'رخيص' }, allPlay: true, difficulty: 1 },
            { id: '709', text: { en: 'bikini', ar: 'بيكيني' }, allPlay: false, difficulty: 0 },
            { id: '710', text: { en: 'certificate of appreciation', ar: 'شهادة تقدير' }, allPlay: true, difficulty: 1 },
            { id: '711', text: { en: 'honeymoon', ar: 'شهر العسل' }, allPlay: false, difficulty: 0 },
            { id: '712', text: { en: 'blood', ar: 'دم' }, allPlay: true, difficulty: 1 },
            { id: '713', text: { en: 'euro', ar: 'يورو' }, allPlay: true, difficulty: 1 },
            { id: '714', text: { en: 'crescent', ar: 'هلال' }, allPlay: false, difficulty: 0 },
            { id: '715', text: { en: 'thick', ar: 'سميك/تخين' }, allPlay: false, difficulty: 0 },
            { id: '716', text: { en: 'football', ar: 'كرة قدم' }, allPlay: false, difficulty: 0 },
            { id: '717', text: { en: 'drunk', ar: 'سكران' }, allPlay: false, difficulty: 0 },
            { id: '718', text: { en: 'winter', ar: 'شتاء' }, allPlay: true, difficulty: 1 },
            { id: '719', text: { en: 'winds', ar: 'رياح' }, allPlay: false, difficulty: 0 },
            { id: '720', text: { en: 'signature', ar: 'توقيع/إمضاء' }, allPlay: true, difficulty: 1 },
            { id: '721', text: { en: 'day', ar: 'يوم' }, allPlay: true, difficulty: 1 },
            { id: '722', text: { en: 'idea', ar: 'فكرة' }, allPlay: false, difficulty: 0 },
            { id: '723', text: { en: 'atom', ar: 'ذرة' }, allPlay: false, difficulty: 0 },
            { id: '724', text: { en: 'poverty', ar: 'فقر' }, allPlay: false, difficulty: 0 },
            { id: '725', text: { en: 'gray', ar: 'رمادي/رصاصي' }, allPlay: false, difficulty: 0 },
            { id: '726', text: { en: 'driver\'s license', ar: 'رخصة قيادة/سواقة' }, allPlay: false, difficulty: 0 },
            { id: '727', text: { en: 'closed', ar: 'مغلق/مقفول' }, allPlay: false, difficulty: 0 },
            { id: '728', text: { en: 'female', ar: 'أنثى/ست' }, allPlay: true, difficulty: 1 },
            { id: '729', text: { en: 'swirl', ar: 'دوامة/لف' }, allPlay: false, difficulty: 0 },
            { id: '730', text: { en: 'song', ar: 'أغنية' }, allPlay: true, difficulty: 1 },
            { id: '731', text: { en: 'negative', ar: 'سلبي' }, allPlay: true, difficulty: 1 },
            { id: '732', text: { en: 'thirty-nine', ar: 'تسعة وثلاثون' }, allPlay: false, difficulty: 0 },
            { id: '733', text: { en: 'horizontal', ar: 'أفقي' }, allPlay: true, difficulty: 1 },
            { id: '734', text: { en: 'handshake', ar: 'مصافحة/سلام بالإيد' }, allPlay: false, difficulty: 0 },
            { id: '735', text: { en: 'foot', ar: 'قدم/رجل' }, allPlay: true, difficulty: 1 },
            { id: '736', text: { en: 'face', ar: 'وجه/وش' }, allPlay: true, difficulty: 1 },
            { id: '737', text: { en: 'for sale', ar: 'للبيع' }, allPlay: true, difficulty: 1 },
            { id: '738', text: { en: 'breakfast', ar: 'فطار' }, allPlay: true, difficulty: 1 },
            { id: '739', text: { en: 'wrapping', ar: 'تغليف' }, allPlay: true, difficulty: 1 },
            { id: '740', text: { en: 'code', ar: 'كود/شفرة' }, allPlay: true, difficulty: 1 },
            { id: '741', text: { en: 'Monday', ar: 'الاثنين' }, allPlay: false, difficulty: 0 },
            { id: '742', text: { en: 'race', ar: 'سباق' }, allPlay: false, difficulty: 0 },
            { id: '743', text: { en: 'handball', ar: 'كرة يد' }, allPlay: true, difficulty: 1 },
            { id: '744', text: { en: 'stomach ulcer', ar: 'قرحة معدة' }, allPlay: false, difficulty: 0 },
            { id: '745', text: { en: 'threshold', ar: 'عتبة' }, allPlay: false, difficulty: 0 },
            { id: '746', text: { en: 'life', ar: 'حياة' }, allPlay: true, difficulty: 1 },
            { id: '747', text: { en: 'night out', ar: 'سهرة/خروجة ليلية' }, allPlay: true, difficulty: 1 },
            { id: '748', text: { en: 'formal', ar: 'رسمي' }, allPlay: true, difficulty: 1 },
            { id: '749', text: { en: 'three', ar: 'ثلاثة' }, allPlay: true, difficulty: 1 },
            { id: '750', text: { en: 'tattoo', ar: 'وشم/تاتو' }, allPlay: false, difficulty: 0 },
            { id: '751', text: { en: 'invitation', ar: 'دعوة/عزومة' }, allPlay: false, difficulty: 0 },
            { id: '752', text: { en: 'parallel', ar: 'متوازي' }, allPlay: true, difficulty: 1 },
            { id: '753', text: { en: 'individual', ar: 'فرد/فردي' }, allPlay: true, difficulty: 1 },
            { id: '754', text: { en: 'moon', ar: 'قمر' }, allPlay: false, difficulty: 0 },
            { id: '755', text: { en: 'green', ar: 'أخضر' }, allPlay: true, difficulty: 1 },
            { id: '756', text: { en: 'no', ar: 'لا' }, allPlay: true, difficulty: 1 },
            { id: '757', text: { en: 'Pharaohs', ar: 'فراعنة' }, allPlay: true, difficulty: 1 },
            { id: '758', text: { en: 'decoration', ar: 'ديكور/زينة' }, allPlay: true, difficulty: 1 },
            { id: '759', text: { en: 'pollution', ar: 'تلوث' }, allPlay: true, difficulty: 1 },
            { id: '760', text: { en: 'sign', ar: 'علامة/إشارة/لافتة' }, allPlay: true, difficulty: 1 },
            { id: '761', text: { en: 'prize', ar: 'جائزة' }, allPlay: true, difficulty: 1 },
            { id: '762', text: { en: 'vein', ar: 'وريد' }, allPlay: true, difficulty: 1 },
            { id: '763', text: { en: 'sorry', ar: 'آسف' }, allPlay: false, difficulty: 0 },
            { id: '764', text: { en: 'dirham', ar: 'درهم' }, allPlay: true, difficulty: 1 },
            { id: '765', text: { en: 'open', ar: 'مفتوح' }, allPlay: false, difficulty: 0 },
            { id: '766', text: { en: 'powder', ar: 'بودرة/مسحوق' }, allPlay: true, difficulty: 1 },
            { id: '767', text: { en: 'family tree', ar: 'شجرة العائلة' }, allPlay: true, difficulty: 1 },
            { id: '768', text: { en: 'claw', ar: 'مخلب' }, allPlay: false, difficulty: 0 },
            { id: '769', text: { en: 'wallpaper', ar: 'ورق حائط' }, allPlay: false, difficulty: 0 },
            { id: '770', text: { en: 'volcanic lava', ar: 'حمم بركانية' }, allPlay: false, difficulty: 0 },
            { id: '771', text: { en: 'rectangle', ar: 'مستطيل' }, allPlay: true, difficulty: 1 },
            { id: '772', text: { en: 'boxing', ar: 'ملاكمة' }, allPlay: true, difficulty: 1 },
            { id: '773', text: { en: 'eye', ar: 'عين' }, allPlay: false, difficulty: 0 },
            { id: '774', text: { en: 'prayer', ar: 'صلاة/دعاء' }, allPlay: false, difficulty: 0 },
            { id: '775', text: { en: 'kiss', ar: 'بوسة/قبلة' }, allPlay: true, difficulty: 1 },
            { id: '776', text: { en: 'one-way', ar: 'اتجاه واحد' }, allPlay: false, difficulty: 0 },
            { id: '777', text: { en: 'spirit', ar: 'روح' }, allPlay: true, difficulty: 1 },
            { id: '778', text: { en: 'charity', ar: 'صدقة/عمل خيري' }, allPlay: true, difficulty: 1 },
            { id: '779', text: { en: 'seven', ar: 'سبعة' }, allPlay: false, difficulty: 0 },
            { id: '780', text: { en: 'rust', ar: 'صدأ' }, allPlay: false, difficulty: 0 },
            { id: '781', text: { en: 'mailbox', ar: 'صندوق بريد' }, allPlay: true, difficulty: 1 },
            { id: '782', text: { en: 'fire', ar: 'نار/حريق' }, allPlay: false, difficulty: 0 },
            { id: '783', text: { en: 'remains', ar: 'بقايا/آثار' }, allPlay: true, difficulty: 1 },
            { id: '784', text: { en: 'March', ar: 'مارس' }, allPlay: false, difficulty: 0 },
            { id: '785', text: { en: 'sandstorm', ar: 'عاصفة رملية' }, allPlay: true, difficulty: 1 },
            { id: '786', text: { en: 'first degree', ar: 'درجة أولى' }, allPlay: false, difficulty: 0 },
            { id: '787', text: { en: 'lampshade', ar: 'أباجورة' }, allPlay: true, difficulty: 1 },
            { id: '788', text: { en: 'January', ar: 'يناير' }, allPlay: true, difficulty: 1 },
            { id: '789', text: { en: 'price list', ar: 'قائمة أسعار' }, allPlay: false, difficulty: 0 },
            { id: '790', text: { en: 'million', ar: 'مليون' }, allPlay: true, difficulty: 1 },
            { id: '791', text: { en: 'peace', ar: 'سلام' }, allPlay: false, difficulty: 0 },
            { id: '792', text: { en: 'three times', ar: 'ثلاث مرات' }, allPlay: true, difficulty: 1 },
            { id: '793', text: { en: 'outer space', ar: 'الفضاء الخارجي' }, allPlay: true, difficulty: 1 },
            { id: '794', text: { en: 'forty-three', ar: 'ثلاثة وأربعون' }, allPlay: true, difficulty: 1 },
            { id: '795', text: { en: 'word', ar: 'كلمة' }, allPlay: false, difficulty: 0 },
            { id: '796', text: { en: 'inflammation', ar: 'التهاب' }, allPlay: true, difficulty: 1 },
            { id: '797', text: { en: 'water', ar: 'ماء/مياه' }, allPlay: true, difficulty: 1 },
            { id: '798', text: { en: 'pyramid', ar: 'هرم' }, allPlay: true, difficulty: 1 },
            { id: '799', text: { en: 'ears', ar: 'أذنين/ودان' }, allPlay: true, difficulty: 1 },
            { id: '800', text: { en: 'muscle', ar: 'عضلة' }, allPlay: true, difficulty: 1 },
            { id: '801', text: { en: 'flag bearer', ar: 'حامل العلم' }, allPlay: false, difficulty: 0 },
            { id: '802', text: { en: 'mama', ar: 'ماما' }, allPlay: true, difficulty: 1 },
            { id: '803', text: { en: 'male', ar: 'ذكر/راجل' }, allPlay: false, difficulty: 0 },
            { id: '804', text: { en: 'peak time', ar: 'وقت الذروة' }, allPlay: true, difficulty: 1 },
            { id: '805', text: { en: 'telephone booth', ar: 'كابينة تليفون' }, allPlay: false, difficulty: 0 },
            { id: '806', text: { en: 'earthquake', ar: 'زلزال' }, allPlay: false, difficulty: 0 },
            { id: '807', text: { en: 'crazy', ar: 'مجنون' }, allPlay: false, difficulty: 0 },
            { id: '808', text: { en: 'encyclopedia', ar: 'موسوعة' }, allPlay: true, difficulty: 1 },
            { id: '809', text: { en: 'tree trunk', ar: 'جذع شجرة' }, allPlay: false, difficulty: 0 },
            { id: '810', text: { en: 'dead end', ar: 'طريق مسدود' }, allPlay: false, difficulty: 0 },
            { id: '811', text: { en: 'December', ar: 'ديسمبر' }, allPlay: false, difficulty: 0 },
            { id: '812', text: { en: 'phone note', ar: 'نوتة الموبايل؟/ مذكرة هاتف؟' }, allPlay: true, difficulty: 1 }, // Unclear term
            { id: '813', text: { en: 'finish line', ar: 'خط النهاية' }, allPlay: true, difficulty: 1 },
            { id: '818', text: { en: 'ruby', ar: 'ياقوت' }, allPlay: true, difficulty: 1 },
            { id: '819', text: { en: 'dark room', ar: 'غرفة مظلمة/غرفة تحميض' }, allPlay: true, difficulty: 1 },
            { id: '820', text: { en: 'electricity', ar: 'كهرباء' }, allPlay: false, difficulty: 0 },
            { id: '821', text: { en: 'Mother\'s Day', ar: 'عيد الأم' }, allPlay: false, difficulty: 0 },
            { id: '822', text: { en: 'equal', ar: 'يساوي/متساوي' }, allPlay: false, difficulty: 0 },
            { id: '823', text: { en: 'opposite', ar: 'عكس/ضد' }, allPlay: true, difficulty: 1 },
            { id: '824', text: { en: 'dinner', ar: 'عشاء' }, allPlay: false, difficulty: 0 },
            { id: '825', text: { en: 'foreigner', ar: 'أجنبي' }, allPlay: false, difficulty: 0 },
            { id: '826', text: { en: 'chess', ar: 'شطرنج' }, allPlay: true, difficulty: 1 },
            { id: '827', text: { en: 'bald', ar: 'أصلع' }, allPlay: true, difficulty: 1 },
            { id: '828', text: { en: 'bad', ar: 'سيء/وحش' }, allPlay: true, difficulty: 1 },
            { id: '829', text: { en: 'funny gas', ar: 'غاز مضحك' }, allPlay: true, difficulty: 1 },
            { id: '830', text: { en: 'sidewalk', ar: 'رصيف' }, allPlay: false, difficulty: 0 },
            { id: '831', text: { en: 'tender', ar: 'طري (لحم)/عطاء (مناقصة)' }, allPlay: false, difficulty: 0 }, // Ambiguous
            { id: '832', text: { en: 'February', ar: 'فبراير' }, allPlay: false, difficulty: 0 },
            { id: '833', text: { en: 'bird nest', ar: 'عش عصفور' }, allPlay: true, difficulty: 1 },
            { id: '834', text: { en: 'slides', ar: 'زحليقة' }, allPlay: false, difficulty: 0 },
            { id: '835', text: { en: 'autumn', ar: 'خريف' }, allPlay: false, difficulty: 0 },
            { id: '836', text: { en: 'grilled ribs', ar: 'ريش مشوية' }, allPlay: true, difficulty: 1 },
            { id: '837', text: { en: 'average', ar: 'متوسط' }, allPlay: false, difficulty: 0 },
            { id: '838', text: { en: 'warmth', ar: 'دفء' }, allPlay: false, difficulty: 0 },
            { id: '839', text: { en: 'Tuesday', ar: 'الثلاثاء' }, allPlay: false, difficulty: 0 },
            { id: '840', text: { en: 'advertisement', ar: 'إعلان' }, allPlay: false, difficulty: 0 },
            { id: '841', text: { en: 'story', ar: 'قصة/حكاية' }, allPlay: true, difficulty: 1 },
            { id: '842', text: { en: 'chest', ar: 'صدر' }, allPlay: false, difficulty: 0 },
            { id: '843', text: { en: 'mute', ar: 'أخرس/صامت' }, allPlay: true, difficulty: 1 },
            { id: '844', text: { en: 'environment', ar: 'بيئة' }, allPlay: false, difficulty: 0 },
            { id: '845', text: { en: 'government', ar: 'حكومة' }, allPlay: false, difficulty: 0 },
            { id: '846', text: { en: 'tide', ar: 'مد وجزر' }, allPlay: false, difficulty: 0 },
            { id: '847', text: { en: 'speedball', ar: 'كرة السرعة' }, allPlay: false, difficulty: 0 },
            { id: '848', text: { en: 'bad smell', ar: 'رائحة سيئة/وحشة' }, allPlay: true, difficulty: 1 },
            { id: '849', text: { en: 'pressure', ar: 'ضغط' }, allPlay: false, difficulty: 0 },
            { id: '850', text: { en: 'boundaries', ar: 'حدود' }, allPlay: false, difficulty: 0 },
            { id: '851', text: { en: 'dinar', ar: 'دينار' }, allPlay: false, difficulty: 0 },
            { id: '852', text: { en: 'reduction', ar: 'تخفيض/تقليل' }, allPlay: false, difficulty: 0 },
            { id: '853', text: { en: 'index finger', ar: 'سبابة' }, allPlay: true, difficulty: 1 },
            { id: '854', text: { en: 'elegant', ar: 'أنيق/شيك' }, allPlay: false, difficulty: 0 },
            { id: '855', text: { en: 'music', ar: 'موسيقى' }, allPlay: false, difficulty: 0 },
            { id: '856', text: { en: 'April', ar: 'أبريل' }, allPlay: false, difficulty: 0 },
            { id: '857', text: { en: 'team', ar: 'فريق' }, allPlay: false, difficulty: 0 },
            { id: '858', text: { en: 'air', ar: 'هواء' }, allPlay: true, difficulty: 1 },
            { id: '859', text: { en: 'cell', ar: 'خلية' }, allPlay: true, difficulty: 1 },
            { id: '860', text: { en: 'liquid', ar: 'سائل' }, allPlay: false, difficulty: 0 },
            { id: '861', text: { en: 'rich', ar: 'غني' }, allPlay: true, difficulty: 1 },
            { id: '862', text: { en: 'Wednesday', ar: 'الأربعاء' }, allPlay: true, difficulty: 1 },
            { id: '863', text: { en: 'birthday', ar: 'عيد ميلاد' }, allPlay: false, difficulty: 0 },
            { id: '864', text: { en: 'small', ar: 'صغير' }, allPlay: true, difficulty: 1 },
            { id: '865', text: { en: 'exhaust', ar: 'عادم/شكمان/مرهق' }, allPlay: true, difficulty: 1 }, // Ambiguous
            { id: '866', text: { en: 'competition', ar: 'مسابقة/منافسة' }, allPlay: true, difficulty: 1 },
            { id: '867', text: { en: 'Valentine\'s Day', ar: 'عيد الحب' }, allPlay: false, difficulty: 0 },
            { id: '868', text: { en: 'golf', ar: 'جولف' }, allPlay: false, difficulty: 0 },
            { id: '869', text: { en: 'row', ar: 'صف/تجديف' }, allPlay: true, difficulty: 1 }, // Ambiguous
            { id: '870', text: { en: 'drawing', ar: 'رسم' }, allPlay: true, difficulty: 1 },
            { id: '871', text: { en: 'meter', ar: 'متر' }, allPlay: true, difficulty: 1 },
            { id: '872', text: { en: 'engagement', ar: 'خطوبة' }, allPlay: false, difficulty: 0 },
            { id: '873', text: { en: 'plastic', ar: 'بلاستيك' }, allPlay: false, difficulty: 0 },
            { id: '874', text: { en: 'speed of light', ar: 'سرعة الضوء' }, allPlay: false, difficulty: 0 },
            { id: '875', text: { en: 'traffic jam', ar: 'زحمة مرور' }, allPlay: true, difficulty: 1 },
            { id: '876', text: { en: 'skeleton', ar: 'هيكل عظمي' }, allPlay: false, difficulty: 0 },
            { id: '877', text: { en: 'no entry', ar: 'ممنوع الدخول' }, allPlay: false, difficulty: 0 },
            { id: '878', text: { en: 'solution', ar: 'حل' }, allPlay: true, difficulty: 1 },
            { id: '879', text: { en: 'corner', ar: 'زاوية/ركن/كورنر' }, allPlay: true, difficulty: 1 },
            { id: '880', text: { en: 'hour', ar: 'ساعة (زمن)' }, allPlay: false, difficulty: 0 },
            { id: '881', text: { en: 'people', ar: 'ناس/شعب' }, allPlay: true, difficulty: 1 },
            { id: '882', text: { en: 'heart', ar: 'قلب' }, allPlay: false, difficulty: 0 },
            { id: '883', text: { en: 'war', ar: 'حرب' }, allPlay: true, difficulty: 1 },
            { id: '884', text: { en: 'Saturday', ar: 'السبت' }, allPlay: false, difficulty: 0 },
            { id: '885', text: { en: 'forgery', ar: 'تزوير' }, allPlay: false, difficulty: 0 },
            { id: '886', text: { en: 'black', ar: 'أسود' }, allPlay: false, difficulty: 0 },
            { id: '887', text: { en: 'money', ar: 'فلوس/نقود' }, allPlay: false, difficulty: 0 },
            { id: '888', text: { en: 'internet', ar: 'إنترنت/نت' }, allPlay: true, difficulty: 1 },
            { id: '889', text: { en: 'soundproof', ar: 'عازل للصوت' }, allPlay: false, difficulty: 0 },
            { id: '890', text: { en: 'round trip', ar: 'ذهاب وعودة' }, allPlay: false, difficulty: 0 },
            { id: '891', text: { en: 'sky', ar: 'سماء' }, allPlay: true, difficulty: 1 },
            { id: '892', text: { en: 'substance', ar: 'مادة' }, allPlay: false, difficulty: 0 },
            { id: '893', text: { en: 'colors', ar: 'ألوان' }, allPlay: false, difficulty: 0 },
            { id: '894', text: { en: 'vertical', ar: 'رأسي/عمودي' }, allPlay: true, difficulty: 1 },
            { id: '895', text: { en: 'Equator line', ar: 'خط الاستواء' }, allPlay: false, difficulty: 0 },
            { id: '896', text: { en: 'Earth\'s poles', ar: 'قطبي الأرض' }, allPlay: false, difficulty: 0 },
            { id: '897', text: { en: 'tomorrow', ar: 'غداً/بكرة' }, allPlay: true, difficulty: 1 },
            { id: '898', text: { en: 'fashion show', ar: 'عرض أزياء' }, allPlay: false, difficulty: 0 },
            { id: '899', text: { en: 'Red Cross', ar: 'الصليب الأحمر' }, allPlay: true, difficulty: 1 },
            { id: '900', text: { en: 'bubbles', ar: 'فقاقيع' }, allPlay: false, difficulty: 0 },
            { id: '901', text: { en: 'soft', ar: 'ناعم/طري' }, allPlay: false, difficulty: 0 },
            { id: '902', text: { en: 'academic degree', ar: 'درجة علمية/شهادة جامعية' }, allPlay: true, difficulty: 1 },
            { id: '903', text: { en: 'snake bite', ar: 'لدغة ثعبان' }, allPlay: false, difficulty: 0 },
            { id: '904', text: { en: 'level', ar: 'مستوى/دور/ميزان مياه' }, allPlay: false, difficulty: 0 }, // Ambiguous
            { id: '905', text: { en: 'hundred', ar: 'مائة' }, allPlay: false, difficulty: 0 },
            { id: '906', text: { en: 'world summit', ar: 'قمة عالمية' }, allPlay: true, difficulty: 1 },
            { id: '907', text: { en: 'faded', ar: 'باهت (لون)' }, allPlay: true, difficulty: 1 },
            { id: '908', text: { en: 'white', ar: 'أبيض' }, allPlay: true, difficulty: 1 },
            { id: '909', text: { en: 'play', ar: 'لعب/مسرحية/تشغيل' }, allPlay: false, difficulty: 0 }, // Ambiguous
            { id: '910', text: { en: 'germicide', ar: 'مبيد جراثيم' }, allPlay: false, difficulty: 0 },
            { id: '911', text: { en: 'Braille language', ar: 'لغة برايل' }, allPlay: false, difficulty: 0 },
            { id: '912', text: { en: 'treasure', ar: 'كنز' }, allPlay: false, difficulty: 0 },
            { id: '913', text: { en: 'check', ar: 'شيك/فحص/علامة صح' }, allPlay: true, difficulty: 1 }, // Ambiguous
            { id: '914', text: { en: 'dad', ar: 'بابا' }, allPlay: true, difficulty: 1 },
            { id: '915', text: { en: 'evil', ar: 'شر/شرير' }, allPlay: false, difficulty: 0 },
            { id: '916', text: { en: 'ribs', ar: 'ضلوع/ريش (أكل)' }, allPlay: true, difficulty: 1 }, // Ambiguous
            { id: '917', text: { en: 'thin', ar: 'رفيع/نحيف' }, allPlay: false, difficulty: 0 },
            { id: '918', text: { en: 'artery', ar: 'شريان' }, allPlay: true, difficulty: 1 },
            { id: '919', text: { en: 'half an hour', ar: 'نصف ساعة' }, allPlay: false, difficulty: 0 },
            { id: '920', text: { en: 'September', ar: 'سبتمبر' }, allPlay: false, difficulty: 0 },
            { id: '921', text: { en: 'hand', ar: 'يد/إيد' }, allPlay: false, difficulty: 0 },
            { id: '922', text: { en: 'lunch', ar: 'غداء' }, allPlay: true, difficulty: 1 },
            { id: '923', text: { en: 'glass', ar: 'زجاج/كوباية' }, allPlay: false, difficulty: 0 }, // Ambiguous
            { id: '924', text: { en: 'stillness', ar: 'سكون/هدوء' }, allPlay: false, difficulty: 0 },
            { id: '925', text: { en: 'spot', ar: 'بقعة/مكان' }, allPlay: true, difficulty: 1 }, // Ambiguous
            { id: '926', text: { en: 'seat', ar: 'مقعد/كرسي' }, allPlay: true, difficulty: 1 },
            { id: '927', text: { en: 'teeth', ar: 'أسنان' }, allPlay: false, difficulty: 0 },
            { id: '928', text: { en: 'satellite dish', ar: 'طبق دش' }, allPlay: true, difficulty: 1 },
            { id: '929', text: { en: 'Croquet', ar: 'كروكيه (لعبة)' }, allPlay: false, difficulty: 0 },
            { id: '930', text: { en: 'Morse code', ar: 'شفرة مورس' }, allPlay: true, difficulty: 1 },
            { id: '931', text: { en: 'toll-free number', ar: 'رقم مجاني' }, allPlay: true, difficulty: 1 },
            { id: '932', text: { en: 'hyphen', ar: 'شرطة (-) (علامة)' }, allPlay: false, difficulty: 0 },
            { id: '933', text: { en: 'geography', ar: 'جغرافيا' }, allPlay: true, difficulty: 1 },
            { id: '934', text: { en: 'joke', ar: 'نكتة' }, allPlay: true, difficulty: 1 },
            { id: '935', text: { en: 'five', ar: 'خمسة' }, allPlay: true, difficulty: 1 },
            { id: '936', text: { en: 'program', ar: 'برنامج' }, allPlay: true, difficulty: 1 },
            { id: '937', text: { en: 'mad cow disease', ar: 'جنون البقر' }, allPlay: true, difficulty: 1 },
            { id: '938', text: { en: 'engineering', ar: 'هندسة' }, allPlay: false, difficulty: 0 },
            { id: '939', text: { en: 'nuclear', ar: 'نووي' }, allPlay: true, difficulty: 1 },
            { id: '940', text: { en: 'twenty-five', ar: 'خمسة وعشرون' }, allPlay: true, difficulty: 1 },
            { id: '941', text: { en: 'dust', ar: 'تراب/غبار' }, allPlay: false, difficulty: 0 },
            { id: '942', text: { en: 'shoulder', ar: 'كتف' }, allPlay: true, difficulty: 1 },
            { id: '943', text: { en: 'wedding ring', ar: 'دبلة جواز' }, allPlay: true, difficulty: 1 },
        ]
    }
];

// Make sure your loadData function correctly loads this defaultGameData if localStorage is empty.
const defaultGameData = {
    categories: defaultCategories,
    settings: {
        currentLanguage: 'en',
        availableLanguages: ['ar', 'en'],
        challengeDice: "💪💪"
    },
    uiStrings: {
        ar: {
            startGame: "ابدأ المؤقت",
            nextCard: "البطاقة التالية",
            changeCard: "تغيير البطاقة",
            editData: "تعديل البيانات",
            editModalTitle: "تعديل الفئات والكلمات",
            timerTitle: "الوقت:",
            rollDice: "ارم النرد",
            cardPlaceholder: "اضغط \"البطاقة التالية\" للبدء",
            allPlay: "لعب جماعي",
            timesUp: "انتهى الوقت!",
            gameTitle: "لعبة التخمين",
            cardFrontTitle: "الوجه الأمامي",
            cardBackTitle: "الوجه الخلفي",
            challengeDice: "💪💪"
        },
        en: {
            startGame: "Start Timer",
            nextCard: "Next Card",
            changeCard: "Change Card",
            editData: "Edit Data",
            editModalTitle: "Edit Categories & Words",
            timerTitle: "Time:",
            rollDice: "Roll Dice",
            cardPlaceholder: "Press \"Next Card\" to Start",
            allPlay: "All Play",
            timesUp: "Time's Up!",
            gameTitle: "Pictionary",
            cardFrontTitle: "Front Face",
            cardBackTitle: "Back Face",
            challengeDice: "💪💪"
        }
    }
};

// Function to get a random word from categories matching a specific colorType
function getRandomWordByColor(colorType, excludeIds = []) {
    // Find categories matching the color that have words
    const eligibleCategories = gameData.categories.filter(cat =>
        cat.colorType === colorType && cat.words && cat.words.length > 0
    );

    if (eligibleCategories.length === 0) {
        console.warn(`No categories found or categories are empty for color: ${colorType}`);
        // Return a placeholder structure matching a full word object
        return {
            id: `missing_${colorType}`,
            text: { en: '???', ar: '؟؟؟' },
            allPlay: false,
            difficulty: 0,
            categoryId: null,
            colorType: colorType // Include colorType here
        };
    }

    // Get all word objects from eligible categories, excluding already used ones
    const eligibleWords = eligibleCategories.flatMap(cat =>
        cat.words
            .filter(word => !excludeIds.includes(word.id))
            .map(word => ({ // Return the full word object
                ...word, // Spread existing properties (id, text, allPlay, difficulty)
                categoryId: cat.id, // Add categoryId
                colorType: cat.colorType // Add colorType
            }))
    );

    if (eligibleWords.length === 0) {
        console.warn(`No unused words found for color: ${colorType}`);
        // Return placeholder if no unused words are found
        return {
            id: `missing_${colorType}_unused`,
            text: { en: '???', ar: '؟؟؟' },
            allPlay: false,
            difficulty: 0,
            categoryId: null,
            colorType: colorType
        };
    }

    // Select a random word object from the eligible list
    const randomIndex = Math.floor(Math.random() * eligibleWords.length);
    return eligibleWords[randomIndex]; // Return the full object
}


// --- NEW Function to get data for both card faces ---
function getCardData() {
    if (!gameData.categories || gameData.categories.length === 0) {
        console.error("No categories defined in game data.");
        return null;
    }

    const card = {
        front: [], // Will store full word objects
        back: []   // Will store full word objects
    };
    const usedWordIds = [];

    // Get 5 words for the front face
    for (const color of Object.values(COLOR_TYPES)) {
        const wordObj = getRandomWordByColor(color, usedWordIds); // Gets the full object
        if (wordObj && wordObj.id && !wordObj.id.startsWith('missing_')) { // Check if it's a valid word
            usedWordIds.push(wordObj.id);
        }
        card.front.push(wordObj); // Add the full object
    }

    // Get 5 words for the back face
    for (const color of Object.values(COLOR_TYPES)) {
        const wordObj = getRandomWordByColor(color, usedWordIds); // Gets the full object
        if (wordObj && wordObj.id && !wordObj.id.startsWith('missing_')) {
            usedWordIds.push(wordObj.id);
        }
        card.back.push(wordObj); // Add the full object
    }

    console.log("Generated Card Data (Full Objects):", card);
    return card; // Returns { front: [fullWordObj, ...], back: [fullWordObj, ...] }
}

// Helper to shuffle array (if needed)
/*
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
*/

function loadData() {
    console.log("Attempting to load data from localStorage...");
    try {
        const storedData = localStorage.getItem('pictionaryGameData');
        if (storedData) {
            gameData = JSON.parse(storedData);
            console.log("Data loaded successfully.");
            // Basic validation: ensure essential keys exist
            if (!gameData.settings || !gameData.categories || !gameData.uiStrings) {
                 console.warn("Loaded data is missing essential keys. Resetting to default.");
                 throw new Error("Invalid data structure");
            }
        } else {
            console.log("No data found in localStorage. Initializing with defaults.");
            gameData = JSON.parse(JSON.stringify(defaultGameData)); // Deep copy defaults
            saveData(); // Save the defaults immediately
        }
    } catch (error) {
        console.error("Error loading or parsing data:", error);
        console.log("Falling back to default data.");
        gameData = JSON.parse(JSON.stringify(defaultGameData)); // Deep copy defaults
         // Optionally clear corrupted data: localStorage.removeItem('pictionaryGameData');
        saveData(); // Attempt to save defaults
    }
     // Ensure current language is valid, default to 'ar' if not
    if (!gameData.settings?.availableLanguages?.includes(gameData.settings?.currentLanguage)) {
        console.warn(`Invalid current language "${gameData.settings?.currentLanguage}". Defaulting to 'ar'.`);
        gameData.settings.currentLanguage = 'ar';
        saveData();
    }
}

function saveData() {
    try {
        localStorage.setItem('pictionaryGameData', JSON.stringify(gameData));
        console.log("Data saved to localStorage.");
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
        // Handle potential errors like storage quota exceeded
        alert("Could not save game data. LocalStorage might be full or disabled.");
    }
}

function getUIText(key) {
    const lang = gameData.settings?.currentLanguage || 'ar';
    return gameData.uiStrings?.[lang]?.[key] || key; // Return key itself if not found
}

function setLanguage(langCode) {
    if (gameData.settings?.availableLanguages?.includes(langCode)) {
        gameData.settings.currentLanguage = langCode;
        console.log(`Language changed to: ${langCode}`);
        saveData();
        return true;
    }
    console.warn(`Attempted to set unsupported language: ${langCode}`);
    return false;
}

// --- Helper Functions ---
function findCategoryById(categoryId) {
    return gameData.categories.find(cat => cat.id === categoryId);
}

function findWordById(category, wordId) {
    if (!category || !category.words) return null;
    return category.words.find(word => word.id === wordId);
}

// --- CRUD Functions Implementation ---

function addCategory(nameObject, colorType) {
    if (!nameObject || Object.values(nameObject).every(name => !name.trim())) {
        alert("Category name cannot be empty.");
        return false;
    }
    if (!colorType || !Object.values(COLOR_TYPES).includes(colorType)) {
        alert("Invalid category color selected.");
        return false;
    }

    const newId = `cat_${Date.now()}`;
    const newCategory = {
        id: newId,
        name: nameObject,
        colorType: colorType,
        words: []
    };
    gameData.categories.push(newCategory);
    saveData();
    console.log("Category added:", newCategory);
    return true; // Indicate success
}

function removeCategory(categoryId) {
    const categoryIndex = gameData.categories.findIndex(cat => cat.id === categoryId);
    if (categoryIndex === -1) {
        console.error("Category not found for removal:", categoryId);
        return false;
    }

    // Optional: Confirmation (already handled in main.js listener)
    const removedCategory = gameData.categories.splice(categoryIndex, 1);
    saveData();
    console.log("Category removed:", removedCategory[0]);
    return true;
}

function editCategory(categoryId, newNameObject, newColorType) {
    if (!newNameObject || Object.values(newNameObject).every(name => !name.trim())) {
        alert("Category name cannot be empty.");
        return false;
    }
    if (!newColorType || !Object.values(COLOR_TYPES).includes(newColorType)) {
        alert("Invalid category color selected.");
        return false;
    }

    const category = findCategoryById(categoryId);
    if (!category) {
        console.error("Category not found for editing:", categoryId);
        return false;
    }

    category.name = newNameObject;
    category.colorType = newColorType;
    saveData();
    console.log("Category edited:", category);
    return true;
}

function addWord(categoryId, textObject, allPlay = false, difficulty = 1) {
    if (!textObject || Object.values(textObject).every(text => !text.trim())) {
        alert("Word text cannot be empty.");
        return false;
    }

    const category = findCategoryById(categoryId);
    if (!category) {
        console.error("Category not found for adding word:", categoryId);
        return false;
    }

    const newWordId = `word_${categoryId}_${Date.now()}`;
    const newWord = {
        id: newWordId,
        text: textObject,
        allPlay: !!allPlay, // Ensure boolean
        difficulty: parseInt(difficulty, 10) || 1
    };

    if (!category.words) { // Initialize words array if it doesn't exist
        category.words = [];
    }
    category.words.push(newWord);
    saveData();
    console.log(`Word added to category ${categoryId}:`, newWord);
    return true;
}

function removeWord(categoryId, wordId) {
    const category = findCategoryById(categoryId);
    if (!category || !category.words) {
        console.error("Category or words list not found for word removal:", categoryId);
        return false;
    }

    const wordIndex = category.words.findIndex(word => word.id === wordId);
    if (wordIndex === -1) {
        console.error("Word not found for removal:", wordId);
        return false;
    }

    // Optional: Confirmation (already handled in main.js listener)
    const removedWord = category.words.splice(wordIndex, 1);
    saveData();
    console.log("Word removed:", removedWord[0]);
    return true;
}

function editWord(categoryId, wordId, newTextObject, newAllPlay, newDifficulty) {
    if (!newTextObject || Object.values(newTextObject).every(text => !text.trim())) {
        alert("Word text cannot be empty.");
        return false;
    }

    const category = findCategoryById(categoryId);
    const word = findWordById(category, wordId);

    if (!word) {
        console.error("Word or category not found for editing:", categoryId, wordId);
        return false;
    }

    word.text = newTextObject;
    word.allPlay = !!newAllPlay;
    word.difficulty = parseInt(newDifficulty, 10) || 1;
    saveData();
    console.log("Word edited:", word);
    return true;
}


// --- Make sure getUICategories is still relevant or adjust if needed ---
function getUICategories() {
    const lang = gameData.settings.currentLanguage;
    return gameData.categories.map(cat => ({
        id: cat.id,
        name: cat.name[lang] || cat.name['en'] || '???',
        colorType: cat.colorType
    }));
}