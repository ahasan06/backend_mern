"use strict";
{
    const user = {
        id: 345,
        name: {
            fname: "Ahasan",
            lname: "Nahid"
        },
        contactNo: '0175xxxxxx',
        address: "Dhaka,Bangladesh"
    };
    const { contactNo, name: { fname }, } = user;
}
