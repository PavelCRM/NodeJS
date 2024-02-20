// Создание объекта "Музыкальная коллекция"
const musicCollection = {
    albums: [
        { title: "Альбом 1", artist: "Исполнитель 1", year: "2000" },
        { title: "Альбом 2", artist: "Исполнитель 2", year: "2010" },
        { title: "Альбом 3", artist: "Исполнитель 3", year: "2020" }
    ],
    // Реализация кастомного итератора
    [Symbol.iterator]: function () {
        let index = 0;
        const albums = this.albums;
        return {
            next: function () {
                return index < albums.length ? { value: albums[index++], done: false } : { done: true };
            }
        };
    }
};

// Использование цикла for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}