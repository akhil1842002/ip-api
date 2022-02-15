function ipLocater() {

    const items = document.querySelector('.items')
    items.style.display = 'none'

    const form = document.querySelector('.form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        var input = document.querySelector('#input').value
        const alphabet = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}:"|<>?~`-=[];/,'
        var verifiedValue = ''
        for (i = 0; i < alphabet.length; i++) {
            if (input.includes(alphabet[i])) {
                const displayError = document.querySelector('.display-error')
                displayError.style.display = 'block'
                setTimeout(() => {
                    displayError.style.display = 'none'
                }, 2000);
                document.querySelector('#input').value = ''
                break
            }

            if (i == alphabet.length - 1) {
                verifiedValue = input
                document.querySelector('#input').value = ''
                fetch('https://api.freegeoip.app/json/' + verifiedValue + '?apikey=2ec62cb0-8d6f-11ec-8468-51f916f31912')
                    .then(res => res.json())
                    .then(data => {
                        const { ip,
                            country_code,
                            country_name,
                            region_code,
                            region_name,
                            metro_code,
                            city,
                            zip_code,
                            time_zone,
                            latitude,
                            longitude
                        } = data
                        var items = document.querySelector('.items')


                        if (data) {
                            const sample = document.querySelector('.sample-item')
                            sample.style.display = 'none'
                            items.style.display = 'block'
                            items.innerHTML += `
                            <div class="items">
            <div class="all-items">
                <div class="ip-container">
                    <h1>IP : <span>${ip}</span></h1>
                </div>

                <div class="ip-details-container">
                    <div class="left-container">
                        <div class="country_code">
                            <h3>Country Code : <span>${country_code}</span></h3>
                        </div>
                        <div class="country_name">
                            <h3>Country Name : <span>${country_name}</span></h3>
                        </div>
                        <div class="region_code">
                            <h3>Region Code : <span>${region_code}</span></h3>
                        </div>
                        <div class="region_name">
                            <h3>Region Name : <span>${region_name}</span></h3>
                        </div>
                        <div class="metro_code">
                            <h3>MetroCode : <span>${metro_code}</span></h3>
                        </div>
                    </div>

                    <div class="right-container">
                        <div class="city">
                            <h3>City : <span>${city}</span></h3>
                        </div>
                        <div class="zip_code">
                            <h3>ZipCode : <span>${zip_code}</span></h3>
                        </div>
                        <div class="time_zone">
                            <h3>Time Zone : <span>${time_zone}</span></h3>
                        </div>
                        <div class="latitude">
                            <h3>Latitude : <span>${latitude}</span></h3>
                        </div>
                        <div class="longitude">
                            <h3>Longitude : <span>${longitude}</span></h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
                        `
                        }
                        else {
                            const sample = document.querySelector('.sample-item')
                            sample.style.display = 'block'
                        }
                    })
            }
        }
    })
}
ipLocater()

