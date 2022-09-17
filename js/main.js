const element = document.getElementById('custom-select');
const choices = new Choices(element, {
  searchEnabled: false,
})


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185, 2.354224],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/Subtract.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-15, -42]
        });



      myMap.geoObjects.add(myPlacemark);

    };

    new SimpleBar(document.querySelector('.simplebar-wrapper'), {
      scrollbarMaxSize: 70,
    });

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.validation__form', {
  rules: {
    name: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Некорректный номер телефона'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Некорректный e-mail'
    }
  },
  colorWrong: '#FF5C00',
})
