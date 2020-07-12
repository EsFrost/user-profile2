const modal = document.querySelector('.modal');
const profPic = document.querySelector('#profPic');

profPic.addEventListener('click', () => {
	modal.classList.add('open');
});


modal.addEventListener('click', (e) => {
	if(e.target.classList.contains('modal')) {
		modal.classList.remove('open');
	}
});