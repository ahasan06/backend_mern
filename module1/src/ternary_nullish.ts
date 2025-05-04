{
    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentaddress: string,
            permanentaddress: string
        }
    }

    const user:User = {
        name : "nahid",
        address : {
            city : "Cumilla",
            road : "12/A",
            presentaddress : "Dhaka"
        }
    }

    const permanentaddress = user?.address?.permanentaddress ?? 'No perment Address'
    console.log({permanentaddress});
    

}