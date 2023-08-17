const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5fbafb69emsh904b0562102575bp13afe9jsn59e938df8dcd',
		'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
	}
};


export class API {
    constructor(){}

    // kullanıcı detaylarını alma
    async getUser(username){
        try{
            const res = await fetch(`
             https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}
`, options);
             const data = await res.json();
             return data;
        }catch(err){
            console.log(err);
        }
    }

    // diğer API istekleri
}