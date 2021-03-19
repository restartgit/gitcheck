function check_text (info, tab) {
	var text = info.selectionText;
	window.open('https://github.com/search?q=' + text.replace(/#|;/g, "") + '&type=Code');
};

chrome.contextMenus.create({
	'title': 'Поиск на GitHub', /* Текст пунтка меню */
	'contexts':['selection'], /* Тип пункта меню */
	'onclick': check_text /* Запомните это место, вместо этой функции мы будем вставлять код перевода */
});