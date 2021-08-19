/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
export async function deleteChara() {
  const idChara = sessionStorage.getItem('idChara');
  if (confirm('Are you sure?') === true) {
    try {
      const resp = await fetch(
        `https://character-database.becode.xyz/characters/${idChara}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!resp.ok) {
        throw new Error('ID not found');
      } else {
        window.location.href = 'index.html';
      }
    } catch (err) {
      alert(err);
    }
  }
}
