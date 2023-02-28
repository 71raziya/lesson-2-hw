console.log('МЕНЮ');
var star = {
    cofee: {
        kapuchino: 'капучино',
        amerikano: 'американо',
        latte: 'латте',
        chernui: 'кофе классик',
    },
    tea: {
        greantea: 'зеленый чай',
        black: 'черный чай',
        tess: 'чай тесс',
        chompion: 'чай чемпион',
        lol: 'какойто чай',
    }
};
    console.log(star);
    // var bmb = Object.entries(star)
    // console.log(bmb) 


var bbc = prompt ('ЧТО ХОТИТЕ ЗАКАЗАТЬ ?');
// alert('ok,' + bbc + '?cvb!');
if (star){
    alert('ВАШ ЗАКАЗ:' + bbc + 'ПРИНЯТЬ!')
//   console.log('хорошо')
}else if(cofee){
    alert('ВАШ ЗАКАЗ:' + bbc + 'ПРИНЯТЬ!')
}else{
    alert('У НАС ТАКОГО НЕТУ')
//   console.error('нету')
}