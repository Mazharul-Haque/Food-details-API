fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

const displayMeals = meals => {
    const mealCotainer = document.getElementById('meals');
    meals.forEach(meal => {
        //const meal = meals[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealInfo = `
            <h2 class="mealName" >${meal.strMeal}</h2>
            <p  class="mealCategory" > ${meal.strCategory}</p>
            <p  class="ingredient">${meal.strIngredient1} </p>
            <p  class="ingredient">${meal.strIngredient2} </p>
            <p  class="ingredient">${meal.strIngredient3} </p>
            <p  class="ingredient">${meal.strIngredient4} </p>
        `;
        mealDiv.innerHTML = mealInfo;
        mealCotainer.appendChild(mealDiv);

    });   

}
const searchMeal = () =>{
    const searchText = document.getElementById('searchBox').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

}
