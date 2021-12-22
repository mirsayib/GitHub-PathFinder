class Github {
    constructor() {
        this.client_id = ' 45ad01761205055eddb7';
        this.client_secret = 'aa3afa57fe900f12274e8317608d2d31493041a7';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile: profile
        };
    }
}