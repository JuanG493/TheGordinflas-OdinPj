

export const mkHomePage = (frame) => {
    let textNameRest = 'THE GORDINFLAS'

    let texPresentation =
        'Welcome to The Gordinflas, our new restaurant dedicated to serving the best BBQ in town using traditional  \
                    techniques and premium ingredients. With dishes like succulent ribs and mouth-watering briskets, prepared    \
                    by experienced chefs, every meal is cooked to perfection. The Gordinflas prides itself on offering generous   \
                    portions and a comfortable, friendly atmosphere, making it the perfect spot for families and friends to gather.  \
                    We aim to become a favorite destination for BBQ lovers seeking an unforgettable dining experience.'

    let hWeek = [
        'Breakfast: 7: 00 am - 10: 00 am',
        'Lunch: 11: 30 am - 2: 30 pm',
        'Dinner: 5: 00 pm - 10: 00 pm '
    ]

    let hWeekend = [
        'Brunch: 10: 00 am - 3: 00 pm',
        'Dinner: 5: 00 pm - 10: 00 pm'
    ]


    let textLocation =
        `The Gordinflas is located at 223 Red Pinston, in the heart of Greeneville, a vibrant and bustling town in the heart of the state. `

    frame.innerHTML = ''

    let htmlContent =
        `<div>
            <h1>${textNameRest}</h1>
            <br>
            <p>${texPresentation}</p>
            <div>
                <br>
                <h2>Horarios</h2>
                <br>
                <h3>Monday - Friday</h3>
                <ul>${hWeek.map(item => `<li>${item}</li>`).join('')}</ul>
                <br>
                <h3>Saturday - Sunday</h3>
                <ul>${hWeekend.map(item => `<li>${item}</li>`).join('')}</ul>
             </div>
            <div>
            <br>
                <h2>Location</h2>
                <br>
                <p>${textLocation}</p>
            </div> 
        </div> `;


    frame.innerHTML = htmlContent



}
