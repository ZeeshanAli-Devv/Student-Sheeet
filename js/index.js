const studentData = (event) =>{
    event.preventDefault();
    const form = document.forms.addData;
    const table = document.getElementById("tableid");

    let user = {
        name    :  form.elements.name.value.trim(),
        fees    :  form.elements.fees.value.trim(),
        course  :  form.elements.course.value.trim(),
        date    :  form.elements.date.value.trim()
    }

    table.innerHTML +=  `
        <tr class="border-2">
            <td>${user.name}</td>
            <td>${user.fees}</td>
            <td>${user.course}</td>
            <td>${user.date}</td>
        </tr>
    
    `
    console.log(user);
    form.reset();
}