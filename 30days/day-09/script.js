const wrapper = document.querySelector('.wrapper'),
    toast = wrapper.querySelector('.toast'),
    icon = wrapper.querySelector('.icon'),
    message = wrapper.querySelector('.message'),
    info = wrapper.querySelector('.info'),
    closeIcon = wrapper.querySelector('.close-icon');

    window.onload = () => {
        function ajax(){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
            xhr.onload = () => {
                if(xhr.status >= 200 && xhr.status < 300){
                    // If the request is successful, show the online toast
                    toast.classList.remove('offline');
                    icon.innerHTML = '<i class="uil uil-wifi"></i>';
                    message.innerHTML = 'You are online';
                    info.innerHTML = 'You are connected to the internet.';
                    
                    closeIcon.onclick = () => {
                        wrapper.classList.add('hide');
                    }

                    setTimeout(() => {
                        wrapper.classList.add('hide');
                    }, 3000); // Hide the toast after 3 seconds

                } else {
                    offline();
                }
            }
            xhr.onerror = () => {
                offline();
            } 
            xhr.send();
        }

        function offline(){
            // If the request fails, show the offline toast
            wrapper.classList.remove('hide');
            toast.classList.add('offline');
            icon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
            message.innerHTML = 'You are offline';
            info.innerHTML = 'You are not connected to the internet.';
        }

        setInterval(() => {
            ajax();
        }, interval = 100); // Check every 3 seconds
    }


