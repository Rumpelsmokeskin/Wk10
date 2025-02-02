/* variable to hold the button object - I used the querySelector method but I could have just as easily used getElementByID */
const submitButton = document.querySelector('#submitButton');

/* adding event listener to submitButton object from query selector */
submitButton.addEventListener(`click`, (event) => {
    event.preventDefault()
    
    /* creating variables to hold values from HTML input boxes */
let saunaWidth = document.getElementById('inputWidth').value;
let saunaDepth = document.getElementById('inputDepth').value;
let saunaHeight = document.getElementById('inputHeight').value;

/*using variable to hold table row created using javascript */
let newTableRow = document.createElement('tr')

let saunaWidthNode = document.createElement('td') /* <td> </td>*/
saunaWidthNode.innerHTML = saunaWidth /* <td>52 inches</td>*/
newTableRow.append(saunaWidthNode) /* <tr> 
                                        <td>52 inches</td>
                                        </tr>*/

let saunaDepthNode = document.createElement('td')
saunaDepthNode.innerHTML = saunaDepth
newTableRow.append(saunaDepthNode)/* <tr>
                                        <td>52 inches</td>
                                        <td>64 inches</td>
                                        </tr> */

/*This chunk of code does the same thing as the two above but with the 3rd variable */
let saunaHeightNode = document.createElement('td')
saunaHeightNode.innerHTML = saunaHeight
newTableRow.append(saunaHeightNode)

/*the following line attaches the populated table row to the saunaTableBody*/
document.getElementById('saunaTableBody').appendChild(newTableRow)

/*clears out the input boxes*/
document.querySelector('#inputWidth').value= ''
document.querySelector('#inputDepth').value= ''
document.querySelector('#inputHeight').value= ''
});