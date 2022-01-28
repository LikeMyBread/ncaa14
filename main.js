const estimate = document.getElementById('estimate');
const mainForm = document.getElementById('schoolData');

function updatePrediction() {
  const data = new FormData(mainForm);
  const position = data.get("position");
  const prestige = Number(data.get("prestige"));
  const overall = Number(data.get("overall"));
  const offense = Number(data.get("offense"));
  const defense = Number(data.get("defense"));
  const year = Number(data.get("year"));

  let salary = 0;
  let predictionRating = 0;
  let predictionPrestige = 0;
  let prediction2013 = 0;

  // Calculate a base value based on the school data.
  if (position === "HC") {
    predictionRating = 3508 * Math.exp(0.0754 * overall);
    predictionPrestige = (635330 * prestige) - 108038;
    prediction2013 = 0.4927441715*predictionRating + 0.5254323619*predictionPrestige - 115931.163
  } else if (position === "OC") {
    predictionRating = 3041 * Math.exp(0.0554 * offense);
    predictionPrestige = (84983 * prestige) + 56641;
    prediction2013 = 0.4505756884*predictionRating + 0.5633165777*predictionPrestige - 19044.52237;
  } else {
    predictionRating = 1651 * Math.exp(0.0655 * defense);
    predictionPrestige = (116478 * prestige) + 24404;
    prediction2013 = 0.3586890779*predictionRating + 0.6870167964*predictionPrestige - 29152.95258;
  }

  // Adjust for inflation.
  predictionInflation = prediction2013 * 2.20589e-36 * Math.exp(0.0485*year)/5545890.20;

  // Adjust for the popularity of college football over time.
  predictionPopularity = predictionInflation * (15650000 / (1 + Math.exp(-0.06 * (year - 2023))))/5545479;

  salary = predictionPopularity;
  estimate.innerHTML = "$ " + salary.toLocaleString('en-US', {maximumFractionDigits:0});
}

mainForm.onchange = updatePrediction;
