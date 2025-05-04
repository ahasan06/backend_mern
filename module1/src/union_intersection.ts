{
    // union types
    type frontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    const newDeveloper : frontendDeveloper = 'juniorDeveloper'
    
    type User = {
        name :string ;
        email : string ;
        gender : 'male' | 'female';
        bloodGroup : "A+"|'B+'| 'O+'
    }

    const user1: User = {
        name : "Nahid",
        gender : "male",
        bloodGroup : "A+"
    }



}