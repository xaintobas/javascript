const searchButton = document.getElementById('searchButton');

async function getGithubProfileAsync() {
  const username = document.getElementById('username').value;
  const profile = document.getElementById('profile');
  const avatar = document.getElementById('avatar');
  const accountname = document.getElementById('name');
  const bio = document.getElementById('bio');
  const errorMessage = document.getElementById('error-message');

  profile.classList.add('hidden');
  errorMessage.textContent = '';

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if(!response.ok) {
      throw new Error(`User not found ${response.status}`);
    }

    const data = await response.json();
    profile.classList.remove('hidden');
    avatar.src = data.avatar_url;
    accountname.textContent = data.name || 'No Name Available 😉';
    bio.textContent = data.bio || 'No Bio Available 😉';

  } catch (error) {
    errorMessage.textContent = error.message;
  }
}

searchButton.addEventListener('click', getGithubProfileAsync);


