const finalScore = document.getElementById('finalScore');
const nameDisplay = document.getElementById('name-display');
const gradeDisplay = document.getElementById('grade-display');
const contactDisplay = document.getElementById('contact-display');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const fiveScore = localStorage.getItem('fiveScore');

finalScore.innerText = mostRecentScore;

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  nameDisplay.innerText = `Name: ${user.name}`;
  gradeDisplay.innerText = `Grade: ${user.grade}`;
  contactDisplay.innerText = `Contact: ${user.contact}`;
}

exportUserInfo = (e) => {
    e.preventDefault();

    const userInfo = {
        premusicScore: fiveScore, 
        score: mostRecentScore,
        name: user.name,
        grade: user.grade,
        contact: user.contact
    };

    // Convert user info to CSV
    const csvContent = Object.keys(userInfo).map(key => `${key},${userInfo[key]}`).join('\n');
    
    // Create a blob and download
    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${user.name}_info.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
