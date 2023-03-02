
export const mkContactPage = (frame) => {
    frame.innerHTML = '';

    const contactOne = [
        'smith',
        '666-666-666',
        'theodinproyect@gmail.com'
    ]

    const contacTwo = [
        'Jhon',
        '777-777-777',
        'theodinproyect@gmail.com'
    ]


    let htmlContent =
        `<div>
            <h1>Contact Us</h1>
            <br>
          <div><h3>Manager</h3><br><ul>${contactOne.map(item => `<li>${item}</li>`).join('')}</ul></div>
          <br>
           <div><h3>Service</h3><br><ul>${contacTwo.map(item => `<li>${item}</li>`).join('')}</ul></div>
        </div>`


    frame.innerHTML = htmlContent

}