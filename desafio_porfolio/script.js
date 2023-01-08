const api_github = 'https://api.github.com/users';

async function getUserGithubImage(user_name){
    await fetch(`${api_github}/${user_name}`)
    .then(async response => await response.json())
    .then(data => profile_image.src = data.avatar_url)
    // .then(data => document.querySelector('div#profile-card img#profile_image').setAttribute('src', `${data.avatar_url}`))
    .catch(error => console.error(error));
}

getUserGithubImage('LokullTZ');

