fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
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
        mealContainer.appendChild(mealDiv);

    });

}
const searchMeal = () => {
    const searchText = document.getElementById('searchBox').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}
const displayFood = foods => {
    const mealContainer = document.getElementById('meal-container');

    foods.forEach(food => {
        const divMeal = document.createElement('div');
        divMeal.className = 'single-result row align-items-center my-3 p-3';
        divMeal.innerHTML = `
        <div class="col-md-9">
        
              <h3 >${food.strMeal}</h3>
              <p >${food.strCategory}</p>
              <p >${food.strIngredient1}</p>
              <p >${food.strIngredient2}</p>
              <p >${food.strIngredient3}</p>
              <p >${food.strIngredient4}</p>                          
          </div>
          <div class="col-md-3 text-md-right text-center">
              <button onclick="getTheMeal('${food.strMeal}','${food.strCategory}',
                '${food.strIngredient1}','${food.strIngredient2}','${food.strIngredient3}',
                '${food.strIngredient4}')"
                 class="btn btn-success">Get the Meal</button>
          </div>      
        `
        //li.innerText = food.strMeal;
        mealContainer.appendChild(divMeal);

    })
}
const getTheMeal = (mealName, mealCategory, masala1, masala2, masala3, masala4) => {
    const secondUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal},
   ${strCategory},${strIngredient1},${strIngredient2},${strIngredient3},${strIngredient4}`
    fetch(secondUrl)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals))
}
const displayMealDetails = details => {
    const detailsDiv = document.getElementById('mealDetails');
    detailsDiv.innerText = details;

}