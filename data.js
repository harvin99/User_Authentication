const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}
module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'admin', password: 'admin', role: ROLE.ADMIN},
        {id: 2, name: 'bob', password: 'bob123', role: ROLE.BASIC},
        {id: 3, name: 'sam', password: 'sam123', role: ROLE.BASIC}
    ],
    projects: [
        {id: 2, nameProject: 'Bob project', userId: 2},
        {id: 3, nameProject: 'Sam project', userId: 3}
    ]
}