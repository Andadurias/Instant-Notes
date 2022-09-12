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
    id : 'userID', idType : 'TEXT PRIMARY KEY',
    userName : 'userName', 
    mail : 'mail', 
    password : 'password',
    // type of the columns 
    userNameType : 'TEXT NOT NULL',
    mailType : 'TEXT NOT NULL',
    passwordType : 'TEXT NOT NULL'
}

// tagsTable
const tag = 'tag'
const card = 'cardID'

export const tagsTable = {
    tableName : 'Tags',
    // columns 
    tag : tag,
    card : card,
    // types
    tagType : 'TEXT NOT NULL',
    cardType : 'TEXT NOT NULL',
    // options
    options : `PRIMARY KEY (${tag}, ${card})`
}

export const cardTable = {
    tableName : 'Cards',
    // columns 
    id : 'cardID',
    content : 'content',
    // types
    idType : 'TEXT PRIMARY KEY',
    contentType : 'TEXT NOT NULL'
}