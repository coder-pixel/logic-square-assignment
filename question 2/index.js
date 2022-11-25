let searchInput = document.querySelector("#search-wrapper input")
let tBody = document.querySelector("tbody")

let displayData = []
let cafes = []
let places = []

searchInput.addEventListener("keyup", (e) => {
    tBody.innerHTML = ""
    let searchTerm = e.target.value
    displayData = search(searchTerm)
    // console.log(displayData)

    displayData?.map((data, index) => {
        // console.log(data)
        let len = index + 1
        createTableRow(data, len)
    })
})

const getData = async (url, type) => {
    let res = await fetch(url)
    let data = await res.json()
    if (type == "cafes") {
        return data[type]
    } else if (type == "places") {
        return data[type]
    }
}

window.addEventListener("load", async () => {
    cafes = await getData("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json", "cafes")
    places = await getData("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json", "places")

    displayData = getFinalObj(cafes)
    // console.log(displayData)



    displayData?.map((data, index) => {
        // console.log(data)
        let len = index + 1
        createTableRow(data, len)
    })
})

const getFinalObj = (arr) => {
    // arr1 = cafes
    // arr2 = places
    let resPlaces = []
    let finalRes = []

    arr.forEach(cafe => {
        resPlaces = places.filter(place => place.id === cafe.location_id)
        // console.log(resPlaces)

        resPlaces.forEach(itm => {
            let resObj = {
                name: cafe.name,
                ...itm
            }
            finalRes.push(resObj)
        })
    })
    // console.log(finalRes)

    return finalRes
}

const search = (name) => {

    if (cafes.length > 0 && places.length > 0) {
        // console.log("data availaible")
        // console.log(cafes)
        // console.log(places)

        if (name) {
            resCafe = cafes.filter(cafe => cafe.name.toLowerCase().includes(name.toLowerCase()))
            // console.log(resCafe)
        } else {
            resCafe = cafes
        }

        return getFinalObj(resCafe)
    }
}

const createTableRow = (data, sNo) => {
    let tr = document.createElement("tr")

    let tdArr = Object.keys(data)
    tdArr = tdArr.filter(itm => itm !== "id" && itm !== "locality")
    // console.log(tdArr)

    let td = document.createElement("td")
    let text;
    let textNode;
    td.classList.add("column1")
    text = sNo
    textNode = document.createTextNode(text)
    td.append(textNode)
    tr.append(td)
    tBody.append(tr)

    let localCounter = 1
    tdArr.map(itm => {
        let td = document.createElement("td")
        td.classList.add(`column${localCounter}`)
        if (itm == "street_no") {
            // console.log(itm)
            text = `${data[itm]}, ${data["locality"]}`
            // text = "sasa"
            textNode = document.createTextNode(text)
        } else {
            // console.log(itm)
            text = data[itm]
            textNode = document.createTextNode(text)
        }
        td.append(textNode)
        tr.append(td)
        tBody.append(tr)
        localCounter++
    })
}
