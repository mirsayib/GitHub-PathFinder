//Init Gihub
const github = new Github();
//Init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById('searchUser');


//Search input Event listener
searchUser.addEventListener('keyup', e => {
    //Get Input Text
    const userText = e.target.value;
    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert

            }else{
                //Show Profile
                ui.showProfile(data.profile);

            }
        });
    }else{
        //Clear Profile
    }
});