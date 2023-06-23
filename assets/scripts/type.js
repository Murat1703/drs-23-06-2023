var CharTimeout = 50; // скорость печатания
var StoryTimeout = 2000; // время ожидания перед переключением

var Summaries = new Array();
var SiteLinks = new Array();

    Summaries[0] = 'IT Оутсорсинг';
    SiteLinks[0] = 'http://wp-kama.ru/?p=4015';
    Summaries[1] = 'Сервера';
    SiteLinks[1] = 'http://wp-kama.ru/id_142/kama-thumbnail.html';
    Summaries[2] = 'Телефония';
    SiteLinks[2] = 'http://wp-kama.ru/id_803/pishem-pravilnyiy-robotstxt-dlya-wordpress.html';
    Summaries[3] = 'Разработка веб сайтов';
    SiteLinks[3] = 'http://wp-kama.ru/?p=4271';
    Summaries[4] = 'Обслуживание 1С';
    SiteLinks[4] = 'http://wp-kama.ru/id_95/plagin-dlya-blokirovki-spama-v-kommentariyah-dlya-wordpress.html';
    Summaries[5] = 'Поставка оборудования';
    SiteLinks[5] = 'http://wp-kama.ru/note/plagin-dlya-legkogo-upravleniya-saytom-na-wordpress-versiya-3';
    Summaries[6] = 'Видеонаблюдение';
    SiteLinks[6] = 'http://wp-kama.ru/id_112/avtomaticheskoe-rastyagivanie-polya-textarea-kommentariya-versiya-2.html';
    Summaries[7] = 'СКС';
    SiteLinks[7] = 'http://wp-kama.ru/id_112/avtomaticheskoe-rastyagivanie-polya-textarea-kommentariya-versiya-2.html';

/* Печатание текста - Тиккер
----------------------------------------------------------------
var CharTimeout = 20;
var StoryTimeout = 7000;
var Summaries = new Array();
var SiteLinks = new Array();
    Summaries[0] = "CMS для простых сайтов GetSimple на русском языке";
    SiteLinks[0] = "#link1";
    Summaries[1] = "Spectrum - шикарная тема для WordPress на русском языке";
    SiteLinks[1] = "#link2";
startTicker();
*/

function startTicker(){
    massiveItemCount =  Number(Summaries.length); //количество элементов массива
    // Определяем значения запуска
    CurrentStory     = -1;
    CurrentLength    = 0;
    // Расположение объекта
    AnchorObject     = document.getElementById("Ticker");
    runTheTicker();     
}
// Основной цикл тиккера
function runTheTicker(){
    var myTimeout;  
    // Переход к следующему элементу
    if(CurrentLength == 0){
        CurrentStory++;
        CurrentStory      = CurrentStory % massiveItemCount;
        StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
        AnchorObject.href = SiteLinks[CurrentStory];
    }
    // Располагаем текущий текст в анкор с печатанием
    AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
    // Преобразуем длину для подстроки и определяем таймер
    if(CurrentLength != StorySummary.length){
        CurrentLength++;
        myTimeout = CharTimeout;
    } else {
        CurrentLength = 0;
        myTimeout = StoryTimeout;
    }
    // Повторяем цикл с учетом задержки
    setTimeout("runTheTicker()", myTimeout);
}
// Генератор подстановки знака
function znak(){
    if(CurrentLength == StorySummary.length) return "";
    else return "|";
}

startTicker();
