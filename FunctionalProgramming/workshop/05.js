    function checkUsersValid(goodUsers) {
        return function allUsersValid(submittedUsers) {
            return submittedUsers.every(submittedUser => goodUsers.some(
                goodUser => checkGoodUsers(goodUser, submittedUser)));
        };
    }

    function checkGoodUsers(goodUser, submittedUser) {
        return goodUser.id === submittedUser.id;
    }

    module.exports = checkUsersValid