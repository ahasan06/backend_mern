"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    //learn spread operator
    const bros1 = ['Ahasan', 'Habib', 'Rahat'];
    const bros2 = ['Rabbi', 'Siam', 'Prangon'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: "Mizan"
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: "Nahid"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends("Rabbi", "Rahim", "Karim", "Habib");
}
