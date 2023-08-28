const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (let i = 0; i < fruit.length; i++) {
        const fruitName = fruit[i].toLowerCase();
        if (fruitName.includes(str.toLowerCase())) {
            results.push(fruit[i]);
        }
    }

	return results;
}

function searchHandler(e) {
	const inputValue = e.target.value;
    const filteredResults = search(inputValue);

    showSuggestions(filteredResults, inputValue);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

    if (inputVal === '') {
        suggestions.classList.remove('has-suggestions');
        return;
}
  
for (let i = 0; i < results.length; i++) {
	const li = document.createElement('li');
	li.textContent = results[i];
	suggestions.appendChild(li);
}

suggestions.classList.add('has-suggestions');
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
		suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions');
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);