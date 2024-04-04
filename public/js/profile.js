const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#roster-name').value.trim();
  const roster_ranking = document.querySelector('#roster-ranking').value.trim();
  const review = document.querySelector('#roster-rev').value.trim();

  if (name && roster_ranking && review) {
    const response = await fetch(`/api/roster`, {
      method: 'POST',
      body: JSON.stringify({ name, roster_ranking, review }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create roster');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/roster/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete roster');
    }
  }
};

document
  .querySelector('.new-roster-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.roster-list')
  .addEventListener('click', delButtonHandler);
