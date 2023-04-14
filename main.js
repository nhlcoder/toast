function toast({
    title = '',
    message = '',
    type = '',
    duration = ''
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        const autoClear = setTimeout(()=>{
            main.removeChild(toast);
        }, duration + 1000);
        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoClear);
            };
        };
        const icons = {
            tiktok: 'fa-brands fa-tiktok',
            facebook: 'fa-brands fa-facebook',
            warning: 'fa-brands fa-twitter',
            error: 'fa-brands fa-github',
        }
        const icon = icons[type];
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccess(){
    toast({
        title: 'Tiktok',
        message: 'Ban muon dung Tiktok',
        type: 'tiktok',
        duration: 3000,
    });
}
function showError(){
    toast({
        title: 'Facebook',
        message: 'Ban muon dung Facebook',
        type: 'facebook',
        duration: 3000,
    });
}