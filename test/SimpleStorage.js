const SimpleStorage = artifacts.require('SimpleStorage')

contract('SimpleStorage', () => {
    let simpleStorage = null;
    before(async () => {
        simpleStorage = await SimpleStorage.deployed();
    });

    it('Should add an element to ids array', async () => {
        await simpleStorage.add(10);
        const result = await simpleStorage.ids(0);
        assert(result.toNumber() === 10);
    });

    it('Should get an element of ids array', async () => {
        await simpleStorage.add(20);
        const result = await simpleStorage.get(1);
        assert(result.toNumber() === 20);
    });

    it('Should get ids array', async () => {
        const result = await simpleStorage.getAll();
        const ids = result.map(id => id.toNumber());
        assert.deepEqual(ids,[10, 20]);
    });

    it('Should get length of ids array', async () => {
        const result = await simpleStorage.length();
        assert(result.toNumber() === 2);
    });
});