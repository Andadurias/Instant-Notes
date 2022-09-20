/**
 * Local Storage configuration
 * Names and data
 */
export const databaseName = 'test.db';
export const tableName = 'Test';

//TABLES DESIGN
export const userInformationTable = {
    tableName : 'UserInformation',
    // columns 
    id : 'userID', 
    userName : 'userName', 
    mail : 'mail', 
    password : 'password',
    // type of the columns 
    idType : 'INTEGER PRIMARY KEY AUTOINCREMENT',
    userNameType : 'TEXT NOT NULL',
    mailType : 'TEXT NOT NULL',
    passwordType : 'TEXT NOT NULL'
}

// CARDS TABLE 
const card = 'cardID'
export const cardTable = {
    tableName : 'Cards',
    // columns 
    id : card,
    content : 'content',
    creationTime : 'creationTime',
    // types
    idType : 'INTEGER PRIMARY KEY',
    contentType : 'TEXT NOT NULL', // this is the only value we have to insert 
    creationTimeType : 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL'
}
// TAGS TABLE 
const tag = 'tag'
export const tagsTable = {
    tableName : 'Tags',
    // columns 
    tag : tag,
    card : card,
    // types
    tagType : 'TEXT NOT NULL',
    cardType : 'INTEGER NOT NULL',
    // options
    options : 
    `FOREIGN KEY(${card}) REFERENCES ${cardTable.tableName}(${cardTable.id}),
    PRIMARY KEY (${tag}, ${card})
    `
}