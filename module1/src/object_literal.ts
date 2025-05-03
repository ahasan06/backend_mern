const user : {
    readonly company :string, // readonly means can not change the value on this variable
    firstName :string;
    middleName :string;
    lastName :string;
    isMarried :boolean;
} = {
    company :"Programming Hero Bangladesh",
    firstName :"Ahasan",
    middleName :"Habib",
    lastName :"Nahid",
    isMarried : true,
}

user.company = "PH"