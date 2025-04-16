 document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

      categories.forEach(category => {
        const titleElement = category.querySelector('.content h1');
        const titleText = titleElement.textContent.trim();

        category.addEventListener('click', () => {
          if (titleText === 'Personal') {
            window.location.href = 'https://library.cmu.ac.th/';
          } else if (titleText === 'รายงานวิจัย') {
            window.location.href = 'https://cmudc.library.cmu.ac.th/frontend/Search/';
          }
        });
      });
    });