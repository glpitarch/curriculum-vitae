/*----------///_DIMENSION <768px_///----------*/
/*----------/_List Icons_/----------*/
profileIcon.addEventListener('click', () => { dataContainer("profileContainer") })
educationIcon.addEventListener('click', () => { dataContainer("educationContainer") })
workExperienceIcon.addEventListener('click', () => { dataContainer("workExperienceContainer") })
/*----------/_Education Icons_/----------*/
webDeveloperPhoneTitle.addEventListener('click', () => { dataContainer("webDeveloperPhoneContainer") })
javascriptPhoneTitle.addEventListener('click', () => { dataContainer("javascriptPhoneContainer") })
othersPhoneTitle.addEventListener('click', () => { dataContainer("othersPhoneContainer") })
technologistPhoneTitle.addEventListener('click', () => { dataContainer("technologistPhoneContainer") })
/*----------/_Work Experience_/----------*/
technologistWorkExperiencePhoneTitle.addEventListener('click', () => { dataContainer("technologistWorkExperiencePhoneContainer") })
developerWorkExperiencePhoneTitle.addEventListener('click', () => { dataContainer("developerWorkExperiencePhoneContainer") })

/*----------///_DIMENSION >=768px_///----------*/
/*----------///_List Icons_///----------*/
profileIcon.addEventListener('click', tabletProfile)
educationIcon.addEventListener('click', tabletEducation)
workExperienceIcon.addEventListener('click', tabletWorkExperience)