( async () => {
    let response = await fetch('/students')
    let students = await response.json()

    for (let student of students) {

        const thead = document.getElementById('thead')
        const tbody = document.getElementById('tbody')

        const tr = document.createElement("tr")
        const id = document.createElement("td")
        const firstname = document.createElement("td")
        const lastname = document.createElement("td")
        const email = document.createElement("td")

        id.textContent = student.id
        firstname.textContent = student.firstname
        lastname.textContent = student.lastname
        email.textContent = student.email

        tr.append(id)
        tr.append(firstname)
        tr.append(lastname)
        tr.append(email)
        
        tbody.append(tr)
    }
})()