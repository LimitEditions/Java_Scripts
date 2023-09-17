async function fetchData() {
  try {
    const response = await fetchData('data.json');
    console.log(response);
    if (!response.ok) {
      throw new Error('не удалось получть данные с json')
    }
    const data = await response.json();
    console.log(data);
    const productBox = document.querySelector('.content');
    data.forEach(({ image, title, subtitle, prise }) => {
      const productEl = `
          <div class="card">
            <div class="img__Card">
              <img src="${image}" />
            </div>
            <div class="text__Card">
              <h4>"${title}"</h4>
              <h3>
              "${subtitle}"
              </h3>
              <p>"${prise}"</p>
            </div>
          </div>`;
      productBox.insertAdjacentHTML('beforeend', productEl);
    })
  } catch (error) {
    console.error(error);
  }
}

fetchData();