const connection = require('./connection');

const allItems = async () => {
    
    const [query] = await connection.execute('select * from uniaoe08_UENC.tb_login');
    console.log(this.query);
    return query;
}

module.exports = allItems;