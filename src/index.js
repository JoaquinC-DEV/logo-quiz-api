const logos = require("./utils/companies_logos.json");
const names = require("./utils/companies_names.json");

const express = require("express");
const app = express();


app.get("/random", (req, res) => {
    const companyName = getCompanyName();
    res.json({
        company: companyName,
        logoURL: getCompanyLogo(companyName)
    })   
});

app.listen(3000, () => console.log("aplicación alojada en el puesto 3000"));

/**
 * @param {String} dif A string with the difficulty (easy, medium, hard)
 */ 
 function getCompanyName () {
    let allCompanies = names.all; // All the companies in the select difficulty
    const randomCompany = allCompanies[Math.floor(Math.random() * allCompanies.length)]; // Name of the random company in the select difficulty

    return randomCompany;
};


function getCompanyLogo (name) {
    const allCompaniesNames = Object.getOwnPropertyNames(logos);
    if (!allCompaniesNames.includes(name)) return "error";

    const companyLogos = logos[name];
    const logo = companyLogos[Math.floor(Math.random() * companyLogos.length)];

    return logo;
}