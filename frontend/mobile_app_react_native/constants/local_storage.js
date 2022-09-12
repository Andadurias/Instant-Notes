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

export const tagsTable = {
    tableName : 'Tags',
    // columns 
    tag : 'tag',
    card : 'cardID',
    idType : 'TEXT NOT NULL',
    cardType : 'TEXT NOT NULL',
    // options
    options : `PRIMARY KEY (${tagsTable.tag}, ${tagsTable.card})`
}