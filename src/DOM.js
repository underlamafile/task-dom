/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < count; i++) {
        body.insertAdjacentHTML('afterbegin', `<${tag}>${content}</${tag}>`);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function newChild(childrenNum, recursiveLevel) {
        let div = document.createElement('div');
        div.classList = `item_${recursiveLevel}`;
        if (recursiveLevel < level) {
            for (let i = 0; i < childrenNum; i++) {
                div.appendChild(newChild(childrenCount, recursiveLevel + 1));
            }
        }
        return div;
    }
    return newChild(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let items = tree.getElementsByClassName('item_2');
    for (let item of items) {
        let section = document.createElement('section');
        section.className = item.classList;
        section.innerHTML = item.innerHTML;
        item.parentNode.replaceChild(section, item);
    }
    return tree;
}
