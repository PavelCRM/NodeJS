// Создаем коллекцию Map для хранения заказов каждого клиента
const orders = new Map();

// Функция для добавления заказа клиента
function addOrder(client, dish, chef) {
    if (orders.has(client)) {
        orders.get(client).push({ dish, chef });
    } else {
        orders.set(client, [{ dish, chef }]);
    }
}

// Добавляем заказы клиентов
addOrder({ name: 'Алексей' }, 'Пицца "Пепперони"', 'Виктор');
addOrder({ name: 'Алексей' }, 'Тирамису', 'Дмитрий');
addOrder({ name: 'Мария' }, 'Суши "Калифорния"', 'Ольга');
addOrder({ name: 'Мария' }, 'Пицца "Маргарита"', 'Виктор');
addOrder({ name: 'Ирина' }, 'Чизкей', 'Дмитрий');

// Выводим информацию о заказах
orders.forEach((dishes, client) => {
    console.log(`${client.name} заказал(а):`);
    dishes.forEach(order => {
        console.log(`- ${order.dish}`);
        console.log(`  Готовит повар: ${order.chef}`);
    });
    console.log();
});
