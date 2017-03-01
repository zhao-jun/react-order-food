const foods = (state=[], action) => ([
    {
        id: 1,
        pic:'one',
        describe: '香辣多汁，口感鲜美',
        title: '二块香辣鸡翅',
        price: 10.5,
        num:0
    },
    {
        id: 2,
        pic:'two',
        describe: '具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁',
        title: '一块吮指原味鸡',
        price: 11,
        num:0
    },
    {
        id: 3,
        pic:'three',
        describe: '整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁',
        title: '香辣鸡腿堡',
        price: 17,
        num:0
    }
]);

export default foods;