console.log("new test");
// console.log(_stroage_handler);
console.log(_storage_handlers);
console.log('balance', typeof _storage_handlers.balance,
    'lcs', typeof _storage_handlers.lcs,
    'gcs', typeof _storage_handlers.gcs);

console.log('Storage', typeof Storage, Storage);

[_storage_handlers.lcs, _storage_handlers.gcs].forEach(function (handler) {
    var s = new Storage(handler);
    console.log(s.get("test"));
    console.log(s.put('new_key', "new value"));
    console.log(s.del('new_key'));
});

new Storage({});
