handleDownloadBtn();

/**
 * Обработка кнопки загрузки
 */
function handleDownloadBtn() {
  const downloadBtn = document.querySelector('#btn-download');
  const select = document.querySelector('#select-language');

  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (select.value !== '') {
      getLanguageData(select.value)
        .then(data => showLanguages(data))
        .catch(function() {
          console.log('Данные с сервера не получены');
        });
    }
  });
}

/**
 * Получение данных с серевера с указанным параметром
 *
 * @param group значение с селекта, при клике
 * @returns {Promise<any | never>}
 */
function getLanguageData(group = '') {
  let url = 'https://frontend-test-api.alex93.now.sh/api/languages?group=' + group;

  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json());
}

/**
 *
 *
 * @param data Объект полученный с сервера
 */
function showLanguages(data) {
  const languageList = document.querySelector('.language__list');
  const loadedData = data.data;
  let items = '';

  for (let i = 0; i < loadedData.length; i++) {

    if (loadedData[i].logo) {
      items += createLanguageItem(loadedData[i].name, loadedData[i].logo, loadedData[i].year, loadedData[i].projectsCount, loadedData[i].docs);
    }
  }

  languageList.innerHTML = items;
}


/**
 * Формирует html одного языка, с указанными входными параметрами
 *
 * @param name {string} Язык
 * @param logo {string} ссылка на лого
 * @param year {string} год выпуска
 * @param projectCount {string} реализованных проектов
 * @param doc {string} ссылка на документацию
 * @returns {string} возращает html одного айтема
 */
function createLanguageItem(name, logo, year, projectCount, doc) {
  return '<div class="language__item">\n' +
    '        <div class="logo" style="background-image:url(' + logo + ')"></div>\n' +
    '        <div class="info">\n' +
    '          <h3>' + name + '</h3>\n' +
    '          <p>Основан в ' + year + '</p>\n' +
    '          <p>' + projectCount + ' проектов на GitHub</p>\n' +
    '          <a href="' + doc + '" target="_blank">Документация</a>\n' +
    '        </div>\n' +
    '      </div>';
}

