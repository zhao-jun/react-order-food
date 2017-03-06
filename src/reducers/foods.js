const foods = (state=[], action) => ([
    {
        id: 1,
        pic:'/7d7ffe23fcb06c16e9b3cbfed23c3b28.png',
        describe: '香辣多汁，口感鲜美',
        title: '二块香辣鸡翅',
        price: 10.5,
        num:0
    },
    {
        id: 2,
        pic:'two',
        describe: '/0e9e4c40b8ea2b5397219ee59307a0f4.png',
        title: '一块吮指原味鸡',
        price: 11,
        num:0
    },
    {
        id: 3,
        pic:'/eaa6dbdb6d2ed589b8a82ca6d1cda404.png',
        describe: '整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁',
        title: '香辣鸡腿堡',
        price: 17,
        num:0
    }
]);

export default foods;