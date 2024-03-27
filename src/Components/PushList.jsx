export default function PushList() {
    setTimeout(() => {
        const getList = document.getElementsByClassName('list')[0];
        for (let i = 0; i < localStorage.length; i++) {
          const createListP = document.createElement('p');
          createListP.innerHTML = `<ul><span class="round"></span>${localStorage.getItem(i)}</ul><i class="butx">X</i>`;
          getList.appendChild(createListP);
      }
    }, 5)
}