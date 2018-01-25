$(() => {
   
    let carInfo = []
    $('#funButton').click(() => {
        // alert('button CLicked')
        $.ajax({
            type:'GET' ,
            url:'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/honda?format=json'

        }).done((res) => {
            console.log(res.Results.splice(0,5))
           
            let car = res.Results.splice(0,5)
            for(m of car) {
                $(`#tableBody`).append(createTableRow(m))
            }
        })
    })

    function createTableRow(Make_Name) {
        let row = $(`<tr></tr>`)
        let make = $(`<td>${Make_Name.Make_Name}</td>`)
        let model = $(`<td>${Make_Name.Model_Name}</td>`)
       
       
       
        row.append(make)
        row.append(model)
        
        return row
    }
})
//   $('#clearButton').click(() => {
//     $('#tableBody').empty()
//     $('#dataOne').text('Pick')
//     $('#dataTwo').text('From')
//     $('#dataThree').text('Above')

//   })
    
//     $('#happyButton').click(() => {
//         $('#tableBody').empty()
//         $('#dataOne').text('Name')
//         $('#dataTwo').text('Height')
//         $('#dataThree').text('Birth Year')


//     })

