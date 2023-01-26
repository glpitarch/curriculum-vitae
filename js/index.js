/*----------///_DIMENSION <768px_///----------*/
/*----------/_List icons_/----------*/
profileIcon.addEventListener('click', () => { dataContainer("profileContainer") })
educationIcon.addEventListener('click', () => { dataContainer("educationContainer") })
workExperienceIcon.addEventListener('click', () => { dataContainer("workExperienceContainer") })
/*----------/_Education icons_/----------*/
webDeveloperPhoneTitle.addEventListener('click', () => { dataContainer("webDeveloperPhoneContainer") })
javascriptPhoneTitle.addEventListener('click', () => { dataContainer("javascriptPhoneContainer") })
othersPhoneTitle.addEventListener('click', () => { dataContainer("othersPhoneContainer") })
technologistPhoneTitle.addEventListener('click', () => { dataContainer("technologistPhoneContainer") })
workExperiencePhoneTitle.addEventListener('click', () => { dataContainer("workExperiencePhoneContainer") })

/*----------///_To icons on dimension >768px_///----------*/
profileIcon.addEventListener('click', tabletProfile)
educationIcon.addEventListener('click', tabletEducation)
workExperienceIcon.addEventListener('click', tabletWorkExperience)