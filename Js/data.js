// Constuction for creat question
function Questions(title, answers, trueVariant) {
    this.title = title;
    this.answers = answers;
    this.trueVariant = trueVariant
};

// Questions constructor function(metod)
Questions.prototype.findTrue = function (select) {
    return select === this.trueVariant
};

// Questions array
const questions = [
    new Questions('Unicode-da İnformatika sözündə neçə bit var?', {
        A: 11,
        B: 10,
        C: 22,
        D: 88
    }, 'D'),
    new Questions('Aşağıdakılardan hansı yaddaş qurğusudur?', {
        A: "Modem",
        B: "CPU",
        C: "Monitor",
        D: "Keyboard"
    }, 'B'),
    new Questions('Tətbiqi proqrama aid deyil:', {
        A: "Əməliyyat sistemləri",
        B: "Mətn redaktorları",
        C: "Təqdimat proqramları",
        D: "Qrafik redaktorlar",
    }, 'A'),
    new Questions('Excel – də verilmiş düsturun nəticəsini hesablayın:    = (A2*B3)^2 + D4/A1 Burada  A2=3, B3=2, D4=-18, A1=2;', {
        A: "3",
        B: "21",
        C: "0",
        D: "27"
    }, 'D'),
    new Questions('İP (ipv4) ünvanın uzunluğu neçə bittir?', {
        A: "1024",
        B: "16",
        C: "32",
        D: "128",
    }, 'C'),
    new Questions('a=b-1,b=2a+3.a=b-a Alqoritm yerinə yetiriləndən sonra a-nın qiyməti 20 olmuşdur. Alqoritmin yerinə yetirilməsindən əvvəl b nin qiyməti neçə idi?', {
        A: "19",
        B: "18",
        C: "0",
        D: "21",
    }, 'B'),
    new Questions('6410=100x tənliyində x-i tapin', {
        A: "-8",
        B: "-16",
        C: "9",
        D: "8",
    }, 'D'),
    new Questions('Tətbiqi proqrama aid deyil: 8', {
        A: "1 → % , 2 → * , 3 → # , 4 → &",
        B: "1 → % , 2 → #, 3 → & , 4 → #",
        C: "1 → & , 2 → * , 3 → % , 4 → #",
        D: "1 → * , 2 → # , 3 → & , 4 → %",
    }, 'B'),
    new Questions('Brauzer nədir? (sadə anlamda)', {
        A: "Komputerin xarici qurğusu",
        B: "Proqramlaşdırma dili",
        C: "Printerin texniki hissəsi",
        D: " İnternet səhifələrinə baxış proqramı"
    }, 'D'),
    new Questions(' Mənimsəmə operatoru nə üçün istifadə olunur?', {
        A: "dəyişəni silmək üçün",
        B: "dəyişənin qiymətini dəyişmək üçün",
        C: "dəyişənin tipini dəyişdirmək üçün",
        D: "dəyişənin adını dəyişmək üçün"
    }, 'B'),
    new Questions('Aşağıdakılardan hansı İP (ipv4) ünvan ola bilər ?', {
        A: "123.22.12.1",
        B: "122.21.11",
        C: "221.222.432.1",
        D: "321.12.12.32",
    }, 'A'),
    new Questions('Əməliyyat sistemində obyektləri qrup şəklində axtarmaq üçün hansı simvoldan istifadə olunur ?', {
        A: ".",
        B: "#",
        C: "%",
        D: "*"
    }, 'D'),
    new Questions('Əməli yaddaşın tutumu nə ilə ölçülür?', {
        A: "baytla",
        B: "file",
        C: "əmirlə",
        D: "hamısı doğrudur"
    }, 'A'),
    new Questions('32MB neçə bitdir?', {
        A: "2 ^ 28",
        B: "2 ^ 24",
        C: "2 ^ 44",
        D: "2 ^ 22"
    }, 'A'),
    new Questions('Paint , WordPad, Calculator proqramlarını işlətmək üçün hansı menyu istifadə olunur?', {
        A: "Start\\ All Programs\\ Microsoft Office",
        B: "Start\\ All Programs\\ Accessories",
        C: "Start\\ Documents",
        D: "Start\\ C"
    }, 'B'),
];

